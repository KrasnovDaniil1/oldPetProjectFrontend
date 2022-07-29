<template>
    <div class="user-login">
        <button class="user" @click="closeSetting">
            {{ userAuth }}
        </button>
        <!-- <button class="login" v-else @click="closeAuthorization">
            Авторизация
        </button> -->
        <div class="setting" v-if="userSetting" @mouseleave="closeSetting">
            <button class="setting-btn" @click="closeEditAuthorization">
                Редактировать
            </button>
            <button class="setting-btn" @click="exitAccaunt">Выйти</button>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'UserLogin',
    setup() {
        const store = useStore();
        const userSetting = ref(false);
        const closeSetting = () => {
            userSetting.value = !userSetting.value;
        };
        const closeEditAuthorization = () => {
            closeSetting();
            store.commit('closeEditAuthorization');
        };
        const exitAccaunt = () => {
            closeSetting();
            store.commit('exitAccaunt');
        };
        // const closeAuthorization = () => {
        //     store.commit('closeAuthorization');
        // };
        return {
            exitAccaunt,
            closeEditAuthorization,
            closeSetting,
            userSetting,
            userAuth: computed(() => store.getters.returnUser),
        };
    },
};
</script>
<style lang="scss" scoped>
.user-login {
    position: relative;
    margin-left: 1em;
    font-size: var(--size-second);
    color: var(--color-first);
    .user,
    .login {
        padding: 0.35em 0.75em;
        border-radius: 4px;
        border: 1px solid var(--color-first);
        transition: all 0.5s;
        &:hover {
            color: var(--color-second);
            background: var(--color-first);
        }
    }

    .setting {
        position: absolute;
        transform: translateY(20%);
        right: 0;
        padding: 0.35em 0.75em;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        color: var(--color-second);
        background: var(--color-first);
        z-index: 10;
        .setting-btn {
            padding: 0.35em 0.75em;
            margin: 0.25em 0;
            border: 1px solid var(--color-second);
            border-radius: 4px;
            transition: all 0.5s;
            &:hover {
                color: var(--color-first);
                background: var(--color-second);
            }
        }
    }
}
</style>
