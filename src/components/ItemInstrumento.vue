<template>
    <div class="card">
        <div class="row">
            <div class="col">
                <router-link :to="'/detalle/' + instrumentoParam?.id">
                    <img :src="instrumentoParam?.imagenUrl" :alt="instrumentoParam?.instrumento" style="height: 200px">
                </router-link>
            </div>
            <div class="col">
                <div class="card-body">
                    <h5 class="card-title">
                        {{ instrumentoParam?.instrumento }}
                    </h5>
                    <p class="card-text">
                        <strong> ${{  instrumentoParam?.precio }} </strong>
                    </p>
                    <p class="card-text">
                        Costo de Envio: ${{  instrumentoParam?.costoEnvio }}
                    </p>
                    <p class="card-text">
                        {{  instrumentoParam?.cantidadVendida }} vendidos
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Instrumento } from '@/types/Instrumento';

export default defineComponent({
    props: {
        instrumentoParam: {
            type: Instrumento
        }
    }
})
</script>