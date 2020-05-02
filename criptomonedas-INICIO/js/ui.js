class Interfaz {
    /* el constructor se usara para llamar al metodo construirSelecCrypto usando this.init
    y no tener que llamarlo
    desde el archivo app.js*/
    constructor(){
        this.init();
    }

    init(){
        this.construirSelecCrypto();
    }

    // metodo para mostrar todas las crypto en el select 
    construirSelecCrypto(){
        crypto.obtenerApi()
            .then(cMonedas => {

                const select = document.getElementById('criptomoneda');
                /* como obtenemos un arreglo, vamos a tomar la llave y los valores con object.Entries el cual los 
                metera en arreglo, para asi despues poder recorrerlo con un bucle (for of) para obtener la llave
                y el valor del objeto que pasamos a arreglo*/
                for(const [llave, valor] of Object.entries(cMonedas.cMonedas.Data)){
                    const opcion = document.createElement('option');
                    opcion.value = valor.Symbol;
                    opcion.innerText = valor.CoinName;
                    select.appendChild(opcion);
                }
            });
    }

    // metodo que mostrara el mensaje de error en el dom
    mensajeError(mensaje, clase){
        // creamos el div donde ira el mensaje
        const div = document.createElement('div');

        // le creamos una clase y su contenido pasados por parametros
        div.className = clase;
        div.innerText = mensaje;

        const divMensaje = document.querySelector('.mensajes').appendChild(div);

        // hacemos que el mensaje de error desaparezca despues de 3 segundos
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }

    // imprime el resultado de la criptomoneda solicitada

    mostrarResultado(resultado, moneda, criptocoin){

        console.log(resultado[criptocoin][moneda])
       
        const datosMoneda = resultado[criptocoin][moneda]

        // recortar el valor a solo 2 digitos despues del punto
        let precio = datosMoneda.PRICE.toFixed(2);

        // convertir el time stand de unix a fecha para poder mostrar la fecha de ultima actualizacion del crypto
        let fecha = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-VE');

        // construimos el template a mostrar en el dom

        let templateHTML = `
            <div class="card bg-info">
                <div class="card-body text-light">
                    <h3 class="card-title">Resultado</h3>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} es de ${precio} ${datosMoneda.TOSYMBOL}</p>
                </div>
            </div>
        `;
        document.querySelector('#resultado').innerHTML = templateHTML;
    }
}