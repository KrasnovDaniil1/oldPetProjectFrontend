<template>
    <div class="edit-authorization" v-if="editAuthorization">
        <div class="popup">
            <label class="popup-elem">
                <span class="elem-text">Старый Логин:</span>
                <input
                    class="elem-input"
                    type="text"
                    v-model="oldLogin"
                    maxlength="20"
                    disabled
                />
            </label>
            <label class="popup-elem">
                <span class="elem-text">Старый Пароль:</span>
                <input
                    class="elem-input"
                    type="text"
                    v-model="oldPassword"
                    maxlength="8"
                />
            </label>
            <label class="popup-elem">
                <span class="elem-text">Новый Логин:</span>
                <input
                    class="elem-input"
                    type="text"
                    v-model="newLogin"
                    maxlength="20"
                />
            </label>
            <label class="popup-elem">
                <span class="elem-text">Новый Пароль:</span>
                <input
                    class="elem-input"
                    type="text"
                    v-model="newPassword"
                    maxlength="8"
                />
            </label>
            <button class="popup-close" @click="closeEditAuthorization">
                <i class="far fa-times"></i>
            </button>
            <button class="popup-save" @click="changeAccaunt">Сохранить</button>
        </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'EditAuthorization',
    setup() {
        const store = useStore();
        const oldLogin = ref();
        const newLogin = ref();
        const oldPassword = ref();
        const newPassword = ref();

        const changeAccaunt = () => {
            store.commit('changeAccaunt', {
                oldLogin: oldLogin.value,
                oldPassword: oldPassword.value,
                newLogin: newLogin.value,
                newPassword: newPassword.value,
            });
        };

        const closeEditAuthorization = () => {
            store.commit('closeEditAuthorization');
        };
        return {
            oldLogin,
            newLogin,
            oldPassword,
            newPassword,
            changeAccaunt,
            closeEditAuthorization,
            editAuthorization: computed(
                () => store.getters.returnEditAuthorization
            ),
        };
    },
};
</script>
<style lang="scss" scoped>
.edit-authorization {
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
        .error {
            background: red;
        }
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
    .edit-authorization {
        .popup {
            padding: 0.5em 0.5em 0 0.5em;
        }
    }
}
</style>
