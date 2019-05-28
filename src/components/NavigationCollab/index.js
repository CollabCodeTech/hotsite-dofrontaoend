import React from 'react'

import { Navigation, Item, Number, Content } from './styles'

const NavigationCollab = ({ items }) => (
    <Navigation>
        {items.map((content, key) => (
            <Item key={key}>
                <Number>{key}</Number> <Content>{content}</Content>
            </Item>
        ))}
    </Navigation>
)

export default NavigationCollab
