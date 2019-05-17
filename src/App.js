import React from "react";


import Colors from "./styles/settings/colors";
import Spacing from "./styles/settings/spacing";
import Reset from "./styles/generic/reset";
import Base from "./styles/base";

import Home from "./pages/Home";

const App = () => (
    <>
        <Colors />
        <Spacing />
        <Reset />
        <Base />

        <Home />
    </>
);

export default App;
