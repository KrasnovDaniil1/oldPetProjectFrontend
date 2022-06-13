import { createStore } from 'vuex';

export default createStore({
    state: {
        allUsers: [
            {
                id: 0,
                image: require('../assets/image/image.jpeg'),
                name: 'Краснов Даниил',
                status: 'Родственник',
                age: '18',
                email: 'myemail@gmail.com',
                about:
                    'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.',
                data: '11.02.2020',
            },
            {
                id: 1,
                image: require('../assets/image/image.jpeg'),
                name: 'Краснов Даниил',
                status: 'Родственник',
                age: '18',
                about:
                    ' Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.',
                data: '12.02.2021',
            },
            {
                id: 2,
                image: require('../assets/image/image.jpeg'),
                name: 'Краснов Даниил',
                status: 'Родственник',
                age: '18',
                about:
                    ' Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.',
                data: '13.05.2021',
            },
            {
                id: 3,
                image: require('../assets/image/image.jpeg'),
                name: 'Краснов Даниил',
                status: 'Родственник',
                age: '18',
                about:
                    ' Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.',
                data: '13.07.2021',
            },
        ],
        detailUser: [],
    },
    mutations: {
        changeDetailUser(state, num = 2) {
            state.detailUser = state.allUsers.filter(
                (user) => user.id === Number(num)
            );
        },
        addNewUser(state, user = {}) {
            console.log(user);
            user['id'] = state.allUsers.length + 1;
            state.allUsers.push(user);
        },
        deleteUser(state, id) {
            state.allUsers.splice(id, 1);
        },
    },
    actions: {},
    getters: {
        returnAllUsers(state) {
            return state.allUsers;
        },
        returnDetailUser(state) {
            return state.detailUser;
        },
    },
});
