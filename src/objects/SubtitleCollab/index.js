import styled from 'styled-components'

const SubtitleCollab = styled.h2`
    font-weight: ${({ featered }) => (featered ? 'bold' : 'normal')}
    color: var(--color-zero);
    font-size: var(--size-medium);
`

export default SubtitleCollab
