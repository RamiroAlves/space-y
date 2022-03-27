import React from 'react';
import { Container, Logo, DivSociais, DivMenu } from './style';
import LogoImage from '../../assets/Logo.png';
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin-in.png'
import Facebook from '../../assets/facebook-square.png'

function Footer(){


    return(
        <Container>
            <Logo src={LogoImage} alt='Logo SpaceY'/>
            <DivSociais>
                <img src={Instagram} alt='Instagram'/>
                <img src={Linkedin} alt='LinkedIn'/>
                <img src={Facebook} alt='Facebook'/>
            </DivSociais>
            <DivMenu>
                <a href="#">Início</a>
                <a href="#">Sobre nós</a>
                <a href="#">Missões</a>
                <a href="#">Contato</a>
            </DivMenu>
        </Container>
    )
}

export default Footer;