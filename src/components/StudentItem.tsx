import { useCallback, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AspectAssessmentEvent } from '../model/AspectAssessment';
import { Student } from '../model/Student';
import { MemoAspectAssesmentItem } from './AspectAssesmentItem';
import { MemoAspectList } from './AspectList';
import { MemoProfileAvatar } from './ProfileAvatar';

export interface StudentItemProps {
  countAspect: number;
  student: Student;
}
export default function StudentItem({
  countAspect,
  student,
}: StudentItemProps) {
  const { students, setStudents } = useContext(AppContext);

  const setSelectValue = useCallback(
    ({ value, index }: AspectAssessmentEvent) => {
      const studentIndex = students.findIndex(
        (dataItem) => dataItem === student
      );
      const newStudents = students;
      newStudents[studentIndex].aspectAssessment[index] = value;
      setStudents(newStudents);
    },
    [students, student, setStudents]
  );

  return (
    <div className="md:flex md:justify-between mx-6 md:border w-auto rounded">
      <div className="flex items-center p-2 max-md:justify-center">
        <MemoProfileAvatar name={student.name} photo={student.photo} />
        <div className="flex-col mx-4 align-middle">{student.name}</div>
      </div>
      <div className="flex sm:justify-center p-2 min-[540px]:border-b">
        <MemoAspectList
          count={countAspect}
          render={(i) => {
            const index = i - 1;
            return (
              <MemoAspectAssesmentItem
                optionValue={10}
                value={student.aspectAssessment[index]}
                index={index}
                setSelectValue={setSelectValue}
              />
            );
          }}
        />
      </div>
    </div>
  );
}
