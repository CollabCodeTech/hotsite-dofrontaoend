import React from 'react'

import { Header } from './styles'

import TitleCollab from '../../objects/TitleCollab'
import SubtitleCollab from '../../objects/SubtitleCollab'

import BtnCollab from '../BtnCollab'

const HeaderContent = ({ title, subtitle }) => (
    <Header>
        <BtnCollab>Inscrever-se</BtnCollab>
        <TitleCollab>{title}</TitleCollab>
        <SubtitleCollab>{subtitle}</SubtitleCollab>
    </Header>
)

export default HeaderContent
