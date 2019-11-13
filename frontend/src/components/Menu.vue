<template>
    <div>
        <div>

            <b-navbar toggleable="lg" type="dark" fixed="top" variant="info">
                <b-navbar-brand href="#"><img class="logo" src="../assets/logo.png" alt=""></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#"> <i class="fa fa-building"></i> Projetos</b-nav-item>
                        <b-nav-item href="#"> <i class="fa fa-info"></i> Sobre nós</b-nav-item>
                    </b-navbar-nav>

                    <b-navbar-nav class="ml-auto">

                        <b-nav-item-dropdown right>
                            <template v-slot:button-content>
                               <i class="fa fa-globe"></i> Idioma
                            </template>
                            <b-dropdown-item href="#">PT-BR</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                            <template v-slot:button-content>
                               <i class="fa fa-user"></i> Entrar
                            </template>
                            <b-dropdown-item href="#"><i class="fa fa-list"></i> Perfil</b-dropdown-item>
                            <b-dropdown-item href="#"><i class="fa fa-power-off"></i> Sair</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'menu'
    }
</script>

<style coped>
    .logo {
        width: 70px;
        height: 50px;
    }
</style>