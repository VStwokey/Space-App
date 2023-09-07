import { styled } from "styled-components"
import BannerFundo from './Banner.png'

const FigureEstilizada = styled.figure`
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
`

const Banner = () => {
    return (
    <FigureEstilizada>
        <img src={BannerFundo} alt="Banner principal" />
    </FigureEstilizada>)
}

export default Banner;