import React from 'react'

import { Navigation, Item, Number, Content } from './styles'

const NavigationCollab = ({ id, handleClick, items, itemActive, onClick }) => (
    <Navigation id={id} onClick={onClick}>
        {items.map((content, key) => (
            <Item key={key} onClick={event => handleClick(event, key)}>
                <a href={`#${key}`}>
                    <Number>{key}</Number>{' '}
                    <Content itemActive={itemActive === key}>{content}</Content>
                </a>
            </Item>
        ))}
    </Navigation>
)

export default NavigationCollab
