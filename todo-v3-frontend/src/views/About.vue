<template>
    <div class="about">
        <h1 class="title">
            Добро пожаловать на наш сайт. Сайт создан для планирования вашего
            распорядка дня на неделю, а также создание ваших заметок. Эта 3
            версия сайта. На сайте вы можете создавать, редактировать и удалять
            как карточки так и задачи. В 3 версии добавлена возможность
            добавления приоретености карточкам путём выбора цвета карточки.
            Также полностью переработан дизайн.
        </h1>
        <div class="block">
            <div class="diagram" v-for="index in 1" :key="index">
                <h1>Пользователи:</h1>
                <div class="round">
                    <span>1000</span>
                </div>
            </div>
            <div class="diagram" v-for="index in 1" :key="index">
                <h1>Карточки:</h1>
                <div class="round">
                    <span>1000</span>
                </div>
            </div>
            <div class="diagram" v-for="index in 1" :key="index">
                <h1>Задачи:</h1>
                <div class="round">
                    <span>1000</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'About',
    setup() {},
};
</script>
<style lang="scss" scoped>
.about {
    font-size: var(--size-third);
    color: var(--color-first);
    .title {
        margin: 3%;
        padding: 0.75em;
        border-radius: 4px;
        border: 1px solid var(--color-first);
        text-align: center;
        line-height: 1.5;
    }
    .block {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        .diagram {
            text-align: center;
            font-size: calc(var(--size-third) * 1.5);
            .round {
                margin: 5% 15%;
                aspect-ratio: 1/1;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                border: 0.25em solid var(--color-first);
                font-size: calc(var(--size-third) * 2);
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .about {
        .block {
            grid-template-columns: 1fr;
        }
    }
}
</style>
