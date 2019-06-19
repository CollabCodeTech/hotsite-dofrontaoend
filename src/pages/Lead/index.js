import React from 'react'

import { Wrapper, Section } from './styles'

import SubtitleCollab from '../../objects/SubtitleCollab'

import TitleDofrontaoend from '../../components/TitleDofrontaoend'
import VideoDofrontaoend from '../../components/VideoDofrontaoend'
import FormLead from '../../components/FormLead'

const Lead = () => (
    <Wrapper>
        <Section>
            <TitleDofrontaoend>do Front ao End</TitleDofrontaoend>
            <SubtitleCollab featured>
                A Semana Do Front ao End acontece 08/07 até 12/07 é um evento
                100% gratuito e ao vivo, focado para quem quer ser Dev FrontEnd
            </SubtitleCollab>

            <VideoDofrontaoend />

            <FormLead />
        </Section>
    </Wrapper>
)

export default Lead
