<template>
    <div class="card-task">
        <textarea
            class="task"
            maxlength="512"
            wrap="soft"
            rows="1"
            @input="changeText"
            @focus="openSetting = true"
            @blur="changeCardTask"
            ref="textareaRef"
            v-model="textareaValue"
            :class="{ 'task-done': taskDone }"
        ></textarea>
        <button class="task-setting" v-if="openSetting">
            <i class="btn-delete fas fa-trash" @click="deleteCardTask"></i>
        </button>
        <input
            class="checked"
            type="checkbox"
            :checked="taskDone"
            @click="changeCardTaskDone"
        />
    </div>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'CardTask',
    props: {
        taskText: String,
        taskChecked: Boolean,
        taskId: Number,
        cardCategory: String,
        cardId: Number,
    },
    setup(props) {
        const store = useStore();

        const textareaRef = ref('');
        const openSetting = ref('');
        const taskDone = ref(props.taskChecked);
        const textareaValue = ref(props.taskText);
        const changeText = () => {
            textareaRef.value.style.height = 'auto';
            textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
        };
        const deleteCardTask = () => {
            store.dispatch('deleteCardTask', {
                category: props.cardCategory,
                id: props.cardId,
                task: { id: props.taskId, text: textareaValue.value },
            });
        };
        const changeCardTask = () => {
            setTimeout(() => (openSetting.value = false), 1000);
            store.dispatch('changeCardTask', {
                category: props.cardCategory,
                id: props.cardId,
                task: { id: props.taskId, text: textareaValue.value },
            });
        };
        const changeCardTaskDone = () => {
            /*изменять напрямую в бэкенде */
            taskDone.value = !taskDone.value;
            store.dispatch('changeCardTaskDone', {
                category: props.cardCategory,
                id: props.cardId,
                task: { id: props.taskId, done: taskDone.value },
            });
        };

        return {
            changeText,
            changeCardTaskDone,
            changeCardTask,
            deleteCardTask,
            textareaRef,
            taskDone,
            textareaValue,
            openSetting,
        };
    },
};
</script>
<style lang="scss" scoped>
.card-task {
    display: flex;
    align-items: center;
    font-size: var(--size-first);

    .task {
        width: 100%;
        color: var(--color-sixth);
        padding: 10px;
        background: var(--background-fivth);
        border-radius: 3px;
        box-shadow: 0 0 3px #000000;
        &:focus {
            box-shadow: inset 0 0 0 2px #006fc0;
        }
    }
    .task-done {
        text-decoration: line-through;
    }
    .task-setting {
        padding: 10px;
        color: var(--color-nineth);
    }
    .checked {
        margin-left: 10px;
        width: 20px;
        height: 20px;
    }
}
</style>
