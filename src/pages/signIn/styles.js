import styled, { css } from 'styled-components'

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const Wrapper = styled.div`
    max-width: 350px;
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const NormalText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 15px;
    margin: 20px 0 0 0;
`

export const SmallText = styled.p`
    font-family: 'Open Sans';
    color: #FFFFFF;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    margin: 20px 2px;

    ${({variant}) => variant !== "primary" && css`
        color: #23DD7A;
    `}
`

export const TextSameLine = styled.div`
    display: flex;
    flex-direction: row;
`