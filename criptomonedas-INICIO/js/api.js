class API {
    constructor(apiKey){
        this.apiKey = apiKey
    }

    async obtenerApi(){
        
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
        
        const obtenerUrl = await fetch(url)

        const cMonedas = await obtenerUrl.json()

        return {
            cMonedas
        }
        
    }

    async obtenerValores(moneda, criptoMoneda){

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}&api_key=${this.apiKey}`;

        const valores = await fetch(url);

        const resultado = await valores.json();

        return {
            resultado
        }
    }
}