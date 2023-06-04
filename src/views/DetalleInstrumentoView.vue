<template>
    <div class="container mt-5" v-if="instrumento">
        <div class="row">
            <div class="col">
                <div class="row">
                    <img :src="instrumento.imagenUrl" :alt="instrumento.instrumento" style="height: 300px">
                </div>
                <div class="row">
                    <p>
                        Descripción: <br/>
                        {{ instrumento.descripcion }}
                    </p>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <h6>
                        {{ instrumento.cantidadVendida }} vendidos
                    </h6>
                </div>
                <div class="row">
                    <h2>
                        {{ instrumento.instrumento }}
                    </h2>
                </div>
                <div class="row">
                    <h3>
                        ${{ instrumento.precio }}
                    </h3>
                </div>
                <div class="row">
                    <h4>
                        Marca: {{ instrumento.marca }}
                    </h4>
                </div>
                <div class="row">
                    <h4>
                        Modelo: {{ instrumento.modelo }}
                    </h4>
                </div>
                <div class="row">
                    <h5>
                        Costo Envio: ${{ instrumento.costoEnvio }}
                    </h5>
                </div>
                <div class="row">
                    <button type="button" class="btn btn-outline-primary">Agregar al Carrito</button>
                </div>
            </div>
        </div>
        <div class="row"></div>
    </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent, onMounted, ref } from 'vue';
import { Instrumento } from '@/types/Instrumento';
import { getInstrumentoXId } from '@/services/InstrumentoService';

export default defineComponent({
    setup() {
        const route = useRoute();
        const instrumento = ref<Instrumento>();

        onMounted(async () => {
            const id = Number(route.params.id);
            const newInstrumento = await getInstrumentoXId(id);
            instrumento.value = newInstrumento; 
        });

        return {
            instrumento
        }
    }
})
</script>