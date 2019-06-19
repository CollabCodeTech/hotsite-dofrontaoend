import React, { useState } from 'react'

import { Header } from './styles'

import LogoCollab from '../../objects/LogoCollab'
import NavigationCollab from '../NavigationCollab'
import BtnCollab from '../BtnCollab'
import IconMenu from '../IconMenu'

const HeaderCollab = props => {
    const { onMouseEnter, onMouseLeave } = props
    const element = React.createRef()
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

    const handleMenuClick = () => {
        setMenuActive(old => !old)
    }

    return (
        <Header
            ref={element}
            active={itemActive >= 0}
            menuActive={menuActive}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <LogoCollab />

            <BtnCollab featured>Pré-inscrição</BtnCollab>

            <IconMenu onClick={handleMenuClick} />

            <NavigationCollab
                id="navigation"
                {...props}
                items={items}
                onClick={handleMenuClick}
            />
        </Header>
    )
}

export default HeaderCollab
