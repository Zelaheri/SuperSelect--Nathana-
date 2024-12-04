import Produto from "../components/produto"
import { useState } from "react";

function Admin() {
    const [values, setValues] = useState();

    function handleOnChange(input) {
        setValues((p2) => ({
            ...p2,
            [input.target.name]: input.target.value
        }))
        console.log(values)
    }

    function handleClickBtn() {
        const nome = values.nome;
        const categoria = values.categoria;
        const preco = values.preco;
        const validade = values.validade;
    }

    return (
        <div>
            {/* Cadastro de produtos */}
            <form>
                <input onChange={handleOnChange} name="nome" type="text" placeholder="Nome" />
                <input onChange={handleOnChange} name="categoria" type="text" placeholder="Categoria" />
                <input onChange={handleOnChange} name="preco" type="number" placeholder="Preco" />
                <input onChange={handleOnChange} name="validade" type="date" placeholder="Validade" />

                <button onClick={handleClickBtn} type="submit" className="btn btn-primary">Cadastrar</button>
            </form>

            {/* Painel de produtos */}
            <div className="backpanel">

                <Produto
                    nome="Golden"
                    categoria=""
                    preco={100}
                    validade=""
                    url="https://images.tcdn.com.br/img/img_prod/795791/cerveja_artesanal_baden_baden_golden_caminho_da_fazenda_673_1_2a10ffa16f7dcfb14baf705d50731b96.jpg"
                />
                <Produto
                    nome="Ipa"
                    categoria=""
                    preco={100}
                    validade=""
                    url="https://cervejabox.vteximg.com.br/arquivos/ids/238781-1000-1000/ipa.jpg?v=638602562522400000"
                />
                <Produto
                    nome="Golden"
                    categoria=""
                    preco={100}
                    validade=""
                    url="https://images.tcdn.com.br/img/img_prod/795791/cerveja_artesanal_baden_baden_golden_caminho_da_fazenda_673_1_2a10ffa16f7dcfb14baf705d50731b96.jpg"
                />
            </div>
        </div>
    )
}

export default Admin;