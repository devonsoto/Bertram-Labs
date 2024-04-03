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

import { menu } from '@/data/menu';

export function Menu() {
  return (
    <Table>
      <TableCaption>Bertram Labs Coffee Menu</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Employee Name</TableHead>
          {/* <TableHead>Status</TableHead>
            <TableHead>Method</TableHead> */}
          <TableHead className='text-right'>Amount Spent</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {menu.map((item) => (
          <TableRow key={item.name}>
            {/* <TableCell className='font-medium'>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell> */}
            <TableCell>{item.name}</TableCell>
            <TableCell className='text-right'>{item.price}</TableCell>
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
