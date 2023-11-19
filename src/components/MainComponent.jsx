
function MainComponent() {
    return(
        <div>
            <div className="title">
                <h1>ÁREA BAJO LA CURVA</h1>
            </div>
            <div className="container">
                <div className="operations">
                    <label className="enter">Ingresa Función</label>
                    <input type="text" placeholder="Función"/>
                    <button className="a">Intervalo A</button>
                    <button className="b">Intervalo B</button>
                    <button className="c">CALCULAR</button>
                </div>
                <div className="results">

                </div>
            </div>
        </div>
    );
}

export default MainComponent;
