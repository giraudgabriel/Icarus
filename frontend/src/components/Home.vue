<template>
    <div>
        <Menu></Menu>
        <div class="row" id="main">
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        <router-link to="/projetos">
                            <button class="btn btn-warning btn-lg">
                                <i class="fa fa-building" />
                                Projetos
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from "./Menu";

    export default {
        components: {
            Menu
        }
    }
</script>

<style scoped>
    #main {
        padding-top: 70px;
    }
</style>