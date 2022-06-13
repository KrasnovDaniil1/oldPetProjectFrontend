import { createStore } from 'vuex';

export default createStore({
    state: {
        weather: [],
        localCountry: '',
    },

    mutations: {
        setWeather(state, weather) {
            state.weather = weather;
        },
        setCountry(state, country) {
            state.localCountry = country;
        },
    },

    actions: {
        fetchWeather({ commit, state }) {
            fetch(
                `http://api.weatherapi.com/v1/forecast.json?key=09bc8f2733204818b4b195423222505&q=${state.localCountry}&days=3&aqi=no&alerts=no`
            )
                .then((response) => response.json())
                .then((data) => {
                    commit('setWeather', data);
                    if (data.error) {
                        alert('Не получилось найти такой город');
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        fetchUserCountry(context) {
            /*здесь будет вызываться запрос для получения города/региона пользователя, к сожаление все эти сервисы стоят денег)) */
            context.commit('setCountry', 'Toshkent');
        },
    },

    getters: {
        weather(state) {
            return state.weather;
        },
    },
});
