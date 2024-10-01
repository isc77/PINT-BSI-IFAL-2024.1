import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  // Mock da função alert
  window.alert = jest.fn();
});

describe('Componente App', () => {
  test('renderiza o cabeçalho principal', () => {
    render(<App />);
    const headingElement = screen.getByText(/Transforme o Processo de Aplicações de Avaliações da sua Instituição/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renderiza os campos do formulário de contato', () => {
    render(<App />);
    expect(screen.getByLabelText(/Nome:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Assunto:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem:/i)).toBeInTheDocument();
  });

  test('valida o campo de e-mail vazio', () => {
    render(<App />);
  
    // Preenche os campos do formulário
    fireEvent.change(screen.getByLabelText(/Nome:/i), { target: { value: 'Isaac Barros' } });
    fireEvent.change(screen.getByLabelText(/E-mail:/i), { target: { value: '' } }); // Campo de e-mail vazio
  
    // Simula o envio do formulário
    fireEvent.click(screen.getByText(/Enviar/i));
  
    // Verifica se o alert foi chamado com a mensagem correta
    expect(window.alert).toHaveBeenCalledWith('Por favor, preencha o campo de e-mail.');
  });

  test('valida o formato do e-mail', () => {
    render(<App />);

    // Preenche os campos do formulário
    fireEvent.change(screen.getByLabelText(/Nome:/i), { target: { value: 'Isaac Barros' } });
    fireEvent.change(screen.getByLabelText(/Telefone:/i), { target: { value: '(12)34567-8910' } });
    fireEvent.change(screen.getByLabelText(/E-mail:/i), { target: { value: 'e-mailinvalido' } }); // Formato de e-mail inválido
    fireEvent.change(screen.getByLabelText(/Assunto:/i), { target: { value: 'Teste' } });
    fireEvent.change(screen.getByLabelText(/Mensagem:/i), { target: { value: 'Mensagem de teste.' } });

    // Envia o formulário
    fireEvent.click(screen.getByText(/Enviar/i));

    // Espera que um alerta apareça para o formato de e-mail inválido
    expect(window.alert).toHaveBeenCalledWith('Por favor, insira um e-mail válido.');
  });

  test('formata o número de telefone corretamente', () => {
    render(<App />);

    // Preenche o número de telefone
    fireEvent.change(screen.getByLabelText(/Telefone:/i), { target: { value: '12345678910' } });

    // Verifica se o valor formatado está correto
    const phoneInput = screen.getByLabelText(/Telefone:/i);
    expect(phoneInput.value).toBe('(12)34567-8910');
  });

  test('reinicia os campos do formulário após o envio', () => {
    render(<App />);

    // Preenche os campos do formulário
    fireEvent.change(screen.getByLabelText(/Nome:/i), { target: { value: 'Isaac Barros' } });
    fireEvent.change(screen.getByLabelText(/Telefone:/i), { target: { value: '(12)34567-8910' } });
    fireEvent.change(screen.getByLabelText(/E-mail:/i), { target: { value: 'isaac@teste.com' } });
    fireEvent.change(screen.getByLabelText(/Assunto:/i), { target: { value: 'Teste' } });
    fireEvent.change(screen.getByLabelText(/Mensagem:/i), { target: { value: 'Mensagem de teste.' } });

    // Simula o alerta para evitar interrupções
    window.alert = jest.fn();

    // Envia o formulário
    fireEvent.click(screen.getByText(/Enviar/i));

    // Espera que os campos do formulário sejam reiniciados
    expect(screen.getByLabelText(/Nome:/i).value).toBe('');
    expect(screen.getByLabelText(/Telefone:/i).value).toBe('');
    expect(screen.getByLabelText(/E-mail:/i).value).toBe('');
    expect(screen.getByLabelText(/Assunto:/i).value).toBe('');
    expect(screen.getByLabelText(/Mensagem:/i).value).toBe('');
  });
});
