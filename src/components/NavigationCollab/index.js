import React from "react";

import {Navigation, Item} from "./styles";

const NavigationCollab = ({items}) => (
    <Navigation>
        {items.map(content => <Item>{content}</Item>)}
    </Navigation>
);

export default NavigationCollab;