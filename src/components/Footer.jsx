import React from "react";

let currentYear = new Date().getFullYear()

function Footer() {
    return (
        <footer>
            <p>CopyRight  {currentYear}</p>
        </footer>
    )
};

export default Footer;