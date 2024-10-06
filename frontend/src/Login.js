import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { auth, GoogleAuthProvider } from './firebaseConfig'; // Importa a configuração do Firebase
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'; // Importa o método para login
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate
import './login.css';
import logo from './images/logo.png'; // Importa a logo

function Login() {
    const navigate = useNavigate(); // Cria uma instância de navigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login bem-sucedido!');
            navigate('/dashboard'); // Redireciona para o dashboard (substitua pela rota correta)
        } catch (error) {
            console.error(error);
            alert('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            alert('Login com Google bem-sucedido!');
            navigate('/dashboard'); // Redireciona para o dashboard
        } catch (error) {
            console.error(error);
            alert('Erro ao fazer login com o Google.');
        }
    };

    return (
        <div className="signup-wrapper">
            <Helmet>
                <title>Login - ProvaEDU</title>
                <meta name="description" content="Faça login no ProvaEDU para acessar suas provas online." />
            </Helmet>

            <div className="signup-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="large-logo" />
                </div>

                <div className="form-container">
                    <h1>Login</h1>

                    <form onSubmit={handleSubmit}>
                        <label>
                            E-mail:
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                required
                            />
                        </label>

                        <label>
                            Senha:
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button
                                    type="button"
                                    onMouseDown={() => setShowPassword(true)}
                                    onMouseUp={() => setShowPassword(false)}
                                    onMouseLeave={() => setShowPassword(false)}
                                    className="eye-icon"
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </label>

                        <div className="button-group">
                            <button type="submit" className="register-button">
                                Entrar
                            </button>
                            <button 
                                type="button" 
                                onClick={() => navigate(-1)} 
                                className="back-button"
                            >
                                Voltar
                            </button>
                        </div>
                    </form>

                    {/* Botão de login com Google */}
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <button onClick={handleGoogleSignIn} className="google-signin-button">
                            Continuar com Google
                        </button>
                    </div>

                    {/* Link para cadastro */}
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <a href="/signup">Não tem uma conta ainda? Cadastre-se aqui</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
