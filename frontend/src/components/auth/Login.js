import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ setAuth }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Those code shows the js complete files
        setTimeout(() => {
            // For demo: accept any username/password
            const userData = {
                user_id: 2,
                username: formData.username || 'member',
                role: 'Member',
                full_name: formData.username || 'Choir Member',
                email: `${formData.username || 'member'}@nehilot.com`
            };
            localStorage.setItem('user', JSON.stringify(userData));
            setAuth(userData);
            navigate('/dashboard');
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Member Login</h4>
                        </div>
                        <div className="card-body">
                            {error && (
                                <div className="alert alert-danger">{error}</div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your username"
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your password"
                                    />
                                </div>
                                
                                <div className="d-grid gap-2">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                        disabled={loading}
                                    >
                                        {loading ? 'Logging in...' : 'Login as Member'}
                                    </button>
                                </div>
                            </form>
                            
                            <div className="text-center mt-3">
                                <p className="mb-0">
                                    Don't have an account? 
                                    <Link to="/register" className="ms-1">Sign up</Link>
                                </p>
                                <p className="mb-0 mt-2">
                                    <Link to="/leader-login" className="text-warning">
                                        <i className="fas fa-crown me-1"></i>
                                        Leader/Admin Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;