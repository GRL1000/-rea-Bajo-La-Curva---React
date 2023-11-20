import React, { useState } from 'react';
import * as math from 'mathjs';

function MainComponent() {
    // Estados para la función y los intervalos
    const [funcionDistancia, setFuncionDistancia] = useState('');
    const [intervaloA, setIntervaloA] = useState(null);
    const [intervaloB, setIntervaloB] = useState(null);
    const [intervaloAIngresado, setIntervaloAIngresado] = useState(false);
    const [distanciaRecorrida, setDistanciaRecorrida] = useState(0); // Inicializamos en 0
    const [areaTotal, setAreaTotal] = useState(0); 

    const handleInputChange = (event) => {
        setFuncionDistancia(event.target.value);
    };

    // Funciones para manejar eventos de botones
    const handleIntervaloA = () => {
        // Lógica para manejar el intervalo A
        const valorA = prompt('Ingresa el valor para el intervalo A');
        if (!isNaN(valorA)) {
            setIntervaloA(parseFloat(valorA));
            setIntervaloAIngresado(true); // Marcamos que el intervalo A ha sido ingresado
        } else {
            alert('Por favor, ingresa un número válido.');
        }
    };

    const handleIntervaloB = () => {
        // Lógica para manejar el intervalo B
        if (intervaloAIngresado) {
            const valorB = prompt('Ingresa el valor para el intervalo B');
            if (!isNaN(valorB)) {
                setIntervaloB(parseFloat(valorB));
            } else {
                alert('Por favor, ingresa un número válido.');
            }
        } else {
            alert('Por favor, ingresa el intervalo A antes de ingresar el intervalo B.');
        }
    };

    const handleCalcular = () => {
        // Lógica para calcular el resultado        
        console.log('funcionDistancia:', funcionDistancia);
        console.log('intervaloA:', intervaloA);
        console.log('intervaloB:', intervaloB);
    
        // Verificamos que haya una función y que ambos intervalos estén definidos
        if (funcionDistancia && intervaloA !== null && intervaloB !== null) {
            try {
                // Evaluamos la función para los intervalos dados
                const funcionEvaluadaA = math.evaluate(funcionDistancia.replace('t', intervaloA));
                const funcionEvaluadaB = math.evaluate(funcionDistancia.replace('t', intervaloB));
    
                // Calculamos la distancia recorrida (diferencia entre las evaluaciones)
                const distanciaRecorridaCalculada = Math.abs(funcionEvaluadaB - funcionEvaluadaA);
    
                // Calculamos el área total (puedes adaptar esta parte según la lógica necesaria)
                const areaTotalCalculada = distanciaRecorridaCalculada * 2; // Ejemplo simple, puedes modificar según tu lógica
    
                // Actualizamos los estados
                setDistanciaRecorrida(distanciaRecorridaCalculada);
                setAreaTotal(areaTotalCalculada);
            } catch (error) {
                alert('Error al evaluar la función. Asegúrate de ingresar una función matemática válida.');
            }
        } else {
            alert('Por favor, ingresa la función y ambos intervalos antes de calcular.');
        }
    };
    
    

    return(
        <div>
            <div className="title">
                <h1>ÁREA BAJO LA CURVA</h1>
            </div>
            <div className="container">
                <div className="operations">
                    <label className="enter">Ingresa Función</label>
                    <input type="text" value={funcionDistancia} onChange={handleInputChange}/>
                    <button className="a" onClick={handleIntervaloA}>Intervalo A</button>
                    <button className="b" onClick={handleIntervaloB}>Intervalo B</button>
                    <button className="c" onClick={handleCalcular}>CALCULAR</button>
                </div>
                <div className="results">
                    <div className="results-n">
                        <label>Distancia Recorrida</label>
                        <p>{distanciaRecorrida.toFixed(2)}</p>
                    </div>
                    <div className="results-b">
                        <label>Área Total</label>
                        <p>{areaTotal.toFixed(2)}</p>
                    </div>
                    <button className="btn">Nueva Distancia</button>
                </div>
            </div>
        </div>
    );
}

export default MainComponent;
