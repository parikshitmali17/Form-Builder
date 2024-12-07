
import React, { useState } from "react";

const ComprehensionQuestion = ({
  passage,
  updateQuestion,
  deleteQuestion,
  addSubQuestion,
  textArea,
  onChange,
  key,
}) => {
  const [subQuestions, setSubQuestions] = useState([]);

  const handleAddSubQuestion = () => {
    const newSubQuestion = {
      id: subQuestions.length + 1,
      text: "Type your question here",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    };
    setSubQuestions([...subQuestions, newSubQuestion]);
  };

  const handleEditSubQuestion = (id, field, value, optionIndex = null) => {
    const updatedSubQuestions = subQuestions.map((question) => {
      if (question.id === id) {
        if (field === "text") {
          question.text = value;
        } else if (field === "option" && optionIndex !== null) {
          question.options[optionIndex] = value;
        }
      }
      return question;
    });
    setSubQuestions(updatedSubQuestions);
  };

  return (
    <div>
      <div key={key} className="comprehension-question">
        <h3>Comprehension Question</h3>
        <textarea
          placeholder="Add comprehension passage here..."
          value={textArea}
          onChange={onChange}
        />
      </div>

      <div className="comprehension-question">
        <div className="passage">
          <h4>Passage:</h4>
          <p>{passage}</p>
        </div>

        {subQuestions.map((subQuestion) => (
          <div key={subQuestion.id} className="sub-question">
            <input
              type="text"
              value={subQuestion.text}
              onChange={(e) =>
                handleEditSubQuestion(subQuestion.id, "text", e.target.value)
              }
              className="question-text"
            />
            <div className="options">
              {subQuestion.options.map((option, index) => (
                <div key={index} className="option">
                  <input
                    type="radio"
                    name={`subQuestion-${subQuestion.id}`}
                    id={`option-${subQuestion.id}-${index}`}
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleEditSubQuestion(
                        subQuestion.id,
                        "option",
                        e.target.value,
                        index
                      )
                    }
                    className="option-text"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="subQuestion" onClick={handleAddSubQuestion}>Add Sub Question</button>
        <button  className="deleteQuestion" onClick={deleteQuestion}>Delete Question</button>
      </div>
    </div>
  );
};

export default ComprehensionQuestion;
