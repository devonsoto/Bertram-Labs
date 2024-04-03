import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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
          {/* <TableHead>Status</TableHead>
          <TableHead>Method</TableHead> */}
          <TableHead className='text-right'>Amount Spent</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employeeInfo.map((employee) => (
          <TableRow key={employee.name}>
            {/* <TableCell className='font-medium'>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell> */}
            <TableCell>{employee.name}</TableCell>
            <TableCell className='text-right'>
              {employee.total_money_spent}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
