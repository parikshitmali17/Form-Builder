
import React from "react";

const Question = ({ question, updateQuestion, deleteQuestion }) => {
  if (!question) {
    console.error("Question prop is undefined.");
    return <div>Error: Question data is not available.</div>;
  }

  const handleTextChange = (e) => {
    updateQuestion(question.id, { text: e.target.value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = question.options ? [...question.options] : [];
    updatedOptions[index] = value;
    updateQuestion(question.id, { options: updatedOptions });
  };

  const handleAddOption = () => {
    const updatedOptions = question.options ? [...question.options, ""] : [""];
    updateQuestion(question.id, { options: updatedOptions });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateQuestion(question.id, { image: imageUrl });
    }
  };

  return (
    <div className="question">
      <input
        type="text"
        placeholder="Question text"
        value={question.text || ""}
        onChange={handleTextChange}
      />
      {question.type !== "text" && question.options && (
        <>
          {question.options.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option || ""}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          ))}
          <button onClick={handleAddOption}>Add Option</button>
        </>
      )}
      <input type="file" onChange={handleImageUpload} />
      {question.image && <img src={question.image} alt="Question" />}
      <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
    </div>
  );
};

export default Question;
