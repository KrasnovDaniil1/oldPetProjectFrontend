<template>
    <div class="card-name">
        <textarea
            class="name"
            maxlength="512"
            wrap="soft"
            rows="1"
            @input="changeText"
            @blur="changeCardName"
            ref="textareaRef"
            v-model="textareaValue"
        ></textarea>
        <div class="card-setting">
            <button class="btn-setting" @click="openPopup = !openPopup">
                <i class="fas fa-ellipsis-h"></i>
            </button>
            <div class="setting-popup" v-if="openPopup">
                <button class="popup-btn" @click="deleteCardName">
                    <i class="btn-icon btn-delete fas fa-trash"></i>
                    <h1 class="btn-text">Удалить задачу</h1>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'CardName',
    props: {
        cardName: String,
        cardId: Number,
        cardCategory: String,
    },
    setup(props) {
        const textareaRef = ref('');
        const textareaValue = ref(props.cardName);
        const openPopup = ref(false);
        const store = useStore();

        const changeText = () => {
            textareaRef.value.style.height = 'auto';
            textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
        };
        const deleteCardName = () => {
            store.dispatch('deleteCardName', {
                category: props.cardCategory,
                id: props.cardId,
            });
        };
        const changeCardName = () => {
            store.dispatch('changeCardName', {
                category: props.cardCategory,
                id: props.cardId,
                text: textareaValue,
            });
        };
        return {
            changeText,
            deleteCardName,
            changeCardName,
            textareaRef,
            textareaValue,
            openPopup,
        };
    },
};
</script>
<style lang="scss" scoped>
.card-name {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--size-first);

    .name {
        width: 100%;
        font-weight: 600;
        color: #172b4d;
        padding: 10px;
        overflow: hidden;
        border-radius: 3px;
        &:focus {
            background: var(--background-fivth);
            box-shadow: inset 0 0 0 2px #006fc0;
        }
    }
    .card-setting {
        position: relative;
        .btn-setting {
            width: max(40px, 2vw);
            height: max(40px, 2vw);
            color: var(--color-seventh);
            border-radius: 3px;
            &:hover {
                background: var(--background-sixth);
                color: var(--color-eighth);
            }
        }
        .setting-popup {
            position: absolute;
            right: 0;
            color: var(--color-sixth);
            border-radius: 3px;
            background: var(--background-second);
            .popup-btn {
                display: flex;
                padding: 5px;
                margin: 5px;
                .btn-text {
                    white-space: nowrap;
                }
                .btn-icon {
                    margin-right: 10px;
                }
                .btn-delete {
                    color: var(--color-nineth);
                }
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .card-name {
        .card-setting {
            .btn-setting {
                width: 30px;
                height: 30px;
            }
        }
    }
}
</style>
