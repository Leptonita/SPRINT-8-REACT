import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import FilmLink from "./FilmLink";
//import axios from "axios";
import Provider from "../application/Provider";
import Routes from "../application/Router";
import ShipPage from '../pages/ShipPage';

jest.mock("axios");

describe('FilmLink', () => {

    test('uses correct src', async () => {

        const numFilm = 1;
        const component = await render(
            <Provider>
                <Routes>
                    <ShipPage>
                        <FilmLink key={numFilm} idFilm={numFilm} />
                    </ShipPage>
                </Routes>
            </Provider>
        );


        await expect(screen.findByAltText(/Film1/i));

        //screen.debug();
    });


}); 
