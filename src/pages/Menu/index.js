import React from 'react'

import { Section, Wrapper } from './styles'

import HeaderContent from '../../components/HeaderContent'
import ListContent from '../../components/ListContent'
import VideoAbout from '../../components/VideoAbout'

const Menu = ({
    id,
    title,
    subtitle,
    items,
    active,
    preloadActive,
    myRef,
    activeMouseEnter,
    handleClickTestimonial
}) => (
    <Section
        id={id}
        active={active}
        ref={myRef}
        preloadActive={preloadActive}
        activeMouseEnter={activeMouseEnter}
    >
        <HeaderContent
            title={title}
            subtitle={subtitle}
            menu
            mobile
            active={active}
            handleClickTestimonial={handleClickTestimonial}
        />

        <Wrapper preloadActive={preloadActive}>
            <VideoAbout />

            <ListContent items={items} />
        </Wrapper>
    </Section>
)

export default Menu
