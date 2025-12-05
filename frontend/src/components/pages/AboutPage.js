import React from 'react';

function AboutPage() {
    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-primary text-white">
                    <h3>About Nehilot Worship</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Our Mission</h4>
                            <p>
                                Nehilot Worship is a vibrant choir community based at IPRC Tumba, 
                                dedicated to excellence in worship through music. Our mission is to 
                                glorify God through harmonious praise and to build a community of 
                                passionate worshippers.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h4>Our Vision</h4>
                            <p>
                                To be a leading worship choir that transforms lives through music, 
                                nurtures talent, and impacts our community through exceptional 
                                worship experiences.
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <h4>Choir History</h4>
                        <p>
                            Founded in 2018, Nehilot Worship started with just 12 members and has 
                            grown to over 45 dedicated choir members. We have performed at numerous 
                            events, won several awards, and continue to inspire through our music.
                        </p>
                    </div>
                    
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h2>45+</h2>
                                    <p>Active Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h2>50+</h2>
                                    <p>Performances</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h2>5</h2>
                                    <p>Awards Won</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;