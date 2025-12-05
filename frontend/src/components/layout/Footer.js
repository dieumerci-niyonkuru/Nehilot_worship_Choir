import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="d-flex align-items-center mb-3">
                            <div className="bg-primary rounded-circle p-2 me-2">
                                <i className="fas fa-music text-white"></i>
                            </div>
                            <div>
                                <h4 className="mb-0 text-white">Nehilot Worship</h4>
                                <small className="text-light">IPRC Tumba Choir</small>
                            </div>
                        </div>
                        <p className="text-light">
                            Bringing excellence in worship through music, unity, and spiritual growth.
                            Join our choir family and be part of something beautiful.
                        </p>
                        <div className="d-flex">
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-youtube fa-lg"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-lg-2 col-md-4 mb-4">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-light text-decoration-none">
                                    <i className="fas fa-chevron-right me-1"></i> Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="text-light text-decoration-none">
                                    <i className="fas fa-chevron-right me-1"></i> About Us
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/events" className="text-light text-decoration-none">
                                    <i className="fas fa-chevron-right me-1"></i> Events
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/music" className="text-light text-decoration-none">
                                    <i className="fas fa-chevron-right me-1"></i> Music Library
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/gallery" className="text-light text-decoration-none">
                                    <i className="fas fa-chevron-right me-1"></i> Gallery
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 mb-4">
                        <h5 className="mb-3">Choir Sections</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <span className="text-light">
                                    <i className="fas fa-microphone me-2"></i> Soprano Section
                                </span>
                            </li>
                            <li className="mb-2">
                                <span className="text-light">
                                    <i className="fas fa-microphone me-2"></i> Alto Section
                                </span>
                            </li>
                            <li className="mb-2">
                                <span className="text-light">
                                    <i className="fas fa-microphone me-2"></i> Tenor Section
                                </span>
                            </li>
                            <li className="mb-2">
                                <span className="text-light">
                                    <i className="fas fa-microphone me-2"></i> Bass Section
                                </span>
                            </li>
                            <li className="mb-2">
                                <span className="text-light">
                                    <i className="fas fa-drum me-2"></i> Instrumentalists
                                </span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 mb-4">
                        <h5 className="mb-3">Contact Info</h5>
                        <ul className="list-unstyled text-light">
                            <li className="mb-3">
                                <i className="fas fa-map-marker-alt me-2"></i>
                                IPRC Tumba, Southern Province, Rwanda
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-phone-alt me-2"></i>
                                +250 793 516 483
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-envelope me-2"></i>
                                nehilotworship@gmail.com
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-clock me-2"></i>
                                Rehearsals: Tue & Thu, 6-8 PM
                            </li>
                        </ul>
                    </div>
                </div>
                
                <hr className="bg-light" />
                
                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-0 text-light">
                            &copy; {new Date().getFullYear()} Nehilot Worship. All rights reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-end">
                        <p className="mb-0 text-light">
                            Designed with <b className="br">Dieu Merci</b> for IPRC Tumba Worship
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;