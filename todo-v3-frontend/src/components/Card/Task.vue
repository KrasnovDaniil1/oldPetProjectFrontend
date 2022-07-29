<template>
    <label class="card-task">
        <input
            type="checkbox"
            class="task-check"
            @click="changeCheckTask"
            :checked="check"
        />
        <span class="task-text">{{ task }}</span>
        <div class="block-btn">
            <button class="task-btn" @click="closeChangeTask">
                <i class="fas fa-pen"></i>
            </button>
            <button class="task-btn" @click="deleteTask">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </label>
    <ChangeTask :idCard="idCard" :idTask="idTask" :task="task" />
</template>
<script>
import { useStore } from 'vuex';
import ChangeTask from './ChangeTask.vue';
export default {
    components: {
        ChangeTask,
    },
    props: {
        idCard: Number,
        idTask: Number,
        task: String,
        check: Boolean,
    },
    name: 'Task',
    setup(props) {
        const store = useStore();
        const closeChangeTask = () => {
            store.commit('closeChangeTask');
        };
        const deleteTask = () => {
            store.commit('deleteTask', {
                idCard: props.idCard,
                idTask: props.idTask,
            });
        };
        const changeCheckTask = () => {
            store.commit('changeCheckTask', {
                idCard: props.idCard,
                idTask: props.idTask,
            });
        };
        return {
            changeCheckTask,
            deleteTask,
            closeChangeTask,
        };
    },
};
</script>
<style lang="scss" scoped>
.card-task {
    width: 100%;
    display: flex;
    align-items: center;
    backdrop-filter: blur(20px);
    font-size: var(--size-second);
    color: var(--color-first);
    border-radius: 4px;
    border: 1px solid var(--color-first);
    &:not(:last-child) {
        margin-bottom: 0.5em;
    }
    .task-check {
        min-width: 1em;
        min-height: 1em;
        margin: 0 0.5em;
        accent-color: var(--color-second);
    }
    .task-text {
        width: 100%;
        line-height: 1.5;
    }
    .block-btn {
        .task-btn {
            font-size: var(--size-first);
            height: 2em;
            aspect-ratio: 1/1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.4s;
            margin: 0.5em;
            border: 1px solid var(--color-first);

            &:hover {
                background: var(--color-first);
                color: var(--color-second);
            }
        }
    }
}
</style>
