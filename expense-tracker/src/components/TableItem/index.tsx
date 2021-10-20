import { TableColumn, TableLine, Category, Value } from "./styles";
import {dateFormat, valueFormat} from '../../helpers/dateFilter';
import { categories } from "../../data/categories";



interface Item {
  date: Date;
  category: string;
  title: string;
  value:number;
}

interface TableItemprops{
  item: Item;
}

export default function TableItem({item}: TableItemprops){
  return(
    <TableLine>
      <TableColumn>{dateFormat(item.date)}</TableColumn>
      <TableColumn>
        <Category colors={categories[item.category].color}>
          {categories[item.category].title}
        </Category>  
       </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>
        <Value colors={categories[item.category].expense ? 'red' : 'green'}>
         {valueFormat(item.value)}
        </Value>
      </TableColumn>
    </TableLine>
  );
}