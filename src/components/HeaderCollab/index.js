import React, { useState } from 'react'

import { Header } from './styles'

import LogoCollab from '../../objects/LogoCollab'
import NavigationCollab from '../NavigationCollab'
import BtnCollab from '../BtnCollab'
import IconMenu from '../IconMenu'

const HeaderCollab = props => {
    const { onMouseEnter } = props
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

    const handleClickNavigation = () => {
        setMenuActive(old => !old)
    }

    return (
        <Header
            ref={element}
            active={itemActive >= 0}
            menuActive={menuActive}
            onMouseEnter={onMouseEnter}
        >
            <LogoCollab />

            <BtnCollab featured>Pré-inscrição</BtnCollab>

            <IconMenu href="#navigation" onClick={handleMenuClick} />

            <NavigationCollab
                id="navigation"
                {...props}
                items={items}
                onClick={handleClickNavigation}
            />
        </Header>
    )
}

export default HeaderCollab
