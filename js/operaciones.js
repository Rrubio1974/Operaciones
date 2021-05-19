
data.component('operaciones', {
    template: /*html*/ 
    `
        <div class="row bg-success text-light">
            <div class="col-12 p-3">
                <h1 class="display-6 text-center mb-4">Operaciones Matematicas</h1>

                <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">1ero</span>
                    <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" v-model="obj.uno">

                    <select class="form-select form-select-lg" aria-label=".form-select-lg example" v-model="obj.operador">
                    <option selected>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                    </select>

                    <span class="input-group-text" id="inputGroup-sizing-lg2">2do</span>
                    <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg2" v-model="obj.dos">

                    <button @click="PrimeraFuncion" class="btn btn-outline-warning btn-lg">Calcular</button>
                </div>
            </div>

            <div class="col-12 bg-dark text-light">
                <h1 class="display-6 text-center mb-4">Resultados</h1>
                <h1 class="display-6 text-center mb-4">Resultado: {{obj.uno}} {{obj.operador}} {{obj.dos}} = {{obj.calculado}}</h1>
                <h1 class="display-6 text-center mb-4">{{obj}}</h1>
            </div>

            <div class="text-center my-3">
            <img src="img/niños.jpg" class="img-thumbnail border-warning rounded-3 img-fluid" alt="" >
            </div>
        </div>
    `,
    data() {
        return {
            op:'',
            obj:{
                uno:'',
                dos:'',
                operador:'',
                calculado: 0
            }
        }
    },

    computed: {
        suma() {
            return this.obj.calculado = parseInt(this.obj.uno) + parseInt(this.obj.dos)
        },
        resta(){
            return this.obj.calculado = parseInt(this.obj.uno) - parseInt(this.obj.dos)
        },
        multiplicar(){
            return this.obj.calculado = parseInt(this.obj.uno) * parseInt(this.obj.dos)
        },
        dividir(){
            return this.obj.calculado = parseInt(this.obj.uno) / parseInt(this.obj.dos)
        },
    },

    methods: {
        PrimeraFuncion() {
            switch(this.obj.operador){
                case "+":
                    this.suma;
                break
                case "-":
                    this.resta;
                break;
                case "*":
                    this.multiplicar;
                break;
                case "/":
                    this.dividir;
                break;
                case "":
                    console.log("No existe el operador")
                break;
            }
        }
    },
       
})







