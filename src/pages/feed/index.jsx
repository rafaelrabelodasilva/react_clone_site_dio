import { Header } from '../../components/Header'
import bannerImage from '../../assets/banner.png'
import {
    Container,
    Column,
    Title,
    TitleHighLight
} from './styles'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'

const Feed = () => {
    //Utilizado fragments porque estamos retornando 2 elementos sem uma div principal
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>

            <Column flex={1}>
                <Title># RANKING 5 TOP DA SEMANA</Title>
                <UserInfo percentual={50} nome="Rafael" image="https://avatars.githubusercontent.com/u/103958944?v=4" />
                <UserInfo percentual={27} nome="Rafael" image="https://avatars.githubusercontent.com/u/103958944?v=4" />
                <UserInfo percentual={89} nome="Rafael" image="https://avatars.githubusercontent.com/u/103958944?v=4" />
                <UserInfo percentual={57} nome="Rafael" image="https://avatars.githubusercontent.com/u/103958944?v=4" />
                <UserInfo percentual={12} nome="Rafael" image="https://avatars.githubusercontent.com/u/103958944?v=4" />
            </Column>
        </Container></>
    )
}

export { Feed }