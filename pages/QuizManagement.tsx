
import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Table, { TableRow, TableCell } from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import { mockQuizzes } from '../data/mockData';
import type { Quiz } from '../types';

const QuizManagement: React.FC = () => {
  const [quizzes] = useState<Quiz[]>(mockQuizzes);

  const tableHeaders = ['Title', 'Subject', 'Questions', 'Duration', 'Difficulty', 'Assigned To', 'Actions'];

  const getDifficultyBadge = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
    switch(difficulty) {
      case 'Easy': return <Badge variant="success">Easy</Badge>;
      case 'Medium': return <Badge variant="warning">Medium</Badge>;
      case 'Hard': return <Badge variant="danger">Hard</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quiz Management</h1>
        <Button>Create New Quiz</Button>
      </div>

      <Card>
        <Table headers={tableHeaders}>
          {quizzes.map((quiz) => (
            <TableRow key={quiz.id}>
              <TableCell className="font-medium text-foreground">{quiz.title}</TableCell>
              <TableCell>{quiz.subject}</TableCell>
              <TableCell>{quiz.questionCount}</TableCell>
              <TableCell>{quiz.duration} min</TableCell>
              <TableCell>{getDifficultyBadge(quiz.difficulty)}</TableCell>
              <TableCell>{quiz.assignedTo} students</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="secondary" size="sm">Edit</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Card>
    </div>
  );
};

export default QuizManagement;
