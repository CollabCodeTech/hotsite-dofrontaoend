import React, { useState } from "react";

import { Main } from "./styles";

import HeaderCollab from "../../components/HeaderCollab";

import Lead from "../Lead";
import Menu from "../Menu";

const Home = () => {
    const [active, setActive] = useState();

    const handleClick = key => setActive(key);

    return (
        <Main>
            <HeaderCollab handleClick={handleClick} itemActive={active} />

            <Lead />
            <Menu />
        </Main>
    );
};

export default Home;