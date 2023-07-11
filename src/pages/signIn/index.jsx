import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { MdEmail, MdLock } from 'react-icons/md'
import { FaUser } from 'react-icons/fa';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import {
    Column,
    Container,
    TextSameLine,
    NormalText,
    SmallText,
    SubTitleLogin,
    Title,
    TitleLogin,
    Wrapper
} from './styles'

import { api } from '../../services/api'

const schema = yup.object({
    fullName: yup.string().required('Campo obrigatório'),
    email: yup.string().email('E-mail não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const SignIn = () => {
    const navigate = useNavigate()

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })

    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('E-mail ou senha inválidos')
            }
        } catch (error) {
            alert('Houve um erro, tente novamente.')
        }
    }

    //Utilizado fragments porque estamos retornando 2 elementos sem uma div principal
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin>
                        Comece agora grátis
                    </TitleLogin>
                    <SubTitleLogin>
                        Crie sua conta e make the change._
                    </SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="fullName" errorMessage={errors?.fullName?.message} control={control} placeholder="Nome completo" leftIcon={<FaUser />} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" type="submit" variant='secondary' />
                    </form>
                    <Column>
                        <NormalText>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </NormalText>
                    </Column>
                    <TextSameLine>
                        <SmallText variant='primary'>Já tenho conta.</SmallText>
                        <SmallText variant='secondary'>Fazer login.</SmallText>
                    </TextSameLine>
                </Wrapper>
            </Column>
        </Container></>
    )
}

export { SignIn }