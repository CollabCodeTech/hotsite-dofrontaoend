import styled from "styled-components";

export const Navigation = styled.ol``;

export const Item = styled.li`
    color: var(--color-second);
    font-weight: bold;
    font-size: var(--size-big);

    &:not(:last-child) {
        margin-bottom: var(--spacing-medium);
    }
`;