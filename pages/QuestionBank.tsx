
import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Table, { TableRow, TableCell } from '../components/ui/Table';
import Modal from '../components/ui/Modal';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';
import { SearchIcon } from '../components/Icons';
import { mockQuestions } from '../data/mockData';
import type { Question } from '../types';

const QuestionBank: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  const handleOpenModal = (question: Question | null = null) => {
    setEditingQuestion(question);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingQuestion(null);
  };
  
  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to save/update question
    // This is a placeholder for actual API call
    console.log("Saving question...");
    handleCloseModal();
  };

  const tableHeaders = ['Subject', 'Topic', 'Question', 'Actions'];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Question Bank</h1>
      <Card>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 p-4">
          <div className="relative w-full md:w-1/3">
             <SearchIcon />
             <Input placeholder="Search questions..." className="pl-10"/>
          </div>
          <div className="flex space-x-2">
            <Button variant="secondary">Bulk Upload</Button>
            <Button onClick={() => handleOpenModal()}>Add New Question</Button>
          </div>
        </div>
        <Table headers={tableHeaders}>
          {questions.map((q) => (
            <TableRow key={q.id}>
              <TableCell className="font-medium text-foreground">{q.subject}</TableCell>
              <TableCell>{q.topic}</TableCell>
              <TableCell className="max-w-sm truncate">{q.questionText}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="secondary" size="sm" onClick={() => handleOpenModal(q)}>Edit</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Card>

      {/* Add/Edit Question Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={editingQuestion ? 'Edit Question' : 'Add New Question'}>
        <form className="space-y-4" onSubmit={handleSaveQuestion}>
          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <Input defaultValue={editingQuestion?.subject} placeholder="e.g., Anatomy" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Topic</label>
            <Input defaultValue={editingQuestion?.topic} placeholder="e.g., Cardiovascular System" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Question Text</label>
            <Textarea defaultValue={editingQuestion?.questionText} rows={3} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-1">Option A</label><Input defaultValue={editingQuestion?.options.a} required /></div>
            <div><label className="block text-sm font-medium mb-1">Option B</label><Input defaultValue={editingQuestion?.options.b} required /></div>
            <div><label className="block text-sm font-medium mb-1">Option C</label><Input defaultValue={editingQuestion?.options.c} required /></div>
            <div><label className="block text-sm font-medium mb-1">Option D</label><Input defaultValue={editingQuestion?.options.d} required /></div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Correct Answer</label>
            <Select defaultValue={editingQuestion?.correctAnswer} required>
              <option value="a">Option A</option>
              <option value="b">Option B</option>
              <option value="c">Option C</option>
              <option value="d">Option D</option>
            </Select>
          </div>
           <div>
            <label className="block text-sm font-medium mb-1">Explanation</label>
            <Textarea defaultValue={editingQuestion?.explanation} rows={3} required />
          </div>
          <div className="flex justify-end pt-4 space-x-2">
             <Button type="button" variant="secondary" onClick={handleCloseModal}>Cancel</Button>
             <Button type="submit">Save Question</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default QuestionBank;
