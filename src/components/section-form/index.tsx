import React from 'react';
import { Container, DivRow, Form, DivInput, DivCheckbox, Button } from './style';
import Ticket from '../../assets/Icon_ticket.png'
import Rocket from '../../assets/Rocket_illustra.png'
import Smoke from '../../assets/Smoke_footer.png'

function SectionForm(){

    return(
        <Container>
            <DivRow>
                <Form>
                    <img src={Ticket} alt="Imagem de um ticket" />
                    <h3>Garanta sua vaga para a primeira viagem</h3>
                    <p>Preencha os campos abaixo para entrar na lista de espera</p>
                    <DivInput>
                        <label htmlFor='name'>Seu nome</label>
                        <input id='name' type='text' />
                    </DivInput>
                    <DivInput>
                        <label htmlFor='email'>E-mail</label>
                        <input id='email' type='email' />
                    </DivInput>
                    <DivInput>
                        <label htmlFor='phone'>Telefone</label>
                        <input id='phone' type='phone' />
                    </DivInput>
                    <DivCheckbox>
                        <input id='assept' type='checkbox'/><span className='checkmark'></span>
                        <label htmlFor="assept">Concordo em receber comunicações</label>
                    </DivCheckbox>
                    <Button>Garantir minha vaga</Button>
                </Form>
                <img src={Rocket} alt="Foguete subindo" />
            </DivRow>
            <img src={Smoke} alt="Fumaça do Foguete" width={'100%'}/>
        </Container>
    )
}

export default SectionForm;