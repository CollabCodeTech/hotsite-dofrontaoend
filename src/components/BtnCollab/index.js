import styled, { css } from 'styled-components'

const BtnCollab = styled.button.attrs({
    type: 'submit'
})`
    box-sizing: border-box;
    background-color: ${({ featured }) =>
        featured ? 'var(--color-first)' : 'var(--color-zero)'};
    width: ${({ loading }) => (loading ? '100%' : '140px')};
    height: 40px;
    border-radius: var(--radius-small);
    color: ${({ featured }) =>
        featured ? 'var(--color-zero)' : 'var(--color-first)'};
    font-weight: bold;
    font-size: var(--size-small);
    box-shadow: 0px 0px 0px var(--color-base);
    will-change: transform, width;
    transition: transform 100ms linear, box-shadow 100ms linear,
        width 600ms cubic-bezier(0.94, -0.64, 0, 1);
    cursor: pointer;

    &:focus,
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0px 2px 4px var(--color-base);
    }

    ${({ loading }) =>
        !loading &&
        css`
            &:active {
                transform: translateY(-1px);
            }
        `}
`

export default BtnCollab
