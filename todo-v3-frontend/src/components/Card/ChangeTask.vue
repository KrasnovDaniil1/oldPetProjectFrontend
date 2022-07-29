<template>
    <div class="change-task" v-if="changeTask">
        <div class="popup">
            <label class="popup-elem">
                <span class="elem-text">Редактировать задачу:</span>
                <textarea
                    class="elem-input"
                    maxlength="200"
                    wrap="soft"
                    rows="10"
                    cols="30"
                    v-model="newText"
                ></textarea>
            </label>
            <button class="popup-close" @click="closeChangeTask">
                <i class="far fa-times"></i>
            </button>
            <button class="popup-save" @click="changeTextTask">
                Сохранить
            </button>
        </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'ChangeTask',
    props: {
        idCard: Number,
        idTask: Number,
        task: String,
    },
    setup(props) {
        const store = useStore();
        const newText = ref(props.task);
        const closeChangeTask = () => {
            store.commit('closeChangeTask');
        };
        const changeTextTask = () => {
            if (newText.value != '') {
                store.commit('changeTextTask', {
                    idCard: props.idCard,
                    idTask: props.idTask,
                    newText: newText.value,
                });
                closeChangeTask();
            }
        };
        return {
            newText,
            changeTextTask,
            closeChangeTask,
            changeTask: computed(() => store.getters.returnChangeTask),
        };
    },
};
</script>
<style lang="scss" scoped>
.change-task {
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
                line-height: 1.3;
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
