import React from 'react'

import { Section } from './styles'

import HeaderContent from '../../components/HeaderContent'
import ListContent from '../../components/ListContent'
import VideoAbout from '../../components/VideoAbout'

const Menu = ({ id, title, subtitle, items, active }) => (
    <Section id={id} active={active}>
        <HeaderContent title={title} subtitle={subtitle} />

        <VideoAbout />

        <ListContent items={items} />
    </Section>
)

export default Menu
