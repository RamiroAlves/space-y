import styled from 'styled-components'

export const Container = styled.div`
    border: none;
    background-color: var(--space-dark);
    height: auto;
    width: 100%;
`

export const Header = styled.header`
    display: flex;
    padding: 10px 50px;
`

export const DivRow = styled.div`
    display: flex;
    flex-wrap: wrap;

`

export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 50px;
    text-align: left;
    width: 55%;

    label{
        color: var(--sun);
    }

    h1{
        color: #fff;
        font-weight: 900;
    }

    span{
        color: var(--sun);
    }
    p{
        color: var(--gray-05);
        font-size: 20px;
        line-height: 24px;
        margin-top: 20px;
    }

    @media(max-width: 426px){
        margin-top: 50px;
        width: 70%;
    }

    @media(max-width: 325px){
        width: 80%;
    }
`

export const DivImage = styled.div`
    margin-top: -50px;
    margin-left: auto;

    @media(max-width: 560px){
        margin-top: 20px;
    }

    @media(max-width: 490px){
        width: 85%;

        img{
            width: 100%;
        }
    }
`

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: var(--mars);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-top: 30px;
    height: 52px;
    width: 264px;

    @media(max-width: 325px){
        width: 232px;
    }

    @media(max-width: 290px){
        width: 220px;
    }
`

export const DivIcons = styled.div`
    display: flex;
    flex-direction: column;
    height: 112px;
    width: 216px;

    img{
        height: 56px;
        width: 56px;
    }

    p{
        color: #fff;
        text-align: left;
    }

    @media(max-width: 900px){
        width: 200px;
    }
`