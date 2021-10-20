import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background-color: #FFF;
  padding: 1.25rem;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 0.625rem;
  margin-top: 1.25rem;
`;

export const TableHeadColoumn = styled.th<{width?:number}>`
  width: ${props =>  props.width ? props.width : 'auto' };
  padding: 0.625rem 0;
  text-align: left;
`;