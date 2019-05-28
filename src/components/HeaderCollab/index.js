import React from 'react'

import { Header } from './styles'

import LogoCollab from '../../objects/LogoCollab'
import NavigationCollab from '../NavigationCollab'

const HeaderCollab = () => {
    const items = [
        'Como funciona?',
        'Git e GitHub',
        'HTML5 e CSS3',
        'JavaScript Moderno',
        'Webpack e Gulp',
        'React',
        'User Experience'
    ]

    return (
        <Header>
            <LogoCollab />

            <NavigationCollab items={items} />
        </Header>
    )
}

export default HeaderCollab
