// Questão 2 & 9: Selecionando elementos
const titulo = document.querySelector('#tituloPagina');
const campoTexto = document.getElementById('inputTarefa');
const botao = document.getElementById('btnAdicionar');
const lista = document.getElementById('listaTarefas');

titulo.textContent = 'Lista de Tarefas com JavaScript';

// Questão 3, 4, 5 e 6: Adicionar tarefa com validação, limpeza e classes
botao.addEventListener('click', function() {
  if (campoTexto.value.trim() === '') {
    alert('Digite uma tarefa antes de adicionar.');
    return;
  }
  
  const novaTarefa = document.createElement('li');
  novaTarefa.textContent = campoTexto.value;
  novaTarefa.classList.add('tarefa'); // Questão 6
  
  lista.appendChild(novaTarefa);
  campoTexto.value = ''; // Questão 4
});

// Questão 7: Destacar tarefas cadastradas
const botaoDestacar = document.getElementById('btnDestacar');
botaoDestacar.addEventListener('click', function() {
  const todasAsTarefas = document.querySelectorAll('.tarefa');
  todasAsTarefas.forEach(function(tarefa) {
    tarefa.style.fontWeight = 'bold';
    tarefa.style.color = 'blue';
  });
});

// Questão 8: Alterar título
const botaoAlterarTitulo = document.getElementById('btnAlterarTitulo');
botaoAlterarTitulo.addEventListener('click', function() {
  titulo.textContent = 'Minhas tarefas de hoje';
});

// Questão 10: Adicionar tarefa de exemplo
const botaoExemplo = document.getElementById('btnAdicionarExemplo');
botaoExemplo.addEventListener('click', function() {
  const tarefaExemplo = document.createElement('li');
  tarefaExemplo.textContent = 'Revisar conteúdo de DOM';
  tarefaExemplo.classList.add('tarefa'); // Desafio da Questão 10
  
  lista.appendChild(tarefaExemplo);
});