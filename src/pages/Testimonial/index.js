import React from 'react'

import { Wrapper, Testimonials } from './styles'

import HeaderContent from '../../components/HeaderContent'
import VideoTestimonial from '../../components/VideoTestimonial'

const students = ['Rafael', 'Lucas', 'Lais', 'Isabela', 'Felipe', 'Denise']

const Testimonial = ({ activeMouseEnter, myRef }) => (
    <Wrapper ref={myRef} activeMouseEnter={activeMouseEnter}>
        <HeaderContent
            title="Porque a CollabCode?"
            subtitle="Veja alguns comentários dos nossos alunos"
            testimonial={false}
        />

        <Testimonials>
            {students.map((student, key) => (
                <VideoTestimonial key={key} name={student} />
            ))}
        </Testimonials>
    </Wrapper>
)

export default Testimonial
