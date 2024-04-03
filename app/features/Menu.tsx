import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { menu } from '@/data/menu';

export function Menu() {
  return (
    <Table>
      <TableCaption>Bertram Labs Coffee Menu</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Employee Name</TableHead>
          <TableHead className='text-right'>Amount Spent</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {menu.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell className='text-right'>{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
