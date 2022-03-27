import React from "react";
import { Container, DivRow, DivContent, DivImage, DivText, Button, DivCaroussel } from "./style";
import MarsImage from "../../assets/Mars.svg";
import Logo from '../../assets/Logo.png'
import Arow from '../../assets/chevron-left.png'
import Image1 from '../../assets/image30.png'
import Image2 from '../../assets/image33.png'
import Image3 from '../../assets/image34.png'

function Mars() {
  return (
    <Container>
      <DivRow>
        <DivImage>
          <img src={MarsImage} />
        </DivImage>
        <DivContent>
          <label>POR QUE MARTE?</label>
          <h2>Sobre o planeta vermelho</h2>
          <p>
            A uma distância média de 140 milhões de milhas, Marte é um dos
            vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou
            menos a metade da distância da Terra do Sol, então ainda tem luz
            solar decente. Está um pouco frio, mas podemos esquentar. Sua
            atmosfera é composta principalmente de CO2 com um pouco de
            nitrogênio e argônio e alguns outros oligoelementos, o que significa
            que podemos cultivar plantas em Marte apenas comprimindo a
            atmosfera.
          </p>
          <p>
            A gravidade em Marte é cerca de 38% da da Terra, então você seria
            capaz de levantar coisas pesadas e dar voltas. Além disso, o dia
            está notavelmente próximo ao da Terra.
          </p>
        </DivContent>
      </DivRow>
      <DivRow style={{ marginTop: 80, marginBottom: 40 }}>
          <DivText>
            <img src={Logo} alt='Logo SpaceY'/>
            <h2>O caminho para tornar a humanidade multiplanetária.</h2>
            <Button>Inscreva-se agora</Button>
          </DivText>
          <DivCaroussel>
            <img src={Arow}/>
            <img src={Image1}/>
            <img src={Image2}/>
            <img src={Image3}/>
          </DivCaroussel>
      </DivRow>
    </Container>
  );
}

export default Mars;
