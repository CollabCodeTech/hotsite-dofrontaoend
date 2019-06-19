import React from 'react'

import { Header, Actions } from './styles'

import LinkCollab from '../../objects/LinkCollab'
import TitleCollab from '../../objects/TitleCollab'
import SubtitleCollab from '../../objects/SubtitleCollab'

import BtnCollab from '../BtnCollab'

const HeaderContent = ({
    testimonial = true,
    title,
    subtitle,
    menu = false,
    mobile = false
}) => (
    <Header menu={menu} mobile={mobile}>
        <Actions>
            {testimonial && <LinkCollab>Depoimentos</LinkCollab>}
            <BtnCollab>Pré-inscrição</BtnCollab>
        </Actions>

        <TitleCollab>{title}</TitleCollab>
        <SubtitleCollab>{subtitle}</SubtitleCollab>
    </Header>
)

export default HeaderContent
