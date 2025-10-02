
import type { Student, Question, Quiz, Activity } from '../types';

export const mockStudents: Student[] = [
  { id: 'S001', name: 'Arjun Sharma', email: 'arjun.s@example.com', enrolledDate: '2023-01-15', status: 'active', lastLogin: '2024-07-20T10:00:00Z' },
  { id: 'S002', name: 'Priya Patel', email: 'priya.p@example.com', enrolledDate: '2023-02-20', status: 'active', lastLogin: '2024-07-21T09:30:00Z' },
  { id: 'S003', name: 'Rohan Mehta', email: 'rohan.m@example.com', enrolledDate: '2023-03-10', status: 'banned', lastLogin: '2024-06-15T11:00:00Z' },
  { id: 'S004', name: 'Sneha Reddy', email: 'sneha.r@example.com', enrolledDate: '2023-04-05', status: 'active', lastLogin: '2024-07-21T14:00:00Z' },
];

export const mockQuestions: Question[] = [
  {
    id: 'Q001',
    subject: 'Anatomy',
    topic: 'Cardiovascular System',
    questionText: 'Which chamber of the heart pumps oxygenated blood to the rest of the body?',
    options: { a: 'Right Atrium', b: 'Right Ventricle', c: 'Left Atrium', d: 'Left Ventricle' },
    correctAnswer: 'd',
    explanation: 'The Left Ventricle is the thickest chamber and is responsible for pumping oxygenated blood to the body through the aorta.'
  },
  {
    id: 'Q002',
    subject: 'Pharmacology',
    topic: 'Autonomic Nervous System',
    questionText: 'Which of the following is a beta-blocker?',
    options: { a: 'Aspirin', b: 'Metoprolol', c: 'Atorvastatin', d: 'Lisinopril' },
    correctAnswer: 'b',
    explanation: 'Metoprolol is a selective beta-1 adrenergic receptor blocker used to treat high blood pressure, chest pain, and heart failure.'
  }
];

export const mockQuizzes: Quiz[] = [
    { id: 'QZ01', title: 'Cardiology Basics', subject: 'Anatomy', questionCount: 25, duration: 30, difficulty: 'Medium', assignedTo: 150 },
    { id: 'QZ02', title: 'Neurology Fundamentals', subject: 'Physiology', questionCount: 50, duration: 60, difficulty: 'Hard', assignedTo: 75 },
    { id: 'QZ03', title: 'Intro to Pharmacology', subject: 'Pharmacology', questionCount: 20, duration: 20, difficulty: 'Easy', assignedTo: 200 }
];

export const mockActivity: Activity[] = [
  { id: 'A01', user: 'Admin', action: 'Created new quiz: Cardiology Basics', timestamp: '2 hours ago' },
  { id: 'A02', user: 'Priya Patel', action: 'Completed Neurology Fundamentals with 88%', timestamp: '5 hours ago' },
  { id: 'A03', user: 'Admin', action: 'Added 15 new questions to Anatomy', timestamp: 'Yesterday' },
  { id: 'A04', user: 'Arjun Sharma', action: 'Logged in', timestamp: 'Yesterday' }
];

export const performanceData = [
  { name: 'Jan', 'Avg Score': 65 }, { name: 'Feb', 'Avg Score': 68 },
  { name: 'Mar', 'Avg Score': 72 }, { name: 'Apr', 'Avg Score': 70 },
  { name: 'May', 'Avg Score': 75 }, { name: 'Jun', 'Avg Score': 78 },
];

export const activityData = [
  { name: 'Mon', logins: 120 }, { name: 'Tue', logins: 150 },
  { name: 'Wed', logins: 130 }, { name: 'Thu', logins: 160 },
  { name: 'Fri', logins: 180 }, { name: 'Sat', logins: 200 },
  { name: 'Sun', logins: 170 },
];
