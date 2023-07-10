import React from 'react'
import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wreapper
} from './styles'

const Header = () => {
    return (
        <Wreapper>
            <Container>
                <Row>
                    <img src={logo} alt='Logo da Dio' />
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
            </Container>

            <Container>
                <Row>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </Row>
            </Container>
        </Wreapper>
    )
}

export { Header }