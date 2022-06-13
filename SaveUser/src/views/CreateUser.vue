<template>
    <form class="create-user" @submit.prevent="submitUser">
        <div class="input-block">
            <img class="user-image" src="../assets/image/image.jpeg" />
        </div>
        <div class="input-block">
            <label for="name" class="label">Имя и Фамилия</label>
            <input
                type="text"
                class="input"
                id="name"
                v-model="inputName"
                placeholder="Иван Иванович"
            />
        </div>
        <div class="input-block">
            <label for="age" class="label">Возраст</label>
            <input
                type="text"
                class="input"
                id="age"
                v-model="inputAge"
                placeholder="18"
            />
        </div>
        <div class="input-block">
            <label for="status" class="label">Статус</label>
            <input
                type="text"
                class="input"
                id="status"
                v-model="inputStatus"
                placeholder="Друг"
            />
        </div>
        <div class="input-block">
            <label for="email" class="label">Почта</label>
            <input
                type="email"
                class="input"
                id="email"
                v-model="inputEmail"
                placeholder="youemail@gmail.com"
            />
        </div>
        <div class="input-block input-text">
            <label for="about" class="label">Описание</label>
            <textarea
                type="text"
                class="input"
                id="about"
                v-model="inputAbout"
                placeholder="Работает в компании Electronics , любит рыбалку и охоту"
            />
        </div>
        <button class="input-block btn" @click.prevent="clearUser">
            Очистить
        </button>
        <button class="input-block btn" type="submit">
            Сохранить
        </button>
        <div class="block-error" v-if="errorLetter !== ''">
            {{ errorLetter }}
        </div>
    </form>
</template>
<script>
import {  ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'CreateUser',
    setup() {
        const inputName = ref();
        const inputAge = ref();
        const inputStatus = ref();
        const inputEmail = ref();
        const inputAbout = ref();
        const inputData = ref();
        const errorLetter = ref('');
        const store = useStore();

        const user = ref({
            image: '',
            name: '',
            status: '',
            age: '',
            email: '',
            about: '',
            data: '',
        });

        const clearUser = () => {
            inputName.value = '';
            inputAge.value = '';
            inputStatus.value = '';
            inputAbout.value = '';
            inputEmail.value = '';
        };
        const submitUser = () => {
            user.value['image'] = require('../assets/image/image.jpeg');
            user.value['name'] = inputName.value;
            user.value['status'] = inputStatus.value;
            user.value['age'] = inputAge.value;
            user.value['email'] = inputEmail.value;
            user.value['about'] = inputAbout.value;
            user.value[
                'data'
            ] = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`;
            for (var key in user.value) {
                if (user.value[key] === undefined) {
                    errorLetter.value = 'Заполните все поля';
                    setTimeout(() => {
                        errorLetter.value = '';
                    }, 1000);
                }
            }
            if (errorLetter.value === '') {
                store.commit('addNewUser', user.value);
                clearUser();
            }
        };
        return {
            inputName,
            inputAge,
            inputStatus,
            inputEmail,
            inputData,
            inputAbout,
            errorLetter,
            user,
            store,
            clearUser,
            submitUser,
        };
    },
};
</script>
<style lang="scss" scoped>
.create-user {
    position: relative;
    display: grid;
    width: 100%;
    color: var(--color-fourth);
    grid-template-rows: repeat(7, 90px);
    grid-template-areas:
        'input-1 input-1'
        'input-1 input-1'
        'input-1 input-1'
        'input-2 input-5'
        'input-3 input-6'
        'input-4 input-6'
        'input-7 input-8';
    grid-gap: 2vw 5vw;

    .input-block {
        display: flex;
        flex-direction: column;
        font-family: var(--font-second);

        &:nth-child(1) {
            grid-area: input-1;
        }
        &:nth-child(2) {
            grid-area: input-2;
        }
        &:nth-child(3) {
            grid-area: input-3;
        }
        &:nth-child(4) {
            grid-area: input-4;
        }

        &:nth-child(5) {
            grid-area: input-5;
        }
        &:nth-child(6) {
            grid-area: input-6;
        }
        &:nth-child(7) {
            grid-area: input-7;
            background: var(--background-button-delete);
        }
        &:nth-child(8) {
            grid-area: input-8;
            background: var(--background-button-edit);
        }
        .user-image {
            position: relative;
            width: max(250px, 18vw);
            height: 100%;
            border-radius: 25px;
        }
        .label {
            position: relative;
            padding-bottom: 10px;
            font-size: max(18px, 1.6vw);
        }
        .input {
            position: relative;
            border-radius: 15px;
            background: var(--background-all-card);
            width: 100%;
            height: 100%;
            padding: 10px;
            font-size: max(16px, 1.3vw);
        }
    }
    .btn {
        position: relative;
        width: 100%;
        height: 100%;
        font-size: max(20px, 1.9vw);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .block-error {
        position: absolute;
        background: var(--background-button-delete);
        text-transform: uppercase;
        z-index: 5;
        width: 60%;
        left: 50%;
        transform: translateX(-50%);
        padding: 1vw 2vw;
        border-radius: 15px;
        text-align: center;
        font-size: max(20px, 1.9vw);
        font-family: var(--font-third);
        line-height: 1.25;
        font-weight: 600;
    }
}
@media screen and (max-width: 768px) {
    .create-user {
        grid-template-rows: repeat(11, 80px);
        grid-template-areas:
            'input-1'
            'input-1'
            'input-1'
            'input-2'
            'input-3'
            'input-4'
            'input-5'
            'input-6'
            'input-6'
            'input-7'
            'input-8';
        grid-gap: 2vw 5vw;
        .input-block {
            .user-image {
                margin: 0 auto;
                width: min(250px, 100%);
                height: auto;
                aspect-ratio: 1/1;
            }
        }
        .block-error {
            width: 90%;
        }
    }
}
</style>
