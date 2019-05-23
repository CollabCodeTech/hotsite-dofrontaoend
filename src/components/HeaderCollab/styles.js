import styled from "styled-components";

import LogoAvatar from "../../objects/LogoAvatar";
import { Navigation, Content } from "../NavigationCollab/styles";

export const Header = styled.header`
    background-color: var(--color-zero);
    overflow: hidden;
    padding: 20px 20px 0;
    width: 40px;
    height: 100vh;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: width 300ms linear;
    cursor: pointer;

    &:hover {
        width: 300px;
    }

    &> ${LogoAvatar} {
        position: absolute;
        top: 20px;
        width: 332px;
    }

    &> ${Navigation} {
        padding-left: 11px;
        width: 500px;
    }

    & ${Content} {
        transition: opacity 200ms linear;
        transition-duration: ${({hover}) => hover ? "200ms" : "100ms"};
        transition-delay: ${ ({hover}) => hover && "150ms"};
        opacity: ${({hover}) => hover ? "1" : "0"};
    }
`;