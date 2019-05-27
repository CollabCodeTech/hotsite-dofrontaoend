import React from "react";

import {Navigation, Item, Number, Content} from "./styles";

const NavigationCollab = ({handleClick, items, itemActive}) => {
    console.log("itemActive", itemActive);

    return (
        <Navigation>
            {items.map((content, key) => (
                <Item key={key} 
                    onClick={() => handleClick(key)} itemActive={() => { console.log("eita", itemActive === key)}}
                >
                    <Number>{key}</Number> <Content>{content}</Content>
                </Item>
            ))}
        </Navigation>
    );
};

export default NavigationCollab;