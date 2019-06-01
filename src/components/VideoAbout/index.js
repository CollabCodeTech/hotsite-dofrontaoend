import React from 'react'

import { Wrapper } from './styles'

import VideoCollab from '../../objects/VideoCollab'
import Subtitle from '../../objects/SubtitleCollab'
import TextCollab from '../../objects/TextCollab'

const VideoAbout = () => (
    <Wrapper>
        <VideoCollab />
        <Subtitle featered>Sobre o modulo</Subtitle>
        <TextCollab>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived not
only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged.`}
        </TextCollab>
    </Wrapper>
)

export default VideoAbout
