import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Login from "./Login";
import Provider from "../application/Provider";
//import Routes from "../application/Router";

beforeEach(() => render(
    <Provider>
        <Login
            modalVis={true}
            changeModalVis={() => console.log("hello1")}
            modalLog={true}
            changeLogClick={() => console.log("hello2")}
            modalSign={true}
            changeSignClick={() => console.log("hello3")} />
    </Provider>
))

describe('Login', () => {
    it('must display a text containing "New Account"', () => {
        //screen.debug;
        const txtNew = screen.getByText(/New Account/i);
        expect(txtNew).toBeInTheDocument();
    });
    it('must display a text containing LOGIN', () => {
        const btnTxt = screen.getByRole('button', { name: /LOGIN/i });
        expect(btnTxt).toBeInTheDocument();
    });

    it('must display initially an input for Email empty', () => {
        const emailInput = screen.getByPlaceholderText("Email Address");
        expect(emailInput.value).toBe("");
    });

    it('must display "Invalid email" when input of an invalid email address', () => {
        const btnLogin = screen.getByRole("button", { name: "LOGIN" });
        const emailInput = screen.getByPlaceholderText("Email Address");


        fireEvent.change(emailInput, { target: { value: 'correo@correo' } });
        fireEvent.click(btnLogin);
        const messageTxt = screen.getByText(/invalid email/i);
        expect(messageTxt).toBeInTheDocument();
        //screen.debug();
    });

    it('must display "valid email" when input email has a valid email address', () => {
        const btnLogin = screen.getByRole("button", { name: "LOGIN" });
        const emailInput = screen.getByPlaceholderText(/Email Address/i);


        fireEvent.change(emailInput, { target: { value: 'correo@correo.com' } })
        fireEvent.click(btnLogin);
        const messageTxt = screen.getByText(/valid email/i);
        expect(messageTxt).toBeInTheDocument();
        screen.debug();/**/
    });
}); 
