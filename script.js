function openPopup(id){document.getElementById(id).classList.remove('hidden');}
function closePopup(id){document.getElementById(id).classList.add('hidden');}
function switchPopup(current,next){closePopup(current);openPopup(next);}
function cadastrarAluno() {
  // Aqui você pode adicionar validações antes se quiser
  closePopup('aluno-cadastro'); // fecha o popup
  // redireciona para a página de montar currículo
  window.location.href = "curriculo.html";
}
function cadastrarEmpresa() {
  // aqui você pode adicionar validações se necessário
  closePopup('empresa-cadastro'); // fecha o popup
  // redireciona para a página de cadastro de empresa
  window.location.href = "empresa-cadastro.html";
}
