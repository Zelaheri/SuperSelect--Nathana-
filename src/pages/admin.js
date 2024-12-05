import Painel from "../components/painel"
import { useState } from "react";
import axios from "axios";

function Admin() {
    const [values, setValues] = useState();

    function handleOnChange(input) {
        setValues((p2) => ({
            ...p2,
            [input.target.name]: input.target.value
        }))
        console.log(values)
    }

    const lista = []
    function handleClickBtn() {

        axios.get('http://localhost:3001/produtos')
            .then(response => {
                response.data.forEach((item) => {
                    lista.push(item)
                })
            })
            .catch(error => {
                console.error(error)
            })
        console.log("Lista: ", lista)
    }


    return (
        <div>
            {/* Cadastro de produtos */}
            <form onSubmit={(e) => e.preventDefault()}>
                <input onChange={handleOnChange} name="nome" type="text" placeholder="Nome" required />
                <input onChange={handleOnChange} name="categoria" type="text" placeholder="Categoria" required />
                <input onChange={handleOnChange} name="preco" type="number" placeholder="Preco" required />
                <input onChange={handleOnChange} name="validade" type="date" placeholder="Validade" required />

                <button onClick={handleClickBtn} type="submit" className="btn btn-primary">Cadastrar</button>
            </form>

            {/* Painel de produtos */}
            <Painel produto={lista} />
        </div>
    )
}

export default Admin;