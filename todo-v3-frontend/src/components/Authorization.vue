<template>
    <div class="authorization" v-if="!authorization">
        <div class="popup">
            <label class="popup-elem">
                <span class="elem-text">Логин:</span>
                <input class="elem-input" type="text" v-model="login" />
            </label>
            <label class="popup-elem">
                <span class="elem-text">Пароль:</span>
                <input class="elem-input" type="password" v-model="password" />
            </label>
            <button class="popup-btn" @click="signInAuthorization">
                Зарегестрироваться
            </button>
            <button class="popup-btn" @click="logInAuthorization">Войти</button>
        </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Authorization',
    setup() {
        const store = useStore();
        const login = ref();
        const password = ref();

        const signInAuthorization = () => {
            store.commit('signInAuthorization', {
                login: login.value,
                password: password.value,
            });
        };
        const logInAuthorization = () => {
            store.commit('logInAuthorization', {
                login: login.value,
                password: password.value,
            });
        };
        return {
            signInAuthorization,
            logInAuthorization,
            login,
            password,
            authorization: computed(() => store.getters.returnAuthorization),
        };
    },
};
</script>
<style lang="scss" scoped>
.authorization {
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
        }

        .popup-btn {
            border: 1px solid var(--color-first);
            border-radius: 4px 4px 0 0;
            padding: 0.5em 1em;
            margin-bottom: 1em;
        }
        .popup-btn {
            transition: all 0.4s;
            &:hover {
                background: var(--color-first);
                color: var(--color-second);
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .authorization {
        .popup {
            padding: 0.5em 0.5em 0 0.5em;
        }
    }
}
</style>
