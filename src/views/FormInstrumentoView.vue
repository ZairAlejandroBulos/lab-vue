<template>
    <div class="container">
        <div class="mb-3">
            <label for="instrumento" class="form-label">Instrumento</label>
            <input v-model="instrumento.instrumento" type="text" class="form-control" id="instrumento">
        </div>

        <div class="mb-3">
            <label for="marca" class="form-label">Marca</label>
            <input v-model="instrumento.marca" type="text" class="form-control" id="marca">
        </div>

        <div class="mb-3">
            <label for="modelo" class="form-label">Modelo</label>
            <input v-model="instrumento.modelo" type="text" class="form-control" id="modelo">
        </div>

        <div class="mb-3">
            <label for="imagen" class="form-label">Imagen</label>
            <input @change="saveImage" type="file" id="imagen" class="form-control">
        </div>

        <div class="mb-3">
            <label for="precio" class="form-label">Precio</label>
            <input v-model="instrumento.precio" type="number" class="form-control" id="precio">
        </div>

        <div class="mb-3">
            <label for="costoEnvio" class="form-label">Costo de Envio</label>
            <input v-model="instrumento.costoEnvio" type="number" class="form-control" id="costoEnvio">
        </div>

        <div class="mb-3">
            <label for="cantidadVendida" class="form-label">Cantidad Vendida</label>
            <input v-model="instrumento.cantidadVendida" type="number" class="form-control" id="cantidadVendida">
        </div>
        
        <div class="form-floating">
            <textarea v-model="instrumento.descripcion" id="descripcion" class="form-control"></textarea>
            <label for="descripcion">Descripción</label>
        </div>
        
        <button @click="save(instrumento)" type="button" class="btn btn-success mt-3">
            Guardar
        </button>
    </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { defineComponent, onMounted, ref } from 'vue';
import { Instrumento } from '@/types/Instrumento';
import { generateImageName } from '@/util/InstrumentoUtil';
import { getInstrumentoXId, saveInstrumento, updateInstrumento, saveImageInstrumento } from '@/services/InstrumentoService';

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();
        const instrumento = ref<Instrumento>(new Instrumento());
        const imageFile = ref<File | null>(null);

        onMounted(async () => {
            const id = route.params.id;

            if (id !== "0") {
                const newInstrumento = await getInstrumentoXId(Number(id));
                instrumento.value = newInstrumento || new Instrumento(); 
            }

            console.log(instrumento.value)
        });

        const saveImage = async (event: Event) => {
            const input = event.target as HTMLInputElement;
            if (input.files && input.files[0]) {
                imageFile.value = input.files[0];
            }
        };

        const save = async (entity: Instrumento) => {
            if (entity.id === 0) {
                if (imageFile.value) {
                    const imageName = generateImageName();
                    await saveImageInstrumento(imageFile.value, imageName);
                    
                    entity.imagen = imageName;
                    await saveInstrumento(entity);
                }
            } else {
                await updateInstrumento(entity.id, entity);
            }

            router.push('/grilla');
        };

        return {
            instrumento,
            saveImage,
            save
        }
    }
})
</script>