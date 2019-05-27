import React from "react";

import { Wrapper, Menu } from "./styles";

import HeaderCollab from "../../components/HeaderCollab";

import Lead from "../Lead";

const Home = () => (
    <Wrapper>
        <HeaderCollab />

        <Lead />

        <Menu>
        </Menu>
    </Wrapper>
);

export default Home;