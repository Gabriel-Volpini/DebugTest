const somaAsync = (a,b) => a - b; //Contem erro proposital
const subtracaoAsync = (a,b) => a - b; 

async function teste(title, callback){
    try {
        await callback();
        console.log(`✓ ${title}`);
    } catch (error) {
        console.error(`✕ ${title}`);
        console.error(error);
    }
}

function verificador(resposta){
    return{
        toBe(esperado){
            if(esperado !== resposta){
                throw new Error(`${resposta} é diferente de ${esperado}`);
            }
        }
    }
}

teste("soma async", async() => {
    const resposta = await somaAsync(7,3);
    const valorEsperado = 10;
    verificador(resposta).toBe(valorEsperado);
})

teste("subtração async", async() =>{
    const resposta = await subtracaoAsync(7, 3);
    const valorEsperado = 4;
    verificador(resposta).toBe(valorEsperado);
})