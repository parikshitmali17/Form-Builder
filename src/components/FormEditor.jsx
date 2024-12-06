// // import React, { useState } from "react";
// // import Question from "./Question";
// // import HeaderImage from "./HeaderImage";

// // const FormEditor = ({ setPreviewMode }) => {
// //   const [questions, setQuestions] = useState([]);
// //   const [headerImage, setHeaderImage] = useState("");

// //   const addQuestion = (type) => {
// //     setQuestions([
// //       ...questions,
// //       { id: Date.now(), type, text: "", options: [], image: "" },
// //     ]);
// //   };

// //   const updateQuestion = (id, updatedQuestion) => {
// //     setQuestions(
// //       questions.map((question) =>
// //         question.id === id ? { ...question, ...updatedQuestion } : question
// //       )
// //     );
// //   };

// //   const deleteQuestion = (id) => {
// //     setQuestions(questions.filter((question) => question.id !== id));
// //   };

// //   return (
// //     <div className="form-editor">
// //       <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
// //       <div className="add-question">
// //         <button onClick={() => addQuestion("text")}>Add Text Question</button>
// //         <button onClick={() => addQuestion("multipleChoice")}>
// //           Add Multiple Choice
// //         </button>
// //         <button onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
// //         <button onClick={() => addQuestion("dropdown")}>Add Dropdown</button>
// //       </div>
// //       {questions.map((question) => (
// //         <Question
// //           key={question.id}
// //           question={question}
// //           updateQuestion={updateQuestion}
// //           deleteQuestion={deleteQuestion}
// //         />
// //       ))}
// //       <button onClick={() => setPreviewMode(true)}>Preview Form</button>
// //     </div>
// //   );
// // };

// // export default FormEditor;



// // import React, { useState } from "react";
// // import Question from "./Question";
// // import HeaderImage from "./HeaderImage";

// // const FormEditor = ({ setPreviewMode }) => {
// //   const [questions, setQuestions] = useState([]);
// //   const [headerImage, setHeaderImage] = useState("");

// //   const addQuestion = (type) => {
// //     setQuestions([
// //       ...questions,
// //       { id: Date.now(), type, text: "", options: [], image: "" },
// //     ]);
// //   };

// //   const updateQuestion = (id, updatedQuestion) => {
// //     setQuestions(
// //       questions.map((question) =>
// //         question.id === id ? { ...question, ...updatedQuestion } : question
// //       )
// //     );
// //   };

// //   const deleteQuestion = (id) => {
// //     setQuestions(questions.filter((question) => question.id !== id));
// //   };

// //   return (
// //     <div className="form-editor">
// //       <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
// //       <div className="add-question">
// //         <button onClick={() => addQuestion("text")}>Add Text Question</button>
// //         <button onClick={() => addQuestion("multipleChoice")}>
// //           Add Multiple Choice
// //         </button>
// //         <button onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
// //         <button onClick={() => addQuestion("dropdown")}>Add Dropdown</button>
// //         <button onClick={() => addQuestion("categorizeQuestion")}>
// //           Add Categorize Question
// //         </button>
// //       </div>
// //       {questions.map((question) => (
// //         <Question
// //           key={question.id}
// //           question={question}
// //           updateQuestion={updateQuestion}
// //           deleteQuestion={deleteQuestion}
// //         />
// //       ))}
// //       <button onClick={() => setPreviewMode(true)}>Preview Form</button>
// //     </div>
// //   );
// // };

// // export default FormEditor;





// import React, { useState } from "react";
// import Question from "./Question";
// import HeaderImage from "./HeaderImage";
// import CategorizeQuestion from "./CategorizeQuestion";

// const FormEditor = ({ setPreviewMode }) => {
//   const [questions, setQuestions] = useState([]);
//   const [headerImage, setHeaderImage] = useState("");

//   const addQuestion = (type) => {
//     setQuestions([
//       ...questions,
//       { id: Date.now(), type, text: "", options: [], image: "" },
//     ]);
//   };

//   const updateQuestion = (id, updatedQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === id ? { ...question, ...updatedQuestion } : question
//       )
//     );
//   };

//   const deleteQuestion = (id) => {
//     setQuestions(questions.filter((question) => question.id !== id));
//   };

//   return (
//     <div className="form-editor">
//       <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
//       <div className="add-question">
//         <button onClick={() => addQuestion("text")}>Add Text Question</button>
//         <button onClick={() => addQuestion("multipleChoice")}>
//           Add Multiple Choice
//         </button>
//         <button onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
//         <button onClick={() => addQuestion("dropdown")}>Add Dropdown</button>
//         <button onClick={() => addQuestion("categorizeQuestion")}>
//           Add Categorize Question
//         </button>
//       </div>
//       {questions.map((question) =>
//         question.type === "categorizeQuestion" ? (
//           <CategorizeQuestion
//             key={question.id}
//             question={question}
//             updateQuestion={updateQuestion}
//             deleteQuestion={deleteQuestion}
//           />
//         ) : (
//           <Question
//             key={question.id}
//             question={question}
//             updateQuestion={updateQuestion}
//             deleteQuestion={deleteQuestion}
//           />
//         )
//       )}
//       <button onClick={() => setPreviewMode(true)}>Preview Form</button>
//     </div>
//   );
// };

// export default FormEditor;




// import React, { useState } from "react";
// import Question from "./Question";
// import HeaderImage from "./HeaderImage";
// import ClozeQuestion from "./ClozeQuestion"; // Import ClozeQuestion component
// import CategorizeQuestion from "./CategorizeQuestion";

// const FormEditor = ({ setPreviewMode }) => {
//   const [questions, setQuestions] = useState([]);
//   const [headerImage, setHeaderImage] = useState("");
//   const [showClozeQuestion, setShowClozeQuestion] = useState(false); // State to toggle ClozeQuestion visibility

//   const addQuestion = (type) => {
//     setQuestions([
//       ...questions,
//       { id: Date.now(), type, text: "", options: [], image: "" },
//     ]);
//   };

//   const updateQuestion = (id, updatedQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === id ? { ...question, ...updatedQuestion } : question
//       )
//     );
//   };

//   const deleteQuestion = (id) => {
//     setQuestions(questions.filter((question) => question.id !== id));
//   };

//   // Toggle the visibility of the ClozeQuestion component
//   const handleAddClozeQuestion = () => {
//     setShowClozeQuestion(!showClozeQuestion);
//   };

//   return (
//     <div className="form-editor">
//       <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
//       <div className="add-question">
//         <button onClick={() => addQuestion("text")}>Add Text Question</button>
//         <button onClick={() => addQuestion("multipleChoice")}>
//           Add Multiple Choice
//         </button>
//         <button onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
//         <button onClick={() => addQuestion("dropdown")}>Add Dropdown</button>
//         <button onClick={() => addQuestion("categorizeQuestion")}>
//           Add Categorize Question
//         </button>

//         {/* Add button for ClozeQuestion */}
//         <button onClick={handleAddClozeQuestion}>Add Cloze Question</button>
//       </div>

//       {/* Conditionally render the ClozeQuestion component */}
//       {showClozeQuestion && <ClozeQuestion />}

//       {questions.map((question) =>
//         question.type === "categorizeQuestion" ? (
//           <CategorizeQuestion
//             key={question.id}
//             question={question}
//             updateQuestion={updateQuestion}
//             deleteQuestion={deleteQuestion}
//           />
//         ) : (
//           <Question
//             key={question.id}
//             question={question}
//             updateQuestion={updateQuestion}
//             deleteQuestion={deleteQuestion}
//           />
//         )
//       )}
//       <button onClick={() => setPreviewMode(true)}>Preview Form</button>
//     </div>
//   );
// };

// export default FormEditor;


// import React, { useState } from "react";
// import Question from "./Question";
// import HeaderImage from "./HeaderImage";
// import CategorizeQuestion from "./CategorizeQuestion";
// import ClozeQuestion from "./ClozeQuestion"; // Import the ClozeQuestion component

// const FormEditor = ({ setPreviewMode }) => {
//   const [questions, setQuestions] = useState([]);
//   const [headerImage, setHeaderImage] = useState("");

//   const addQuestion = (type) => {
//     setQuestions([
//       ...questions,
//       { id: Date.now(), type, text: "", options: [], image: "" },
//     ]);
//   };

//   const updateQuestion = (id, updatedQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === id ? { ...question, ...updatedQuestion } : question
//       )
//     );
//   };

//   const deleteQuestion = (id) => {
//     setQuestions(questions.filter((question) => question.id !== id));
//   };

//   return (
//     <div className="form-editor">
//       <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
//       <div className="add-question">
//         <button onClick={() => addQuestion("text")}>Add Text Question</button>
//         <button onClick={() => addQuestion("multipleChoice")}>
//           Add Multiple Choice
//         </button>
//         <button onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
//         <button onClick={() => addQuestion("dropdown")}>Add Dropdown</button>
//         <button onClick={() => addQuestion("categorizeQuestion")}>
//           Add Categorize Question
//         </button>
//         <button onClick={() => addQuestion("clozeQuestion")}>
//           Add Cloze Question
//         </button>
//       </div>
//       {questions.map((question) =>
//         question.type === "categorizeQuestion" ? (
//           <CategorizeQuestion
//             key={question.id}
//             question={question}
//             updateQuestion={updateQuestion}
//             deleteQuestion={deleteQuestion}
//           />
//         ) : question.type === "clozeQuestion" ? (
//           <ClozeQuestion
//             key={question.id}
//             question={question}
//             updateQuestion={updateQuestion}
//             deleteQuestion={deleteQuestion}
//           />
//         ) : (
//           <Question
//             key={question.id}
//             question={question}
//             updateQuestion={updateQuestion}
//             deleteQuestion={deleteQuestion}
//           />
//         )
//       )}
//       <button onClick={() => setPreviewMode(true)}>Preview Form</button>
//     </div>
//   );
// };

// export default FormEditor;

// Yehaa walla asahi hai


// import React, { useState } from "react";
// import Question from "./Question";
// import HeaderImage from "./HeaderImage";
// import CategorizeQuestion from "./CategorizeQuestion";
// import ClozeQuestion from "./ClozeQuestion"; // Import the ClozeQuestion component

// const FormEditor = ({ setPreviewMode }) => {
//   const [questions, setQuestions] = useState([]);
//   const [headerImage, setHeaderImage] = useState("");

//   const addQuestion = (type) => {
//     setQuestions([
//       ...questions,
//       { id: Date.now(), type, text: "", options: [], image: "" },
//     ]);
//   };

//   const updateQuestion = (id, updatedQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === id ? { ...question, ...updatedQuestion } : question
//       )
//     );
//   };

//   const deleteQuestion = (id) => {
//     setQuestions(questions.filter((question) => question.id !== id));
//   };

//   return (
//     <div className="form-editor">
//       <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
//       <div className="add-question">
//         <button onClick={() => addQuestion("text")}>Add Text Question</button>
//         <button onClick={() => addQuestion("multipleChoice")}>
//           Add Multiple Choice
//         </button>
//         <button onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
//         <button onClick={() => addQuestion("dropdown")}>Add Dropdown</button>
//         <button onClick={() => addQuestion("categorizeQuestion")}>
//           Add Categorize Question
//         </button>
//         <button onClick={() => addQuestion("clozeQuestion")}>
//           Add Cloze Question
//         </button>
//         <button onClick={() => addQuestion("comprehensionQuestion")}>
//           Add Comprehension Question
//         </button>
//       </div>
//       {questions.map((question) => {
//         switch (question.type) {
//           case "categorizeQuestion":
//             return (
//               <CategorizeQuestion
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//           case "clozeQuestion":
//             return (
//               <ClozeQuestion
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//           case "comprehensionQuestion":
//             return (
//               <div key={question.id} className="comprehension-question">
//                 <textarea
//                   placeholder="Add comprehension passage here..."
//                   value={question.text}
//                   onChange={(e) =>
//                     updateQuestion(question.id, { text: e.target.value })
//                   }
//                 />
//                 <button onClick={() => deleteQuestion(question.id)}>
//                   Delete Comprehension Question
//                 </button>
//               </div>
//             );
//           default:
//             return (
//               <Question
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//         }
//       })}
//       <button onClick={() => setPreviewMode(true)}>Preview Form</button>
//     </div>
//   );
// };

// export default FormEditor;



// import React, { useState } from "react";
// import Question from "./Question";
// import HeaderImage from "./HeaderImage";
// import CategorizeQuestion from "./CategorizeQuestion";
// import ClozeQuestion from "./ClozeQuestion";

// const FormEditor = ({ setPreviewMode }) => {
//   const [questions, setQuestions] = useState([]);
//   const [headerImage, setHeaderImage] = useState("");

//   const addQuestion = (type) => {
//     setQuestions([
//       ...questions,
//       { id: Date.now(), type, text: "", options: [], subQuestions: [] },
//     ]);
//   };

//   const updateQuestion = (id, updatedQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === id ? { ...question, ...updatedQuestion } : question
//       )
//     );
//   };

//   const deleteQuestion = (id) => {
//     setQuestions(questions.filter((question) => question.id !== id));
//   };

//   const addSubQuestion = (questionId) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: [
//                 ...question.subQuestions,
//                 { id: Date.now(), text: "", options: [] },
//               ],
//             }
//           : question
//       )
//     );
//   };

//   const updateSubQuestion = (questionId, subQuestionId, updatedSubQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? { ...subQuestion, ...updatedSubQuestion }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   const addOption = (questionId, subQuestionId) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? {
//                       ...subQuestion,
//                       options: [...subQuestion.options, ""],
//                     }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   const updateOption = (questionId, subQuestionId, optionIndex, newOption) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? {
//                       ...subQuestion,
//                       options: subQuestion.options.map((option, index) =>
//                         index === optionIndex ? newOption : option
//                       ),
//                     }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   const deleteOption = (questionId, subQuestionId, optionIndex) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? {
//                       ...subQuestion,
//                       options: subQuestion.options.filter(
//                         (_, index) => index !== optionIndex
//                       ),
//                     }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   return (
//     <div className="form-editor">
//       <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
//       <div className="add-question">
//         <button onClick={() => addQuestion("text")}>Add Text Question</button>
//         <button onClick={() => addQuestion("multipleChoice")}>
//           Add Multiple Choice
//         </button>
//         <button onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
//         <button onClick={() => addQuestion("dropdown")}>Add Dropdown</button>
//         <button onClick={() => addQuestion("categorizeQuestion")}>
//           Add Categorize Question
//         </button>
//         <button onClick={() => addQuestion("clozeQuestion")}>
//           Add Cloze Question
//         </button>
//         <button onClick={() => addQuestion("comprehensionQuestion")}>
//           Add Comprehension Question
//         </button>
//       </div>
//       {questions.map((question) => {
//         if (question.type === "comprehensionQuestion") {
//           return (
//             <div key={question.id} className="comprehension-question">
//               <textarea
//                 placeholder="Add comprehension passage here..."
//                 value={question.text}
//                 onChange={(e) =>
//                   updateQuestion(question.id, { text: e.target.value })
//                 }
//               />
//               <button
//                 onClick={() => addSubQuestion(question.id)}
//                 className="add-subquestion"
//               >
//                 Add Sub Question
//               </button>
//               {question.subQuestions.map((subQuestion) => (
//                 <div key={subQuestion.id} className="sub-question">
//                   <input
//                     type="text"
//                     placeholder="Enter question text"
//                     value={subQuestion.text}
//                     onChange={(e) =>
//                       updateSubQuestion(question.id, subQuestion.id, {
//                         text: e.target.value,
//                       })
//                     }
//                   />
//                   <button
//                     onClick={() =>
//                       addOption(question.id, subQuestion.id)
//                     }
//                     className="add-option"
//                   >
//                     Add Option
//                   </button>
//                   {subQuestion.options.map((option, index) => (
//                     <div key={index} className="option">
//                       <input
//                         type="text"
//                         placeholder="Enter option text"
//                         value={option}
//                         onChange={(e) =>
//                           updateOption(
//                             question.id,
//                             subQuestion.id,
//                             index,
//                             e.target.value
//                           )
//                         }
//                       />
//                       <button
//                         onClick={() =>
//                           deleteOption(question.id, subQuestion.id, index)
//                         }
//                       >
//                         Delete Option
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           );
//         } else {
//           return (
//             <Question
//               key={question.id}
//               question={question}
//               updateQuestion={updateQuestion}
//               deleteQuestion={deleteQuestion}
//             />
//           );
//         }
//       })}
//       <button onClick={() => setPreviewMode(true)}>Preview Form</button>
//     </div>
//   );
// };

// export default FormEditor;


// import React, { useState } from "react";
// import Question from "./Question";
// import HeaderImage from "./HeaderImage";
// import CategorizeQuestion from "./CategorizeQuestion";
// import ClozeQuestion from "./ClozeQuestion";

// const FormEditor = ({ setPreviewMode }) => {
//   const [questions, setQuestions] = useState([]);
//   const [headerImage, setHeaderImage] = useState("");

//   const addQuestion = (type) => {
//     setQuestions([
//       ...questions,
//       {
//         id: Date.now(),
//         type,
//         text: "",
//         options: [],
//         image: "",
//         subQuestions: [],
//       },
//     ]);
//   };

//   const updateQuestion = (id, updatedQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === id ? { ...question, ...updatedQuestion } : question
//       )
//     );
//   };

//   const deleteQuestion = (id) => {
//     setQuestions(questions.filter((question) => question.id !== id));
//   };

//   const addSubQuestion = (id) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === id
//           ? {
//               ...question,
//               subQuestions: [
//                 ...question.subQuestions,
//                 {
//                   id: Date.now(),
//                   text: "",
//                   options: [],
//                 },
//               ],
//             }
//           : question
//       )
//     );
//   };

//   const updateSubQuestion = (questionId, subQuestionId, updatedSubQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? { ...subQuestion, ...updatedSubQuestion }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   const addOption = (questionId, subQuestionId) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? { ...subQuestion, options: [...subQuestion.options, ""] }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   const updateOption = (questionId, subQuestionId, optionIndex, newOption) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? {
//                       ...subQuestion,
//                       options: subQuestion.options.map((option, index) =>
//                         index === optionIndex ? newOption : option
//                       ),
//                     }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   const deleteOption = (questionId, subQuestionId, optionIndex) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? {
//                       ...subQuestion,
//                       options: subQuestion.options.filter(
//                         (_, index) => index !== optionIndex
//                       ),
//                     }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   return (
//     <div className="form-editor">
//       <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
//       <div className="add-question">
//         {/* <button onClick={() => addQuestion("text")}>Add Text Question</button>
//         <button onClick={() => addQuestion("multipleChoice")}>
//           Add Multiple Choice
//         </button>
//         <button onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
//         <button onClick={() => addQuestion("dropdown")}>Add Dropdown</button> */}
//         <button onClick={() => addQuestion("categorizeQuestion")}>
//           Add Categorize Question
//         </button>
//         <button onClick={() => addQuestion("clozeQuestion")}>
//           Add Cloze Question
//         </button>
//         <button onClick={() => addQuestion("comprehensionQuestion")}>
//           Add Comprehension Question
//         </button>
//       </div>
//       {questions.map((question) => {
//         if (question.type === "comprehensionQuestion") {
//           return (
//             <div key={question.id} className="comprehension-question">
//               <textarea
//                 placeholder="Add comprehension passage here..."
//                 value={question.text}
//                 onChange={(e) =>
//                   updateQuestion(question.id, { text: e.target.value })
//                 }
//               />
//               <button onClick={() => addSubQuestion(question.id)}>
//                 Add Sub Question
//               </button>
//               {question.subQuestions.map((subQuestion) => (
//                 <div key={subQuestion.id} className="sub-question">
//                   <input
//                     type="text"
//                     placeholder="Enter question text"
//                     value={subQuestion.text}
//                     onChange={(e) =>
//                       updateSubQuestion(question.id, subQuestion.id, {
//                         text: e.target.value,
//                       })
//                     }
//                   />
//                   <button
//                     onClick={() => addOption(question.id, subQuestion.id)}
//                   >
//                     Add Option
//                   </button>
//                   {subQuestion.options.map((option, index) => (
//                     <div key={index} className="option">
//                       <input
//                         type="text"
//                         placeholder="Enter option text"
//                         value={option}
//                         onChange={(e) =>
//                           updateOption(
//                             question.id,
//                             subQuestion.id,
//                             index,
//                             e.target.value
//                           )
//                         }
//                       />
//                       <button
//                         onClick={() =>
//                           deleteOption(question.id, subQuestion.id, index)
//                         }
//                       >
//                         Delete Option
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//               <button onClick={() => deleteQuestion(question.id)}>
//                 Delete Comprehension Question
//               </button>
//             </div>
//           );
//         }

//         switch (question.type) {
//           case "categorizeQuestion":
//             return (
//               <CategorizeQuestion
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//           case "clozeQuestion":
//             return (
//               <ClozeQuestion
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//           default:
//             return (
//               <Question
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//         }
//       })}
//       <button onClick={() => setPreviewMode(true)}>Preview Form</button>
//     </div>
//   );
// };

// export default FormEditor;



//22

// import React from "react";
// import Question from "./Question";
// import HeaderImage from "./HeaderImage";
// import CategorizeQuestion from "./CategorizeQuestion";
// import ClozeQuestion from "./ClozeQuestion";

// const FormEditor = ({
//   questions,
//   setQuestions,
//   headerImage,
//   setHeaderImage,
//   setPreviewMode,
// }) => {
//   const addQuestion = (type) => {
//     setQuestions([
//       ...questions,
//       {
//         id: Date.now(),
//         type,
//         text: "",
//         options: [],
//         image: "",
//         subQuestions: [],
//       },
//     ]);
//   };

//   const updateQuestion = (id, updatedQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === id ? { ...question, ...updatedQuestion } : question
//       )
//     );
//   };

//   const deleteQuestion = (id) => {
//     setQuestions(questions.filter((question) => question.id !== id));
//   };

//   const addSubQuestion = (id) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === id
//           ? {
//               ...question,
//               subQuestions: [
//                 ...question.subQuestions,
//                 {
//                   id: Date.now(),
//                   text: "",
//                   options: [],
//                 },
//               ],
//             }
//           : question
//       )
//     );
//   };

//   const updateSubQuestion = (questionId, subQuestionId, updatedSubQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? { ...subQuestion, ...updatedSubQuestion }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   const addOption = (questionId, subQuestionId) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? { ...subQuestion, options: [...subQuestion.options, ""] }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   const updateOption = (questionId, subQuestionId, optionIndex, newOption) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? {
//                       ...subQuestion,
//                       options: subQuestion.options.map((option, index) =>
//                         index === optionIndex ? newOption : option
//                       ),
//                     }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   const deleteOption = (questionId, subQuestionId, optionIndex) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === questionId
//           ? {
//               ...question,
//               subQuestions: question.subQuestions.map((subQuestion) =>
//                 subQuestion.id === subQuestionId
//                   ? {
//                       ...subQuestion,
//                       options: subQuestion.options.filter(
//                         (_, index) => index !== optionIndex
//                       ),
//                     }
//                   : subQuestion
//               ),
//             }
//           : question
//       )
//     );
//   };

//   return (
//     <div className="form-editor">
//       <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
//       <div className="add-question">
//         <button onClick={() => addQuestion("categorizeQuestion")}>
//           Add Categorize Question
//         </button>
//         <button onClick={() => addQuestion("clozeQuestion")}>
//           Add Cloze Question
//         </button>
//         <button onClick={() => addQuestion("comprehensionQuestion")}>
//           Add Comprehension Question
//         </button>
//       </div>
//       {questions.map((question) => {
//         if (question.type === "comprehensionQuestion") {
//           return (
//             <div key={question.id} className="comprehension-question">
//               <textarea
//                 placeholder="Add comprehension passage here..."
//                 value={question.text}
//                 onChange={(e) =>
//                   updateQuestion(question.id, { text: e.target.value })
//                 }
//               />
//               <button onClick={() => addSubQuestion(question.id)}>
//                 Add Sub Question
//               </button>
//               {question.subQuestions.map((subQuestion) => (
//                 <div key={subQuestion.id} className="sub-question">
//                   <input
//                     type="text"
//                     placeholder="Enter question text"
//                     value={subQuestion.text}
//                     onChange={(e) =>
//                       updateSubQuestion(question.id, subQuestion.id, {
//                         text: e.target.value,
//                       })
//                     }
//                   />
//                   <button
//                     onClick={() => addOption(question.id, subQuestion.id)}
//                   >
//                     Add Option
//                   </button>
//                   {subQuestion.options.map((option, index) => (
//                     <div key={index} className="option">
//                       <input
//                         type="text"
//                         placeholder="Enter option text"
//                         value={option}
//                         onChange={(e) =>
//                           updateOption(
//                             question.id,
//                             subQuestion.id,
//                             index,
//                             e.target.value
//                           )
//                         }
//                       />
//                       <button
//                         onClick={() =>
//                           deleteOption(question.id, subQuestion.id, index)
//                         }
//                       >
//                         Delete Option
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//               <button onClick={() => deleteQuestion(question.id)}>
//                 Delete Comprehension Question
//               </button>
//             </div>
//           );
//         }

//         switch (question.type) {
//           case "categorizeQuestion":
//             return (
//               <CategorizeQuestion
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//           case "clozeQuestion":
//             return (
//               <ClozeQuestion
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//           default:
//             return (
//               <Question
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//         }
//       })}
//       <button onClick={() => setPreviewMode(true)}>Preview Form</button>
//     </div>
//   );
// };

// export default FormEditor;




//33

// import React from "react";
// import Question from "./Question";
// import HeaderImage from "./HeaderImage";
// import CategorizeQuestion from "./CategorizeQuestion";
// import ClozeQuestion from "./ClozeQuestion";
// import ComprehensionQuestion from "./ComprehensionQuestion";

// const FormEditor = ({ questions, setQuestions, setPreviewMode, headerImage, setHeaderImage }) => {
//   const addQuestion = (type) => {
//     setQuestions([
//       ...questions,
//       {
//         id: Date.now(),
//         type,
//         text: "",
//         options: [],
//         image: "",
//         subQuestions: [],
//       },
//     ]);
//   };

//   const updateQuestion = (id, updatedQuestion) => {
//     setQuestions(
//       questions.map((question) =>
//         question.id === id ? { ...question, ...updatedQuestion } : question
//       )
//     );
//   };

//   const deleteQuestion = (id) => {
//     setQuestions(questions.filter((question) => question.id !== id));
//   };

//   const addSubQuestion = (id) => {
//     console.log("Before adding subquestion:", questions);
//     setQuestions(
//       questions.map((question) =>
//         question.id === id
//           ? {
//               ...question,
//               subQuestions: [
//                 ...question.subQuestions,
//                 { id: Date.now(), text: "", options: [] },
//               ],
//             }
//           : question
//       )
//     );
//     console.log("After adding subquestion:", questions);
//   };

//   return (
//     <div className="form-editor">
//       <HeaderImage headerImage={headerImage} setHeaderImage={setHeaderImage} />
//       <div className="add-question">
//         <button onClick={() => addQuestion("categorizeQuestion")}>
//           Add Categorize Question
//         </button>
//         <button onClick={() => addQuestion("clozeQuestion")}>
//           Add Cloze Question
//         </button>
//         <button onClick={() => addQuestion("comprehensionQuestion")}>
//           Add Comprehension Question
//         </button>
//       </div>
//       {questions.map((question) => {
//         switch (question.type) {
//           case "categorizeQuestion":
//             return (
//               <CategorizeQuestion
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//           case "clozeQuestion":
//             return (
//               <ClozeQuestion
//                 key={question.id}
//                 question={question}
//                 updateQuestion={updateQuestion}
//                 deleteQuestion={deleteQuestion}
//               />
//             );
//           case "comprehensionQuestion":
//             return (
//               <div key={question.id} className="comprehension-question">
//                 <textarea
//                   placeholder="Add comprehension passage here..."
//                   value={question.text}
//                   onChange={(e) =>
//                     updateQuestion(question.id, { text: e.target.value })
//                   }
//                 />
//                 <button onClick={() => addSubQuestion(question.id)}>
//                   Add Sub Question
//                 </button>
//               </div>
//             );
//   //         case "comprehensionQuestion":
//   // return (
//   //   <ComprehensionQuestion
//   //     key={question.id}
//   //     passage={question.text} // Use the `text` field as the passage
//   //     updateQuestion={(updatedQuestion) => updateQuestion(question.id, updatedQuestion)}
//   //     deleteQuestion={() => deleteQuestion(question.id)}
//   //   />
//   // );

//           default:
//             return null;
//         }
//       })}
//       <button onClick={() => setPreviewMode(true)}>Preview Form</button>
//     </div>
//   );
// };

// export default FormEditor;




//4444




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
