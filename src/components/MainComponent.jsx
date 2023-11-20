
function MainComponent() {
    return(
        <div>
            <div className="title">
                <h1>ÁREA BAJO LA CURVA</h1>
            </div>
            <div className="container">
                <div className="operations">
                    <label className="enter">Ingresa Función</label>
                    <input type="text"/>
                    <button className="a">Intervalo A</button>
                    <button className="b">Intervalo B</button>
                    <button className="c">CALCULAR</button>
                </div>
                <div className="results">
                    <div className="results-n">
                        <label>Distancia Recorrida</label>
                        <p>00.00</p>
                    </div>
                    <div className="results-b">
                        <label>Área Total</label>
                        <p>00.00</p>
                    </div>
                    <button className="btn">Nueva Distancia</button>
                </div>
            </div>
        </div>
    );
}

export default MainComponent;
