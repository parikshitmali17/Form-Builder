import React from "react";

const FormFill = ({ headerImage, questions }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Capture form responses here
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-fill">
      {headerImage && <img src={headerImage} alt="Header" />}
      {questions.map((question) => (
        <div key={question.id} className="question-fill">
          <p>{question.text}</p>
          {question.image && <img src={question.image} alt="Question" />}
          {question.type === "text" && (
            <input type="text" placeholder="Your answer" />
          )}
          {question.type !== "text" &&
            question.options.map((option, index) => (
              <div key={index}>
                <input type={question.type === "checkbox" ? "checkbox" : "radio"} />
                <label>{option}</label>
              </div>
            ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormFill;
