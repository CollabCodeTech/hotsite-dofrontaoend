import styled from "styled-components";

import { Figure } from "../../objects/LogoCollab/styles";
import CollabCode from "../../objects/CollabCode";
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
    will-change: width;
    transition: width 300ms linear;
    cursor: pointer;

    &:hover {
        width: 300px;
    }

    &> ${Navigation} {
        padding-left: 11px;
        width: 500px;
    }

    &> ${Figure} {
        position: absolute;
        top: var(--spacing-medium);
        width: 500px;
    }

    & ${CollabCode},
    & ${Content} {
        transition: opacity 100ms linear;
        opacity: 0;
    }

    &:hover ${CollabCode},
    &:hover ${Content} {
        transition-duration: 200ms;
        transition-delay: 150ms;
        opacity: 1;
    }
`;