document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-inscricao");
    const textarea = document.getElementById("sobre");
    const contador = document.getElementById("contador");
  
    // Função pra atualizar contador de caracteres
    const atualizarContador = () => {
      const chars = textarea.value.length;
      contador.textContent = `Caracteres: ${chars}`;
    };
  
    textarea.addEventListener("input", atualizarContador);
  
    // Atualiza o contador no carregamento (se tiver algo no textarea)
    atualizarContador();
  
    // Validação básica no envio do form
    form.addEventListener("submit", (e) => {
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
  
      if (!nome || !email) {
        e.preventDefault();
        alert("Preencha todos os campos obrigatórios (nome e e-mail).");
        return;
      }
  
      // Pode botar outras validações aqui (email válido, tamanho do texto, etc)
  
      alert("Inscrição enviada com sucesso!");
    });
  });
  