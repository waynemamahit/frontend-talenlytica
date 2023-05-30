import { memo } from 'react';
import { Student } from '../model/Student';
import StudentItem from './StudentItem';

export interface StudentListProps {
  data: Student[];
  countAspect: number;
}
export function StudentList({ data, countAspect }: StudentListProps) {
  return (
    <>
      {data.map((mhs, index) => (
        <StudentItem
          key={mhs.name + index}
          student={mhs}
          countAspect={countAspect}
        />
      ))}
    </>
  );
}

export const MemoStudentList = memo(StudentList);
