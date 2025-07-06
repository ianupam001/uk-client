import Form3 from "../Form/Form3";

const Contact = () => {
    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_gap_y_50">
            <div className="col-lg-6">
              <div className="cs_contact_desc">
                <h3 className="cs_fs_24 cs_mb_33">Contact Information</h3>
                <div className="cs_contact_info_grid">
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-telephone-inbound-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Phone Number :</h3>
                        <a href="tel:+447469641922">(+44)7469-641922</a><br/>
                      
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-envelope-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Email Address :</h3>
                        <a href="mailTo:info@rrlegacymotors.co.uk">info@rrlegacymotors.co.uk</a><br/>
                        
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-geo-alt-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Our Address :</h3>
                        <p className="mb-0">Unit 6, Tyersal Works, Tyersal Lane, Bradford, UK - BD40RB</p>
                      </div>
                  </div>
                  <div className="cs_iconbox cs_style_5">
                    <div className="cs_iconbox_icon cs_center cs_accent_bg_light cs_heading_color">
                    <i className="bi bi-clock-fill"></i></div>
                      <div className="cs_iconbox_info">
                        <h3 className="cs_fs_18 cs_semibold cs_mb_2">Working Time :</h3>
                        <p className="mb-0">Sunday to Friday :</p>
                        <p className="mb-0">10 Am - 05PM</p>
                      </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_44 cs_height_lg_30"></div>
              <div className="cs_social_desc">
                <h3 className="cs_fs_24 cs_semibold cs_mb_10">Follow The Social Media:</h3>
                <p className="cs_mb_22">Algae can quickly take over a Car Repair if not addressed promptly. Learn effective.</p>
                <div className="cs_social_btns cs_style_1">
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-youtube"></i></a>
                  <a href="#" className="cs_center cs_accent_bg_light"><i className="bi bi-facebook"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
                <h3 className="cs_fs_24 cs_mb_33">Send Message</h3>
                    <Form3></Form3>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>

        <div className="cs_navigation_map wow fadeInUp">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17065.81708729872!2d-1.7416453994737338!3d53.78427748956156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be1a6b230cb6d%3A0xeb081670a23c5761!2sTyersal%20Gate%2C%20Bradford%20BD4%200RD%2C%20UK!5e1!3m2!1sen!2sin!4v1751823710444!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

      </section>
    );
};

export default Contact;