<template>
    <div class="user-login">
        <button class="user" v-if="signUser">{{ signUser }}</button>
        <button class="login" v-else @click="changeSignRegistration">
            Авторизация
        </button>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
export default {
    name: 'UserLogin',
    setup() {
        const store = useStore();
        const changeSignRegistration = () => {
            store.commit('changeSignRegistrationOpen');
        };
        return {
            changeSignRegistration,
            signUser: computed(() => store.getters.returnSignUser),
        };
    },
};
</script>
<style lang="scss" scoped>
.user-login {
    height: 100%;
    font-size: var(--size-fourth);
    color: var(--color-first);
    margin: 0 var(--size-first);
    .user {
        height: 100%;
        padding: 0 calc(var(--size-first) / 2);
        background: linear-gradient(#403294, #0747a6);
        border-radius: 3px;
    }
    .login {
        height: 100%;
        padding: 0 calc(var(--size-first) / 2);
        background: var(--background-first);
        border-radius: 3px;
    }
}
</style>
