# PINT-BSI-IFAL-2024.1
Sistema de aplicação de provas online desenvolvido como atividade avaliativa da disciplina Projeto Integrador do curso de Bacharelado em Sistemas de Informação do Instituto Federal de Alagoas.

---

# ProvaEDU - Sistema de Provas Online

**Descrição**  
O **ProvaEDU** é uma plataforma online desenvolvida para facilitar a criação, aplicação e gestão de provas em instituições de ensino. O sistema permite que professores criem exames personalizados com diversos tipos de questões e que alunos realizem provas com segurança e eficiência. Além disso, oferece uma experiência otimizada de correção e monitoramento em tempo real.

## Principais Features

### 1. **Criação de Provas Personalizadas**
- Professores podem criar provas com questões dos seguintes tipos:
  - **Questões de Múltipla Escolha**.
  - **Questões Dissertativas**.
  - **Verdadeiro/Falso**.
  - **Questões Abertas**.
- As provas podem ser configuradas para conter uma mistura de todos os tipos de questões.

### 2. **Gerenciamento de Usuários**
- Controle de acesso para **professores**, **administradores** e **alunos**:
  - **Professores**: Podem criar, editar e monitorar provas.
  - **Administradores**: Gerenciam usuários e o funcionamento da plataforma.
  - **Alunos**: Realizam provas e recebem feedback de desempenho.
- **Autenticação e Autorização** baseada em funções.

### 3. **Correção Automática**
- Para questões objetivas (múltipla escolha e verdadeiro/falso), o sistema realiza a **correção automática** e gera feedback imediato para o aluno.
- Questões dissertativas precisam ser corrigidas manualmente pelos professores, com uma interface que facilita a visualização das respostas e atribuição de notas.

### 4. **Provas Temporizadas com Avanço Automático**
- **Tempo limite por questão**: Cada questão pode ser configurada com um tempo limite específico.
  - Se o aluno **exceder o tempo**, o sistema **avança automaticamente** para a próxima questão.
- **Provas com tempo total**: Além do tempo por questão, o professor pode configurar um tempo total para a prova.
- **Retorno de questões não respondidas**: Questões não respondidas ou puladas serão apresentadas novamente no final da prova.

### 5. **Embaralhamento de Questões e Alternativas**
- O sistema embaralha automaticamente:
  - A **ordem de exibição** das questões.
  - As **alternativas** das questões de múltipla escolha.
- Isso minimiza as chances de um aluno copiar respostas de outro.

### 6. **Monitoramento em Tempo Real**
- Professores podem acompanhar o progresso de cada aluno em **tempo real**:
  - Visualizam quais questões os alunos estão respondendo.
  - Recebem **alertas** sobre comportamentos anômalos.
  
### 7. **Alerta de Comportamento Inadequado (Minimização de Aba/Navegador)**
- O sistema detecta quando o aluno:
  - **Minimiza a aba** do navegador ou o próprio navegador.
  - **Alterna para outra aba ou programa**.
- Nessas situações:
  - O sistema **emite um alerta** ao professor.
  - A prova é automaticamente **bloqueada para o aluno**, até o retorno ao ambiente correto.

### 8. **Relatórios de Desempenho**
- Geração de relatórios detalhados sobre o desempenho dos alunos, incluindo:
  - **Estatísticas individuais e em grupo**.
  - Relatórios exportáveis em diferentes formatos (PDF, CSV).
  - **Histórico de desempenho** do aluno ao longo do curso.

### 9. **Segurança**
- O sistema utiliza **autenticação robusta** para garantir que os alunos registrados sejam os únicos a realizar as provas.
- A plataforma tem mecanismos de segurança para **evitar fraudes**, como o monitoramento do comportamento dos alunos durante a prova e a rastreabilidade de ações.

---

## Envolvidos
  
### Cliente
- **Instituituto Federal de Alagoas**: Professor Leonardo Fernandes (Campus Maceió)

### Equipe de Desenvolvimento

- **Euber Marinho**
- **Isaac Barros D** 
- **Luiz Gabriel** 
- **Ronalde Kelvyn**:

## Prazo de Entrega

- **Início do Projeto**: Setembro de 2024
- **Entrega da Primeira Versão Beta**: Dezembro de 2024

