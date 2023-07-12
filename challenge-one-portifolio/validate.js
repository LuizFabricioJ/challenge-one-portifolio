//Seu JavaScript de validação aqui
function validaformulario(){
    var nome= document.getElementById("nome").Value;
    var email= document.getElementById("email").value;
    var assunto= document.getElementById("assunto").value;
    var mensagem= document.getElementById("mensagem").value;

    if (nome == "" || email == "" || assunto == "" || mensagem == ""){
    alert("por favor preencha os campos.");
    return false;

    const inputs = document.querySelector('inputs')
    }

    return true;
    }

const botao = document.querySelector('botao');

botao.addEventListener('click', validaformulario);