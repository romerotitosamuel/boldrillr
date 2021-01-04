import Footer from './Footer'

const Contact = () => {

    const sendSmtp= () => {

        const datos = document.getElementById('contactForm');

        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "samuelserver@romero.com",
            Password : "03B04135BE2488B0CC792FFA4793783709CD",
            To : 'romerotitosamuel@gmail.com',
            From : 'romerotitosamuel@gmail.com',
            Subject : "Correo WEB de " + datos.fullName.value,
            Body : datos.fullName.value + " con correo: " + datos.email.value + " de la empresa: " + datos.company.value + " te envia el siguiente mensaje: " + datos.message.value 
        }).then(
             
            message => {
                if(message==='OK'){
                    return alert("Gracias por escribirnos "+ datos.fullName.value +" su mensaje fue enviado con exito, le daremos respuesta a la brevedad posible.")
                }else{
                    return alert("Su mensaje no pudo ser enviado, por favor escribanos a: administracion@boldrill.com. ________Se tuvo el siguiente error con el servidor: " + message )
                }
            }
        );
    }

    return( 
        <div>

            <div className="form-content">
                <h1 className="title-intro">Contactanos</h1>
                <div className="contact-wrapper">
                    <div className="contact-form">
                        <h3>Formulario de contacto</h3>
                        <form id="contactForm" >
                            <p>
                                <label><i className="fa fa-address-card"></i> Nombre Completo</label>
                                <input type="text" name="fullName" required/>
                            </p>
                            <p>
                                <label><i className="fa fa-envelope"></i> Dirección Email</label>
                                <input type="email" name="email" />
                            </p>
                            <p>
                                <label><i className="fa fa-phone-square"></i> Teléfono</label>
                                <input type="tel" name="phone" />
                            </p>
                            <p>
                                <label><i className="fa fa-building"></i> Empresa</label>
                                <input type="text" name="company" />
                            </p>
                            <p>
                                <label><i className="fa fa-comments" aria-hidden="true"></i> Mensaje</label>
                                <textarea name="message" rows="5"></textarea>
                            </p>
                            <p>
                                <button type="button" onClick={sendSmtp} >
                                    Enviar
                                </button>
                            </p>

                        </form>
                        
                    </div>
                    <div className="contact-info">
                        <h3>Información Empresarial</h3><br/>
                        <ul>
                            <li><i className="fa fa-map-marker"> Av. Roca y Coronado Nro. 732 entre 2do y 3er anillo</i></li>
                            <li><i className="fa fa-phone"> (591) 33 571527</i></li>
                            <li><i className="fa fa-envelope"> administracion@boldrill.com</i></li>
                        </ul>
                        <p>Contactanos a traves de tu medio de comunicación preferido, te responderemos a la brevedad posible</p>
                        <p>www.boldrill.com</p>
                    </div>
                    
                </div>
            </div> 
            <Footer/>
        </div>      
        
    )
}
export default Contact