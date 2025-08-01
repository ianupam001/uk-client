import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
    return (
        <footer className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg" data-src="assets/img/footer_bg.jpg">
        <div className="container">
          <div className="cs_footer_newsletter cs_style_1">
            <div className="cs_footer_newsletter_left cs_center">
            <Image src="/assets/img/rr legacy logo.webp" alt="img" width={100} height={65}   />
            </div>
            <div className="cs_footer_newsletter_right">
              <h3 className="cs_fs_24 cs_semibold cs_white_color mb-0">Subscribe now to get latest updates</h3>
              <form action="#" className="cs_footer_newsletter_form">
                <input type="text" placeholder="Enter Your Email" />
                <button className="cs_btn cs_style_1">
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="cs_main_footer cs_white_color">
          <div className="container">
            <div className="cs_footer_row">
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">About</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <div className="cs_text_widget">
                    <p>Phosfluorescently transform out-of-the-box paradigms whereas accurate supply chains. Continually</p>
                  </div>
                  <div className="cs_social_btns cs_style_1">
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" className="cs_social_btn cs_center">
                    <i className="bi bi-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/R.RLegacyMotors" className="cs_social_btn cs_center">
                    <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Explore</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_menu">
                    <li>
                      <Link href="/service/service-details">Adult In Car Lessons</Link>
                    </li>
                    <li>
                      <Link href="/service/service-details">Defensive Driving</Link>
                    </li>
                    <li>
                      <Link href="/service/service-details">Defensive Driving</Link>
                    </li>
                    <li>
                      <Link href="/terms">Term & Conditions</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                     <li>
                      <Link href="/refundpolicy">Refund Policy</Link>
                    </li>
                    </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Contact Us</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_footer_contact_list cs_mp_0">
                    <li>
                    <i className="bi bi-geo-alt-fill"></i>
                      Unit 6, Tyersal Works, Tyersal Lane, Bradford, UK - BD40RB
                    </li>
                    <li>
                    <i className="bi bi-telephone-fill"></i>
                      <a href="tel:+447469641922">(+44)7469-641922</a> <br/>
                     
                    </li>
                    <li>
                    <i className="bi bi-envelope-fill"></i>
                      <a href="mailto:info@rrlegacymotors.co.uk">info@rrlegacymotors.co.uk</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cs_footer_col">
                <div className="cs_footer_widget">
                  <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Working Hours:</h2>
                  <div className="cs_footer_widget_seperator">
                    <span className="cs_accent_bg"></span>
                    <span className="cs_white_bg"></span>
                    <span className="cs_white_bg"></span>
                  </div>
                  <ul className="cs_working_hours">
                    <li>
                      <span>Thu - Fri</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </li>
                    <li>
                      <span>Mon - Wed</span>
                      <span>8:00 AM - 10:00 PM</span>
                    </li>
                    <li>
                      <span>Saturday</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </li>
                    <li>
                      <span>Sunday</span>
                      <span>Close</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom cs_white_color">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <div className="cs_footer_copyright" style={{ color: '#fff' }}>
              Copyright © 2025 <a href="#">RR Legacy Motors</a>. All Rights Reserved.
              </div>
              <div>
              <Image src="/assets/img/payment_card.svg" alt="img" width={191} height={20}   />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer1;