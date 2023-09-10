import { styled } from "styled-components"
import EstilosGlobais from "./Components/EstilosGlobais"
import Cabecalho from "./Components/Cabecalho"
import BarraLateral from "./Components/BarraLateral"
import Banner from "./Components/Banner"
import BannerBackground from "./assets/Banner.png"
import Galeria from "./Components/Galeria"
import Fotos from "./fotos.json"
import { useState } from "react"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setfotosDaGaleria] = useState(Fotos)
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImage={BannerBackground} />
            <Galeria Fotos={fotosDaGaleria}/>
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
