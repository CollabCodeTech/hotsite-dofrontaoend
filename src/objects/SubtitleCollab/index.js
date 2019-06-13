import styled from 'styled-components'

const SubtitleCollab = styled.h2`
    font-weight: ${({ featured }) => (featured ? 'bold' : 'normal')};
    color: ${({ featured }) =>
        featured ? 'var(--color-base)' : 'var(--color-zero)'};
    font-size: var(--size-medium);
`

export default SubtitleCollab
