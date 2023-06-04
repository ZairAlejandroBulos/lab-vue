<template>
    <div class="container">
        <ul class="list-group">
                <li 
                v-for="item in data"
                :key="item.id"
                class="list-group-item" 
                >
                <item-instrumento 
                :instrumentoParam="item"
                />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { Instrumento } from '@/types/Instrumento';
import ItemInstrumento from '@/components/ItemInstrumento.vue';
import { getInstrumentosJSON } from '@/services/InstrumentoService';

export default defineComponent({
    components: {
        ItemInstrumento,
    },
    setup() {
        const data = ref<Instrumento[]>([]);

        onMounted(async () => {
            const newInstrumentos = await getInstrumentosJSON();
            data.value = newInstrumentos;
        });

        return {
            data
        }
    }
})
</script>