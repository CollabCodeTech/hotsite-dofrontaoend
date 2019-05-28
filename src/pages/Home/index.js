import React from 'react'

import { Wrapper, Section } from './styles'

import SubtitleCollab from '../../objects/SubtitleCollab'

import HeaderCollab from '../../components/HeaderCollab'
import TitleDofrontaoend from '../../components/TitleDofrontaoend'
import VideoDofrontaoend from '../../components/VideoDofrontaoend'
import FormLead from '../../components/FormLead'

const Home = () => (
    <Wrapper>
        <HeaderCollab />

        <Section>
            <TitleDofrontaoend>do Front ao End</TitleDofrontaoend>
            <SubtitleCollab>
                Um guia completo para quem quer se tornar um Desenvolvedor Front
                End
            </SubtitleCollab>

            <VideoDofrontaoend />

            <FormLead />
        </Section>
    </Wrapper>
)

export default Home
