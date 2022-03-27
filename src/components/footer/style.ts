import styled from 'styled-components'

export const Container = styled.footer`
    background-color: var(--gray-01);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 50px 0;

    @media(max-width: 305px){
        flex-direction: column;
        align-items: center;
    }
`

export const Logo = styled.img`
    height: 35px;
    width: 225px;
`

export const DivSociais = styled.div`
    display: flex;

    img{
        cursor: pointer;
        margin-right: 10px;
        height: 25px;
        width: 25px;
    }
`

export const DivMenu = styled.div`
    display: flex;
    color: #fff;

    a{
        color: #fff;
        margin-right: 20px;
        text-decoration: none;
    }

    @media(max-width: 329px){
        margin-top: 10px;
    }

    @media(max-width: 305px){
        flex-direction: column;
        text-align: center;
        a{
            margin-bottom: 10px;
        }
    }

`