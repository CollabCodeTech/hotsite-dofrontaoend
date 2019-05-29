import React from 'react'

import { Section } from './styles'

import HeaderContent from '../../components/HeaderContent'
import ListContent from '../../components/ListContent'

const items = [
    { number: 1, content: 'Informar' },
    { number: 2, content: 'Praticar' },
    { number: 3, content: 'Compartilhar' },
    { number: 4, content: 'Mentorar' }
]

const Menu = () => (
    <Section id="0">
        <HeaderContent
            title="Como funciona o curso?"
            subtitle="O curso é 100% online e as aulas serão disponibilizadas na nossa plataforma com o método de ensino CollabCode que você pode conhecer no vídeo ao lado."
        />

        <ListContent items={items} />
    </Section>
)

export default Menu
