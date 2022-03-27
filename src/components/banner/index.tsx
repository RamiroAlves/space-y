import React from 'react'
import { Button, Container, DivContent, DivImage, DivRow, Header, DivIcons } from './style'
import Logo from '../../assets/Logo.png'
import Mars from '../../assets/Illustra_Banner.svg'
import Rocket from '../../assets/rocket.png'
import Flag from '../../assets/flag.png'
import Telescope from '../../assets/telescope.png'

function Banner(){

    return (
        <Container>
            <Header>
                <img src={Logo} alt='Logo'/>
            </Header>

            <DivRow>
                <DivContent>
                    <label>FINALMENTE É POSSÍVEL</label>
                    <h1>Sua jornada para Marte <br /> começa aqui<span>.</span></h1>
                    <p>A primeira viagem para Marte estará disponivél apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera.</p>
                    <Button>Inscreva-se agora</Button>
                </DivContent>
                <DivImage>
                    <img src={Mars} />
                </DivImage>
            </DivRow>
            <DivRow style={{ justifyContent: 'space-around' }}>
                <DivIcons>
                    <img src={Rocket}/>
                    <p>Foguetes com a mais alta tecnologia e conforto.</p>
                </DivIcons>
                <DivIcons>
                    <img src={Telescope}/>
                    <p>Mais de 100 missões consecutivas com sucesso.</p>
                </DivIcons>
                <DivIcons>
                    <img src={Flag}/>
                    <p>Experiencia única e exclusiva.</p>
                </DivIcons>
            </DivRow>
        </Container>
    )
}

export default Banner;