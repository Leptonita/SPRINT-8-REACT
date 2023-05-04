import { render, screen } from "@testing-library/react";
//import '@testing-library/jest-dom';
import Login from "./Login";
import Provider from "../application/Provider";
import Routes from "../application/Router";



describe('Login', () => {
    it('must display a text containing New', () => {
        render(
            <Provider>
                <Login
                    modalVis={true}
                    changeModalVis={() => console.log("hello1")}
                    modalLog={true}
                    changeLogClick={() => console.log("hello2")}
                    modalSign={true}
                    changeSignClick={() => console.log("hello3")} />
            </Provider>
        )
        //screen.debug;
        const finalTxt = screen.getByText(/New Account/i);
        expect(finalTxt).toBeInTheDocument();
    });
}); /*

describe('true is truthy and false is falsy', () => {
    it('true is truthy', () => {
        expect(true).toBe(true);
    });

    it('false is falsy', () => {
        expect(false).toBe(false);
    });
});
*/