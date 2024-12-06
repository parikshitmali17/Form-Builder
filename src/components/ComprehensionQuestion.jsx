// import React, { useState } from 'react';

// const ComprehensionQuestion = ({ passage, updateQuestion, deleteQuestion }) => {
//   const [questions, setQuestions] = useState([]); // State to store multiple MCQ questions
//   const [newQuestionText, setNewQuestionText] = useState('');
//   const [newOptions, setNewOptions] = useState(['', '', '', '']); // Store options for new question
//   const [correctAnswer, setCorrectAnswer] = useState(null); // Track the correct option

//   const handleAddQuestion = () => {
//     if (newQuestionText.trim() !== '' && newOptions.every(opt => opt.trim() !== '') && correctAnswer !== null) {
//       const newQuestion = {
//         id: questions.length + 1,
//         text: newQuestionText,
//         options: newOptions,
//         correctAnswer: correctAnswer,
//       };
//       setQuestions([...questions, newQuestion]);
//       updateQuestion(newQuestion);
//       setNewQuestionText('');
//       setNewOptions(['', '', '', '']);
//       setCorrectAnswer(null);
//     }
//   };


//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newOptions];
//     updatedOptions[index] = value;
//     setNewOptions(updatedOptions);
//   };

//   const handleCorrectAnswerChange = (index) => {
//     setCorrectAnswer(index);
//   };

//   return (
//     <div className="comprehension-question">
//       <h3>Comprehension Question</h3>
//       <div className="passage">
//         <h4>Passage:</h4>
//         <p>{passage}</p>
//       </div>

//       <div className="add-question">
//         <h4>Add MCQ Question:</h4>
//         <textarea
//           placeholder="Type your question here"
//           value={newQuestionText}
//           onChange={(e) => setNewQuestionText(e.target.value)}
//         />

//         <div className="options">
//           {newOptions.map((option, index) => (
//             <div key={index} className="option-input">
//               <input
//                 type="text"
//                 placeholder={`Option ${index + 1}`}
//                 value={option}
//                 onChange={(e) => handleOptionChange(index, e.target.value)}
//               />
//               <input
//                 type="radio"
//                 name={`question-${questions.length + 1}`}
//                 checked={correctAnswer === index}
//                 onChange={() => handleCorrectAnswerChange(index)}
//               />
//               <span>Correct</span>
//             </div>
//           ))}
//         </div>

//         <button onClick={handleAddQuestion}>Add Question</button>
//       </div>

//       <div className="question-list">
//         <h4>MCQ Questions:</h4>
//         {questions.map((question) => (
//           <div key={question.id} className="question">
//             <p>{question.text}</p>
//             <ul>
//               {question.options.map((option, index) => (
//                 <li key={index}>
//                   {option} {question.correctAnswer === index && <strong>(Correct)</strong>}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>


//       <button onClick={() => deleteQuestion()}>Delete Question</button>
//     </div>
//   );
// };

// export default ComprehensionQuestion;



//444



// import React, { useState } from 'react';

// const ComprehensionQuestion = ({ passage, updateQuestion, deleteQuestion, addSubQuestion, textArea, onChange ,key}) => {
//   const [questions, setQuestions] = useState([]); // State to store multiple MCQ questions
//   const [newQuestionText, setNewQuestionText] = useState('');
//   const [newOptions, setNewOptions] = useState(['', '', '', '']); // Store options for new question
//   const [correctAnswer, setCorrectAnswer] = useState(null); // Track the correct option

//   const handleAddQuestion = () => {
//     if (newQuestionText.trim() !== '' && newOptions.every(opt => opt.trim() !== '') && correctAnswer !== null) {
//       const newQuestion = {
//         id: questions.length + 1,
//         text: newQuestionText,
//         options: newOptions,
//         correctAnswer: correctAnswer,
//       };
//       setQuestions([...questions, newQuestion]);
//       updateQuestion(newQuestion);
//       setNewQuestionText('');
//       setNewOptions(['', '', '', '']);
//       setCorrectAnswer(null);
//     }
//   };


//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newOptions];
//     updatedOptions[index] = value;
//     setNewOptions(updatedOptions);
//   };

//   const handleCorrectAnswerChange = (index) => {
//     setCorrectAnswer(index);
//   };

//   return (<div>
//      <div key={key} className="comprehension-question">
//                 <textarea
//                   placeholder="Add comprehension passage here..."
//                   value={textArea}
//                   onChange={onChange}
//                 />
//                 {/* <button onClick={() => addSubQuestion(question.id)}>
//                   Add Sub Question
//                 </button> */}
//               </div>

    
    

//     <div className="comprehension-question">
//       <h3>Comprehension Question</h3>
//       <div className="passage">
//         <h4>Passage:</h4>
//         <p>{passage}</p>
//       </div>

//       <div className="add-question">
//         <h4>Add MCQ Question:</h4>
//         <textarea
//           placeholder="Type your question here"
//           value={newQuestionText}
//           onChange={(e) => setNewQuestionText(e.target.value)}
//         />

//         <div className="options">
//           {newOptions.map((option, index) => (
//             <div key={index} className="option-input">
//               <input
//                 type="text"
//                 placeholder={`Option ${index + 1}`}
//                 value={option}
//                 onChange={(e) => handleOptionChange(index, e.target.value)}
//               />
//               <input
//                 type="radio"
//                 name={`question-${questions.length + 1}`}
//                 checked={correctAnswer === index}
//                 onChange={() => handleCorrectAnswerChange(index)}
//               />
//               <span>Correct</span>
//             </div>
//           ))}
//         </div>

//         <button onClick={handleAddQuestion}>Add Question</button>
//       </div>

//       <div className="question-list">
//         <h4>MCQ Questions:</h4>
//         {questions.map((question) => (
//           <div key={question.id} className="question">
//             <p>{question.text}</p>
//             <ul>
//               {question.options.map((option, index) => (
//                 <li key={index}>
//                   {option} {question.correctAnswer === index && <strong>(Correct)</strong>}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       <button onClick={() => addSubQuestion()}>
//                   Add Sub Question
//                 </button>
//       <button onClick={() => deleteQuestion()}>Delete Question</button>
//     </div>
//     </div>
//   );
// };

// export default ComprehensionQuestion;





////555555





// import React, { useState } from 'react';

// const ComprehensionQuestion = ({ passage, updateQuestion, deleteQuestion, addSubQuestion, textArea, onChange ,key}) => {
//   const [questions, setQuestions] = useState([]); // State to store multiple MCQ questions
//   const [newQuestionText, setNewQuestionText] = useState('');
//   const [newOptions, setNewOptions] = useState(['', '', '', '']); // Store options for new question
//   const [correctAnswer, setCorrectAnswer] = useState(null); // Track the correct option

//   const handleAddQuestion = () => {
//     if (newQuestionText.trim() !== '' && newOptions.every(opt => opt.trim() !== '') && correctAnswer !== null) {
//       const newQuestion = {
//         id: questions.length + 1,
//         text: newQuestionText,
//         options: newOptions,
//         correctAnswer: correctAnswer,
//       };
//       setQuestions([...questions, newQuestion]);
//       updateQuestion(newQuestion);
//       setNewQuestionText('');
//       setNewOptions(['', '', '', '']);
//       setCorrectAnswer(null);
//     }
//   };


//   const handleOptionChange = (index, value) => {
//     const updatedOptions = [...newOptions];
//     updatedOptions[index] = value;
//     setNewOptions(updatedOptions);
//   };

//   const handleCorrectAnswerChange = (index) => {
//     setCorrectAnswer(index);
//   };

//   return (<div>
//      <div key={key} className="comprehension-question">
//      <h3>Comprehension Question</h3>
//                 <textarea
//                   placeholder="Add comprehension passage here..."
//                   value={textArea}
//                   onChange={onChange}
//                 />
//                 {/* <button onClick={() => addSubQuestion(question.id)}>
//                   Add Sub Question
//                 </button> */}
//               </div>

    
    

//     <div className="comprehension-question">
      
//       <div className="passage">
//         <h4>Passage:</h4>
//         <p>{passage}</p>
//       </div>


//       <button onClick={() => addSubQuestion()}>
//                   Add Sub Question
//                 </button>
//       <button onClick={() => deleteQuestion()}>Delete Question</button>
//     </div>
//     </div>
//   );
// };

// export default ComprehensionQuestion;



//66666




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

        <button onClick={handleAddSubQuestion}>Add Sub Question</button>
        <button onClick={deleteQuestion}>Delete Question</button>
      </div>
    </div>
  );
};

export default ComprehensionQuestion;
