import { createStore } from 'vuex';

export default createStore({
    state: {
        authorization: true,
        editAuthorization: false,
        changeCard: false,
        changeTask: false,
        addCard: false,
        addTask: false,
        user: { login: 'KrasnovDaniil20032003' },
        allCard: [
            {
                id: '0',
                name: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                priority: '#F03F35',
                allTask: [
                    {
                        id: 0,
                        task: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                        check: true,
                    },
                    {
                        id: 1,
                        task: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                        check: true,
                    },
                ],
            },
            {
                id: '1',
                name: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                priority: '#F03F35',
                allTask: [
                    {
                        id: 0,
                        task: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                        check: false,
                    },
                    {
                        id: 1,
                        task: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                        check: true,
                    },
                ],
            },
            {
                id: '2',
                name: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                priority: '#F03F35',
                allTask: [
                    {
                        id: 0,
                        task: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                        check: true,
                    },
                    {
                        id: 1,
                        task: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                        check: true,
                    },
                ],
            },
            {
                id: '3',
                name: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                priority: '#F03F35',
                allTask: [
                    {
                        id: 0,
                        task: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                        check: true,
                    },
                    {
                        id: 1,
                        task: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                        check: true,
                    },
                ],
            },
            {
                id: '4',
                name: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                priority: '#F03F35',
                allTask: [
                    {
                        id: 0,
                        task: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                        check: true,
                    },
                    {
                        id: 1,
                        task: 'Надо совершить покупки на 1000 рублей до конца недели и тогда я получу кэшбек в размере 10 долларов и ясмогу купить ещё что-то на эти деньги и кушать.',
                        check: true,
                    },
                ],
            },
        ],

        selectCard: {},
    },
    getters: {
        returnAuthorization(state) {
            return state.authorization;
        },
        returnEditAuthorization(state) {
            return state.editAuthorization;
        },
        returnAddCard(state) {
            return state.addCard;
        },
        returnChangeCard(state) {
            return state.changeCard;
        },
        returnAddTask(state) {
            return state.addTask;
        },
        returnChangeTask(state) {
            return state.changeTask;
        },
        returnSelectCard(state) {
            return state.selectCard;
        },
        returnAllCard(state) {
            return state.allCard;
        },
        returnUser(state) {
            return state.user.login;
        },
    },
    mutations: {
        /*закрытие и открытие элементов */
        signInAuthorization(state, user) {
            state.user = {
                login: user.login,
                password: user.password,
            };
            state.authorization = true;
        },
        logInAuthorization(state, user) {
            state.user = {
                login: user.login,
                password: user.password,
            };
            state.authorization = true;
        },
        closeEditAuthorization(state) {
            state.editAuthorization = !state.editAuthorization;
        },
        closeAddCard(state) {
            state.addCard = !state.addCard;
        },
        closeChangeCard(state) {
            state.changeCard = !state.changeCard;
        },
        closeAddTask(state) {
            state.addTask = !state.addTask;
        },
        closeChangeTask(state) {
            state.changeTask = !state.changeTask;
        },
        changeAccaunt(state, user) {
            state.user = {
                login: user.newLogin,
                password: user.newPassword,
            };
            state.editAuthorization = !state.editAuthorization;
        },
        exitAccaunt(state) {
            state.authorization = false;
            state.user = {};
        },

        /*изменение выбранной card */
        changeSelectCard(state, idCard) {
            for (let i = 0; i < state.allCard.length; i++) {
                if (state.allCard[i].id == idCard) {
                    state.selectCard = state.allCard[i];
                    console.log(state.selectCard);
                }
            }
        },

        /*добавление новой card */
        addNewCard(state, newCard) {
            state.allCard.push({
                id: ++state.allCard[state.allCard.length - 1].id,
                name: newCard.name,
                priority: newCard.priority,
                allTask: [],
            });
        },

        /*логика редактирования card */
        changeNamePriorityCard(state, card) {
            for (let i = 0; i < state.allCard.length; i++) {
                if (state.allCard[i].id == card.idCard) {
                    state.allCard[i].name = card.newText;
                    state.allCard[i].priority = card.newPriority;
                }
            }
        },

        /* логика удаления card */
        deleteCard(state, idCard) {
            for (let i = 0; i < state.allCard.length; i++) {
                if (state.allCard[i].id == idCard) {
                    state.allCard.splice(i, 1);
                }
            }
        },

        /*логика удаления task */
        deleteTask(state, card) {
            for (let i = 0; i < state.allCard.length; i++) {
                if (state.allCard[i].id == card.idCard) {
                    for (let j = 0; j < state.allCard[i].allTask.length; j++) {
                        if (state.allCard[i].allTask[j].id == card.idTask) {
                            state.allCard[i].allTask.splice(j, 1);
                        }
                    }
                }
            }
        },
        /*логика изменения статуса task */
        changeCheckTask(state, card) {
            for (let i = 0; i < state.allCard.length; i++) {
                if (state.allCard[i].id == card.idCard) {
                    for (let j = 0; j < state.allCard[i].allTask.length; j++) {
                        if (state.allCard[i].allTask[j].id == card.idTask) {
                            state.allCard[i].allTask[j].check =
                                !state.allCard[i].allTask[j].check;
                        }
                    }
                }
            }
        },
        /*логика изменения название task */
        changeTextTask(state, card) {
            for (let i = 0; i < state.allCard.length; i++) {
                if (state.allCard[i].id == card.idCard) {
                    for (let j = 0; j < state.allCard[i].allTask.length; j++) {
                        if (state.allCard[i].allTask[j].id == card.idTask) {
                            state.allCard[i].allTask[j].task = card.newText;
                        }
                    }
                }
            }
        },
        /*добавление новой task */
        addNewTask(state, card) {
            for (let i = 0; i < state.allCard.length; i++) {
                if (state.allCard[i].id == card.idCard) {
                    state.allCard[i].allTask.push({
                        id: ++state.allCard[i].allTask.length,
                        task: card.newTask,
                        check: false,
                    });
                }
            }
        },
    },
    actions: {},
    modules: {},
});
