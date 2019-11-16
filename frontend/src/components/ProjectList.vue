<template>
    <div>
        <Menu />
        <div>
            <div class="container">
                <h3>Projetos</h3>
                <ProjectModal />
                <div class="row" id="main">
                    <b-card v-for="project in projects" v-bind:key="project.nome" v-bind:title="project.nome"
                        v-bind:img-src="project.img" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                        <b-card-text>
                            <label class="alert alert-dark">Quantidade de vagas :
                                {{ project.maximo_de_participantes - project.participantes.length}} </label>

                            <ul class="list-group">
                                <li class="list-group-item">
                                    <strong> Participantes:</strong>
                                </li>
                                <li class="list-group-item" v-for="participante in project.participantes"
                                    v-bind:key="participante.nome">
                                    {{participante.nome}}
                                </li>
                            </ul>
                        </b-card-text>

                        <b-button @click="viewDetails(project)" variant="warning">Ver mais</b-button>


                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from './Menu'
    import ProjectModal from './ProjectModal'

    export default {
        components: {
            Menu,
            ProjectModal
        },
        data() {
            return {
                projects: [{
                    id:1,
                    nome: 'Projeto 1',
                    participantes: [{
                        nome: 'Gabriel',
                    }, {
                        nome: 'Felipe'
                    }],
                    maximo_de_participantes: 10,
                    img: 'https://picsum.photos/600/300/?image=25'
                }]
            }
        },
        methods: {
            viewDetails(project) {
                this.$router.push({
                    path: `/projetos/any`,
                    params: {
                        projeto: project
                    }
                })
            }
        }
    }
</script>

<style scoped>
    #main {
        padding-top: 70px;
    }
</style>