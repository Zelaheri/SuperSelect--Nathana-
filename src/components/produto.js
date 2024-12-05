function Produto(prop) {
    return (
        <div>
            <div class="card" style={{width: 18 + 'rem'}}>
                <img src={prop.url} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Cerveja artesanal {prop.nome}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Categoria: {prop.categoria}</li>
                        <li class="list-group-item">Preço: R$ {prop.preco}</li>
                        <li class="list-group-item">Validade: {prop.validade}</li>
                    </ul>
                    <div class="card-body">
                        <button className="btn btn-primary">Adicionar</button>
                        <button className="btn btn-danger">Remover</button>
                    </div>
            </div>
        </div>
    )
}

export default Produto;