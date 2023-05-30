import { createContext } from 'react';
import { Student } from '../model/Student';

export interface AppContextProps {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}
export const AppContext = createContext<AppContextProps>({
  students: [],
  setStudents() {
    return;
  },
});
