import React from 'react'

import { Header, Actions } from './styles'

import LinkCollab from '../../objects/LinkCollab'
import TitleCollab from '../../objects/TitleCollab'
import SubtitleCollab from '../../objects/SubtitleCollab'

import BtnCollab from '../BtnCollab'

const HeaderContent = ({ title, subtitle }) => (
    <Header>
        <Actions>
            <LinkCollab>Depoimentos</LinkCollab>
            <BtnCollab>Inscrever-se</BtnCollab>
        </Actions>
        <TitleCollab>{title}</TitleCollab>
        <SubtitleCollab>{subtitle}</SubtitleCollab>
    </Header>
)

export default HeaderContent
