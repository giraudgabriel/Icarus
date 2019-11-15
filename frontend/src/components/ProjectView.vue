<template>
    <div>
        <Menu/>
        <div class="container" id="main">
            <div class="text-left">
                <router-link to="/projetos"><button class="btn btn-light"> <i class="fa fa-arrow-left"> </i>
                        Voltar</button> </router-link>
                <br>
                <h3>
                    Projeto : {{ projeto }}
                </h3>
            </div>

        </div>
    </div>
</template>

<script>
    import Menu from './Menu'
    export default {
        props: ["projeto"],
        components:{
            Menu
        },
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>