import React, { useState } from 'react'

import { Main, Wrapper } from './styles'

import HeaderCollab from '../../components/HeaderCollab'

import Lead from '../Lead'
import Menu from '../Menu'
import Testimonial from '../Testimonial'
import Instructor from '../Instructor'

const menus = [
    {
        id: 0,
        title: 'Como funciona o curso?',
        subtitle:
            'O curso é 100% online e as aulas serão disponibilizadas na nossa plataforma com o método de ensino CollabCode que você pode conhecer no vídeo ao lado.',
        items: [
            { number: 1, content: 'Informar' },
            { number: 2, content: 'Praticar' },
            { number: 3, content: 'Compartilhar' },
            { number: 4, content: 'Mentorar' }
        ]
    },
    {
        id: 1,
        title: 'Git & GitHub',
        subtitle:
            'Esta ementa não define a ordem cronológica do curso, apenas separei em tópicos para facilitar a leitura.',
        items: [
            { number: 1, content: 'Introdução' },
            { number: 2, content: 'Instalação' },
            { number: 3, content: 'Fluxo de vida' },
            { number: 4, content: 'Inicializando o repositório' },
            { number: 5, content: 'Trackeando arquivos e pastas' },
            {
                number: 6,
                content: 'Guardando estado local dos arquivos e pastas'
            }
        ]
    }
]

const Home = () => {
    const [active, setActive] = useState()

    const handleClick = key => setActive(key)

    return (
        <Main>
            <HeaderCollab handleClick={handleClick} itemActive={active} />

            <Lead />
            <Wrapper>
                {menus.map(menu => (
                    <Menu
                        key={menu.id}
                        id={menu.id}
                        title={menu.title}
                        subtitle={menu.subtitle}
                        items={menu.items}
                        active={active === menu.id}
                    />
                ))}
            </Wrapper>
            <Testimonial />
            <Instructor />
        </Main>
    )
}

export default Home
