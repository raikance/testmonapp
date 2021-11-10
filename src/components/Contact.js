import LOGO from '../logo.svg';

const Contact = () => {
    return (

        <section>
            <div className="container-fluid">
                <div className="row"><h1>Contact</h1></div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src={LOGO} alt="diablo" width="300"></img>
                        </div>
                        <div className="col-12 col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22258.64415277515!2d4.83409671963789!3d45.784605712770485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea953340288b%3A0x8913782c16e3ef00!2sT%C3%AAte%20d&#39;Or%2C%2069006%20Lyon!5e0!3m2!1sfr!2sfr!4v1636543055525!5m2!1sfr!2sfr" width="600" height="450"></iframe>
                        </div>
                        
                    <button type="button" class="btn btn-primary">Primary</button>
                </div>
            </div>
        </section>
    )
}
export default Contact;
