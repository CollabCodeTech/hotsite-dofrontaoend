import styled, { css } from "styled-components";

export const Text = styled.div`
    transform: scale(1);
`;

export const BtnCollab = styled.button.attrs({
    type: "submit"
})`
    position: absolute;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    background-color: var(--color-zero);
    width: ${({loading}) => loading ? "100%" : "140px"};
    height: 40px;
    border-radius: var(--radius-small);
    color: var(--color-first);
    font-weight: bold;
    font-size: var(--size-small);
    box-shadow: 0px 0px 0px var(--color-base);
    will-change: transform, width;
    transition: transform 100ms linear, box-shadow 100ms linear, width 300ms linear;
    cursor: pointer;

    ${({loading}) => !loading && css`
            &:focus,
            &:hover {
                transform: translateY(-3px);
                box-shadow: 0px 2px 4px var(--color-base);
            }

            &:active {
                transform: translateY(-1px);
            }
        `
    }
`;
