import { formatCurrentMonth } from "../../helpers/dateFilter";
import ResumeItem from "../ResumeItem";
import { 
  Container,
  MonthArea,
  ResumeArea,
  MonthArrow,
  MonthTitle 
} from "./styles";


interface InfoAreaProps{
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export default function InfoArea({currentMonth, onMonthChange, income, expense}: InfoAreaProps){

  function handlePrevNextMonth(simbol: string){
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    
    if(simbol === '+'){
      currentDate.setMonth(currentDate.getMonth() - 1);
    }else{
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  return(
    <Container>
      <MonthArea>
        <MonthArrow onClick={() => handlePrevNextMonth('+')}>⬅️</MonthArrow>
        <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
        <MonthArrow onClick={() => handlePrevNextMonth('-')}>➡️</MonthArrow>
      </MonthArea>
      <ResumeArea>
        <ResumeItem title="Receitas" value={income}/>
        <ResumeItem title="Despesas" value={expense}/>
        <ResumeItem title="Balanço" value={income - expense} color={(income - expense) < 0 ? 'red' : 'green'}/>
      </ResumeArea>
    </Container>
  );
}