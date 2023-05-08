$(document).ready(function () {
  $("#btSalvar").click(async function () {
    var nome = $("#nome").val();
    var documento = $("#documento").val();
    var email = $("#email").val();
    var dataNasc = $("#dataNasc").val();
    var sexo = $("#sexo").val();
    var senha = $("#senha").val();

    if ($.fn.validarVariavel(nome) == false) {
      alert("nome não informado");
      return;
    } else if ($.fn.validarVariavel(documento) == false) {
      alert("documento não informado");
      return;
    } else if ($.fn.validarVariavel(email) == false) {
      alert("email não informado");
      return;
    } else if ($.fn.validarVariavel(dataNasc) == false) {
      alert("data de nascimento não informado");
      return;
    } else if ($.fn.validarVariavel(sexo) == false) {
      alert("sexo não informado");
      return;
    } else if ($.fn.validarVariavel(senha) == false) {
      alert("senha não informado");
      return;
    }

    var dados = {
      nome,
      documento,
      email,
      dataNasc,
      sexo,
      senha,
    };

    const result = await $.fn.novoCadastro(dados);
    console.log(111, result.success);
    if (result.success === true) {
      alert("Dados gravados com sucesso");
      return;
    }

    alert("Não foi possível efetuar o cadastro, tente novamente");
  });

  $("#btLogin").click(async function () {
    var email = $("#email").val();
    var senha = $("#senha").val();

    if ($.fn.validarVariavel(email) == false) {
      alert("email não informado");
      return;
    } else if ($.fn.validarVariavel(senha) == false) {
      alert("senha não informado");
      return;
    }

    var dados = {
      email,
      senha,
    };

    const result = await $.fn.login(dados);
    if (result.success === true) {
      alert("Usuário autenticado no sistema");
      return;
    }

    alert("Falha ao autenticar o usuário, tente novamente");
  });

  var today = moment().format("YYYY-MM-DD");
  document.getElementById("dateStart").value = today;
  document.getElementById("dateEnd").value = today;
  $.fn.loadListaCards();
});
