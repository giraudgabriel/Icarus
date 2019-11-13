<template>
    <div>
        <div class="container">
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
    export default {
        props: ["projeto"],
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>