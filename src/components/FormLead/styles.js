import styled from "styled-components";

import TextCollab from "../../objects/TextCollab";
import InputCollab from "../../objects/InputCollab";

export const Form = styled.form`
    &> ${TextCollab} {   
        margin-bottom: var(--spacing-small);
    }

    &> ${InputCollab} {
        margin-right: var(--spacing-small);
    }
`;
