import React from 'react'
import Slideshow from './Slideshow'
import Footer from './Footer'

const Home = () => {
    return (<div>
        <Slideshow/>
        <div className="center-columns">
            <div className="presentation">
                <h3>BOLDRILL S.R.L. es una empresa de servicios para el sector industrial realizando trabajos de perforación horizontal dirigida y protección catódica, asegurando la continuidad y eficiencia de sus trabajos por medio de personal altamente capacitado satisfaciendo las necesidades y requerimientos de sus clientes.</h3>
            </div>
            <div className="pilares">
                <h2>Misión</h2>
                <p>Brindar un servicio de calidad que le permita a nuestros clientes minimizar al máximo los riesgos de seguridad, daños al medio ambiente y conflictos sociales.</p>
            </div>
            <div className="pilares">
                <h2>Visión</h2>
                <p>Concientizar a los clientes y constructores en general de cómo y con que herramientas lo puedo hacer mejor.</p>
            </div>
            <div className="pilares">
                <h2>Valores</h2>
                <p>- Capacitación cantinua del personal. <br/>- Satifacer al cliente en costos, plazos y calidad. <br/>- Conciencia ciudadana en salud, seguridad medio ambiente y en aspectos sociales. </p>
            </div>
        </div>
        <Footer/>
    </div>)
}
export default Home