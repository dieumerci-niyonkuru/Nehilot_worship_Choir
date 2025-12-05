import React from 'react';

function GalleryPage() {
    const galleryItems = [
        { id: 1, category: 'Performances', count: 12 },
        { id: 2, category: 'Rehearsals', count: 8 },
        { id: 3, category: 'Events', count: 15 },
        { id: 4, category: 'Awards', count: 5 },
        { id: 5, category: 'Community', count: 7 },
        { id: 6, category: 'Members', count: 20 }
    ];

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Photo Gallery</h2>
            
            <div className="row mb-4">
                {galleryItems.map(item => (
                    <div key={item.id} className="col-md-4 mb-3">
                        <div className="card shadow">
                            <div className="card-body text-center">
                                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                     style={{width: '100px', height: '100px'}}>
                                    <i className="fas fa-images fa-3x text-primary"></i>
                                </div>
                                <h5>{item.category}</h5>
                                <p className="text-muted">{item.count} photos</p>
                                <button className="btn btn-outline-primary btn-sm">
                                    View Photos
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="card shadow">
                <div className="card-header bg-warning text-dark">
                    <h5 className="mb-0">Recent Photos</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6].map(num => (
                            <div key={num} className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-img-top bg-secondary" 
                                         style={{height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <i className="fas fa-image fa-4x text-white"></i>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Choir Event {num}</p>
                                        <small className="text-muted">December 2024</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GalleryPage;