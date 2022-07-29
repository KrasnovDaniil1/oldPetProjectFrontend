<template>
    <div class="sign-registration">
        <div class="popup">
            <button class="close" @click="changeSignRegistration">
                <i class="fal fa-times"></i>
            </button>
            <span class="text">Добро пожаловать</span>
            <input
                class="input"
                type="text"
                placeholder="Логин"
                v-model="login"
            />
            <input
                class="input"
                type="text"
                placeholder="Вход"
                v-model="password"
            />
            <div class="btn-block">
                <button class="btn" @click="logInUser">Вход</button>
                <button class="btn" @click="signUser">Регистрация</button>
            </div>
        </div>
        <div class="shimer"></div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    name: 'SignRegistration',
    setup() {
        const store = useStore();
        const login = ref();
        const password = ref();

        const changeSignRegistration = () => {
            store.commit('changeSignRegistrationOpen');
        };
        const logInUser = () => {
            store.dispatch('logInUser', {
                login: login.value,
                password: password.value,
            });
        };
        const signUser = () => {
            store.dispatch('signUser', {
                login: login.value,
                password: password.value,
            });
        };
        return { changeSignRegistration, logInUser, signUser, login, password };
    },
};
</script>
<style lang="scss" scoped>
.sign-registration {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--size-second);
    .shimer {
        position: absolute;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
        z-index: 998;
    }
    .popup {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--background-third);
        border-radius: 3px;
        padding: var(--size-third);
        z-index: 999;
        width: max(650px, 33.8vw);
        .close {
            position: absolute;
            width: max(40px, 2vw);
            height: max(40px, 2vw);
            background: var(--background-first);
            top: 0;
            right: 0;
            transform: translate(-25%, 25%);
            border-radius: 50%;
            color: var(--color-first);
        }
        .text {
            margin-bottom: var(--size-third);
            color: var(--color-first);
            font-size: var(--size-third);
        }
        .input {
            box-shadow: inset 0 0 0 2px #ffffff;
            padding: calc(var(--size-first) / 2);
            margin-bottom: var(--size-third);
            border-radius: 3px;
            width: 100%;
            color: var(--color-first);
        }
        .btn-block {
            display: flex;
            .btn {
                padding: calc(var(--size-first) / 2);
                margin: 0 var(--size-first);
                color: var(--color-third);
                background: var(--background-second);
                border-radius: 3px;
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .sign-registration {
        .popup {
            width: min(500px, 100vw);
            .close {
                width: 30px;
                height: 30px;
            }
        }
    }
}
</style>
