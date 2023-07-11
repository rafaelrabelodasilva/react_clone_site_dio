import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src='https://thumbs.dreamstime.com/b/engrenagens-de-dados-industriais-globais-neg%C3%B3cios-integra%C3%A7%C3%A3o-em-segundo-plano-ilustra%C3%A7%C3%A3o-do-vetor-fundo-banner-da-tecnologia-214661838.jpg' />
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/103958944?v=4' />
                    <div>
                        <h4>
                            Rafael Rabelo da Silva
                        </h4>
                        <p>
                            Há 8 minutos
                        </p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>
                        Projeto para curso de HTML e CSS
                    </h4>
                    <p>
                        Projeto feito o curso de HTML e CSS no bootcamp dio do Global avanade...<strong>Saiba mais</strong>
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }