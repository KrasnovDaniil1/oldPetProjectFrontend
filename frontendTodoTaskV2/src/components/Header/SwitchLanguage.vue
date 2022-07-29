<template>
    <div class="language-block">
        <span
            v-for="(lang, index) in language"
            class="language"
            :class="{ 'active-language': activeLanguage === lang }"
            @click="changeLanguage(lang)"
            :key="index"
            >{{ lang }}
        </span>
        <span
            :style="{
                width: 100 / language.length + '%',
                left:
                    (100 / language.length) * language.indexOf(activeLanguage) +
                    '%',
            }"
            class="select-language"
        ></span>
    </div>
</template>
<script>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
export default {
    name: 'SwitchLanguage',
    setup() {
        const i18n = useI18n();
        const language = ['Eng', 'Рус'];
        const activeLanguage = ref('Рус');
        const changeLanguage = (lang) => {
            activeLanguage.value = lang;
            if (lang == 'Рус') {
                lang = 'ru';
            }
            if (lang == 'Eng') {
                lang = 'en';
            }
            i18n.locale.value = lang;
            console.log(i18n.locale.value);
        };
        onMounted(() => {
            changeLanguage(activeLanguage.value);
        });
        return {
            i18n,
            language,
            activeLanguage,
            changeLanguage,
        };
    },
};
</script>
<style lang="scss" scoped>
.language-block {
    height: 100%;
    width: fit-content;
    position: relative;
    margin: 0 var(--size-first);
    display: flex;
    align-items: center;
    font-size: var(--size-first);
    font-weight: 500;
    background: var(--background-first);
    border-radius: var(--size-first);

    .language {
        padding: 0 calc(var(--size-first) / 2);
        z-index: 1;
        color: var(--color-first);
        transition: var(--transition-first);
    }
    .active-language {
        color: var(--color-second);
    }
    .select-language {
        position: absolute;
        //width определяеться автоматически в style
        //left определяеться автоматически в style
        height: 100%;
        border-radius: var(--size-first);
        background: var(--background-second);
        transition: var(--transition-first);
        box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 1px;
    }
}
</style>
