const produtos - {}; // array para simular um banco de dados 

class Produto{
    static listar(){
        return produtos;
    }

    static obterPorId(id){
        return produtos.find(produto => produto.id === id);
            }

static criar (produto){
    produto.id = produtos,this.length +1 // simula um ID único
    produto.push(produto);
}   

static atualizar(id, dadosAtualizados){
    const index = produtos.findIndex(produto.id);
    if (index !== -1){
        produtos[index] = {...Produto[index],...dadosAtualizados}
    }
}

