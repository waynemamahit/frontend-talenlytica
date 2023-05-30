import { useCallback, useEffect, useMemo, useState } from 'react';
import { Result, ResultValue } from '../model/Result';
import { Student } from '../model/Student';

export default function useApp() {
  const countAspect = 4;
  const [students, setStudents] = useState<Student[]>([]);

  const valueProvider = useMemo(
    () => ({ students, setStudents }),
    [students, setStudents]
  );

  const saveStudents = useCallback(() => {
    const result: Result = {};
    for (let as = 1; as <= countAspect; as++) {
      const aspekItem: ResultValue = {};
      let st = 0;
      for (const studentData of students) {
        aspekItem[studentData.name.split(' ').join('_').toLowerCase()] =
          students[st].aspectAssessment[as - 1];
        st++;
      }
      result['aspek_penilaian_' + as] = aspekItem;
    }
    const a = document.createElement('a');
    a.href =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(result));
    a.download = 'assessment_result.json';
    a.click();
  }, [students]);

  useEffect(() => {
    const newStudents: Student[] = [];
    for (let st = 1; st <= 10; st++) {
      newStudents.push({
        name: 'Mahasiswa ' + st,
        photo: '',
        aspectAssessment: [1, 1, 1, 1],
      });
    }
    setStudents(newStudents);
  }, []);

  return {
    countAspect,
    students,
    valueProvider,
    setStudents,
    saveStudents,
  };
}
