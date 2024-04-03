import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Employee } from '@/data/employees';

interface EmployeeTableProps {
  employeeInfo: Employee[];
}

export function EmployeeTable({ employeeInfo }: EmployeeTableProps) {
  return (
    <Table>
      <TableCaption>A list of coffee expenses from our employees.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Employee Name</TableHead>
          <TableHead className='text-right'>Amount Spent</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employeeInfo.map((employee) => (
          <TableRow key={employee.name}>
            <TableCell>{employee.name}</TableCell>
            <TableCell className='text-right'>
              {employee.total_money_spent}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
