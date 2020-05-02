// instanciar clases
const crypto = new API('68d31fca29da3885068a48a6e19638a9eee17125615a193c5e38ba80fafd5e81');
const ui = new Interfaz();




// agregar listeners 

document.getElementById('formulario').addEventListener('submit', e => {
    e.preventDefault();

    // obtenemos los valores de las listas de opciones
    const moneda = document.getElementById('moneda').value;
    const cripto = document.getElementById('criptomoneda').value;

    // validamos que ambos campos hayan sido seleccionados y no queden vacios
    if(moneda === '' || cripto === ''){
                
        ui.mensajeError('Debes diligenciar ambos campos', 'alert bg-warning text-center')
    
    } else {
        
        crypto.obtenerValores(moneda, cripto)
            .then(datos => {
                
                ui.mostrarResultado(datos.resultado.RAW, moneda, cripto)
            })
    }
})