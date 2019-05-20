import React from "react";

import { Form } from "./styles";
import InputCollab from "../../objects/InputCollab";
import BtnCollab from "../BtnCollab";



const FormLead = () => (
    <Form>
        <InputCollab placeholder="Nome" />
        <InputCollab placeholder="Email" />

        <BtnCollab content="Receber" />
    </Form>
);

export default FormLead;