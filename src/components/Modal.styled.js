import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
	background-color: rgba(46, 47, 66, 0.4);
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const Modale = styled.div`
position: absolute;
	position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  padding: 40px 20px;
  background-color: #F0FFFF;
  border-radius: 15px;
  opacity: 1;
  visibility: visible;
  pointer-events: all;
  transition: opacity 250ms linear, visibility 250ms linear;
   width: 408px;
  overflow-y: scroll;
  scrollbar-width: none;
::-webkit-scrollbar {
  width: 0;}
`;
export const Image = styled.img`
border-radius: 4px;

`;
export const Descriptions = styled.p`
color: #C0C0C0;
`;

export const Model = styled.span`
color: blue;
`;
export const Close = styled.button`
position: relative;
	display: block;
	margin-left: auto;
	cursor: pointer;
	border-radius: 4px;
	width: 24px;
	height: 24px;
	background: var(--footer-description-color);
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 50%;
	color: #2e2f42;
	margin-bottom: 24px;
`;
