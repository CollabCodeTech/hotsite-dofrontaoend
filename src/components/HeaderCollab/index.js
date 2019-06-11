import React, { useState } from 'react'

import { Header } from './styles'

import LogoCollab from '../../objects/LogoCollab'
import NavigationCollab from '../NavigationCollab'
import BtnCollab from '../BtnCollab'
import IconMenu from '../IconMenu'

const HeaderCollab = props => {
    const { itemActive } = props
    const [menuActive, setMenuActive] = useState(false)
    const items = [
        'Como funciona?',
        'Git e GitHub',
        'HTML5 e CSS3',
        'JavaScript Moderno',
        'Webpack e Gulp',
        'React',
        'User Experience'
    ]

    const handleClick = () => {
        setMenuActive(old => !old)
    }

    return (
        <Header active={itemActive >= 0} menuActive={menuActive}>
            <LogoCollab />

            <BtnCollab featured>Pré-inscrição</BtnCollab>

            <IconMenu href="#navigation" onClick={handleClick} />

            <NavigationCollab id="navigation" {...props} items={items} />
        </Header>
    )
}

export default HeaderCollab
