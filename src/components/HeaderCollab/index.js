import React from 'react'

import { Header } from './styles'

import LogoCollab from '../../objects/LogoCollab'
import NavigationCollab from '../NavigationCollab'
import IconMenu from '../IconMenu'

const HeaderCollab = props => {
    const { itemActive } = props
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
        <Header active={itemActive >= 0}>
            <LogoCollab />

            <IconMenu />

            <NavigationCollab {...props} items={items} />
        </Header>
    )
}

export default HeaderCollab
