import { Link } from 'react-router-dom'

const Login = () => {
    //Utilizado fragments porque estamos retornando 2 elementos sem uma div principal
    return (<> 
        <h1>Login</h1>
        <Link to="/">Retornar para home</Link>
        </>)
}

export { Login }