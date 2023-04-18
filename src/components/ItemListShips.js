import { DivItemListShips, P300, P500 } from './ItemListShips-styled'

const ItemListShips = (props) => {
    const { name, model } = props
    return (
        <DivItemListShips>
            <P500>{name.toUpperCase()} </P500>
            <P300>{model}</P300>
        </DivItemListShips >
    )
}
export default ItemListShips;