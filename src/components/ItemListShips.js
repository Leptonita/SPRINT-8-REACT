import { DivItemListShips, P300, P500, NavShipLink } from './ItemListShips-styled'


const ItemListShips = (props) => {

    const { id, name, model } = props;

    return (
        <DivItemListShips>
            <P500><NavShipLink to={`/ship/${id}`} >{name.toUpperCase()}</NavShipLink> </P500>
            <P300>{model}</P300>
        </DivItemListShips >
    )
}
export default ItemListShips;