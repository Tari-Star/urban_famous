import React from "react";

// component that appears on multiple pages
function Footer() {
return (
    <footer className="footer bg-dark fixed-bottom">
        <div>
        <a href = "https://github.com/Tari-Star"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/in/bota-seri-195769a5/"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
        <a href = "https://www.linkedin.com/in/bota-seri-195769a5/"><img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt = "Twitter" className = "icon" /></a>
        </div>
     
    </footer>
)
}

export default Footer;