import { DivItemListShips, Plight, P300, P500, NavShipLink } from './ItemListShips-styled'


const ItemListShips = (props) => {

    const { id, name, model } = props;

    return (

        <DivItemListShips>
            <NavShipLink to={`/ship/${id}`} >
                <Plight> </Plight>
                <P500>
                    {name.toUpperCase()}
                </P500>
            </NavShipLink>
            <P300>{model}</P300>
        </DivItemListShips >

    )
}
export default ItemListShips;