import styled from 'styled-components'
import Stars from '../../assets/Starts.png'

export const Container = styled.div`
    background: url(${Stars}), var(--gray-01);
    background-repeat: repeat;
    height: auto;
    width: 100%;
    padding-top: 100px;

    @media(max-width: 999px){
        padding-top: 30px;
    }

    @media(max-width: 306px){
       padding-top: 0px;
    }
`

export const DivRow = styled.div`
    display: flex;
    flex-wrap: wrap;

    img{
        width: 50%;
    }

    @media(max-width: 999px){
        img{
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            width: 80%
        }
    }
`

export const Form = styled.form`
    background: var(--form);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 50px;
    margin-right: 100px;
    height: 700px;
    width: 35%;
    padding: 30px;

    img{
        height: 56px;
        width: 56px;
    }

    h3{
        color: #fff;
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        margin-top: 10px;
        text-align: left;
    }

    p{
        color: #fff;
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
        margin-top: 20px;
        text-align: left;
        width: 80%;
    }

    @media(max-width: 999px){
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        width: 50%;
    }

    @media(max-width: 610px){
        width: 60%;
    }

    @media(max-width: 509px){
        width: 70%;
    }

    @media(max-width: 436px){
        width: 90%;
    }

    @media(max-width: 339px){
        padding: 20px;
    }

    @media(max-width: 317px){
        padding: 15px;
    }
`

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label{
        color: #fff;
        margin-bottom: 10px;
        text-align: left;
    }

    input{
        border: 1px solid var(--gray-05);
        border-radius: 6px;
        background: transparent;
        color: #fff;
        height: 40px;
        padding: 10px;
    }
`

export const DivCheckbox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

    label{
        color: #fff;
        margin-left: 10px;
    }

    input{
        display: none;
    }

    .checkmark{
        border: 1px solid #fff !important;
        border-radius: 6px;
        background-color: transparent !important;
        height: 20px;
        width: 20px;
    }

    input:checked ~ .checkmark{
        background-color: var(--space);
        border-color: var(--space);
    }

    .checkmark:after{
        content: "";
        display: none;
        height: 20px;
        width: 20px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .input:checked ~ .checkmark:after{
        display: block;
    }
`

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: var(--mars);
    color: #fff;
    margin-top: 20px;
    height: 50px;
    width: 100%;
`
