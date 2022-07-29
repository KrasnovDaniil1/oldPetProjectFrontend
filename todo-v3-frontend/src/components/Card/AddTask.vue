<template>
    <div class="add-task" v-if="addTask">
        <div class="popup">
            <label class="popup-elem">
                <span class="elem-text">Добавить задачу:</span>
                <textarea
                    class="elem-input"
                    maxlength="200"
                    wrap="soft"
                    rows="10"
                    cols="30"
                    v-model="newTask"
                ></textarea>
            </label>
            <button class="popup-close" @click="closeAddTask">
                <i class="far fa-times"></i>
            </button>
            <button class="popup-save" @click="addNewTask">Сохранить</button>
        </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'AddTask',
    props: {
        idCard: Number,
    },
    setup(props) {
        const store = useStore();
        const newTask = ref('');
        const closeAddTask = () => {
            store.commit('closeAddTask');
        };
        const addNewTask = () => {
            if (newTask.value != '') {
                store.commit('addNewTask', {
                    idCard: props.idCard,
                    newTask: newTask.value,
                });
                closeAddTask();
                newTask.value = '';
            }
        };
        return {
            closeAddTask,
            newTask,
            addNewTask,
            addTask: computed(() => store.getters.returnAddTask),
        };
    },
};
</script>
<style lang="scss" scoped>
.add-task {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(20px);
    z-index: 10;
    font-size: var(--size-third);
    color: var(--color-first);
    white-space: nowrap;
    .popup {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 1em 1em 0 1em;
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        backdrop-filter: blur(20px);
        border: 1px solid var(--color-first);
        border-radius: 4px;
        .popup-elem {
            display: flex;
            flex-direction: column;
            .elem-input {
                width: 100%;
                margin: 1em 0;
                padding: 0.25em;
                border: 1px solid var(--color-first);
                border-radius: 4px;
            }
            .elem-text {
                text-align: center;
            }
        }
        .popup-close {
            width: 1.5em;
            aspect-ratio: 1/1;
            position: absolute;
            top: 0;
            right: 0;
            border: 1px solid var(--color-first);
            border-radius: 4px 4px 0 0;
        }

        .popup-save {
            border: 1px solid var(--color-first);
            border-radius: 4px 4px 0 0;
            padding: 0.5em 1em;
        }
        .popup-close,
        .popup-save {
            transition: all 0.4s;
            &:hover {
                background: var(--color-first);
                color: var(--color-second);
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .change-task {
        .popup {
            padding: 0.5em 0.5em 0 0.5em;
        }
    }
}
</style>
