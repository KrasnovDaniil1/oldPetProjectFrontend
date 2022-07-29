import { createStore } from 'vuex';

export default createStore({
    state: {
        signRegistrationOpen: false,
        headerDrowerOpen: false,
        user: {},
    },
    getters: {
        returnSignRegistrationOpen(state) {
            return state.signRegistrationOpen;
        },
        returnHeaderDrowerOpen(state) {
            return state.headerDrowerOpen;
        },
        returnSignUser(state) {
            return state.user.login;
        },
        returnPasswordSignUser(state) {
            return state.user.password;
        },
        returnNotesList(state) {
            return state.user.notesList;
        },
    },
    mutations: {
        changeSignRegistrationOpen(state) {
            state.signRegistrationOpen = !state.signRegistrationOpen;
        },
        changeHeaderDrowerOpen(state) {
            state.headerDrowerOpen = !state.headerDrowerOpen;
        },
        changeInformationUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        /*регистрация пользователя */
        signUser({ commit }, user) {
            fetch(`/api/sign`, {
                method: 'POST',
                body: JSON.stringify(user),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    commit('changeSignRegistrationOpen');
                    commit('changeInformationUser', data);
                });
            console.log('Регистрация');
        },

        /*авторизация пользователя */
        logInUser({ commit }, user) {
            fetch(`/api/login`, {
                method: 'POST',
                body: JSON.stringify(user),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    commit('changeSignRegistrationOpen');
                    commit('changeInformationUser', data);
                });
            console.log('Вход');
        },

        /*удаление карточки */
        deleteCardName({ commit, state }, card) {
            if (card.category == 'notes') {
                fetch(`/api/notesListNameDelete`, {
                    method: 'DELETE',
                    body: JSON.stringify({
                        login: state.user.login,
                        password: state.user.password,
                        idName: card.id,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        commit('changeInformationUser', data);
                    });
                console.log('Отправка запроса для NotesList');
            }
        },

        /*редактирование карточки  */
        changeCardName({ commit, state }, card) {
            if (card.category == 'notes') {
                fetch(`/api/notesListNameChange`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        login: state.user.login,
                        password: state.user.password,
                        idName: card.id,
                        newName: card.text,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        commit('changeInformationUser', data);
                    });
                console.log('Отправка запроса для NotesList');
            }
        },

        /*добавления карточки  */
        addCardName({ commit, state }, card) {
            if (card.category == 'notes') {
                fetch(`/api/notesListNameAdd`, {
                    method: 'POST',
                    body: JSON.stringify({
                        login: state.user.login,
                        password: state.user.password,
                        name: card.text,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        commit('changeInformationUser', data);
                    });
                console.log('Отправка запроса для NotesList');
            }
        },

        /*удаление задачи */
        deleteCardTask({ commit, state }, card) {
            if (card.category == 'notes') {
                console.log('Отправка запроса для удаление карточки');

                fetch(`/api/notesListTaskDelete`, {
                    method: 'DELETE',
                    body: JSON.stringify({
                        login: state.user.login,
                        password: state.user.password,
                        idName: card.id,
                        idTask: card.task.id,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        commit('changeInformationUser', data);
                    });
            }
        },

        /*редактирование задачи DiaryList */
        changeCardTask({ commit, state }, card) {
            if (card.category == 'notes') {
                fetch(`/api/notesListTaskTextChange`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        login: state.user.login,
                        password: state.user.password,
                        idName: card.id,
                        idTask: card.task.id,
                        taskText: card.task.text,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        commit('changeInformationUser', data);
                    });
            }
        },

        /*изменение сделанной задачи DiaryList */
        changeCardTaskDone({ commit, state }, card) {
            if (card.category == 'notes') {
                fetch(`/api/notesListTaskDoneChange`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        login: state.user.login,
                        password: state.user.password,
                        idName: card.id,
                        idTask: card.task.id,
                        done: card.task.done,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        commit('changeInformationUser', data);
                    });
            }
        },
        /*добавления задачи  */

        addCardTask({ commit, state }, card) {
            if (card.category == 'notes') {
                fetch(`/api/notesListTaskAdd`, {
                    method: 'POST',
                    body: JSON.stringify({
                        login: state.user.login,
                        password: state.user.password,
                        idName: card.id,
                        taskText: card.text,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        commit('changeInformationUser', data);
                    });
            }
        },
    },
    modules: {},
});
