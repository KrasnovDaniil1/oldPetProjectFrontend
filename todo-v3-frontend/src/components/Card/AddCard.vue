<template>
    <div class="add-card" v-if="addCard">
        <div class="popup">
            <label class="popup-elem">
                <span class="elem-text">Название:</span>
                <textarea
                    class="elem-input"
                    maxlength="200"
                    wrap="soft"
                    rows="10"
                    cols="30"
                    v-model="textCard"
                ></textarea>
            </label>
            <div class="popup-elem">
                <span class="elem-text">Приорететность:</span>
                <div class="elem-color">
                    <button
                        class="bg-color"
                        v-for="(bgColor, index) in colorArray"
                        :key="index"
                        :style="{ background: bgColor }"
                        :class="{ 'bg-active': selectColor == bgColor }"
                        @click="selectColor = bgColor"
                    ></button>
                </div>
            </div>
            <button class="popup-close" @click="closeAddCard">
                <i class="far fa-times"></i>
            </button>
            <button class="popup-save" @click="saveValueCard">Сохранить</button>
        </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'AddCard',
    setup() {
        const store = useStore();
        const selectColor = ref('#F03F35');
        const textCard = ref('');
        const closeAddCard = () => {
            store.commit('closeAddCard');
        };
        const saveValueCard = () => {
            if (textCard.value != '') {
                store.commit('addNewCard', {
                    name: textCard.value,
                    priority: selectColor.value,
                });
                closeAddCard();
                textCard.value = '';
            }
        };
        return {
            saveValueCard,
            textCard,
            selectColor,
            colorArray: ['#F03F35', '#005397', '#32B67A', '#9357A9', '#EAEAEA'],
            closeAddCard,
            addCard: computed(() => store.getters.returnAddCard),
        };
    },
};
</script>
<style lang="scss" scoped>
.add-card {
    position: fixed;
    top: 0;
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
            .elem-color {
                display: flex;
                justify-content: center;
                margin: 1em 0;
                .bg-color {
                    width: 1.5em;
                    aspect-ratio: 1/1;
                    border-radius: 50%;
                    margin: 0 0.75em;
                }
                .bg-active {
                    border: 6px solid var(--color-second);
                }
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
    .add-card {
        .popup {
            padding: 0.5em 0.5em 0 0.5em;
            .popup-elem {
                .elem-color {
                    .bg-color {
                        margin: 0 0.5em;
                    }
                }
            }
        }
    }
}
</style>
