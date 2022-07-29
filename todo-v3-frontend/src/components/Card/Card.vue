<template>
    <router-link
        class="card-name"
        :to="{ name: 'notesdetail' }"
        @click="changeSelectCard"
    >
        <h1 class="name limited-text">
            {{ name }}
        </h1>
        <button class="priority" :style="'background:' + priority"></button>
        <span class="count-task" style="top: 0; left: 0"
            >Выполнено: {{ completedTask }} задач</span
        >
        <span class="count-task" style="bottom: 0; right: 0"
            >Осталось: {{ outstandingTask }} задач</span
        >
        <div class="block-btn" v-if="changeBtn">
            <button class="card-btn" @click="closeChangeCard">
                <i class="fas fa-pen"></i>
            </button>
            <router-link class="card-btn" @click="deleteCard" to="/notes">
                <i class="fas fa-trash"></i>
            </router-link>
            <button class="card-btn" @click="closeAddTask">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    </router-link>
    <ChangeCard :idCard="idCard" :name="name" :priority="priority" />
    <AddTask :idCard="idCard" />
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ChangeCard from './ChangeCard.vue';
import AddTask from './AddTask.vue';
export default {
    props: {
        changeBtn: Boolean,
        idCard: Number,
        name: String,
        priority: String,
        allTask: Array,
    },
    components: {
        ChangeCard,
        AddTask,
    },
    name: 'Card',
    setup(props) {
        const store = useStore();
        const deleteCard = () => {
            store.commit('deleteCard', props.idCard);
        };
        const closeAddTask = () => {
            store.commit('closeAddTask');
        };
        const closeChangeCard = () => {
            store.commit('closeChangeCard');
        };
        const countCompletedTask = () => {
            let check = 0;
            for (let i = 0; i < props.allTask.length; i++) {
                if (props.allTask[i].check) {
                    check++;
                }
            }
            return check;
        };
        const countOutstandingTask = () => {
            let check = 0;
            for (let i = 0; i < props.allTask.length; i++) {
                if (!props.allTask[i].check) {
                    check++;
                }
            }
            return check;
        };
        const changeSelectCard = () => {
            console.log(props.idCard);
            store.commit('changeSelectCard', props.idCard);
        };

        return {
            deleteCard,
            closeAddTask,
            closeChangeCard,
            countCompletedTask,
            countOutstandingTask,
            changeSelectCard,
            completedTask: computed(() => countCompletedTask()),
            outstandingTask: computed(() => countOutstandingTask()),
        };
    },
};
</script>
<style lang="scss" scoped>
.card-name {
    position: relative;
    width: 100%;
    aspect-ratio: 2/1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--size-first);
    color: var(--color-first);
    border-radius: 4px;
    border: 1px solid var(--color-first);
    transition: all 0.4s;
    cursor: pointer;
    backdrop-filter: blur(20px);
    .name {
        margin: 1.5em 0.5em;
        font-size: var(--size-second);
        line-height: 1.2;
        word-break: break-all;
    }
    .priority,
    .count-task {
        position: absolute;
        margin: 0.5em;
    }
    .priority {
        top: 0;
        right: 0;
        width: 1em;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
    .block-btn {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        .card-btn {
            margin: 0.5em 0 0.5em 0.5em;
            height: 2em;
            aspect-ratio: 1/1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.4s;
            border: 1px solid var(--color-first);
            &:hover {
                background: var(--color-first);
                color: var(--color-second);
            }
        }
    }
}
</style>
