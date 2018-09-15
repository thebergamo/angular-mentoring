import { Course } from '../shared/course.interface';

export interface State {
  courses: Course[];
}

export const initialState: State = {
  courses: [],
};

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case 'LOAD_COURSES':
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };

    default:
      return state;
  }
}
