interface Item {
  [tag: string]:{
    title: string;
    color: string;
    expense: boolean;
  }

}

export const categories: Item = {
  food: {title: 'Alimentação', color: 'blue', expense: true},
  rent: {title: 'Aluguel', color: 'brown', expense: true},
  salary: {title: 'Salário', color: 'green', expense: false},
}