import "./FooterStyle.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Sintung Timur, Sintung, Pringgarata</p>
                            <p>Lombok Tengah</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <h4>+6287873026445</h4>
                        </div>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <h4>maulanamuhammad2000@gmail.com</h4>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>My name is Maulana Muhammad, and I am a graduate of the Computer Science
                        program at the National Institute of Technology in Malang. I have a
                        broad interest in various technology-related fields. Currently, my
                        deepest knowledge lies in machine learning, and I also have proficiency
                        in web development, Internet of Things (IoT), game development, and
                        networking.</p>
                    <div className="social">
                        <Link to="https://www.instagram.com/maoelana13/">
                            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/maulana-muhammad-107452244/">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </Link>
                        <Link to="https://github.com/Maoelan">
                            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer