function abrePaginaNovaNota(pagina){

    switch (pagina) {
    case 'home':
        window.open("/index.html",'_self');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        break;
    default:

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
            case 'lista_hoje':
                window.open("/lista_hoje/lista_hoje.html",'_self');
                break;          
        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }
}


async function onLoadListaNotas(){   

    todasNotas = await buscaTodasNotas()
    montaListaTodasNotas(todasNotas) 
    
}


function montaListaTodasNotas(notas){

    notas.response.forEach(function(cadaNota){

        if (cadaNota.situacao_nota == 'concluida'){
            //cria a tr de notas
            var listaNotasTr = document.createElement("tr");

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

            //mostra a situacao
            var situacaoTd = document.createElement("td");
            situacaoTd.textContent = cadaNota.situacao_nota;
            listaNotasTr.appendChild(situacaoTd);

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
    return dataAtualCalculada; 
    
}

