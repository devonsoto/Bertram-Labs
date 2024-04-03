'use client';

import { AddPayment } from './AddPayment';
import { EmployeeTable } from './EmployeeTable';
import { z } from 'zod';

import { useState } from 'react';

import { employees as EmployeeData } from '@/data/employees';
import { FormSchema } from './AddPayment';

export default function PaymentManager() {
  const minFist = EmployeeData.reduce((min, employee) => {
    return employee.total_money_spent < min.total_money_spent ? employee : min;
  });
  const [employees, setEmployees] = useState(EmployeeData);
  const [minEmployee, setMinEmployee] = useState(employees[0]);
  const employeeNames = employees.map((employee) => employee.name);

  const updateEmployeesInfo = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    const updatedEmployees = employees.map((employee) => {
      if (employee.name === data.name) {
        return {
          ...employee,
          total_money_spent: employee.total_money_spent + data.amount,
        };
      }
      return employee;
    });

    console.log({ updatedEmployees });

    setEmployees(updatedEmployees);
  };

  return (
    <div className='flex flex-col w-full items-center gap-12'>
      <p>
        Hello! <span className=' font-bold'>{minEmployee.name}</span>, you are
        the lucky employee paying today.
      </p>
      <AddPayment
        data={employeeNames}
        onCallbackFunction={updateEmployeesInfo}
      />
      <EmployeeTable employeeInfo={employees} />
    </div>
  );
}
