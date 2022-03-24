function login() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const linguagem = document.getElementById("linguagem").value;
  
  if (nome, idade, linguagem == "") {
      alert("Para continuar responda as perguntas!")
} else {document.getElementById("mensagem").innerHTML = 
        `Olá ${nome} você tem ${idade} anos e está aprendendo ${linguagem}!`;    
        
        document.getElementById("pergunta").innerHTML = `<br><div class="pergunta"<p>Você está gostando de aprender ${linguagem}?</p>
        <button type="submit" onclick="sim()">Sim</button> <button type="submit" onclick="nao()">Não</button></div>`
       }
}

function sim() {
document.getElementById("resposta").innerHTML = 
    "<h2>Muito bom! Continue estudando e você terá muito sucesso.</h2>"
}

function nao() {
  document.getElementById("resposta").innerHTML = 
    "<h2>Ahh que pena... Já tentou aprender outras linguagens?</h2>"
 
}