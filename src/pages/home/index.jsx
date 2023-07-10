import { Link } from 'react-router-dom'
import {Button} from '../../components/Button'

const Home = () => {
    //Utilizado fragments porque estamos retornando 2 elementos sem uma div principal
    return (<> 
        <h1>Home</h1>
        <Button title="Teste 1" />
        <Button variant="secondary" title="Teste 2"/>
        <Link to="/login">Fazer login</Link>
        </>)
}

export { Home }