const soma = (a, b) => a - b;// erro proposital

const resultado = soma(3, 7);
const esperado = 10;

if (resultado !== esperado) {
    throw new Error(`${resultado} é diferente de ${esperado}`);
}

