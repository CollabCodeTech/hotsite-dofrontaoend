import styled from 'styled-components'

const TextCollab = styled.p`
    color: ${({ featured }) =>
        featured ? 'var(--color-zero)' : 'var(--color-base-light)'};
    font-size: ${({ featured }) =>
        featured ? 'var(--size-medium)' : 'var(--size-small)'};
`

export default TextCollab
