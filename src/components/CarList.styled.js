import styled from 'styled-components';

export const CarListe = styled.ul`
display: flex;
    flex-wrap: wrap;
    gap: 64px 24px;
`;
export const Items = styled.li`
 list-style: none;
flex-basis: calc((100% - 72px) / 4);
background-color: #F0FFF0;
opacity: 0,2;
	border-radius: 0px 0px 4px 4px;
	box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;