class Cliente {
    constructor (){
        this.clientes = localStorage.getItem('tbClientes') === null ? [] 
        : JSON.parse(localStorage.getItem('tbClientes'))

    }

    salva(cliente){
       
        if(document.getElementById('nome').getAttribute('disabled')=='disabled'){
            this.apaga(cliente.nome)
        }
        this.clientes.push(cliente) 
        localStorage.setItem('tbClientes', JSON.stringify(this.clientes))
        alert('Cliente salvo com sucesso!')
    }

    apaga(codigo){
        let index = this.clientes.findIndex(cliente => cliente.codigo == codigo)
        this.clientes.splice(index, 1) 
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        cliente.atualiza()
    }

    edita(cliente){
        document.getElementById('nome').value = cliente.nome
        document.getElementById('cep').value = cliente.cep
        document.getElementById('endereco').value = cliente.endereco
        document.getElementById('bairro').value = cliente.bairro
        document.getElementById('alugado').value = cliente.alugado
        document.getElementById('observacoes').value = cliente.observacoes
    }

    lista(){
        const listagem = this.clientes.map((cliente) => (
            `<tr>
            <td>${cliente.nome}</td>
            <td>${cliente.cep}</td>
            <td>${cliente.endereco}</td>
            <td>${cliente.bairro}</td>
            <td>${cliente.alugado}</td>
            <td>${cliente.observacoes}</td>
            <td>
            <button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>🗑️Apagar</button>
            <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>✏️Editar</button>
            </td>
            </tr>
            `
        )).join("")
        return (`<table border='1' class='TopGear'>
        <caption>Relação dos Clientes</caption>
        <thead>
        <th>Nome</th>
        <th>CEP</th>
        <th>Endereço</th>
        <th>Bairro</th>
        <th>Jogo Alugado</th>
        <th>Observações</th>
        <th>Opções</th>
        </thead>
        <tbody>${listagem}</tbody>
        </table>
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = cliente.lista()
    }
}
//instanciamos um novo objeto
const cliente = new Cliente()
//tratamos o botao salvar
document.getElementById('salvar').onclick = function () {
    const registro = {
        nome: document.getElementById('nome').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        alugado: document.getElementById('alugado').value,
        observacoes: document.getElementById('observacoes').value

    }
    cliente.salva(registro)
}
//tratamos a listagem
window.onload = function (){
cliente.atualiza()
}
