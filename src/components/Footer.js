import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <a href="https://github.com/milindsahay" target="_blank" className="footer-link">
                    <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/milindsahay/" target="_blank" className="footer-link">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://medium.com/@milind_sahay" target="_blank" className="footer-link">
                    <i className="fa fa-medium"></i>
                </a>
                <a href="mailto:milind.sahay123@gmail.com" className="footer-link">
                    <i className="fa fa-envelope"></i>
                </a>
            </div>
            <div className="footer-text">
                &copy; {new Date().getFullYear()} Milind Sahay
            </div>
        </div>
    );
};

export default Footer;
