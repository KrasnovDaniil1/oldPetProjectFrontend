<template>
    <div class="name-add" :class="{ 'name-add-active': addBtnActive }">
        <textarea
            class="name"
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
            <button class="add-btn" @click="addCardName">
                <i class="icon fal fa-plus" v-if="!addBtnActive"></i>
                <span>Добавить заметку</span>
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
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'CardNameAdd',
    props: {
        cardCategory: String,
    },
    setup(props) {
        const store = useStore();
        const textareaValue = ref();
        const addBtnActive = ref(false);
        const textareaRef = ref('');
        const changeText = () => {
            textareaRef.value.style.height = 'auto';
            textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
        };
        const addCardName = () => {
            if (addBtnActive.value) {
                console.log('отправил запрос');

                store.dispatch('addCardName', {
                    category: props.cardCategory,
                    text: textareaValue.value,
                });
            }
            addBtnActive.value = !addBtnActive.value;
        };
        return {
            changeText,
            textareaRef,
            textareaValue,
            addBtnActive,
            addCardName,
        };
    },
};
</script>
<style lang="scss" scoped>
.name-add {
    font-size: var(--size-first);
    background: var(--background-first);
    .name {
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
        .add-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--color-first);
            padding: 5px 20px;
            border-radius: 3px;
            white-space: nowrap;
            .icon {
                margin-right: 10px;
            }
        }
        .close-btn {
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: var(--size-second);
            border-radius: 3px;
        }
    }
}
.name-add-active {
    background: var(--background-fourth);

    .btn-block {
        .add-btn {
            background: var(--background-third);
            padding: 10px;
        }
    }
}
</style>
