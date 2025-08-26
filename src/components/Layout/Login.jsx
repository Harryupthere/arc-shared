import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './Login.scss';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', { email, password, rememberMe });
    };

    const customerFlags = [
        '🇺🇸', '🇮🇹', '🇩🇪', '🇫🇷', '🇨🇦',
        '🇦🇺', '🇺🇸', '🇮🇳', '🇳🇿', '🇮🇪',
        '🇩🇪', '🇬🇧', '🇨🇿', '🇬🇧', '🇬🇧'
    ];

    return (
        <div className="login-page">
            <div className="container">
                <div className="login-container login-form-section">
                    <div className="login-form">

                        <h1>Log in to ARC</h1>
                        <p className="signup-link">
                            Don't have a profile yet? <Link to="/signup">Create a profile</Link>
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="password-input">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </button>
                                </div>
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <span className="checkmark"></span>
                                    Remember me
                                </label>
                                <Link to="/forgot-password" className="forgot-password">
                                    Forgot Password?
                                </Link>
                            </div>

                            <button type="submit" className="login-btn">
                                Log in
                            </button>

                            <div className="divider">
                                <span>or</span>
                            </div>

                            <div className="social-login">
                                <button type="button" className="social-btn google-btn">
                                    <img src='images/google.svg' alt='google' />
                                    <span> Continue with Google</span>
                                </button>
                                <button type="button" className="social-btn facebook-btn">
                                    <img src='images/fb.svg' alt='fb' />
                                   <span> Continue with Facebook </span>
                                </button>
                                <button type="button" className="social-btn apple-btn">
                                    <img src='images/apple.svg' alt='apple' />
                                    <span>Continue with Apple</span>
                                </button>
                            </div>

                            <div className="cookie-settings">
                                <Link to="/cookie-settings">Cookie settings</Link>
                            </div>
                        </form>
                    </div>

                    <div className="login-info-section">
                        <Link to="/" className="logo">
                            <h2 className="logo-text animate-gradient ">ARC</h2>
                        </Link>
                        <img src='images/customers.png' alt='customers' />
                        <h3>3 million customers</h3>
                        <p>Trusted by over 3 million customers worldwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;