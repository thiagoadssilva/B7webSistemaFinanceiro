import { useEffect, useState } from "react";
import {categories} from './data/categories';
import {items} from './data/items';
import {getCurrentMonth, filterListByMonth} from './helpers/dateFilter';

import { 
  Container,
  Header,
  HerderText,
  Body
} from "./App.styles";
import TableArea from "./components/TableArea";

interface Item {
  date: Date;
  category: string;
  title: string;
  value:number;
}

export default function App(){
  const [list, setList] = useState(items);
  const [filteredList, setFilteresList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() =>{
    setFilteresList(filterListByMonth(list, currentMonth));
  },[list, currentMonth]);

  return(
    <Container>
      <Header>
        <HerderText>Sistema Para Controle Financeiro</HerderText>
      </Header>
      <Body>
        <TableArea list={filteredList}/> 
      </Body>
    </Container>
  );
}