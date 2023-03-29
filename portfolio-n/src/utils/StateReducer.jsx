export default function reducer(state, action) {
  switch (action.type) {
    case "setCategories": {
      return {
        ...state,
        categories: action.data,
      };
    }
    case "setPrograms": {
      return {
        ...state,
        programs: action.data,
      };
    }
    case "addProgram": {
      return {
        ...state,
        programs: [action.data, ...state.programs],
      };
    }
    case "deleteProgram": {
      const updatedPrograms = state.programs.filter((program) => {
        return program.id !== parseInt(action.data);
      });
      return {
        ...state,
        programs: updatedPrograms,
      };
    }
    case "updateProgram": {
      const program = state.programs.find(
        (program) => program.id === action.data.id
      );
      const updatedProgram = Object.assign(program, action.data);
      const otherPrograms = state.programs.filter(
        (program) => program.id !== action.data.id
      );
      return {
        ...state,
        programs: [updatedProgram, ...otherPrograms],
      };
    }
    case "setLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data,
      };
    }
    case "setToken": {
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.data,
        },
      };
    }
    default:
      return state;
  }
}
