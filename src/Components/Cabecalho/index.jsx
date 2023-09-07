import { styled } from "styled-components"
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding:60px 0;
    display: flex;
    justify-content: space-between;

    img{
        max-width: 212;
    }
`

const Cabecalho = () => {
    return(
        <HeaderEstilizado>
            <img src="/img/logo.png" alt="logo do space app" />
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

export default Cabecalho;