import React from "react";
import "./footer.css"

const Footer = () => {
    return <div className="footer">
        <div className="icons">
            <img alt="img" title="Facebook" src="/assets/facebook.png" />
            <img alt="img" title="Twitter" src="/assets/twitter.png" />
            <img alt="img" title="LinkedIn" src="/assets/linkedIn.png" />
            <img alt="img" title="Youtube" src="/assets/youtube.png" />
        </div>
        <div className="text">Example@gmail.com</div>
        <div className="text">Copyright © 2020 Name. All rights reserved.</div>
    </div>
}

export default Footer;