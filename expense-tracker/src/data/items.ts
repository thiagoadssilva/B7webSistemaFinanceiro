interface Item {
  date: Date;
  category: string;
  title: string;
  value:number;
}

export const items:Item[] = [
  {date: new Date(2021, 9, 15), category: 'food', title: 'McDonalds', value: 32.12},
  {date: new Date(2021, 9, 15), category: 'food', title: 'Burger King', value: 42},
  {date: new Date(2021, 9, 16), category: 'rent', title: 'Aluguel do Apt', value: 1000},
  {date: new Date(2021, 10, 15), category: 'salary', title: 'Salário', value: 10000},
]