<template>
    <div>
        <Menu></Menu>
        <div class="row" id="main">
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        <button class="btn btn-warning btn-block btn-lg">Projetos</button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import Menu from "./Menu";

export default {
    components:{
        Menu
    }
}
</script>

<style scoped>
#main{
    padding-top:70px;
}
</style>