export function getCurrentMonth(){
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

interface Item {
  date: Date;
  category: string;
  title: string;
  value:number;
}

export function filterListByMonth(list: Item[], date: string){
  let newList: Item[] = [];
  let [year, month] = date.split('-');

  for(let i in list){
    if(list[i].date.getFullYear() === parseInt(year) && list[i].date.getMonth() + 1 === parseInt(month)){
      newList.push(list[i]);
    }
  }

  return newList;
}

export function dateFormat(date: Date){
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay();

  return addZeroLeft(day) + '/' + addZeroLeft(month) + '/' + year;
}

function addZeroLeft(n: number){
  if(n < 10){
    return '0'+n;
  }else{
    return n
  }
}

export function valueFormat(value: number){
  return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

export function formatCurrentMonth(currentMonth: String){
  let [year, month] = currentMonth.split('-');
  let months = ['Janeiro', 'Feverreiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return `${months[parseInt(month) - 1]} ${year}`;
}