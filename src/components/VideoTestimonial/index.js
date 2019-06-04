import React from 'react'

import { Wrapper, Video, Caption } from './styles'

const VideoTestimonial = ({ name }) => (
    <Wrapper>
        <Video />
        <Caption>{name}</Caption>
    </Wrapper>
)

export default VideoTestimonial
