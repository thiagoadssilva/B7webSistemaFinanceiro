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
import InfoArea from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

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
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() =>{
    setFilteresList(filterListByMonth(list, currentMonth));
  },[list, currentMonth]);

  function handleMonthChange(newMonth: string){
    setCurrentMonth(newMonth);
  }

  useEffect(() =>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value; 
      }else{
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  },[filteredList])

  function handleAddItem(item: Item){
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return(
    <Container>
      <Header>
        <HerderText>Sistema Para Controle Financeiro</HerderText>
      </Header>
      <Body>
        <InfoArea currentMonth={currentMonth} onMonthChange={handleMonthChange} income={income} expense={expense}/>

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList}/> 
      </Body>
    </Container>
  );
}