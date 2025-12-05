import React, { useState } from 'react';

function MusicLibrary() {
    const [music] = useState([
        { id: 1, title: 'Amazing Grace', composer: 'John Newton', genre: 'Hymn', difficulty: 'Easy', voiceParts: 'SATB' },
        { id: 2, title: 'Great is Thy Faithfulness', composer: 'Thomas O. Chisholm', genre: 'Hymn', difficulty: 'Medium', voiceParts: 'SATB' },
        { id: 3, title: 'Hallelujah Chorus', composer: 'George Frideric Handel', genre: 'Classical', difficulty: 'Hard', voiceParts: 'SATB' },
        { id: 4, title: 'O Holy Night', composer: 'Adolphe Adam', genre: 'Christmas Carol', difficulty: 'Medium', voiceParts: 'SATB' },
        { id: 5, title: 'How Great Thou Art', composer: 'Stuart K. Hine', genre: 'Hymn', difficulty: 'Medium', voiceParts: 'SATB' },
        { id: 6, title: 'The Lord\'s Prayer', composer: 'Albert Hay Malotte', genre: 'Sacred', difficulty: 'Hard', voiceParts: 'SATB' }
    ]);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Music Library</h2>
            
            <div className="card shadow mb-4">
                <div className="card-header bg-info text-white">
                    <h5 className="mb-0">Available Music Pieces</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Composer</th>
                                    <th>Genre</th>
                                    <th>Difficulty</th>
                                    <th>Voice Parts</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {music.map(piece => (
                                    <tr key={piece.id}>
                                        <td><strong>{piece.title}</strong></td>
                                        <td>{piece.composer}</td>
                                        <td><span className="badge bg-secondary">{piece.genre}</span></td>
                                        <td>
                                            <span className={`badge ${
                                                piece.difficulty === 'Easy' ? 'bg-success' :
                                                piece.difficulty === 'Medium' ? 'bg-warning' : 'bg-danger'
                                            }`}>
                                                {piece.difficulty}
                                            </span>
                                        </td>
                                        <td>{piece.voiceParts}</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary me-1">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                            <button className="btn btn-sm btn-outline-success">
                                                <i className="fas fa-download"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <i className="fas fa-music fa-3x text-primary mb-3"></i>
                            <h5>Sheet Music</h5>
                            <p>Download sheet music for practice</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <i className="fas fa-headphones fa-3x text-success mb-3"></i>
                            <h5>Audio Recordings</h5>
                            <p>Listen to choir recordings</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow">
                        <div className="card-body text-center">
                            <i className="fas fa-video fa-3x text-danger mb-3"></i>
                            <h5>Video Tutorials</h5>
                            <p>Learn with video guides</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicLibrary;