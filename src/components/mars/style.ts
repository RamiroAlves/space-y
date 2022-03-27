import styled from 'styled-components'
import Stars from '../../assets/Starts.png'
import Lines from '../../assets/lines.png'

export const Container = styled.div`
    background: url(${Stars}), url(${Lines}), linear-gradient(180deg, #040327 0%, #0D0E13 24.49%);
    background-repeat: repeat, no-repeat, repeat;
    height: auto;
    width: 100%;
    padding-bottom: 100px;

    @media(max-width: 490px){
        padding-bottom: 50px;;
    }
`

export const DivRow = styled.div`
    display: flex;
    flex-wrap: wrap;

    
`

export const DivImage = styled.div`
    width: 50%;

    img{
        height: auto;
        width: 100%;
    }

    @media(max-width: 650px){
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
`

export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
    padding-right: 20px;
    width: 50%;

    label{
        color: var(--sun);
    }

    h2{
        color: #fff;
        font-size: 32px;
        font-weight: 700;
        margin-top: 20px;
        text-align: left;
    }

    p{
        color: var(--gray-05);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin-top: 30px;
        text-align: left;
    }

    @media(max-width: 650px){
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        width: 80%;
    }

`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 50px;
    width: 30%;

    img{
        height: 25px;
        width: 160px;
    }

    h2{
        color: #fff;
        font-size: 32px;
        font-weight: 700;
        line-height: 48px;
        margin-top: 10px;
        text-align: left;
    }

    @media(max-width: 650px){
        width: 50%;
    }

    @media(max-width: 490px){
        width: 90%;
    }

    @media(max-width: 306px){
       margin-left: 30px;
    }
`

export const Button = styled.button`
    border: none;
    background: transparent;
    color: var(--mars-light);
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    margin-top: 20px;
    text-align: left;
`

export const DivCaroussel = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    width: 60%;
    
    img:nth-child(1){
        margin-right: 20px;
        height: 25px;
        width: 25px;
    }

    img:nth-child(4){
        margin-right: 0;
    }
    
    img{
        border-radius: 10px;
        margin-right: 20px;
        height: 320px;
        width: 280px;
    }

    @media(max-width: 1250px){
        justify-content: flex-end;
        width: 72%;
    }

    @media(max-width: 1100px){
        width: 77%;
    }

    @media(max-width: 900px){
        margin-top: 20px;
    }

    @media(max-width: 750px){
        width: 97%;

        img:nth-child(1){
            margin-left: 6px;
            margin-right: 10px;
        }

        img{
            height: 270px;
            width: 220px;
        }
    }

    @media(max-width: 600px){
        img:nth-child(1){
            margin-left: 6px;
            margin-right: 10px;
        }
        img{
            height: 240px;
            width: 180px;
        }
    }

    @media(max-width: 515px){
        img{
            height: 210px;
            width: 170px;
        }
    }

    @media(max-width: 490px){
        img{
            height: 180px;
            width: 150px;
        }
    }

    @media(max-width: 440px){
        img{
            height: 150px;
            width: 130px;
        }
    }

    @media(max-width: 400px){
        img{
            height: 130px;
            width: 115px;
        }
    }

    @media(max-width: 340px){
        img{
            height: 110px;
            width: 100px;
        }
    }

    @media(max-width: 306px){
       display: none;
    }
`