import styled from "styled-components";

import avatar from "../../img/logo-avatar.png";

const LogoAvatar = styled.img.attrs({
    src: avatar
})`
    height: inherit;
`;

export default LogoAvatar;