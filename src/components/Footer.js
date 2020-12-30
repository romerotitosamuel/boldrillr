import adress from '../img/adress.png'
import oficina from '../img/oficina.jpg'

const Footer = () => {
    return( <div>
        <footer>
            <div className="col1">
                <div className="social">
                    <span>Siguenos en: &nbsp; </span>
                    <i className="fa fa-facebook-square">&nbsp; </i>
                    <i className="fa fa-twitter-square">&nbsp; </i>
                    <i className="fa fa-linkedin-square">&nbsp; </i>
                    <i className="fa fa-instagram">&nbsp; </i>
                </div>
                <a href="https://www.google.com.bo/maps/place/17%C2%B047'06.1%22S+63%C2%B012'08.2%22W/@-17.7850377,-63.2028342,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d-17.7850392!4d-63.2022871?hl=es-419" target="_blank">
                    <img src={oficina} alt="Dirección de la empresa"/>
                </a>

            </div>
            <div className="col2">
                <p>Para cualquier consulta. <br/> Tel/Fax. (591) - 3 3 571527 <br/> Av. Roca y Coronada <br/> No. 732 entre Segundo <br/> y Tercer Anillo <br/><br/> Santa Cruz - Bolivia</p>
            </div>
            <div className="col3">
                <a href="https://www.google.com.bo/maps/place/17%C2%B047'06.1%22S+63%C2%B012'08.2%22W/@-17.7850377,-63.2028342,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d-17.7850392!4d-63.2022871?hl=es-419" target="_blank">
                    <img src={adress} alt="Dirección de la empresa"/>
                </a>
                
            </div>
        </footer>
    </div> )
}

export default Footer