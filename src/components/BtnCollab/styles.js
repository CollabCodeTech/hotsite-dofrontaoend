import styled from "styled-components";

export const Button = styled.button.attrs({
    type: "submit"
})`
    position: relative;
`;

export const Text = styled.span`
    box-sizing: border-box;
    display: block;
    width: 130px;
    height: 40px;
    border-radius: var(--radius-small);
    color: var(--color-first);
    font-weight: bold;
    font-size: var(--size-small);
    cursor: pointer;
    background-color: var(--color-zero);
    
    text-align: center;
    transition: transform 100ms linear;
    will-change: transform;

    &::after {
        content: "";
        border-radius: var(--radius-small);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-base);
        z-index: -1;
        opacity: 0;
    }

    &:focus,
    &:hover {
        transform: translateY(-5px);
    }

    &:focus::after,
    &:hover::after {
        opacity: 1;
    }
`;

