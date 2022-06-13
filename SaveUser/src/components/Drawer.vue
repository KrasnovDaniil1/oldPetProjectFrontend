<template>
    <div class="drawer">
        <div class="drawer-width"></div>
        <div class="drawer-main">
            <div class="title-block">
                <span class="title">Save</span>
                <span class="title">Contact</span>
            </div>
            <div @click="changeActiveElem('contact')" ref="contact">
                <router-link to="/" class="link-item">
                    <i class="link-icon far fa-address-book"></i>
                    <span class="link-text">
                        Контакты
                    </span>
                </router-link>
            </div>
            <div @click="changeActiveElem('newContact')" ref="newContact">
                <router-link to="create-user" class="link-item">
                    <i class="link-icon fas fa-plus"></i>
                    <span class="link-text">
                        Добавить
                    </span>
                </router-link>
            </div>

            <div class="decor-active-elem" ref="decorActiveElem">
                <div class="square-block">
                    <div class="square"></div>
                    <div class="square"></div>
                </div>
                <div class="square-block">
                    <div class="square"></div>
                    <div class="square"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue';
export default {
    name: 'Drawer',
    setup() {
        const decorActiveElem = ref();
        const contact = ref();
        const newContact = ref();
        const changeActiveElem = (event = 'contact') => {
            if (event === 'contact') {
                decorActiveElem.value.style.top = `${contact.value.getBoundingClientRect()
                    .top + 15}px`;
            }
            if (event === 'newContact') {
                decorActiveElem.value.style.top = `${newContact.value.getBoundingClientRect()
                    .top + 15}px`;
            }
        };
        onMounted(() => {
            changeActiveElem();
        });
        return {
            decorActiveElem,
            contact,
            newContact,
            changeActiveElem,
        };
    },
};
</script>
<style lang="scss" scoped>
.drawer {
    position: relative;
    font-family: var(--font-first);
    color: var(--color-fourth);
    z-index: 10;
    .drawer-width {
        position: relative;
        width: max(70px, 5.6vw);
        height: 100vh;
    }
    .drawer-main {
        position: fixed;
        width: max(70px, 5.6vw);
        height: 100vh;
        top: 0;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: var(--background-drawer);
        transition: var(--transition-drawer);
        .title-block {
            position: relative;
            margin: max(15px, 0.8vw) 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-weight: 600;
            font-size: max(35px, 1.85vw);
            line-height: 1.3;
            .title {
                position: relative;
                width: 0.96ch;
                overflow: hidden;
                color: var(--color-first);
                text-transform: uppercase;
                transition: var(--transition-drawer);
            }
        }
        .link-item {
            position: relative;
            padding: max(15px, 0.8vw) 0;
            margin: max(15px, 0.8vw) 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .link-icon {
                font-size: max(40px, 2.1vw);
            }
            .link-text {
                position: relative;
                max-width: 0;
                overflow: hidden;
                font-size: max(20px, 1.15vw);
                white-space: nowrap;
                transition: var(--transition-drawer);
            }
        }
        .decor-active-elem {
            position: absolute;
            top: 115px;
            background: var(--background-app);
            width: 100%;
            height: max(70px, 4.1vw);
            z-index: -1;
            transition: var(--transition-drawer);
            .square-block {
                position: absolute;
                right: 0;
                width: 20px;
                height: 20px;
                .square {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    &:nth-child(1) {
                        background: var(--background-app);
                    }
                    &:nth-child(2) {
                        background: var(--background-drawer);
                        border-radius: 0 0 15px 0;
                    }
                }
                &:nth-child(1) {
                    top: -20px;
                }
                &:nth-child(2) {
                    bottom: -20px;
                    .square {
                        &:nth-child(2) {
                            border-radius: 0 15px 0 0;
                        }
                    }
                }
            }
        }
        &:hover {
            width: max(230px, 13vw);
            .title-block {
                .title {
                    &:nth-child(1) {
                        width: 4ch;
                    }
                    &:nth-child(2) {
                        width: 7.5ch;
                    }
                }
            }
            .link-item {
                .link-text {
                    max-width: 250px;
                    margin-left: max(15px, 0.9vw);
                }
            }
        }
    }
}
</style>
