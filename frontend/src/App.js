import React, { useState } from 'react';
import './App.css';
import backgroundImage from './images/background.jpg';  // Imagem de fundo da primeira seção
import Header from './Header'; // Certifique-se de importar o Header
import sendIcon from './images/send-icon.png'; // Ícone do botão Enviar
/* Ícones para a segunda seção */
import iconAleatorio from './images/aleatorio.png';
import iconFeedback from './images/feedback.png';
import iconMonitoramento from './images/monitoramento.png';
import iconProva from './images/prova.png';
import iconRelatorio from './images/relatorio.png';
import iconSeguranca from './images/usuario.png';
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

  // Função para formatar o número de telefone no padrão (xx)xxxxx-xxxx
  const formatPhoneNumber = (value) => {
    // Remove todos os caracteres que não são dígitos
    value = value.replace(/\D/g, '');

    // Aplica o formato (xx)xxxxx-xxxx
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1)$2-$3');
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{5})/, '($1)$2-');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})/, '($1)');
    }

    return value;
  };

  // Função para validar o formato de e-mail
  const isValidEmail = (email) => {
    // Simples expressão regular para validar e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Verifica se o campo é "phone" e aplica a formatação adequada
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

    // Verifica se o e-mail está vazio ou não é válido
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

    // Download arquivo CSV com o nome do contato
    const csvLink = document.createElement("a");
    const blob = new Blob([csvData.map(row => row.join(",")).join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const fileName = `${formData.name}_form.csv`;  // Nome do arquivo baseado no nome do contato
    csvLink.setAttribute("href", url);
    csvLink.setAttribute("download", fileName);
    csvLink.click();

    // Limpar o formulário após o envio
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
      {/* Barra superior (header) */}
      <Header />

      {/* Primeira Seção - Apresentação */}
      <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
          <h1>Transforme o Processo de Aplicações de Avaliações da sua Instituição</h1>
          <p>Com o ProvaEDU, simplifique o processo de criação, aplicação e correção de provas online.</p>
        </div>
        {/* Bolinha para indicar rolagem */}
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
            <p>Automatização: Correção automática para perguntas objetivas. Manual: Interface intuitiva para correção de perguntas dissertativas.</p>
          </div>

          <div className="feature-item">
            <img src={iconTemporizador} alt="Ícone Provas Temporizadas" className="feature-icon" />
            <h3>Provas Temporizadas</h3>
            <p>Gestão de Tempo: Configuração de limites de tempo por questão e para a prova como um todo. Flexibilidade: Opção de retornar a questões não respondidas.</p>
          </div>

          <div className="feature-item">
            <img src={iconAleatorio} alt="Ícone Embaralhamento" className="feature-icon" />
            <h3>Embaralhamento</h3>
            <p>Aleatoriedade: Ordem das questões e alternativas embaralhadas para cada aluno.</p>
          </div>

          <div className="feature-item">
            <img src={iconMonitoramento} alt="Ícone Monitoramento" className="feature-icon" />
            <h3>Monitoramento</h3>
            <p>Acompanhamento em Tempo Real: Visualização do progresso dos alunos e alertas de comportamento.</p>
          </div>

          <div className="feature-item">
            <img src={iconSeguranca} alt="Ícone Segurança" className="feature-icon" />
            <h3>Segurança</h3>
            <p>Autenticação: Garantia de acesso seguro e monitoramento para evitar fraudes.</p>
          </div>

          <div className="feature-item">
            <img src={iconRelatorio} alt="Ícone Relatórios" className="feature-icon" />
            <h3>Relatórios</h3>
            <p>Desempenho: Geração de relatórios detalhados e exportáveis sobre o desempenho dos alunos.</p>
          </div>
        </div>
        {/* Bolinha de rolagem para a seção de contato */}
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
      {/* Rodapé */}
      <footer className="footer">
        <p>© 2024 Todos direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
