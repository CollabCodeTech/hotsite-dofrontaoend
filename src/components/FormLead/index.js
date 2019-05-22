import React, {useState} from "react";

import { Form } from "./styles";
import InputCollab from "../../objects/InputCollab";
import BtnCollab from "../BtnCollab";
import TextCollab from "../../objects/TextCollab";

const FormLead = () => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState("Receber")

    return (
        <Form>
            <TextCollab>
                Quer receber novidades da próxima turma, só colocar seu email abaixo.
            </TextCollab>

            <InputCollab placeholder="Nome" />
            <InputCollab placeholder="Email" />

            <BtnCollab 
                onClick={event => {
                        event.preventDefault();
                        setLoading(true);
                        setContent("Enviando...");
                    }
                }
                loading={loading}
            >
                {content}
            </BtnCollab>
        </Form>
    );
};

export default FormLead;