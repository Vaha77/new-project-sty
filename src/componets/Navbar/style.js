import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: #f0eedd;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #670a18;
`;

export const NavbarWrapper = styled.div`
  height: 82px;
  padding: 0 50px;
  display: flex;
`;

export const NavItem = styled.div`
  justify-content: center;
  align-items: center;
  margin: 35px;
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #35312e;
`;

export const Navimg = styled.img`
  margin: 0 560px;
`;

export const NavLogo = styled.div`
  margin: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13spx;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: #c87b5e;
  color: #f5f1e9;
  border-radius: 50%;
  height: 35px;
  width: 35px;
`;
