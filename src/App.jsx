import layerBaseImage from './img/layer-base.png';
import layerMiddleImage from './img/layer-middle.png';
import layerFrontImage from './img/layer-front.png';
import dungeonImage from './img/dungeon.jpg';
import {useEffect} from "react";
function App() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let scrollY = window.scrollY;
            document.documentElement.style.setProperty("--scrollTop",`${scrollY}px`);
        });
        }, []);
    return (
        <>
            <div className="wrapper">
                <div className="content">
                    <header className="header-main">
                        <div className="layers">
                            <div className="layer-head">
                                <div className="caption">Bienvenue sur le Site Parallax</div>
                                <div className="title">Dark Forest</div>
                            </div>
                            <div className="img-layer layer-base" style={{backgroundImage: `url(${layerBaseImage})`}}></div>
                            <div className="img-layer layer-mid" style={{backgroundImage: `url(${layerMiddleImage})`}}></div>
                            <div className="img-layer layer-front" style={{backgroundImage: `url(${layerFrontImage})`}}></div>
                        </div>
                    </header>
                    <article className="article-main" style={{backgroundImage: `url(${dungeonImage})`}}>
                        <div className="m-article-content">
                            <h2 className="m-header">Histoire à suivre</h2>
                            <p className="m-paragraph">La lueur pâle de la lune se faufile à travers les branches entrelacées de la sombre forêt mystérieuse, jetant des ombres dansantes sur le tapis de feuilles mortes qui recouvre le sol. Les arbres, aux formes tordues et aux feuilles éteintes, semblent garder des secrets anciens, murmurant des histoires oubliées à ceux qui osent s'aventurer dans leur enchevêtrement inquiétant. Les courageux qui osent s'aventurer dans cette forêt se retrouvent plongés dans un royaume où le réel et le surnaturel se confondent.</p>
                        </div>
                        <div className="copy">
                            MALEK . J
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}

export default App
