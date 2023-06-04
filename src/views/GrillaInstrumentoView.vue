<template>
    <div>
        <div class="container mt-3 mb-3">
            <router-link :to="'/form/0'" type="button" class="btn btn-success">
                Nuevo
            </router-link>
        </div>
        <table class="table table-success table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Instrumento</th>
                    <th colspan="2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(instrumento, index) in data" :key="instrumento.id">
                    <td>
                        {{ index + 1 }}
                    </td>
                    <td>
                        {{ instrumento.instrumento }}
                    </td>
                    <td>
                        <router-link :to="'/form/' + instrumento.id" type="button" class="btn btn-warning">
                            Modificar
                        </router-link>
                    </td>
                    <td>
                        <button @click="deleteElement(instrumento.id)" type="button" class="btn btn-danger">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { Instrumento } from '@/types/Instrumento';
import { getInstrumentosJSON, deleteInstrumento } from '@/services/InstrumentoService';

export default defineComponent({
    setup() {
        const data = ref<Instrumento[]>([]);

        onMounted(async () => {
            const newInstrumentos = await getInstrumentosJSON();
            data.value = newInstrumentos;
        });

        const deleteElement = async (id: number) => {
            await deleteInstrumento(id);
        };

        return {
            data,
            deleteElement
        };
    }
})
</script>