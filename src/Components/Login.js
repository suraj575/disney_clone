import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogo src="/images/cta-logo-one.svg" />
        <SignUpButton>Get All There</SignUpButton>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png"/>
         
      </CTA>
    </Container>
  );
}
const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity:0.7;
  }
`;

const CTA = styled.div`
  max-width: 600px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items:center;
`;
const CTALogo = styled.img``;
const SignUpButton = styled.a`
  width: 100%;
  background-color: #0063e6;
  text-align: center;
  padding: 17px 0px;
  border-radius: 4px;
  font-weight: bold;
  color: #f9f9f9;
  cursor: pointer;
  font-size: 18px;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.div`
    font-size: 11px;
    text-align: center;
    letter-spacing: 1.5px;
    line-height: 1.5;
}
`;

const CTALogoTwo=styled.img`
width:90%;
margin-top:13px;
  
`

// const Content=styled.div`
// max-width:650px;
// `
// const Logo=styled.div`

// `

export default Login;
