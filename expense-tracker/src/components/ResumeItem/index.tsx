import { valueFormat } from "../../helpers/dateFilter";
import {
  Container,
  Title,
  Info
} from './styles';

interface ResumeItemProps{
  title: string;
  value: number;
  color?: string;
}

export default function ResumeItem({title, value, color}: ResumeItemProps){
  return(
    <Container>
      <Title>{title}</Title>
      <Info color={color}>{valueFormat(value) }</Info>
    </Container>
  );
}