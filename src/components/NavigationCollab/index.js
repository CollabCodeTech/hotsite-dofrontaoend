import React from 'react'

import { Navigation, Item, Number, Content } from './styles'

const NavigationCollab = ({ id, handleClick, items, itemActive }) => (
    <Navigation id={id}>
        {items.map((content, key) => (
            <Item key={key} onClick={() => handleClick(key)}>
                <a href={`#${key}`}>
                    <Number>{key}</Number>{' '}
                    <Content itemActive={itemActive === key}>{content}</Content>
                </a>
            </Item>
        ))}
    </Navigation>
)

export default NavigationCollab
