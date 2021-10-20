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