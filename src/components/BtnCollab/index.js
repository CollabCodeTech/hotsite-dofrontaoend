import styled from "styled-components";

const BtnCollab = styled.input.attrs({
    type: "submit",
    value: ({content}) => content
})`
    width: 130px;
    border-radius: var(--radius-small);
    color: var(--color-first);
    font-weight: bold;
    font-size: var(--size-small);
    transition: background-color 200ms linear;
    cursor: pointer;

    &:focus,
    &:hover {
        background-color: var(--color-first);
        color: var(--color-zero);
        border: 1px solid var(--color-zero);
    }
`;

export default BtnCollab;