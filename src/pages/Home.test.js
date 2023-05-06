import { render, screen } from "@testing-library/react";
//import '@testing-library/jest-dom';
import Home from "./Home";
import Provider from "../application/Provider";
import Routes from "../application/Router";


beforeAll(() => render(
    <Provider>
        <Routes>
            <Home />
        </Routes>
    </Provider>
))

describe('Home', () => {
    it('must display a text containing galaxy', () => {
        screen.debug;
        const finalTxt = screen.getByText(/a long time ago in a galaxy/i);
        expect(finalTxt).toBeInTheDocument();
    });

    it('must not display a text containing felicidad', () => {
        const finalTxt = screen.queryByText(/felicidad/i);
        expect(finalTxt).not.toBeInTheDocument();
    });


});




/*

describe('true is truthy and false is falsy', () => {
    it('true is truthy', () => {
        expect(true).toBe(true);
    });

    it('false is falsy', () => {
        expect(false).toBe(false);
    });
});
*/