<template>
    <div class="about-user" v-for="(item, index) in user" :key="index">
        <img :src="item.image" alt="" class="user-image" />
        <h1 class="user-name">{{ item.name }}</h1>
        <h2 class="user-status">{{ item.status }}</h2>
        <h3 class="user-age">{{ item.age }}</h3>
        <h4 class="user-email">{{ item.email }}</h4>
        <span class="user-about text-limited">
            {{ item.about }}
        </span>
        <div class="btn-block">
            <router-link class="btn" to="/" @click="deleteUser"
                >Удалить</router-link
            >
        </div>

        <h4 class="user-data">{{ item.data }}</h4>
    </div>
</template>
<script>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default {
    name: 'AboutUser',
    setup() {
        const route = useRoute();
        const store = useStore();
        const deleteUser = () => {
            store.commit('deleteUser', route.params.id);
        };
        onMounted(() => {
            console.log(route.params.id);
            store.commit('changeDetailUser', route.params.id);
        });
        return {
            route,
            store,
            deleteUser,
            user: computed(() => store.getters.returnDetailUser),
        };
    },
};
</script>
<style lang="scss" scoped>
.about-user {
    position: relative;
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--background-all-card);
    padding: max(10px, 1vw);
    border-radius: 25px;
    margin-left: auto;
    margin-right: auto;
    .user-image {
        position: relative;
        width: max(250px, 18vw);
        height: auto;
        aspect-ratio: 3/4;
        border-radius: 25px;
    }
    .user-name,
    .user-status,
    .user-age,
    .user-email,
    .user-about,
    .user-data {
        margin-top: max(10px, 0.7vw);
        width: 100%;
        text-align: center;
    }
    .user-name {
        font-family: var(--font-first);
        font-weight: 600;
        color: var(--color-fourth);
        font-size: max(17px, 1vw);
    }
    .user-status {
        font-family: var(--font-second);
        font-weight: 400;
        color: var(--color-third);
        font-size: max(16px, 0.95vw);
    }
    .user-age {
        font-family: var(--font-third);
        font-weight: 700;
        color: var(--color-fivth);
        font-size: max(16px, 0.95vw);
    }
    .user-email {
        font-family: var(--font-second);
        font-weight: 500;
        color: var(--color-fivth);
        font-size: max(17px, 1vw);
    }
    .user-about {
        font-family: var(--font-second);
        font-weight: 500;
        color: var(--color-sixth);
        line-height: 1.25;
        font-size: max(18px, 1vw);
        padding: 0 5vw;
    }
    .btn-block {
        width: 100%;
        display: flex;
        justify-content: center;
        .btn {
            margin: max(7px, 0.7vw);
            padding: max(10px, 1vw);
            font-family: var(--font-second);
            font-weight: 500;
            font-size: max(20px, 1.5vw);
            color: var(--color-fourth);
            border-radius: 10px;
            background: var(--background-button-delete);
        }
    }
    .user-data {
        font-family: var(--font-third);
        font-weight: 600;
        color: var(--color-second);
        text-align: right;
        font-size: max(14px, 0.85vw);
    }
}
@media screen and (max-width: 768px) {
    .about-user {
        width: 75%;
        .user-image {
            width: max(170px, 35vw);
        }
        .user-about {
            padding: 0;
        }
        .btn-block {
            width: max(170px, 35vw);
        }
    }
}
</style>
