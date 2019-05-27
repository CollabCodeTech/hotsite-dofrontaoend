import styled from "styled-components";

export const Navigation = styled.ol``;

export const Item = styled.li`
    color: ${({itemActive}) => itemActive ? "var(--color-first)" : "var(--color-second)"};
    font-weight: bold;
    font-size: var(--size-big);

    &:not(:last-child) {
        margin-bottom: var(--spacing-medium);
    }
`;

export const Number = styled.span`
    display: inline-block;
    width: 1.2ch;
    text-align: center;
`;

export const Content = styled.strong`
    font-weight: normal;
`