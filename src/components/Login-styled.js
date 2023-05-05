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

export const Header = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 0;
`;

export const ImgDS = styled.img`
width: 80%;
margin-bottom: 30px;
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
width: 500px;
border: 2px solid ${colors.greyBorder};
border-radius: 5px;
margin-top: -30px;
padding: 30px 40px;
background-color: #001;

@media(max-width: 768px) {
    width: 90%;
    margin-right: 5px;
  }
`;

export const DivInput = styled.div`
	position: relative;
	z-index: 90;
    width: 90%;
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
//visibility: hidden;
visibility: visible;
color: ${colors.success};

`}
${props => !props.valid && css`
visibility: visible;
`}
`;

export const DivBtns = styled.div`
width: 90%;
margin: 10px auto;
`;

export const BtnsIds = styled.button`
width: 100%;
height: 40px;
margin-bottom: 10px;
font-weight: bold;
background-color: ${colors.greyBorder};
border: 2px solid ${colors.lines};
color: white;
border-radius: 5px;
transition: all 0.5s ease-in-out;
cursor: pointer;

&:hover{
    background-color: ${colors.lines};
    border: 1px solid ${colors.greyBorder};
    color: black;
}
`;