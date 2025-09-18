// Contenido de prueba para testear

// Función simple para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para testear la función sumar
function testSumar() {
    const resultado = sumar(2, 3);
    if (resultado === 5) {
        console.log("Test sumar PASÓ");
    } else {
        console.log("Test sumar FALLÓ. Esperado 5, obtenido " + resultado);
    }
}

// Otro ejemplo: función para invertir una cadena
function invertirCadena(str) {
    return str.split('').reverse().join('');
}

// Test para invertirCadena
function testInvertirCadena() {
    const resultado = invertirCadena("hola");
    if (resultado === "aloh") {
        console.log("Test invertirCadena PASÓ");
    } else {
        console.log("Test invertirCadena FALLÓ. Esperado 'aloh', obtenido '" + resultado + "'");
    }
}

// Ejecutar los tests
testSumar();
testInvertirCadena();
console.log("Tests linea");