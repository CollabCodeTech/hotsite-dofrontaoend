import styled from "styled-components";

const BtnCollab = styled.input.attrs({
    type: "submit",
    value: ({content}) => content
})`
    box-sizing: border-box;
    background-color: var(--color-zero);
    width: 130px;
    height: 40px;
    border-radius: var(--radius-small);
    color: var(--color-first);
    font-weight: bold;
    font-size: var(--size-small);
    cursor: pointer;
    box-shadow: 0px 0px 0px var(--color-base);
    will-change: transform;
    transition: transform 100ms linear, box-shadow 100ms linear;
    

    &:focus,
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 2px 4px var(--color-base);
    }

    &:active {
        transform: translateY(-1px);
    }
`;

export default BtnCollab;