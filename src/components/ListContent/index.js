import React from 'react'

import { List, Item, Number, Content } from './styles'

const ListContent = ({ items }) => (
    <List>
        {items.map(({ number, content }) => (
            <Item>
                <Number>{number}</Number> <Content>{content}</Content>
            </Item>
        ))}
    </List>
)

export default ListContent
