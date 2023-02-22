function abrePaginaNovaNota(pagina){
    window.open("/nova_nota/nova_nota.html");




    /* const expr = 'Papayas'; */
switch (pagina) {
  case 'home':
    window.open("/index.html");
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  case 'concluidas':
       window.open("/concluidas/concluidas.html",'_self');
        break; 
  default:
   /*  console.log(`Sorry, we are out of ${expr}.`); */
}




}

function abrePagina(pagina){
    switch (pagina) {
        case 'home':
          window.open("/index.html",'_self');
          break;
        case 'nova_nota':
            window.open("/nova_nota/nova_nota.html",'_self');
            break;
        case 'concluidas':
            window.open("/concluidas/concluidas.html",'_self');
            break; 
        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }
}




/* function deletaCliente(event){ */
function abreEdicaoNota(event){ 
/*     limpaTabela();
    onLoadListaNotas(); */

    var texto = event.target.parentNode.parentNode.innerText
    var linhaClicada = event.target.parentNode.parentElement;
    var numeroLinha = linhaClicada.rowIndex;
    arrayTexto = texto.split("\t")
    /* alert("aqui vai" + texto) */
/*     alert("besta" + arrayTexto[7]); */
    /* alert("besta" + linhaClicada + numeroLinha); */

    var idNotaTd = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(1)");
    idNotaTd.innerHTML = `<div class="col-md-4 col-lg-4">
                            <input type="text" class="form-control" id="id_nota_edicao" value ="${idNotaTd.innerHTML}" readOnly = true>
                          </div>`
        
    var numeroSigaTd = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(2)");
    numeroSigaTd.innerHTML = `<input type="text" class="form-control" id="numero_siga_edicao" value ="${numeroSigaTd.innerHTML}">`

    var nomeNotaTd = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(3)");
    nomeNotaTd.innerHTML = `<input type="text" class="form-control" id="nome_nota_edicao" value ="${nomeNotaTd.innerHTML}">`

    var dataAgendamentoTd = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(5)");
    /* alert(dataAgendamentoTd.innerHTML)
    desconverteData(dataAgendamentoTd.innerHTML) */
    /* alert(dataAgendamentoTd.innerHTML + 'innerHtml') */
    var dataAgendamento = desconverteData(dataAgendamentoTd.innerHTML);
    /* alert(dataAgendamento + 'amigoooo') */
  /*   dataAgendamentoTd.innerHTML = `<input type="date" class="form-control" id="nome_nota" value ="2012-01-01">` */
    /* alert(dataAgendamentoTd.innerHTML + 'innerHtml') */
    /* var dataAgendamento = desconverteData(dataAgendamentoTd.innerHTML); */
    /* alert(dataAgendamento + 'aqui') */
    dataAgendamentoTd.innerHTML = `<input type="date" class="form-control" id="data_agendamento_edicao" value ="${dataAgendamento}">`

    var nomeIntervenienteTd = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(7)");
    /* nomeIntervenienteTd.innerHTML = `<input type="text" class="form-control" id="nome_nota" value ="${nomeIntervenienteTd.innerHTML}">` */
    nomeIntervenienteTd.innerHTML = `<select id="nome_interveniente_edicao" class="form-control">
                                        <option selected>${nomeIntervenienteTd.innerHTML}</option>
                                        <option>ze</option>
                                        <option>renato</option>
                                    </select>`
    

    var td = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(8)");
    var td2 = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(9)");
    /* alert(td.innerHTML)  */
    var textoLongo = td.innerHTML.split("\>")
    /* alert(textoLongo[1] + "olha só") */
    var textoLongoFinal = textoLongo[1].split("\<")
    /* alert("fim" + textoLongoFinal[0]) */
    td.innerHTML = `<td> <textarea maxlength="500" wrap="hard" rows="7" cols="40" id = "observacao_edicao">${textoLongoFinal[0]}</textarea></td>`
    /* td2.innerHTML = '<td><button class="btn btn-warning" id="editar-paciente" onclick="salvaEdicao(event)">salvar edição</button></td>'; */
    td2.innerHTML = '<td><button class="btn btn-warning" id="cancelar-edicao-nota" onclick="cancelaEdicao(event)">cancelar edição</button> <button class="btn btn-success" id="editar-paciente" onclick="edicao(event)">salvar edição</button></td>';

    var observacao_edicao = document.querySelector("#observacao_edicao");
    /* alert(observacao_edicao.value + 'valor') */
    var nome_interveniente_edicao
    var data_agendamento_edicao
    var nome_nota_edicao
    var numero_siga_edicao



}

function desconverteData(dataAgendamentoTd){
 /*    alert(dataAgendamentoTd.length) */

    switch (true) {
        case (dataAgendamentoTd.length == 33):
            alert(dataAgendamentoTd);
            dataSplitCortada = dataAgendamentoTd.substring(17, 27)
            alert(dataSplitCortada + 'dataSplitCortada')
            dataSplit = dataSplitCortada;
            dataSplit = dataSplit.split("/");
            break;
            case (dataAgendamentoTd.length == 36):
            dataSplitCortada = dataAgendamentoTd.substring(20, 30)
            alert(dataSplitCortada + 'dataSplitCortada')
            dataSplit = dataSplitCortada;
            dataSplit = dataSplit.split("/");
            break;
        default:
       }



/*     if (dataAgendamentoTd.length == 33 || dataAgendamentoTd.length == 36 ){
        dataSplitCortada = dataAgendamentoTd.substring(26, 36)
        alert(dataSplitCortada)
        dataSplit = dataSplitCortada;
        dataSplit = dataSplit.split("/");
        alert(dataSplit)
    }else{
        dataSplit = dataAgendamentoTd.split("/");
    }
 */

    /* dataSplit = dataAgendamentoTd.split("/"); */
    ano = dataSplit[2];
    mes = dataSplit[1];
    dia = dataSplit[0];
    /* alert(dataSplit[2] + 'split') */
    dataConvertida = dataSplit[2] + '-' + dataSplit[1] + '-' + dataSplit[0]
    /* alert(ano + dia + mes +  'zoio') */
    /* alert('data convertida' + dataConvertida) */
    return dataConvertida;
}

function salvaEdicao(event){
    var texto = event.target.parentNode.parentNode.innerText
    var linhaClicada = event.target.parentNode.parentElement;
    var numeroLinha = linhaClicada.rowIndex;
    arrayTexto = texto.split("\t")
    /* alert("besta" + texto + arrayTexto[5]); */
    /* alert("besta" + linhaClicada + numeroLinha); */

    var td = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(8)");
    var td2 = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(9)");
    /* alert(td.innerHTML) */
    td.innerHTML = '<td> <textarea maxlength="500" wrap="hard" rows="1" cols="30"  readonly></textarea></td>'
    td2.innerHTML = '<button class="btn btn-danger" id="remover-paciente" onclick="deletaCliente(event)">del</button> <button class="btn btn-warning" id="editar-paciente" onclick="abreEdicao(event)">edição</button> <button class="btn btn-success" id="editar-paciente" onclick="abreEdicao(event)">concluir</button></td>';



}


function edicao(){
    var observacao_edicao = document.querySelector("#observacao_edicao");
    /* alert(observacao_edicao.value + 'valor dentro da edicao')     */
    var id_nota_edicao = document.querySelector("#id_nota_edicao");
    /* alert(id_nota_edicao.value + 'deu?') */
    var nome_interveniente_edicao = document.querySelector("#nome_interveniente_edicao");
    var data_agendamento_edicao   = document.querySelector("#data_agendamento_edicao");
    var nome_nota_edicao          = document.querySelector("#nome_nota_edicao");
    var numero_siga_edicao        = document.querySelector("#numero_siga_edicao");
    /* alert('nome_interveniente_edicao' + nome_interveniente_edicao.value);
    alert('data_agendamento_edicao' + data_agendamento_edicao.value);
    alert('nome_nota_edicao' + nome_nota_edicao.value);
    alert('numero_siga_edicao' + numero_siga_edicao.value) */

    var nota_mental = {
        id_notas_mentais   : id_nota_edicao.value, 
        numero_siga        : numero_siga_edicao.value,
        nome_nota          : nome_nota_edicao.value,
        data_agendamento   : data_agendamento_edicao.value,
        data_ultima_edicao : dataAtual(),
        nome_interveniente : nome_interveniente_edicao.value,
        observacao         : observacao_edicao.value
    }

    editaBDNotaMental(nota_mental);
    limpaTabela();
    onLoadListaNotas();

}





async function onLoadListaNotas(){   


    
    /* 'todosClientes = await buscaTodosClientes();
    todasSegmentacoes = await buscaTodosDadosSegmentacao();' */
    todasNotas = await buscaTodasNotas()

/*     alert(todasNotas.response[0].nome_interveniente) */

    /* console.log(todosClientes)
    console.log(todasSegmentacoes.response[0])
    console.log(`${todasSegmentacoes.response[2].nome_segmentacao}dentro da lista`)
' */

    /* alerta(todasSegmentacoes.response[2].nome_segmentacao, todosClientes.response[0].nome); */




     montaListaTodasNotas(todasNotas) 
    
}






function montaListaTodasNotas(notas){

    /* alert(notas) */

    notas.response.forEach(function(cadaNota){
        /* alert(cadaNota.nome_interveniente + "tonto") */

        
        if (cadaNota.situacao_nota == 'incluida'){
        //cria a tr de notas
        var listaNotasTr = document.createElement("tr");
        listaNotasTr.classList.add("cliente");

        //cria a td id_notas_mentais
        var id_notaTd = document.createElement("td");
        /* id_notaTd.innerHTML = `<input type="text" class="form-control" size="1px" id="nome_nota" value ="${cadaNota.id_notas_mentais}" "cad">` */
        id_notaTd.textContent = cadaNota.id_notas_mentais;
        listaNotasTr.appendChild(id_notaTd);

        //cria a td numero_siga
        var numero_sigaTd = document.createElement("td");
        numero_sigaTd.textContent = cadaNota.numero_siga;
        listaNotasTr.appendChild(numero_sigaTd);

        //cria a td nome_nota
        var nome_notaTd = document.createElement("td");
        nome_notaTd.textContent = cadaNota.nome_nota;
        listaNotasTr.appendChild(nome_notaTd);

        //cria a td data_inclusao
        var data_inclusaoTd = document.createElement("td");
        data_inclusaoTd.textContent = converteData(cadaNota.data_inclusao);
        listaNotasTr.appendChild(data_inclusaoTd);

        //cria a td data_agendamento
        var data_agendamentoTd = document.createElement("td");
        /* data_agendamentoTd.textContent = cadaNota.data_agendamento; */
        data_agendamentoTd.textContent = converteData(cadaNota.data_agendamento); 
/*         if(verificaDataAtual(data_agendamentoTd.textContent)){
            data_agendamentoTd.innerHTML = `<td class = "info-nome"><div class = "corDestacada">${data_agendamentoTd.textContent}</div></td>`
         } */
        /* alert(verificaDataAtual(data_agendamentoTd.textContent)) */
        switch (verificaDataAtual(data_agendamentoTd.textContent)) {
            case 'red':
                data_agendamentoTd.innerHTML = `<td class = "info-nome"><div class = "red">${data_agendamentoTd.textContent}</div></td>`;
                break;
            case 'yellow':
                 data_agendamentoTd.innerHTML = `<td class = "info-nome"><div class = "yellow">${data_agendamentoTd.textContent}</div></td>`;
                break;
            default:
                /* return 'black' */;
          }



        data_agendamentoTd.classList.add("info-nome")
        listaNotasTr.appendChild(data_agendamentoTd);
        

        //cria a td data_ultima_edicao
        var data_ultima_edicaoTd = document.createElement("td");
        /* data_ultima_edicaoTd.textContent = cadaNota.data_ultima_edicao; */
        data_ultima_edicaoTd.textContent = converteData(cadaNota.data_ultima_edicao);
        listaNotasTr.appendChild(data_ultima_edicaoTd);

        
        //cria a td nome_interveniente
        var nome_intervenienteTd = document.createElement("td");
        nome_intervenienteTd.textContent = cadaNota.nome_interveniente;
        listaNotasTr.appendChild(nome_intervenienteTd);

        //cria a td observacao
        var observacaoTd = document.createElement("td");
        observacaoTd.innerHTML = `<td> <textarea maxlength="500" wrap="hard" rows="1" cols="30"  readonly>${cadaNota.observacao}</textarea></td>`
        listaNotasTr.appendChild(observacaoTd);

        //cria a td acao
        var acaoTd = document.createElement("td");
        acaoTd.innerHTML = "<td><button class='btn btn-warning' id='editar-nota-mental' onclick='abreEdicaoNota(event)'>edição</button> <button class='btn btn-success' id='editar-paciente' onclick='abreConclusaoNota(event)'>concluir</button></td>"
        listaNotasTr.appendChild(acaoTd);


        var tabela = document.querySelector("#tabela-lista-notas");
        tabela.appendChild(listaNotasTr); 
    }


    });

 }



 function converteData(dataParaConverter){
    var data = new Date(dataParaConverter);
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtualCalculada = ano +'-' + mes + '-' + dia;
    dataAtualCalculada = dia + '/' + mes + '/' + ano;
    /* alert(dataAtualCalculada); */
    return dataAtualCalculada; 
    
}



function abreConclusaoNota(event){ 
    var texto = event.target.parentNode.parentNode.innerText
    var linhaClicada = event.target.parentNode.parentElement;
    var numeroLinha = linhaClicada.rowIndex;
    arrayTexto = texto.split("\t")
    

    var idNotaTd = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(1)");
    idNotaTd.innerHTML = `<div class="col-md-4 col-lg-4">
                            <input type="text" class="form-control" id="id_nota_conclusao" value ="${idNotaTd.innerHTML}" readOnly = true>
                          </div>`

    var td = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(8)");
    var acaoTd = document.querySelector("#tabela-lista-notas tr:nth-child(" + numeroLinha + ") td:nth-child(9)");
    var textoLongo = td.innerHTML.split("\>")
    var textoLongoFinal = textoLongo[1].split("\<")
    td.innerHTML = `<td> <textarea maxlength="500" wrap="hard" rows="7" cols="40" id = "observacao_conclusao">${textoLongoFinal[0]}</textarea></td>`
    acaoTd.innerHTML = '<td><button class="btn btn-warning" id="cancelar_edicao_nota_mental" onclick="cancelaEdicao(event)">cancelar conclusão</button> <button class="btn btn-success" id="concluir_nota_mental" onclick="concluiNota()">concluir nota mental</button></td>';

}


function concluiNota(){
    var observacao_conclusao = document.querySelector("#observacao_conclusao");
    var id_nota_conclusao = document.querySelector("#id_nota_conclusao");
    var nota_mental = {
        id_notas_mentais   : id_nota_conclusao.value, 
        data_ultima_edicao : dataAtual(),
        observacao         : observacao_conclusao.value,
        situacao_nota      : 'concluida'
    }

    finalizaBDNotaMental(nota_mental);

}


//limpa a tabela
function limpaTabela(){
    var tabela = document.querySelector("#tabela-lista-notas")
    tabela.innerHTML="";
}

//cancela edição
function cancelaEdicao(){
    limpaTabela();
    onLoadListaNotas();
}




function verificaDataAtual(dataParaVerificar){
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtualCalculada = ano +'-' + mes + '-' + dia;
    dataAtualCalculada = dia +'/' + mes + '/' + ano;
    switch (true) {
        case (dataParaVerificar < dataAtualCalculada):
            return 'red';
            break;
        case (dataParaVerificar === dataAtualCalculada):
            return 'yellow';
            break;
        default:
            return 'black';
      }
      





/*     if (dataParaVerificar <= dataAtualCalculada){
        alert(dataParaVerificar + 'recebido' + dataAtualCalculada + 'calculada')
        return true
    } else{
        return false
    } */
}
