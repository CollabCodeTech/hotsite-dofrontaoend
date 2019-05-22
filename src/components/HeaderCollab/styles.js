import styled from "styled-components";

import LogoAvatar from "../../objects/LogoAvatar";

export const Header = styled.header`
    background-color: var(--color-zero);
    box-sizing: border-box;
    padding-top: 20px;
    width: 80px;
    height: 100vh;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &> ${LogoAvatar} {
        position: absolute;
        top: 20px;
    }
`;