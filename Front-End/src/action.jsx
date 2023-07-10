export const newQuestion = (newQuestion) => {
  return {
    type: "NewQuestion",
    payload: newQuestion,
  };
};

export const deleteQuestion = (question) => {
  return {
    type: "deleteQuestion",
    payload: question,
  };
};
