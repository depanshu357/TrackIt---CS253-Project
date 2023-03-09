import React from 'react'
import "./footer.css"; 
const Footer = () => {
    
          return (
            <div>
              
              <footer className="footer">
                <div className="footer-container">
                  <div className="row">
                    <div className="footer-col">
                      <h4>source code</h4>
                      <ul>
                        <li><a href="#">reactJS</a></li>
                        <li><a href="#">nodeJS</a></li>
                        <li><a href="#">MongoDB</a></li>
                        
                      </ul>
                    </div>
                    <div className="footer-col">
                      <h4>documentation</h4>
                      <ul>
                        
                        <li><a href="https://drive.google.com/file/d/14tox2fBL0zjjC01vzamX8cjbiVcC_o0K/view?usp=drivesdk">SRS version 1</a></li>
                        <li><a href="https://drive.google.com/file/d/14tox2fBL0zjjC01vzamX8cjbiVcC_o0K/view?usp=drivesdk">design doc</a></li>
                        
                      </ul>
                    </div>
                    <div className="footer-col">
                      <h4>our meeting address</h4>
                      <ul>
                        <li><h3>CCD, IIT Kanpur</h3> </li>
                        
                      </ul>
                    </div>
                    <div className="footer-col">
                      <h4>follow us</h4>
                      <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          );
        }
      


export default Footer;