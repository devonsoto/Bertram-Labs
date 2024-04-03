export const employees: Employee[] = [
  {
    name: 'Bob',
    total_money_spent: 45.0,
  },
  {
    name: 'Jeremy',
    total_money_spent: 40.0,
  },
  {
    name: 'Alice',
    total_money_spent: 50.0,
  },
  {
    name: 'Tom',
    total_money_spent: 55.0,
  },
  {
    name: 'Sara',
    total_money_spent: 35.0,
  },
  {
    name: 'Mike',
    total_money_spent: 60.0,
  },
  {
    name: 'Emma',
    total_money_spent: 30.0,
  },
];

export type Employee = {
  name: string;
  total_money_spent: number;
};
