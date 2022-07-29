<template>
    <div class="notes-detail">
        <Card
            :changeBtn="true"
            :idCard="selectCard.id"
            :name="selectCard.name"
            :priority="selectCard.priority"
            :allTask="selectCard.allTask"
            :key="selectCard.id"
            style="--snup: 20"
        />
        <div class="block">
            <Task
                v-for="elem in selectCard.allTask"
                :idCard="selectCard.id"
                :idTask="elem.id"
                :task="elem.task"
                :check="elem.check"
                :key="elem.id"
            />
        </div>
    </div>
</template>
<script>
import Task from '../components/Card/Task.vue';
import Card from '../components/Card/Card.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'NotesDetail',
    components: {
        Card,
        Task,
    },
    setup() {
        const store = useStore();
        return {
            selectCard: computed(() => store.getters.returnSelectCard),
        };
    },
};
</script>
<style lang="scss" scoped>
.notes-detail {
    margin: 2rem;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 2rem;

    .block {
        overflow-y: scroll;
        max-height: calc(90vh - 2rem);
    }
}
@media screen and (max-width: 1368px) {
    .notes-detail {
        grid-template-columns: 4fr 5fr;
    }
}
@media screen and (max-width: 1024px) {
    .notes-detail {
        grid-template-columns: 1fr;
        max-height: none;
    }
}
</style>
