<template>
    <div class="task-add">
        <textarea
            class="task"
            maxlength="512"
            wrap="soft"
            rows="1"
            @input="changeText"
            ref="textareaRef"
            v-model="textareaValue"
            :class="{ 'task-done': taskDone }"
            v-if="addBtnActive"
        ></textarea>
        <div class="btn-block">
            <button
                class="add-btn"
                :class="{ 'add-btn-active': addBtnActive }"
                @click="addCardTask"
            >
                <i class="icon fal fa-plus" v-if="!addBtnActive"></i>
                <span>Добавить задачу</span>
            </button>
            <button
                class="close-btn"
                v-if="addBtnActive"
                @click="addBtnActive = false"
            >
                <i class="icon fal fa-times"></i>
            </button>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
export default {
    name: 'CardTaskAdd',
    props: {
        cardCategory: String,
        cardId: Number,
    },
    setup(props) {
        const store = useStore();
        const addBtnActive = ref(false);
        const textareaRef = ref('');
        const textareaValue = ref();
        const changeText = () => {
            textareaRef.value.style.height = 'auto';
            textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
        };
        const addCardTask = () => {
            if (addBtnActive.value) {
                store.dispatch('addCardTask', {
                    category: props.cardCategory,
                    id: props.cardId,
                    text: textareaValue.value,
                });
            }
            addBtnActive.value = !addBtnActive.value;
        };
        return {
            changeText,
            addCardTask,
            textareaRef,
            addBtnActive,
            textareaValue,
        };
    },
};
</script>
<style lang="scss" scoped>
.task-add {
    font-size: var(--size-first);
    .task {
        width: 100%;
        color: var(--color-sixth);

        padding: 10px;
        background: var(--background-fivth);
        border-radius: 3px;
        box-shadow: 0 0 3px #000000;
        margin-bottom: 10px;
        &:focus {
            box-shadow: inset 0 0 0 2px #006fc0;
        }
    }
    .btn-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: var(--size-first);
        .add-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--color-fivth);
            padding: 5px 0 5px 5px;
            border-radius: 3px;
            .icon {
                margin-right: 10px;
            }
        }
        .add-btn-active {
            background: var(--background-third);
            color: var(--color-first);
            padding: 10px;
        }
        .close-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: var(--size-second);
            border-radius: 3px;
        }
    }
}
</style>
