<template>
    <div class="notes-list">
        <div class="card" v-for="notes in notesList" :key="notes.id">
            <CardName
                :cardName="notes.name"
                :cardId="notes.id"
                cardCategory="notes"
                class="name"
            />
            <CardTask
                v-for="task in notes.plans"
                :taskText="task.text"
                :taskChecked="task.checked"
                :taskId="task.id"
                :cardId="notes.id"
                :key="task.id"
                cardCategory="notes"
                class="task"
            />
            <CardTaskAdd
                class="task-add"
                cardCategory="notes"
                :cardId="notes.id"
            />
        </div>
        <CardNameAdd class="name-add" cardCategory="notes" />
    </div>
</template>
<script>
import CardName from '../components/Card/CardName.vue';
import CardTask from '../components/Card/CardTask.vue';
import CardTaskAdd from '../components/Card/CardTaskAdd.vue';
import CardNameAdd from '../components/Card/CardNameAdd.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'NotesList',
    components: { CardName, CardTask, CardTaskAdd, CardNameAdd },
    setup() {
        const store = useStore();
        return {
            notesList: computed(() => store.getters.returnNotesList),
        };
    },
};
</script>
<style lang="scss" scoped>
.notes-list {
    display: flex;
    height: calc(100vh - var(--header-height));
    overflow-x: scroll;
    scroll-behavior: smooth;
    // scroll-snap-type: x mandatory;

    .card {
        min-width: calc(100vw / 5);
        max-width: calc(100vw / 5);
        display: flex;
        flex-direction: column;
        height: fit-content;
        max-height: calc(
            100vh - var(--scroll-height) * 3 - var(--header-height)
        );
        margin: 10px;
        padding: 0 10px;
        border-radius: 3px;
        background: var(--background-fourth);
        scroll-snap-align: start;
        overflow-y: auto;
        &::-webkit-scrollbar {
            /*блок скролла*/
            width: var(--scroll-height);
            background: var(--background-fourth);
        }
        &::-webkit-scrollbar-thumb {
            /*ползунок скролла*/
            border-radius: 10px;
            background: var(--background-second);
        }
        .name {
            margin: 5px 0;
        }
        .task {
            margin: 0 0 10px 0;
        }
        .task-add {
            margin: 0 0 10px 0;
        }
    }
    .name-add {
        margin: 10px;
        height: fit-content;
        padding: 10px;
        border-radius: 3px;
    }
}
@media screen and (max-width: 1600px) {
    .notes-list {
        .card {
            min-width: calc(100vw / 3.5);
            max-width: calc(100vw / 3.5);
        }
    }
}
@media screen and (max-width: 1024px) {
    .notes-list {
        .card {
            min-width: calc(100vw / 2.5);
            max-width: calc(100vw / 2.5);
        }
    }
}
@media screen and (max-width: 768px) {
    .notes-list {
        .card {
            min-width: calc(100vw / 2);
            max-width: calc(100vw / 2);
        }
    }
}
@media screen and (max-width: 560px) {
    .notes-list {
        .card {
            min-width: calc(100vw / 1.5);
            max-width: calc(100vw / 1.5);
        }
    }
}
@media screen and (max-width: 420px) {
    .notes-list {
        .card {
            min-width: calc(100vw / 1.2);
            max-width: calc(100vw / 1.2);
        }
    }
}
</style>
