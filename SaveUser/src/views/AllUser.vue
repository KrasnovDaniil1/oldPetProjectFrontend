<template>
    <div class="all-user">
        <router-link
            class="user-item"
            :to="{ name: 'AboutUser', params: { id: item.id } }"
            v-for="(item, index) in allUsers"
            :key="index"
        >
            <img :src="item.image" alt="" class="user-image" />
            <h1 class="user-name">{{ item.name }}</h1>
            <h2 class="user-status">{{ item.status }}</h2>
            <h3 class="user-age">{{ item.age }}</h3>
            <span class="user-about text-limited">
                {{ item.about }}
            </span>
            <h4 class="user-data">{{ item.data }}</h4>
        </router-link>
    </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'AllUser',

    setup() {
        const store = useStore();
        return {
            store,
            allUsers: computed(() => store.getters.returnAllUsers),
        };
    },
};
</script>
<style lang="scss" scoped>
.all-user {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5vw;
    .user-item {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--background-all-card);
        padding: max(10px, 1vw);
        border-radius: 25px;
        .user-image {
            position: relative;
            width: 60%;
            height: auto;
            aspect-ratio: 1/1;
            border-radius: 25px;
        }
        .user-name,
        .user-status,
        .user-age,
        .user-about,
        .user-data {
            margin: max(3px, 0.2vw) 0;
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
        .user-about {
            font-family: var(--font-second);
            font-weight: 500;
            color: var(--color-sixth);
            line-height: 1.25;
            font-size: max(16px, 0.95vw);
        }
        .user-data {
            font-family: var(--font-third);
            font-weight: 600;
            color: var(--color-second);
            text-align: right;
            font-size: max(14px, 0.85vw);
            margin-top: auto;
        }
    }
}
@media screen and (max-width: 992px) {
    .all-user {
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 475px) {
    .all-user {
        grid-template-columns: 1fr;
    }
}
</style>
