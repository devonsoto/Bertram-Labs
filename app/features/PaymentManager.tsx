'use client';

import { AddPayment } from './AddPayment';
import { EmployeeTable } from './EmployeeTable';
import { z } from 'zod';

import { useState } from 'react';

import { Employee, employees as EmployeeData } from '@/data/employees';
import { FormSchema } from './AddPayment';

const minFist = EmployeeData.reduce((min, employee) => {
  return employee.total_money_spent < min.total_money_spent ? employee : min;
});

export default function PaymentManager() {
  const [employees, setEmployees] = useState(EmployeeData);
  const [minEmployee, setMinEmployee] = useState(minFist);
  const employeeNames = employees.map((employee) => employee.name);

  const updateEmployeesInfo = (data: z.infer<typeof FormSchema>) => {
    const updatedEmployees: Employee[] = employees.map((employee) => {
      if (employee.name === data.name) {
        return {
          ...employee,
          total_money_spent: employee.total_money_spent + data.amount,
        };
      }
      return employee;
    });

    const newMinEmployee = updatedEmployees.reduce((min, employee) => {
      return employee.total_money_spent < min.total_money_spent
        ? employee
        : min;
    });

    setMinEmployee(newMinEmployee);
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
