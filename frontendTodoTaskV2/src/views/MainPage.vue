<template>
    <div class="main-page">
        Добро пожаловать на сайт.<br />
        Сайт создан для планирования вашего распорядка дня на неделю, а также
        создание ваших заметок. <br />Для начала зайдите в свой аккаунт.
    </div>
</template>
<script>
export default {
    name: 'MainPage',
    setup() {},
};
</script>
<style lang="scss" scoped>
.main-page {
    min-height: calc(100vh - var(--header-height));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10% var(--header-height) 10%;
    background: var(--background-second);
    color: var(--color-fourth);
    line-height: 2;
    text-align: center;
    font-size: var(--size-third);
    font-weight: 500;
    border-radius: 3px;
}
</style>
