import { useContext } from 'react';
import TeacherContext from '../contexts/TeacherContext';

const useTeacher = () => useContext(TeacherContext);

export default useTeacher;
