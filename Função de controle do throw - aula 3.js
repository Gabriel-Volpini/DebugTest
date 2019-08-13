const soma = (a,b) => a - b; //erro proposital

function somar(){
    const resultado = soma(3,7);
    const esperado = 10;
    conferidor(resultado).toBe(esperado);
    teste("adição de um numero com erro",somar);
}

function conferidor(resultado){
    return{
        toBe(esperado){
            if(resultado !== esperado){
                throw new Error(`${resultado} is not equal to ${esperado}`) 
            }
        }
    }
}

function teste(title, callback){
        try {
            callback();
            console.log(`✓ ${title}`)
        } catch (error) {
            console.error(`✕ ${title}`);
            console.error(`${error}`);
        }
}