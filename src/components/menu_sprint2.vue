<template>
<div>
                    <div v-if="menu==1">
                            <div class="container-fluid">
                                <div class="row mt-md-5 mt-sm-5 mt-xs-5">
                                    <div v-for="(art,indice) of datos" :key="art.id" class="col-lg-6 col-xs-12 border">
                                       <div v-if="indice<=3">
                                        <div  class="d-flex justify-content-center align-items-center">

                                            <div class="p-3">
                                                <svg width="12em" height="12em" viewBox="0 0 16 16" class="bi bi-alarm-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                                                    />
                                                </svg>
                                            </div>

                                            <div class="p-2">
                                                <p>
                                                   {{art.name}}
                                                </p>
                                            </div>

                                        </div>
                                        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                                            <button type="button" class="btn btn-outline-info">Info</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="container-fluid">
                            <div class="row justify-content-center mb-5">
                                <div v-for="miembro in team" :key="miembro.codigo" class="col mt-5">
                                    <div class="card text-white bg-dark">
                                        <div class="d-flex justify-content-center p-2">
                                            <svg width="12em" height="12em" viewBox="0 0 16 16" class="bi bi-person-bounding-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
                                            />
                                            <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Team member: {{miembro.codigo}} {{miembro.Rol}}</h5>
                                            <h5 class="card-title"> {{miembro.Nombre}}</h5>
                                            <p class="card-text">{{miembro.Descripcion}}
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div v-if="menu==3">
                        <div>
                        <div class="container-fluid">
                        <div class="row mt-md-5 mt-sm-5 mt-xs-5">
                            <div v-for="(art,indice) of datos" :key="art.id"  class="col-lg-6 col-xs-12 border">
                                <div v-if="indice<=3">
                                    <div  class="d-flex justify-content-center align-items-center">

                                        <div class="p-3">
                                            <svg width="12em" height="12em" viewBox="0 0 16 16" class="bi bi-alarm-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                                                />
                                            </svg>
                                        </div>

                                        <div class="p-2">
                                            <p>
                                            {{art.name}}
                                            </p>
                                        </div>

                                    </div>
                                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                                    <button type="button" class="btn btn-outline-info">Info</button>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                        </div>
                        <div class="container-fluid">
                            <div class="row justify-content-center mb-5">
                                <div v-for="miembro in team" :key="miembro.codigo" class="col mt-5">
                                    <div class="card text-white bg-dark">
                                        <div class="d-flex justify-content-center p-2">
                                            <svg width="12em" height="12em" viewBox="0 0 16 16" class="bi bi-person-bounding-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
                                            />
                                            <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Team member: {{miembro.codigo}} {{miembro.Rol}}</h5>
                                            <h5 class="card-title"> {{miembro.Nombre}}</h5>
                                            <p class="card-text">{{miembro.Descripcion}}
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="menu==2">
                        <div class="container-fluid">
                            <div class="row justify-content-center mb-5">
                                <div v-for="miembro in team" :key="miembro.codigo" class="col mt-5">
                                    <div class="card text-white bg-dark">
                                        <div class="d-flex justify-content-center p-2">
                                            <svg width="12em" height="12em" viewBox="0 0 16 16" class="bi bi-person-bounding-box" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"
                                            />
                                            <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Team member: {{miembro.codigo}} {{miembro.Rol}}</h5>
                                            <h5 class="card-title"> {{miembro.Nombre}}</h5>
                                            <p class="card-text">{{miembro.Descripcion}}
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div class="container-fluid">
                        <div class="row mt-md-5 mt-sm-5 mt-xs-5">
                            <div v-for="(art,indice) of datos" :key="art.id"  class="col-lg-6 col-xs-12 border">
                                <div v-if="indice<=3">
                                <div   class="d-flex justify-content-center align-items-center">

                                    <div class="p-3">
                                        <svg width="12em" height="12em" viewBox="0 0 16 16" class="bi bi-alarm-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                                            />
                                        </svg>
                                    </div>

                                    <div class="p-2">
                                        <p>
                                           {{art.name}}
                                        </p>
                                    </div>

                                </div>
                                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
                                    <button type="button" class="btn btn-outline-info">Info</button>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
                        </div>
                    </div>
                </div>
  
</template>

<script>

export default {
  name: 'menu_sprint2',
  props: {
    menu:Number
  },
   data() {
        return {
            datos: null,
            team: [{
                codigo: 1,
                Nombre: 'Lucas Mera',
                Descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
                Rol: 'Desarrollador backend',
                Color: 'bg-danger'
            }, {
                codigo: 2,
                Nombre: 'Cristian Sanz',
                Descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
                Rol: 'Arquictecto de software',
                Color: 'bg-dark'
            }, {
                codigo: 3,
                Nombre: 'Samara Cerezo',
                Descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
                Rol: 'Tester',
                Color: 'bg-danger'
            }, {
                codigo: 4,
                Nombre: 'Iris Mesa',
                Descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum ac elit et accumsan.',
                Rol: 'Analista',
                Color: 'bg-dark'
            }]
        };
    },
    mounted() {
        this.axios.get('https://my-json-server.typicode.com/jubs16/Products/Products')
    .then(response => (this.datos = response.data));

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

