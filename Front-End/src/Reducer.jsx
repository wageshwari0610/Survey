const addNewQuestion = (state = [], action) => {
  switch (action.type) {
    case "NewQuestion":
      return [...state, action.payload];
    case "deleteQuestion":
      const filteredList = state.filter(
        (list) => list.question !== action.payload
      );
      return filteredList;
    default:
      return state;
  }
};

export default addNewQuestion;
