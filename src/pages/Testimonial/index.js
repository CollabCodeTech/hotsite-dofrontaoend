import React from 'react'

import { Wrapper, Testimonials } from './styles'

import HeaderContent from '../../components/HeaderContent'
import VideoTestimonial from '../../components/VideoTestimonial'

const students = ['Rafael', 'Lucas', 'Lais', 'Isabela', 'Felipe', 'Denise']

const Testimonial = () => (
    <Wrapper>
        <HeaderContent
            title="Porque a CollabCode?"
            subtitle="Veja alguns comentários dos nossos alunos"
        />

        <Testimonials>
            {students.map(student => (
                <VideoTestimonial name={student} />
            ))}
        </Testimonials>
    </Wrapper>
)

export default Testimonial
