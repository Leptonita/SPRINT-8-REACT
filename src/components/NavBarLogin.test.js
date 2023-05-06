import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import NavBarLogin from "./NavBarLogin";

import Provider from "../application/Provider";
import Routes from "../application/Router";

describe('NavBarLogin', () => {

    test('uses correct src', () => {
        const component = render(
            <Provider>
                <Routes>
                    <NavBarLogin />
                </Routes>
            </Provider>
        );

        expect(screen.getByAltText("Logo")).toBeInTheDocument();

        //screen.debug();
    });


}); 
