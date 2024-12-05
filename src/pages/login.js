function Login() {
    return (
        <div>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <a href="./admin" className="btn btn-primary">Entrar</a>
            </form>
        </div>
    )
}

export default Login;