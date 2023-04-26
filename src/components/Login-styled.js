import styled, { css } from "styled-components";



const colors = {
    lines: "#adadad",
    error: "#db1212",
    success: "#16d426",
    greyBorder: "#4f4f4f"
}


//Web info modal
export const OverlayLogin = styled.div`
 position: fixed;
z-index: 10;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(114, 114, 114, 0.3);
display: flex;
/* display: ${(props) => props.isVisible ? 'flex' : 'none'}; */
align-items: center;
justify-content:  center; /**/
`;

export const BtnCerrar = styled.div`
position: absolute;
top:10px;
right: 10px;
width: 32px;
height: 32px;
cursor: pointer;
background: #000019;
color: #767676;
font-size: 1.4rem;
font-weight: 300;
border: 2px solid #676767;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;

&:hover {
    color: white;
}
`;

export const Form = styled.form`
position: relative;
width: 450px;
border: 2px solid ${colors.greyBorder};
border-radius: 5px;
margin-top: -50px;
padding: 30px 40px;
background-color: #001;
`;

export const DivInput = styled.div`
	position: relative;
	z-index: 90;
    width: 300px;
    margin: 10px auto;
`;

export const Icon = styled.span`
position: absolute;
	right: 10px;
	top: 22px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

    ${props => (props.valid !== null) && css`
   opacity: 1;
   `}

`;

export const Input = styled.input`
width: 100%;
background-color: #fff;
border-radius: 3px;
height: 40px;
border: 3px solid transparent;
margin: 10px auto;
padding: 0 30px 0 10px;

&:focus {
    border: 3px solid ${colors.lines};
    outline: none;
}

${props => props.isValid === true && css`
border: 3px solid ${colors.success} ;
`}

${props => props.isValid === false && css`
border: 3px solid ${colors.error} ;
`}
`;

export const ErrorMessage = styled.div`
font-size: 12px;
color: ${colors.error};
visibility: hidden;
${props => props.valid && css`
visibility: hidden;
`}
${props => !props.valid && css`
visibility: visible;
`}
`;

export const DivBtns = styled.div`
width: 300px;
margin: 10px auto;
`;
