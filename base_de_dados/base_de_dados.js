


//trás todos os dados de todas as segmentacoes cadastradas
async function buscaTodosDadosSegmentacao(){   
    var resposta;
     await axios.get(`http://127.0.0.1:3000/clientes_segmentacao/`).then((response) =>{
        const repos = response.data;
        resposta = repos;
        /* 'console.log(resposta.response[0].nome_segmentacao)' */
    })
    return resposta;
}
    
//busca todos os clientes assíncrona
async function buscaTodosClientes(){   
    var resposta;
     await axios.get(`http://127.0.0.1:3000/clientes/`).then((response) =>{
        const repos = response.data;
        resposta = repos;
        /* 'console.log(resposta.response[0].nome_segmentacao)' */
    })
    return resposta;
}


async function buscaTodasNotas(){   
    var resposta;
     await axios.get(`http://127.0.0.1:3000/notas/`).then((response) =>{
        const repos = response.data;
        resposta = repos;
        /* 'console.log(resposta.response[0].nome_segmentacao)' */
    })
    return resposta;
}

function adicionaBDNovaNota(nota_mental){
    var xhr = new XMLHttpRequest();
    xhr.open("POST","http://127.0.0.1:3000/notas" )
    var data = 'numero_siga='             + nota_mental.numero_siga 
             + '&nome_nota='              + nota_mental.nome_nota
             + '&data_inclusao='          + nota_mental.data_inclusao
             + '&data_agendamento='       + nota_mental.data_agendamento
             + '&data_ultima_edicao='     + nota_mental.data_ultima_edicao
             + '&nome_interveniente='     + nota_mental.nome_interveniente
             + '&observacao='             + nota_mental.observacao   
             + '&situacao_nota='          + nota_mental.situacao_nota   
             ; 
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(data)
    alert('Você adicionou ' + nota_mental.numero_siga)
}


function editaBDNotaMental(nota_mental){
    
    var data = 'numero_siga='           + nota_mental.numero_siga
             + '&nome_nota='            + nota_mental.nome_nota
             + '&data_agendamento='     + nota_mental.data_agendamento
             + '&data_ultima_edicao='   + nota_mental.data_ultima_edicao
             + '&nome_interveniente='   + nota_mental.nome_interveniente
             + '&observacao='           + nota_mental.observacao 
             + '&id_notas_mentais='     + nota_mental.id_notas_mentais
            ;
        
        var xhr = new XMLHttpRequest();
        xhr.open("PATCH","http://127.0.0.1:3000/notas");
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  
        xhr.send(data) 
        
        //esse pedaço não faz nada mas se eu tiro para de funcionar a atualização. 
        //se faz alguma coisa deve estar fazendo escondido de mim, fdp
       /*  xhr.addEventListener("load", function(){
        })  */ 
    
        /* xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');   
        /* limpaTabela(); */
/*         xhr.send(data) 
        xhr.addEventListener("load", function(){
            buscaClientes();
        })   */
         
        alert('registro atualizado')
        
     
    
}


function finalizaBDNotaMental(nota_mental){
    
    var data = 'data_ultima_edicao='    + nota_mental.data_ultima_edicao
             + '&observacao='           + nota_mental.observacao + '\r'
             + '&situacao_nota='        + nota_mental.situacao_nota
             + '&id_notas_mentais='     + nota_mental.id_notas_mentais
            ;
        
        var xhr = new XMLHttpRequest();
        xhr.open("PATCH","http://127.0.0.1:3000/notas/finaliza_nota");
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');  
        xhr.send(data) 
        
        //esse pedaço não faz nada mas se eu tiro para de funcionar a atualização. 
        //se faz alguma coisa deve estar fazendo escondido de mim, fdp
       /*  xhr.addEventListener("load", function(){
        })  */ 
    
        /* xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');   
        /* limpaTabela(); */
/*         xhr.send(data) 
        xhr.addEventListener("load", function(){
            buscaClientes();
        })   */
         
        alert('registro finalizado')
        
     
    
}