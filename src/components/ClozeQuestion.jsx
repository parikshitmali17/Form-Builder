
import React, { useState } from "react";

const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
  const [questionText, setQuestionText] = useState(
    question.text || "The quick brown fox jumps over the lazy dog"
  );
  const [options, setOptions] = useState(question.options || []);
  const [newOptionText, setNewOptionText] = useState(""); // State for new option input

  const handleUnderline = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      const newOption = { id: options.length + 1, text: selectedText, checked: false };
      setOptions((prevOptions) => [...prevOptions, newOption]);

      const updatedText = questionText.replace(
        selectedText,
        `<span class="blank" data-id="${newOption.id}">____</span>`
      );
      setQuestionText(updatedText);

      updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
    }
  };

  const handleAddOption = () => {
    if (newOptionText.trim() !== "") {
      const newOption = { id: options.length + 1, text: newOptionText, checked: false };
      setOptions((prevOptions) => [...prevOptions, newOption]);
      updateQuestion(question.id, { options: [...options, newOption] });
      setNewOptionText(""); // Clear input field after adding
    }
  };

  const toggleCheckbox = (id) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    );
    updateQuestion(question.id, {
      options: options.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      ),
    });
  };

  return (
    <div className="cloze-question">
      <h3>Cloze Fill-in-the-Blank Question</h3>
      <div className="question-text-container">
      <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
      <button  className="underline-button" onClick={handleUnderline}>Select Text and Click Buttom to Create Blank</button>
      </div>
      <div className="add-option">
        <input
          type="text"
          placeholder="Type a new option and press Add"
          value={newOptionText}
          onChange={(e) => setNewOptionText(e.target.value)}
        />
        <button onClick={handleAddOption}>Add Option</button>
      </div>

      <div className="options">
        <h4>Options:</h4>
        {options.map((option) => (
          <div key={option.id} className="option">
            <label>
              <input
                type="checkbox"
                checked={option.checked}
                onChange={() => toggleCheckbox(option.id)}
              />
              {option.text}
            </label>
          </div>
        ))}
      </div>

      <button id="deleteQ" onClick={() => deleteQuestion(question.id)}>Delete Question</button>
    </div>
  );
};

export default ClozeQuestion;