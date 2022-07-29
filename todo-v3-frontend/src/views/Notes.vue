<template>
    <div class="notes">
        <Card
            v-for="card in allCard"
            :changeBtn="false"
            :idCard="card.id"
            :name="card.name"
            :priority="card.priority"
            :allTask="card.allTask"
            :key="card.id"
        />
        <button class="card-add-maket" @click="closeAddCard">
            <i class="far fa-plus"></i>
        </button>
    </div>
</template>
<script>
import Card from '../components/Card/Card.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'Notes',
    components: {
        Card,
    },
    setup() {
        const store = useStore();
        const closeAddCard = () => {
            store.commit('closeAddCard');
        };
        return {
            closeAddCard,
            allCard: computed(() => store.getters.returnAllCard),
        };
    },
};
</script>
<style lang="scss" scoped>
.notes {
    display: grid;
    margin: 2rem;
    grid-gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    --snup: 3;

    .card-add-maket {
        position: relative;
        width: 100%;
        aspect-ratio: 2/1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: calc(var(--size-third) * 3);
        color: var(--color-first);
        border-radius: 4px;
        border: 1px solid var(--color-first);
        transition: all 0.4s;
        cursor: pointer;
        backdrop-filter: blur(20px);
        &:hover {
            color: var(--color-second);
            background: var(--color-first);
        }
    }
}
@media screen and (max-width: 1368px) {
    .notes {
        grid-template-columns: repeat(3, 1fr);
        --snup: 4;
    }
}
@media screen and (max-width: 1024px) {
    .notes {
        grid-template-columns: repeat(2, 1fr);
        --snup: 3;
    }
}
@media screen and (max-width: 540px) {
    .notes {
        --snup: 4;
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
