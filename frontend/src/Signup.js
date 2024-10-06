import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { auth, GoogleAuthProvider } from './firebaseConfig'; // Importa a configuração do Firebase
import { signInWithPopup } from 'firebase/auth'; // Importa o método para login com popup
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate
import './signup.css';
import logo from './images/logo.png'; // Importa a logo

function Signup() {
    const navigate = useNavigate(); // Cria uma instância de navigate
    const [userType, setUserType] = useState('aluno');
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        instituicao: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'cpf' ? formatCPF(value) : value,
        }));
    };

    const formatCPF = (value) => {
        const onlyDigits = value.replace(/\D/g, '');
        if (onlyDigits.length <= 11) {
            return onlyDigits.replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{2})$/, '$1-$2');
        }
        return value;
    };

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        if (!isEmailValid(formData.email)) {
            alert('E-mail inválido!');
            return;
        }

        console.log('Dados cadastrados:', formData);
        setFormData({
            nome: '',
            cpf: '',
            email: '',
            senha: '',
            confirmarSenha: '',
            instituicao: '',
        });

        alert('Usuário cadastrado com sucesso!');
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            alert('Usuário autenticado com sucesso!');
        } catch (error) {
            console.error(error);
            alert('Erro ao autenticar com o Google!');
        }
    };

    // Função para redirecionar para a tela inicial
    const handleBackToHome = () => {
        navigate('/'); // Substitua pela rota da tela inicial se necessário
    };

    return (
        <div className="signup-wrapper">
            <Helmet>
                <title>Criar conta - ProvaEDU</title>
                <meta name="description" content="Cadastre-se no ProvaEDU para gerenciar suas provas online." />
            </Helmet>

            <div className="signup-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="large-logo" />
                </div>

                <div className="form-container">
                    <h1>Criar conta</h1>

                    <div className="user-type-select">
                        <button className={userType === 'aluno' ? 'active' : ''} onClick={() => setUserType('aluno')}>Aluno</button>
                        <button className={userType === 'professor' ? 'active' : ''} onClick={() => setUserType('professor')}>Professor</button>
                        <button className={userType === 'coordenador' ? 'active' : ''} onClick={() => setUserType('coordenador')}>Coordenador</button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <label>
                            Nome Completo:
                            <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required />
                        </label>

                        {userType === 'aluno' && (
                            <label>
                                CPF:
                                <input type="text" name="cpf" value={formData.cpf} onChange={handleInputChange} required />
                            </label>
                        )}

                        <label>
                            E-mail:
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                        </label>

                        <label>
                            Senha:
                            <div className="password-input-container">
                                <input type={showPassword ? 'text' : 'password'} name="senha" value={formData.senha} onChange={handleInputChange} required />
                                <button type="button" onMouseDown={() => setShowPassword(true)} onMouseUp={() => setShowPassword(false)} onMouseLeave={() => setShowPassword(false)} className="eye-icon">
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </label>

                        <label>
                            Confirmação de Senha:
                            <div className="password-input-container">
                                <input type={showConfirmPassword ? 'text' : 'password'} name="confirmarSenha" value={formData.confirmarSenha} onChange={handleInputChange} required />
                                <button type="button" onMouseDown={() => setShowConfirmPassword(true)} onMouseUp={() => setShowConfirmPassword(false)} onMouseLeave={() => setShowConfirmPassword(false)} className="eye-icon">
                                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </label>

                        <label className="institution-select">
                            Instituição de Ensino:
                            <select name="instituicao" value={formData.instituicao} onChange={handleInputChange} required>
                                <option value="">Selecione</option>
                                <option value="IFAL">IFAL</option>
                                <option value="UFAL">UFAL</option>
                                <option value="OUTRA">OUTRA</option>
                            </select>
                        </label>
                        <div className="button-container">
                            {/* Botão Registrar */}
                            <button type="submit" className="register-button">Registrar</button>
                            {/* Botão Voltar */}
                            <button type="button" onClick={handleBackToHome} className="back-button">Voltar</button>
                        </div>
                    </form>

                    {/* Botão de login com Google */}
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <button onClick={handleGoogleSignIn} className="google-signin-button">
                            Continuar com Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
