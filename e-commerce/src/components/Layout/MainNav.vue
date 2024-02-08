<script>
import { useAppStore } from '../../stores'
import {mapState, mapActions} from 'pinia'
import { useUsersStore } from '../../stores'

    export default {
        name: "MainNav",
        props: {
            navItems: {
                type: Array,
                required: false,
                default: function () {
                    return null
                }
            },
            showUserNav: {
                type: Boolean,
                required: false,
                default: function () {
                    return false
                }
            },
            userNavItems: {
                type: Array,
                required: false,
                default: function () {
                    return null
                }
            }
        },
        methods:
        {
        ...mapActions(useUsersStore, ['setCurrentUser']),
        affImg() {
            const imgUrl = this.getCurrentUser.avatar
            return imgUrl
        },
        },
        computed: 
        {
        ...mapState(useAppStore, ['getIsAuthenticated', 'getIsAdmin']),
        ...mapState(useUsersStore, ['getCurrentUser']),
        getAdmin() {
            let x
            if (this.getCurrentUser != null) {
                x =  this.getCurrentUser.admin
            }
            else {
                x = false
            }
            console.log(this.getCurrentUser)
            console.log(x)
            return x
        }
        } 
    }
</script>

<template>
    <div class="container">
      <div class="d-flex flex-wrap align-items-center navbar">
        <ul class="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">

            <li
                v-for="(item, index) in navItems"
                :key="index"
            >
                <router-link 
                    :to="item.link ? item.link : '#' "
                    :class="item.class ? item.class : null"
                    :target="item.target ? item.target : '_self'"
                    class="nav-link px-2 link-secondary"
                >
                    {{item.name ? item.name : 'link'}}
                </router-link>
            </li>
            <li v-if="this.getAdmin">
                <router-link
                    :to="'/admin'"
                    class="nav-link px-2 link-secondary"
                    >Admin</router-link>
            </li>
        </ul>

        <form  role="search">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search" name="q">
        </form>

        <div
            v-if="this.getCurrentUser != null "
            class="dropdown text-end"
        >
            <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
            <img :src=affImg() alt="mdo" width="32" height="32" class="rounded-circle">
            </a>
            <ul class="dropdown-menu text-small" data-popper-placement="bottom-end" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 34px);">
                <li
                    v-for="(item, index) in userNavItems"
                    :key="index"
                >
                    <router-link
                        :to="item.link ? item.link : '#' "
                        :class="item.class ? item.class : null"
                        :target="item.target ? item.target : '_self'"
                        class="dropdown-item"
                    >
                        {{item.name ? item.name : 'link'}}
                    </router-link>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" @:click="setCurrentUser(null)">Sign out</a></li>
            </ul>
        </div>
        <div v-else class="text-end">
            <button class="btn btn-outline-primary me-2" @:click="$router.push('/login')">Connexion</button>
        </div>
        <div>
            <button @:click="$router.push('/register')">Inscription</button>
        </div>
      </div>
    </div>
</template>

<style scoped>
    * {
    transition: all .3s ease-in-out;
    }
    .navbar {
        justify-content: space-between;
    }
    .router-link-active {
        font-weight: bold;
        font-size: 1.25rem;
        color: #42b983;
    }
    .router-link-active:hover {
        font-size: 1.5rem;
    }
</style>

<!-- $router.push('/login') ligne 79 btn   @:click="showUserNav = true"  -->