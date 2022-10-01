import {
  createContext, Dispatch, ReactNode, SetStateAction, useState,
} from 'react';

interface ITeacherContext {
  teacher: boolean
  setTeacher: Dispatch<SetStateAction<boolean>>
}

const initialValues: ITeacherContext = {
  teacher: false,
  setTeacher: () => { },
};

const TeacherContext = createContext<ITeacherContext>(initialValues);

export function TeacherProvider({ children }: { children: ReactNode }) {
  const [teacher, setTeacher] = useState(initialValues.teacher);

  return (
    <TeacherContext.Provider value={{ teacher, setTeacher }}>
      {children}
    </TeacherContext.Provider>
  );
}

export default TeacherContext;
