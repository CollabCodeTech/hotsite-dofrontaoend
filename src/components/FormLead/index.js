import React, { useState } from 'react'

import { Form } from './styles'
import InputCollab from '../../objects/InputCollab'
import BtnCollab from '../BtnCollab'
import TextCollab from '../../objects/TextCollab'

const FormLead = () => {
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState('Pré-inscrição')

    return (
        <Form>
            <TextCollab>
                Faça sua pré-inscrição e garanta sua vaga para Semana Do Front
                ao End! Sem a pré-inscrição você não poderá ter acesso aos
                vídeos depois que a semana acabar.
            </TextCollab>

            <InputCollab placeholder="Nome" />
            <InputCollab placeholder="Email" />

            <BtnCollab
                onClick={event => {
                    event.preventDefault()
                    setLoading(true)
                    setContent('Enviando...')
                }}
                loading={loading}
            >
                {content}
            </BtnCollab>
        </Form>
    )
}

export default FormLead
