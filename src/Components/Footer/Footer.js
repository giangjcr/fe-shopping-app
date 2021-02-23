import React from 'react';
import "./Footer.css"
function Footer(props) {
    return (
          <footer className="footer">
            <div className="grid wide">
              <div className="row">
                <div className="col l-12 m-12 c-12">
                  <div className="warrap-footer">
                    <div className="footer__left">
                      Baby Care - All rights reserved - Design by RedQ, Inc & Developed by GiangJCR
                            </div>
                    <div className="footer__right">
                      <i className="footer__right-icon fab fa-facebook"></i>
                      <i className="footer__right-icon fab fa-twitter"></i>
                      <i className="footer__right-icon fab fa-instagram"></i>
                      <i className="footer__right-icon fab fa-tumblr-square"></i>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </footer> 
    );
}

export default Footer;