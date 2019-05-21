import React from "react";

import { Form } from "./styles";
import InputCollab from "../../objects/InputCollab";
import BtnCollab from "../BtnCollab";
import TextCollab from "../../objects/TextCollab";

const FormLead = () => (
    <Form>
        <TextCollab>
            Quer receber novidades da próxima turma, só colocar seu email abaixo.
        </TextCollab>

        <InputCollab placeholder="Nome" />
        <InputCollab placeholder="Email" />

        <BtnCollab content="Receber" />
    </Form>
);

export default FormLead;