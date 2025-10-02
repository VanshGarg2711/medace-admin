
import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Table, { TableRow, TableCell } from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import { mockStudents } from '../data/mockData';
import type { Student } from '../types';

const StudentManagement: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  
  const handleToggleStatus = (id: string) => {
      setStudents(students.map(s => s.id === id ? {...s, status: s.status === 'active' ? 'banned' : 'active'} : s));
  };

  const tableHeaders = ['Name', 'Email', 'Enrolled Date', 'Last Login', 'Status', 'Actions'];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Management</h1>

      <Card>
        <Table headers={tableHeaders}>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium text-foreground">{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.enrolledDate}</TableCell>
              <TableCell>{new Date(student.lastLogin).toLocaleString()}</TableCell>
              <TableCell>
                <Badge variant={student.status === 'active' ? 'success' : 'danger'}>
                  {student.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="secondary" size="sm">Edit</Button>
                  <Button 
                    variant={student.status === 'active' ? 'destructive' : 'secondary'} 
                    size="sm"
                    onClick={() => handleToggleStatus(student.id)}
                  >
                    {student.status === 'active' ? 'Ban' : 'Unban'}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Card>
    </div>
  );
};

export default StudentManagement;
