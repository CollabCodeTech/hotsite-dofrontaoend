import React from "react";

import { Header } from "./styles";

import LogoAvatar from "../../objects/LogoAvatar";
import NavigationCollab from "../NavigationCollab";

const Items = [
    "0", "1", "2","3", "4", "5"
]

const HeaderCollab = () => (
    <Header>
        <LogoAvatar />

        <NavigationCollab items={Items} />
    </Header>
);

export default HeaderCollab;