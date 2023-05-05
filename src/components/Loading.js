import { LoadingDiv, Balls, Ball } from './Loading-styled';

const Loading = () => {
    return (
        <LoadingDiv>
            <Balls>
                <Ball time={'1s'}></Ball>
                <Ball time={'1.2s'}></Ball>
                <Ball time={'1.5s'}></Ball>

            </Balls>
            loading
        </LoadingDiv>
    )
}
export default Loading;