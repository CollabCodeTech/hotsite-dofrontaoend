import React, {useState} from "react";

import { Form } from "./styles";
import InputCollab from "../../objects/InputCollab";
import BtnCollab from "../BtnCollab";
import TextCollab from "../../objects/TextCollab";

const FormLead = () => {
    const [loading, setLoading] = useState(false);

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
                    }
                }
                loading={loading}
            >
                Receber
            </BtnCollab>
        </Form>
    );
};

export default FormLead;