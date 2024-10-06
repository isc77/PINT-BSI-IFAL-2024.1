import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import backgroundImage from './images/background.jpg';
import Header from './Header';
import Signup from './Signup'; // Importa o componente de Signup (Cadastro)
import Login from './Login'; // Importa o componente de Login
import sendIcon from './images/send-icon.png';
import iconAleatorio from './images/aleatorio.png';
import iconFeedback from './images/feedback.png';
import iconMonitoramento from './images/monitoramento.png';
import iconProva from './images/prova.png';
import iconRelatorio from './images/relatorio.png';
import iconSeguranca from './images/seguranca.png';
import iconTemporizador from './images/temporizador.png';
import iconUsuario from './images/usuario.png';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const navigate = useNavigate(); // Hook para navegação

  const formatPhoneNumber = (value) => {
    value = value.replace(/\D/g, '');

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1)$2-$3');
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{5})/, '($1)$2-');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})/, '($1)');
    }

    return value;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedPhone,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      alert('Por favor, preencha o campo de e-mail.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    const csvData = [
      ["Nome", "Telefone", "E-mail", "Assunto", "Mensagem"],
      [formData.name, formData.phone, formData.email, formData.subject, formData.message],
    ];

    const csvLink = document.createElement("a");
    const blob = new Blob([csvData.map(row => row.join(",")).join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const fileName = `${formData.name}_form.csv`;
    csvLink.setAttribute("href", url);
    csvLink.setAttribute("download", fileName);
    csvLink.click();

    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            {/* Primeira Seção - Apresentação */}
            <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
              <div className="hero-content">
                <h1>Transforme o Processo de Aplicações de Avaliações da sua Instituição</h1>
                <p>Com o ProvaEDU, simplifique o processo de criação, aplicação e correção de provas online.</p>
              </div>
              <div className="scroll-indicator" onClick={() => document.querySelector('.features-section').scrollIntoView({ behavior: 'smooth' })}>
                <span></span>
              </div>
            </section>

            {/* Segunda Seção - Funcionalidades */}
            <section className="features-section" style={{ backgroundColor: '#47ae5b' }}>
              <div className="features-header">
                <h2>Funcionalidades do ProvaEDU</h2>
                <p>O que torna o ProvaEDU a melhor solução para avaliações online</p>
              </div>
              <div className="features-grid">
                <div className="feature-item">
                  <img src={iconProva} alt="Ícone Criação de Provas" className="feature-icon" />
                  <h3>Criação de Provas</h3>
                  <p>Diversidade de Questões: Diferentes tipos de perguntas para avaliar o conhecimento.</p>
                </div>

                <div className="feature-item">
                  <img src={iconUsuario} alt="Ícone Gerenciamento de Usuários" className="feature-icon" />
                  <h3>Gerenciamento de Usuários</h3>
                  <p>Controle de Acesso: Diferentes níveis de permissão para professores, administradores e alunos.</p>
                </div>

                <div className="feature-item">
                  <img src={iconFeedback} alt="Ícone Correção e Feedback" className="feature-icon" />
                  <h3>Correção e Feedback</h3>
                  <p>Correção automática para perguntas objetivas e manual para dissertativas.</p>
                </div>

                <div className="feature-item">
                  <img src={iconTemporizador} alt="Ícone Provas Temporizadas" className="feature-icon" />
                  <h3>Provas Temporizadas</h3>
                  <p>Configuração de limites de tempo para provas e questões.</p>
                </div>

                <div className="feature-item">
                  <img src={iconAleatorio} alt="Ícone Embaralhamento" className="feature-icon" />
                  <h3>Embaralhamento</h3>
                  <p>Questões e alternativas embaralhadas para cada aluno.</p>
                </div>

                <div className="feature-item">
                  <img src={iconMonitoramento} alt="Ícone Monitoramento" className="feature-icon" />
                  <h3>Monitoramento</h3>
                  <p>Acompanhamento do progresso dos alunos em tempo real.</p>
                </div>

                <div className="feature-item">
                  <img src={iconSeguranca} alt="Ícone Segurança" className="feature-icon" />
                  <h3>Segurança</h3>
                  <p>Autenticação segura e monitoramento para evitar fraudes.</p>
                </div>

                <div className="feature-item">
                  <img src={iconRelatorio} alt="Ícone Relatórios" className="feature-icon" />
                  <h3>Relatórios</h3>
                  <p>Geração de relatórios detalhados sobre o desempenho dos alunos.</p>
                </div>
              </div>
              <div className="scroll-indicator" onClick={() => document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' })}>
                <span></span>
              </div>
            </section>

            {/* Terceira Seção - Fale Conosco */}
            <section className="contact-section">
              <h2>Fale Conosco</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefone:</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail:</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Assunto:</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem:</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">
                  Enviar
                  <img src={sendIcon} alt="Enviar" />
                </button>
              </form>
            </section>
          </div>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2024 Todos direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
