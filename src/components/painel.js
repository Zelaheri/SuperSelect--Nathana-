import Produto from "./produto"

function Painel({ produto: produtos }) {
    console.log(produtos)
    console.log(produtos.length === 0)

    const listaProdutos = []

    produtos.forEach((produto) => {
        listaProdutos.push(
            <Produto
                nome={produto.nome}
                categoria={produto.categoria}
                preco={produto.preco}
                validade={produto.validade}
                url=""
                key={produto.nome}
            />
        )
    })

    if (produtos.length !== 0) {
        return (
            <div className="backpanel">
                {listaProdutos}
            </div>
        )
    } else {
        return (
            <div>
            </div>
        )
    }
}

export default Painel;