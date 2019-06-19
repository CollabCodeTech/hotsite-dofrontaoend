import React from 'react'

import { Navigation, Item, Link, Number, Content } from './styles'

const NavigationCollab = ({ id, handleClick, items, itemActive, onClick }) => (
    <Navigation id={id} onClick={onClick}>
        {items.map((content, key) => (
            <Item key={key} onClick={event => handleClick(event, key)}>
                <Link href={`#${key}`}>
                    <Number itemActive={itemActive === key}>{key}</Number>{' '}
                    <Content itemActive={itemActive === key}>{content}</Content>
                </Link>
            </Item>
        ))}
    </Navigation>
)

export default NavigationCollab
