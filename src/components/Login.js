import { useEffect, useState } from 'react';
import LogoDS from '../assets/img/spaceships-starwars.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { OverlayLogin, Header, ImgDS, BtnCerrar, Form, DivInput, Input, Icon, DivBtns, ErrorMessage, BtnsIds } from './Login-styled';
//import { useContext } from 'react';
import { useMyContext } from '../application/Provider';

const Login = ({ modalVis, modalLog, modalSign, changeModalVis, changeLogClick, changeSignClick }) => {

    const [state, setState] = useMyContext();

    const [users, setUsers] = useState(() => {
        try {
            const usersStored = JSON.parse(localStorage.getItem("usersStored"));
            return usersStored ? usersStored : [];
        } catch (error) {
            return []
        }
    });
    //getting last user from localStorage    
    const [userLS, setUserLS] = useState(() => {
        const lastUser = JSON.parse(localStorage.getItem("userStored"));
        return lastUser ? lastUser : { "email": "", "password": "" };
    });

    const [email, setEmail] = useState(userLS.email);
    const [password, setPassword] = useState(userLS.password);


    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState("Enter your email address and password")

    useEffect(() => {

        localStorage.setItem("userStored", JSON.stringify(userLS));
        localStorage.setItem("usersStored", JSON.stringify(users));

        // localStorage.setItem("email", JSON.stringify(email));
        //localStorage.setItem("password", JSON.stringify(password));
    }, [users, userLS]);

    useEffect(() => {
        emailValidation();
        passwordValidation();
    }, []);

    const closeModal = () => {
        changeModalVis(false);
        changeLogClick(false);
        changeSignClick(false);
    }

    useEffect(() => {
        if (isLoggedIn) {
            closeModal();
        }
    }, [isLoggedIn]);

    const handleEmail = (event) => {
        const inputEmail = event.target.value;

        //email no empty
        if (inputEmail !== undefined) {
            setEmail(inputEmail);
            const userStored = users.find(client => client.email === inputEmail);
            //if user's email  already exists in users Array in localStorage
            if (userStored) {
                setUserLS(userStored);
            } else {
                setUserLS({ ...userLS, "email": inputEmail });
            }
        }
    }

    const handlePassword = (event) => {
        const inputPassword = event.target.value;
        //password validation
        if (inputPassword !== undefined) {
            setPassword(inputPassword);
        }
        setUserLS({ ...userLS, "password": inputPassword });
    }

    const emailValidation = () => {
        //email validation
        const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        (expression.test(email)) ? setValidEmail(true) : setValidEmail(false);
        //console.log({ validEmail });
    }

    const passwordValidation = () => {
        //password validation: 4 to 12 elements
        const expression = /^.{4,12}$/;
        (expression.test(password)) ? setValidPassword(true) : setValidPassword(false);
        // console.log({ validPassword });
    }

    const handleSignup = (event) => {

        event.preventDefault();

        emailValidation();
        passwordValidation();

        //find user 
        const userStored = users.find(client => client.email === email);
        //if user's email already exists in users Array in localStorage
        if (userStored) {
            setUserLS(userStored);
            setMessage("This user's email address already exists");
        }
        console.log({ userStored }, 'validPassword', validPassword, 'validEmail', validEmail)
        //Sign up create new user
        if (!userStored && validPassword && validEmail) {
            //add new user
            setUsers([...users, { key: users.length + 1, email, password }]);
            setUserLS({ ...userLS, "password": password });
            setIsLoggedIn(true);
            setMessage('Welcome to the app, you are in');
            console.log("email user:", email, ", password: ", password);
            setState({ ...state, user: email });

        } else {
            //check email and password for login
            setIsLoggedIn(false);
        }

    }

    const handleLogin = (event) => {
        event.preventDefault();

        emailValidation();
        passwordValidation(); /* */

        const userStored = users.find(client => client.email === email);
        //if user's email  already exists in users Array in localStorage
        if (userStored) {
            setUserLS(userStored);

            if (userStored !== null) {
                if (userStored.password === password) {
                    console.log({ userStored }, 'logged');
                    setIsLoggedIn(true);
                    setUserLS(userStored);
                    setMessage('Welcome to the app, you are in');
                    setState({ ...state, user: email });
                    console.log("email user:", email, ", password: ", password);
                } else {
                    console.log({ userStored }, 'NO-logged');
                    setIsLoggedIn(false);
                    setUserLS({ ...userLS, "password": password });
                    setMessage('Sorry, check the password');
                    setState({ ...state, user: null });
                }
            }
        } else {
            setMessage('Sorry, this email is not registered');
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setUserLS(null);
        setValidEmail(false);
        setValidPassword(false);

        setIsLoggedIn(false);

    }


    return (
        <>
            {modalVis &&
                <OverlayLogin /* isVisible={modalVis} */>
                    <Form onSubmit={onSubmit}>
                        <BtnCerrar onClick={closeModal}>
                            <FontAwesomeIcon icon={faXmark} />
                        </BtnCerrar>
                        <Header>
                            <ImgDS src={LogoDS} alt="Disney StarWars" />
                            {/* <h1>{modalSign ? "Sign Up" : "Login"}</h1> */}
                            <p>{message}</p>
                        </Header>
                        <DivInput>
                            <Input name="Email" type="email" placeholder="Email Address" value={email}
                                onChange={handleEmail}
                                onKeyUp={emailValidation}
                                onBlur={emailValidation}
                                isValid={validEmail}
                            />

                            <Icon valid={validEmail}>
                                {validEmail
                                    ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1f9e34", }} />
                                    : <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#f00000", }} />
                                }
                            </Icon>
                            <ErrorMessage valid={validEmail}>
                                {validEmail ? "valid email" : "Invalid email, it must contain at least characters like numbers leters, one @ and a . (dot)."}
                            </ErrorMessage>

                        </DivInput>

                        <DivInput>
                            <Input name="Password" type="password" placeholder="Password" value={password}
                                onChange={handlePassword}
                                onKeyUp={passwordValidation}
                                onBlur={passwordValidation}
                                isValid={validPassword}
                            />
                            <Icon valid={validPassword}>
                                {validPassword
                                    ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1f9e34", }} />
                                    : <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#f00000", }} />
                                }

                            </Icon>
                            <ErrorMessage valid={validPassword}>
                                {validPassword ? "valid password" : "password must have 4 to 12 characters"}
                            </ErrorMessage>

                        </DivInput>

                        <br />
                        <DivBtns>
                            {/* ,logC  sigC*/}
                            {modalSign && <BtnsIds onClick={handleSignup}> Create New Account </BtnsIds>}

                            {modalLog && <BtnsIds onClick={handleLogin}> LOGIN </BtnsIds>}

                            {/* {isLoggedIn && <div>user is logged in</div>}
                             {isLoggedIn && <div>number of users created: {users.length} </div>} 

                            {!isLoggedIn && <div>no logged yet, ...</div>}*/}
                        </DivBtns>
                    </Form>
                </OverlayLogin >
            }
        </>
    )

}
export default Login;