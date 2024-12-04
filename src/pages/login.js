function Login(){
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login;