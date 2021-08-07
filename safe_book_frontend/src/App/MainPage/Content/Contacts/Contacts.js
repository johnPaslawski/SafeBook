import MapGoogle from "./Components/MapGoogle";

const Contacts = () => {
    return(
        <div className="contact title-content-grid">
            <div className="contanct-title title-content-title">
                <h1>Kontakt</h1>
            </div>
            <div className="contact-content">
                <div className="contact-email_form">
                    <div className="contact-email_form-email label_content">
                        <label for="contact-text-box-message">Email</label>
                        <input type="text" id="contact-text-box-email" name="email"></input>
                    </div>
                    <div className="contact-email_form-message label_content">
                        <label for="contact-text-box-message">Treść</label>
                        <textarea type="" id="contact-text-box-message"></textarea>
                    </div>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typenting and typesetting inLorem Ipsum is simply dummy text of the printing and typesettsetting inLorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="contact-email_form-send">
                        <button className="contact-email_form-send_btn">Send</button>
                    </div>
                </div>
                <div className="contact-data_map">
                    <div className="contact-data_map-data">
                        <div className="contact-data_map-data-title">Dane kontaktowe</div>
                        <div className="contact-data_map-data-address">Ulica jakaś tam, Kraków</div>
                        <div className="contact-data_map-data-email">email@email.com</div>
                        <div className="contact-data_map-data-phone">123456789</div>
                    </div>
                    <div className="contact-data_map-map">
                        <MapGoogle />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;