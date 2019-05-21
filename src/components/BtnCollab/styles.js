import styled, { css } from "styled-components";

export const Button = styled.button.attrs({
    type: "submit"
})`
    position: absolute;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: var(--color-zero);
    width: 100%;
    height: 40px;
    border-radius: var(--radius-small);
    color: var(--color-zero);
    font-weight: bold;
    font-size: var(--size-small);
    box-shadow: 0px 0px 0px var(--color-base);
    will-change: transform;
    transform-origin: right;
    transform: ${({loading}) => loading ? "scaleX(1)" : "scaleX(0.27)"};
    transition: transform ${({loading}) => loading ? "400ms" : "100ms"} linear, box-shadow 100ms linear, width 300ms linear;
    cursor: pointer;

    ${({loading}) => !loading && css`
            &:focus,
            &:hover {
                transform: translateY(-3px) scaleX(0.27);
                box-shadow: 0px 2px 4px var(--color-base);
            }

            &:active {
                transform: translateY(-1px) scaleX(0.27);
            }
        `
    }
`;
