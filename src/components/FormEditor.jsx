

import React from "react";
import Question from "./Question";
import HeaderImage from "./HeaderImage";
import CategorizeQuestion from "./CategorizeQuestion";
import ClozeQuestion from "./ClozeQuestion";
import ComprehensionQuestion from "./ComprehensionQuestion";

const FormEditor = ({ questions, setQuestions, setPreviewMode, headerImage, setHeaderImage }) => {
  const addQuestion = (type) => {
    setQuestions([
      ...questions,
      {
        id: Date.now(),
        type,
        text: "",
        options: [],
        image: "",
        subQuestions: [],
        categories: [],
      },
    ]);
  };

  const updateQuestion = (id, updatedQuestion) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, ...updatedQuestion } : question
      )
    );
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const addSubQuestion = (id) => {
    console.log("Before adding subquestion:", questions);
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? {
              ...question,
              subQuestions: [
                ...question.subQuestions,
                { id: Date.now(), text: "", options: [] },
              ],
            }
          : question
      )
    );
    console.log("After adding subquestion:", questions);
  };

  return (
    <div className="form-editor">
      <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
      <div className="add-question">
        <button onClick={() => addQuestion("categorizeQuestion")}>
          Add Categorize Question
        </button>
        <button onClick={() => addQuestion("clozeQuestion")}>
          Add Cloze Question
        </button>
        <button onClick={() => addQuestion("comprehensionQuestion")}>
          Add Comprehension Question
        </button>
      </div>
      {questions.map((question) => {
        switch (question.type) {
          case "categorizeQuestion":
            return (
              <CategorizeQuestion
                key={question.id}
                question={question}
                updateQuestion={updateQuestion}
                deleteQuestion={deleteQuestion}
              />
            );
          case "clozeQuestion":
            return (
              <ClozeQuestion
                key={question.id}
                question={question}
                updateQuestion={updateQuestion}
                deleteQuestion={deleteQuestion}
              />
            );
         
          case "comprehensionQuestion":
           return (
          <ComprehensionQuestion
          key={question.id}
           passage={question.text} // Use the `text` field as the passage
           updateQuestion={(updatedQuestion) => updateQuestion(question.id, updatedQuestion)}
           deleteQuestion={() => deleteQuestion(question.id)}
           addSubQuestion={()=>addSubQuestion(question.id)}
            textArea={question.text}
            onChange={(e) =>updateQuestion(question.id, { text: e.target.value })}
             />);

          default:
            return null;
        }
      })}
      <button onClick={() => setPreviewMode(true)}>Preview Form</button>
    </div>
  );
};

export default FormEditor;
