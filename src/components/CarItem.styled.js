import styled from 'styled-components';

export const Name = styled.h3`
	font-weight: 500;
	font-size: 20px;
	line-height: 1.2;
	letter-spacing: 0.02em;
    margin: 0;
`;
export const Title = styled.div`
display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const Prise = styled.p`
font-weight: 500;
	font-size: 20px;
	line-height: 1.2;
	letter-spacing: 0.02em;
    margin: 0;
`;
export const Descriotion = styled.p`
font-weight: 400;
	font-size: 12px;
	line-height: 1.8;
	letter-spacing: 0.02em;
    margin: 0;
    margin-bottom: 8px;
    margin-top: 8px;
`;
export const Button = styled.button`
font-weight: 600;
	font-size: 14px;
	line-height: 2;
	letter-spacing: 0.04em;
	color: black;
	padding: 8px 24px 8px 24px;
	border-radius: 4px;
	background-color: blue;
	border: none;
	display: flex;
	align-items: center;
	gap: 24px;
	cursor: pointer;
	justify-content: center;
	min-width: 260px;
    margin: auto;
`;
export const Icons = styled.button`
	background: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 25px;
  position: absolute;
  top: 0;
  right: 0;
  width: 24px; 
  height: auto;
  padding-top: 10px;
  padding-right: 10px;
  `; 
  export const Container = styled.div`
  position: relative;
  display: inline-block;
`;