import React from 'react'

import { Wrapper } from './styles'

import TitleCollab from '../../objects/TitleCollab'
import TextCollab from '../../objects/TextCollab'
import InstructorAvatar from '../../objects/InstructorAvatar'

const Instructor = () => (
    <Wrapper>
        <InstructorAvatar />
        <TitleCollab>Marco Bruno</TitleCollab>
        <TextCollab featured>
            {`Marco Bruno, nasceu na periferia de Santo André e começou a
            trabalhar aos 14 anos como palhaço em festas. Seu sonho de construir
            uma família foi conquistado ao lado da Joviane, juntos eles criam o
            pequeno Henri e a pequena Luna. Sua carreira como palhaço ajudou mas
            não foi o que de fato possibitou ele chegar ao seu sonho, o grande
            momento veio na sua alteração de carreira para Desenvolvedor
            FrontEnd. Agora após 11 anos de experiência na área de tecnologia
            passando por empresas como B. Grob, Locaweb, GetNinjas e Caelum,
            nesta última trabalhou 4 anos e meio com educação em tecnologia
            focando suas aulas em FrontEnd, UX e muito JavaScript, ele acredita
            que chegou o momento de tentar algo novo em um curso online com uma
            proposta nova e focada para você conquistar os seus objetivos na sua
            carreira e conquistar os seus sonhos.`}
        </TextCollab>
    </Wrapper>
)

export default Instructor
