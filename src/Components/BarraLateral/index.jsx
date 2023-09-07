import { styled } from "styled-components"
import ItemNavegacao from "./ItemNavegacao";


const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeInativo="/icons/home-inativo.png"
                        iconeAtivo="/icons/home-ativo.png">

                        Início
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeInativo="/icons/mais-vistas-inativo.png"
                        iconeAtivo="/icons/mais-vistas-ativo.png">

                        Mais Vistas
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="/icons/mais-curtidas-ativo.png"
                        iconeInativo="/icons/mais-curtidas-inativo.png">

                        Mais curtidas
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="/icons/novas-ativo.png"
                        iconeInativo="/icons/novas-inativo.png">

                        Novas
                    </ItemNavegacao>

                    <ItemNavegacao
                        iconeAtivo="/icons/surpreenda-me-ativo.png"
                        iconeInativo="/icons/surpreenda-me-inativo.png">

                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;