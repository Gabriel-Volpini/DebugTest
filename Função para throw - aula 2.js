const resultado = 3+7;
const esperado = 10;

expect(resultado).toBe(esperado)

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}roberto`)
            }
        }
    }
}
