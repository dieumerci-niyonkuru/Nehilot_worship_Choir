import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MemberRegister() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Personal Information
        full_name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        gender: '',
        address: '',
        emergency_contact: '',
        
        // Step 2: Choir Information
        voice_part: 'Not Sure',
        previous_experience: '',
        musical_instruments: '',
        talents: '',
        why_join: '',
        
        // Step 3: Availability
        available_days: [],
        time_commitment: 'Medium',
        
        // Step 4: Health & Medical
        medical_conditions: '',
        allergies: '',
        
        // Step 5: Agreement
        agree_terms: false,
        agree_data_usage: false
    });
    
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [registrationData, setRegistrationData] = useState(null);

    const daysOfWeek = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox' && name === 'available_days') {
            const updatedDays = formData.available_days.includes(value)
                ? formData.available_days.filter(day => day !== value)
                : [...formData.available_days, value];
            
            setFormData({ ...formData, available_days: updatedDays });
        } else if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateStep = () => {
        const newErrors = {};
        
        if (step === 1) {
            if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
            if (!formData.email.trim()) newErrors.email = 'Email is required';
            else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
            if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
            if (!formData.date_of_birth) newErrors.date_of_birth = 'Date of birth is required';
            if (!formData.gender) newErrors.gender = 'Gender is required';
        }
        
        if (step === 2) {
            if (!formData.voice_part) newErrors.voice_part = 'Please select a voice part';
        }
        
        if (step === 5) {
            if (!formData.agree_terms) newErrors.agree_terms = 'You must agree to the terms';
            if (!formData.agree_data_usage) newErrors.agree_data_usage = 'You must agree to data usage';
        }
        
        return newErrors;
    };

    const nextStep = () => {
        const validationErrors = validateStep();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateStep();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        
        setLoading(true);
        
        try {
            // Prepare data for submission
            const submissionData = {
                full_name: formData.full_name,
                email: formData.email,
                phone: formData.phone,
                date_of_birth: formData.date_of_birth,
                gender: formData.gender,
                voice_part: formData.voice_part,
                address: formData.address,
                emergency_contact: formData.emergency_contact,
                medical_notes: `Conditions: ${formData.medical_conditions}. Allergies: ${formData.allergies}`,
                talents: formData.talents + '. Instruments: ' + formData.musical_instruments
            };
            
            // Send registration request
            const response = await axios.post('http://localhost/nehilot-worship/backend/api/register.php', submissionData);
            
            if (response.data.success) {
                setRegistrationData(response.data);
                setSuccess(true);
                
                // Auto-redirect after 5 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 5000);
            }
        } catch (error) {
            console.error('Registration error:', error);
            setErrors({ submit: error.response?.data?.error || 'Registration failed. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const renderStep = () => {
        switch(step) {
            case 1:
                return (
                    <div className="step-content">
                        <h4 className="mb-4">Personal Information</h4>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Full Name *</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.full_name ? 'is-invalid' : ''}`}
                                    name="full_name"
                                    value={formData.full_name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                />
                                {errors.full_name && <div className="invalid-feedback">{errors.full_name}</div>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Email Address *</label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="example@email.com"
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Phone Number *</label>
                                <input
                                    type="tel"
                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="0781234567"
                                />
                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Date of Birth *</label>
                                <input
                                    type="date"
                                    className={`form-control ${errors.date_of_birth ? 'is-invalid' : ''}`}
                                    name="date_of_birth"
                                    value={formData.date_of_birth}
                                    onChange={handleInputChange}
                                />
                                {errors.date_of_birth && <div className="invalid-feedback">{errors.date_of_birth}</div>}
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Gender *</label>
                                <select
                                    className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Emergency Contact</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="emergency_contact"
                                    value={formData.emergency_contact}
                                    onChange={handleInputChange}
                                    placeholder="Emergency phone number"
                                />
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <textarea
                                className="form-control"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                rows="2"
                                placeholder="Your residential address"
                            />
                        </div>
                    </div>
                );
                
            case 2:
                return (
                    <div className="step-content">
                        <h4 className="mb-4">Choir Information</h4>
                        <div className="mb-4">
                            <label className="form-label">Voice Part *</label>
                            <div className="row">
                                {['Soprano', 'Alto', 'Tenor', 'Bass', 'Not Sure'].map(part => (
                                    <div key={part} className="col-md-4 mb-2">
                                        <div className={`form-check card ${formData.voice_part === part ? 'border-primary' : ''}`}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="voice_part"
                                                id={`voice_${part}`}
                                                value={part}
                                                checked={formData.voice_part === part}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label card-body" htmlFor={`voice_${part}`}>
                                                <h6 className="mb-0">{part}</h6>
                                                <small className="text-muted">
                                                    {part === 'Soprano' && 'Highest female voice'}
                                                    {part === 'Alto' && 'Lower female voice'}
                                                    {part === 'Tenor' && 'Highest male voice'}
                                                    {part === 'Bass' && 'Lowest male voice'}
                                                    {part === 'Not Sure' && 'We will help you find your part'}
                                                </small>
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {errors.voice_part && <div className="text-danger small">{errors.voice_part}</div>}
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Previous Choir Experience</label>
                                <textarea
                                    className="form-control"
                                    name="previous_experience"
                                    value={formData.previous_experience}
                                    onChange={handleInputChange}
                                    rows="3"
                                    placeholder="Describe any previous choir or musical experience"
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Musical Instruments You Play</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="musical_instruments"
                                    value={formData.musical_instruments}
                                    onChange={handleInputChange}
                                    placeholder="Piano, Guitar, Drums, etc."
                                />
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Other Talents/Skills</label>
                            <textarea
                                className="form-control"
                                name="talents"
                                value={formData.talents}
                                onChange={handleInputChange}
                                rows="2"
                                placeholder="Dancing, composing, sound engineering, etc."
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Why do you want to join Nehilot Worship?</label>
                            <textarea
                                className="form-control"
                                name="why_join"
                                value={formData.why_join}
                                onChange={handleInputChange}
                                rows="3"
                                placeholder="Tell us your motivation for joining our choir"
                            />
                        </div>
                    </div>
                );
                
            case 3:
                return (
                    <div className="step-content">
                        <h4 className="mb-4">Availability</h4>
                        <div className="mb-4">
                            <label className="form-label mb-3">Days Available for Rehearsals *</label>
                            <div className="row">
                                {daysOfWeek.map(day => (
                                    <div key={day} className="col-md-4 mb-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="available_days"
                                                id={`day_${day}`}
                                                value={day}
                                                checked={formData.available_days.includes(day)}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label" htmlFor={`day_${day}`}>
                                                {day}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Time Commitment</label>
                            <select
                                className="form-control"
                                name="time_commitment"
                                value={formData.time_commitment}
                                onChange={handleInputChange}
                            >
                                <option value="High">High (4+ times per week)</option>
                                <option value="Medium">Medium (2-3 times per week)</option>
                                <option value="Low">Low (1 time per week)</option>
                                <option value="Seasonal">Seasonal (Only for special events)</option>
                            </select>
                        </div>
                    </div>
                );
                
            case 4:
                return (
                    <div className="step-content">
                        <h4 className="mb-4">Health Information</h4>
                        <div className="alert alert-info">
                            <i className="fas fa-info-circle me-2"></i>
                            This information is confidential and will only be used for your safety during choir activities.
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Medical Conditions</label>
                            <textarea
                                className="form-control"
                                name="medical_conditions"
                                value={formData.medical_conditions}
                                onChange={handleInputChange}
                                rows="3"
                                placeholder="Any medical conditions we should be aware of (asthma, heart conditions, etc.)"
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Allergies</label>
                            <textarea
                                className="form-control"
                                name="allergies"
                                value={formData.allergies}
                                onChange={handleInputChange}
                                rows="2"
                                placeholder="Food allergies, medication allergies, etc."
                            />
                        </div>
                    </div>
                );
                
            case 5:
                return (
                    <div className="step-content">
                        <h4 className="mb-4">Terms & Agreement</h4>
                        
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5>Choir Membership Agreement</h5>
                                <div style={{maxHeight: '200px', overflowY: 'auto'}}>
                                    <ol className="small">
                                        <li>I agree to attend regular rehearsals and performances as required.</li>
                                        <li>I understand that choir membership requires commitment and dedication.</li>
                                        <li>I will respect choir directors, leaders, and fellow members.</li>
                                        <li>I agree to maintain appropriate conduct during all choir activities.</li>
                                        <li>I understand that membership may be reviewed based on attendance and participation.</li>
                                        <li>I agree to follow the choir's dress code for performances.</li>
                                        <li>I will notify the choir leadership in advance if I cannot attend rehearsals or performances.</li>
                                        <li>I understand that Nehilot Worship may use photos/videos for promotional purposes.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="agree_terms"
                                id="agree_terms"
                                checked={formData.agree_terms}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label" htmlFor="agree_terms">
                                I have read and agree to the Choir Membership Agreement *
                            </label>
                            {errors.agree_terms && <div className="text-danger small">{errors.agree_terms}</div>}
                        </div>
                        
                        <div className="form-check mb-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="agree_data_usage"
                                id="agree_data_usage"
                                checked={formData.agree_data_usage}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label" htmlFor="agree_data_usage">
                                I agree to the collection and usage of my personal data for choir administration purposes *
                            </label>
                            {errors.agree_data_usage && <div className="text-danger small">{errors.agree_data_usage}</div>}
                        </div>
                        
                        <div className="alert alert-success">
                            <h6><i className="fas fa-check-circle me-2"></i>Almost Done!</h6>
                            <p className="mb-0">Review all information and submit your application. You'll receive login details via email.</p>
                        </div>
                    </div>
                );
                
            default:
                return null;
        }
    };

    if (success) {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow border-success">
                            <div className="card-header bg-success text-white">
                                <h4 className="mb-0"><i className="fas fa-check-circle me-2"></i>Registration Successful!</h4>
                            </div>
                            <div className="card-body text-center py-5">
                                <div className="mb-4">
                                    <div className="display-1 text-success">
                                        <i className="fas fa-user-check"></i>
                                    </div>
                                </div>
                                
                                <h3>Welcome to Nehilot Worship!</h3>
                                <p className="lead">Your application has been received successfully.</p>
                                
                                <div className="card bg-light mb-4 mx-auto" style={{maxWidth: '500px'}}>
                                    <div className="card-body">
                                        <h5>Your Login Details:</h5>
                                        <div className="text-start">
                                            <p><strong>Username:</strong> {registrationData?.username}</p>
                                            <p><strong>Temporary Password:</strong> {registrationData?.default_password}</p>
                                            <p><strong>Member ID:</strong> {registrationData?.member_id}</p>
                                        </div>
                                        <div className="alert alert-warning mt-3">
                                            <i className="fas fa-exclamation-triangle me-2"></i>
                                            Please change your password after first login
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-muted">
                                    You will be redirected to login page in 5 seconds...
                                    <br/>
                                    <a href="/login" className="btn btn-primary mt-3">Go to Login Now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">
                                <i className="fas fa-user-plus me-2"></i>
                                Join Nehilot Worship Choir
                            </h4>
                            <small>Complete all steps to register as a choir member</small>
                        </div>
                        
                        <div className="card-body">
                            {/* Progress Bar */}
                            <div className="mb-5">
                                <div className="d-flex justify-content-between mb-2">
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <div key={num} className="text-center">
                                            <div className={`rounded-circle d-inline-flex align-items-center justify-content-center ${step >= num ? 'bg-primary text-white' : 'bg-light text-muted'}`}
                                                 style={{width: '40px', height: '40px'}}>
                                                {num}
                                            </div>
                                            <div className="small mt-1">
                                                {num === 1 && 'Personal'}
                                                {num === 2 && 'Choir Info'}
                                                {num === 3 && 'Availability'}
                                                {num === 4 && 'Health'}
                                                {num === 5 && 'Agreement'}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="progress" style={{height: '2px', marginTop: '-25px'}}>
                                    <div className="progress-bar" style={{width: `${(step-1)*25}%`}}></div>
                                </div>
                            </div>
                            
                            {errors.submit && (
                                <div className="alert alert-danger">{errors.submit}</div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                {renderStep()}
                                
                                <div className="d-flex justify-content-between mt-4">
                                    {step > 1 ? (
                                        <button type="button" className="btn btn-outline-secondary" onClick={prevStep}>
                                            <i className="fas fa-arrow-left me-1"></i> Previous
                                        </button>
                                    ) : (
                                        <div></div>
                                    )}
                                    
                                    {step < 5 ? (
                                        <button type="button" className="btn btn-primary" onClick={nextStep}>
                                            Next <i className="fas fa-arrow-right ms-1"></i>
                                        </button>
                                    ) : (
                                        <button type="submit" className="btn btn-success" disabled={loading}>
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-paper-plane me-2"></i>
                                                    Submit Application
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                        
                        <div className="card-footer bg-light">
                            <div className="row">
                                <div className="col-md-6">
                                    <small className="text-muted">
                                        <i className="fas fa-info-circle me-1"></i>
                                        All fields marked with * are required
                                    </small>
                                </div>
                                <div className="col-md-6 text-end">
                                    <small className="text-muted">
                                        Step {step} of 5
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MemberRegister;