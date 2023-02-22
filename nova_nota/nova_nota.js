var botaoAdicionar = document.querySelector("#adicionar_nota");


function pegaDadosForm(){
    var form = document.querySelector("#form_notas")
    alert(form.numero_siga.value);

    console.log(form.numero_siga.value)
    console.log(form.nome_nota.value);
    console.log(form.data_agendamento.value);
    console.log(form.nome_interveniente.value);
    console.log(form.observacoes.value);


   var nota_mental = {
        numero_siga        : form.numero_siga.value,
        nome_nota          : form.nome_nota.value,
        data_inclusao      : dataAtual(),
        data_agendamento   : form.data_agendamento.value,
        data_ultima_edicao : dataAtual(),
        nome_interveniente : form.nome_interveniente.value,
        observacao         : form.observacoes.value,
        situacao_nota      : "incluida"
    }
    console.log(nota_mental)
    adicionaBDNovaNota(nota_mental);
} 

function dataAtual(){
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtualCalculada = ano +'-' + mes + '-' + dia;
    return dataAtualCalculada;
}



