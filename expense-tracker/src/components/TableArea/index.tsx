import TableItem from "../TableItem";
import { 
  Table,
  TableHeadColoumn 
} from "./styles";

interface Item {
  date: Date;
  category: string;
  title: string;
  value:number;
}

interface TableAreaProps {
  list: Item[];
}

export default function TableArea({ list }: TableAreaProps){
  return(
    <Table>
      <thead>
        <tr>
          <TableHeadColoumn width={130}>Data</TableHeadColoumn>
          <TableHeadColoumn width={130}>Categoria</TableHeadColoumn>
          <TableHeadColoumn>Título</TableHeadColoumn>
          <TableHeadColoumn width={150}>Valor</TableHeadColoumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) =>{
          return(
           <TableItem key={index} item={item}/>
          )
        })}
      </tbody>
    </Table>
  );
}