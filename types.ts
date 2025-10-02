
export interface Student {
  id: string;
  name: string;
  email: string;
  enrolledDate: string;
  status: 'active' | 'banned';
  lastLogin: string;
}

export interface Question {
  id: string;
  subject: string;
  topic: string;
  questionText: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  questionCount: number;
  duration: number; // in minutes
  difficulty: 'Easy' | 'Medium' | 'Hard';
  assignedTo: number; // number of students
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
}
