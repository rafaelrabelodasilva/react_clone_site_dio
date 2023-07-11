import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import bannerImage from '../../assets/banner.png'
import {
    Container,
    TextContent,
    Title,
    TitleHighLight
} from './styles'
import { Button } from '../../components/Button'

const Home = () => {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login')
    }

    //Utilizado fragments porque estamos retornando 2 elementos sem uma div principal
    return (<> 
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                        <br /> 
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn} />
            </div>

            <div>
                <img src={bannerImage} alt='Imagem principal' />
            </div>
        </Container></>
    )
}

export { Home }