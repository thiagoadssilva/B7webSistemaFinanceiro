import styled from 'styled-components';

export const TableLine = styled.tr`
  
`;

export const TableColumn = styled.td`
  padding: 0.625rem 0;
`;

export const Category = styled.div<{colors?:string}>`
   display: inline-block;
   padding: 0.313rem 0.625rem;
   border-radius: 5px;
   color: #FFF;
   background-color: ${props => props.colors};
`;

export const Value = styled.div<{colors: string}>`
  color: ${props => props.colors};
`;

