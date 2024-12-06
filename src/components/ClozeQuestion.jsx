// import React, { useState } from "react";

// const ClozeQuestion = () => {
//   const [questionText, setQuestionText] = useState("The quick brown fox jumps over the lazy dog.");
//   const [options, setOptions] = useState([]);
//   const [userAnswer, setUserAnswer] = useState([]);

//   // Handle underline and blank creation
//   const handleUnderline = (e) => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, answer: "" };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(selectedText, `<span class="blank" data-id="${newOption.id}">____</span>`);
//       setQuestionText(updatedText);
//     }
//   };

//   // Handle user answer selection
//   const handleOptionChange = (id, value) => {
//     setUserAnswer((prevAnswers) => {
//       const updatedAnswers = prevAnswers.filter((answer) => answer.id !== id);
//       updatedAnswers.push({ id, value });
//       return updatedAnswers;
//     });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>

//       {/* Render question with underlined blanks */}
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />

//       {/* Render options */}
//       <div className="options">
//         <h4>Select the correct answers:</h4>
//         {options.map((option) => (
//           <div key={option.id} className="option">
//             <label>{`Fill the blank for: "${option.text}"`}</label>
//             <input
//               type="text"
//               placeholder="Enter your answer"
//               value={userAnswer.find((answer) => answer.id === option.id)?.value || ""}
//               onChange={(e) => handleOptionChange(option.id, e.target.value)}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Button to underline selected text */}
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>
//     </div>
//   );
// };

// export default ClozeQuestion;






// import React, { useState } from "react";

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(question.text || "The quick brown fox jumps over the lazy dog");
//   const [options, setOptions] = useState(question.options || []);
//   const [userAnswer, setUserAnswer] = useState([]);

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, answer: "" };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(selectedText, `<span class="blank" data-id="${newOption.id}">____</span>`);
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const handleOptionChange = (id, value) => {
//     setUserAnswer((prevAnswers) => {
//       const updatedAnswers = prevAnswers.filter((answer) => answer.id !== id);
//       updatedAnswers.push({ id, value });
//       return updatedAnswers;
//     });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <div className="options">
//         <h4>Select the correct answers:</h4>
//         {options.map((option) => (
//           <div key={option.id} className="option">
//             <label>{`Fill the blank for: "${option.text}"`}</label>
//             <input
//               type="text"
//               placeholder="Enter your answer"
//               value={userAnswer.find((answer) => answer.id === option.id)?.value || ""}
//               onChange={(e) => handleOptionChange(option.id, e.target.value)}
//             />
//           </div>
//         ))}
//       </div>
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>
//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;




// import React, { useState } from "react";

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(
//     question.text || "The quick brown fox jumps over the lazy dog"
//   );
//   const [options, setOptions] = useState(question.options || []);
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(
//         selectedText,
//         `<span class="blank" data-id="${newOption.id}">____</span>`
//       );
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const toggleCheckbox = (id) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     updateQuestion(question.id, {
//       options: options.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       ),
//     });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>
//       <div className="options">
//         <h4>Options:</h4>
//         {options.map((option) => (
//           <div key={option.id} className="option">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={option.checked}
//                 onChange={() => toggleCheckbox(option.id)}
//               />
//               {option.text}
//             </label>
//           </div>
//         ))}
//       </div>
//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;









// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(
//     question.text || "The quick brown fox jumps over the lazy dog"
//   );
//   const [options, setOptions] = useState(question.options || []);
//   const [newOptionText, setNewOptionText] = useState(""); // State for new option input

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(
//         selectedText,
//         `<span class="blank" data-id="${newOption.id}">____</span>`
//       );
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const handleAddOption = () => {
//     if (newOptionText.trim() !== "") {
//       const newOption = { id: options.length + 1, text: newOptionText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);
//       updateQuestion(question.id, { options: [...options, newOption] });
//       setNewOptionText(""); // Clear input field after adding
//     }
//   };

//   const toggleCheckbox = (id) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     updateQuestion(question.id, {
//       options: options.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       ),
//     });
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return; // If dropped outside the list

//     const reorderedOptions = Array.from(options);
//     const [movedItem] = reorderedOptions.splice(result.source.index, 1);
//     reorderedOptions.splice(result.destination.index, 0, movedItem);

//     setOptions(reorderedOptions);
//     updateQuestion(question.id, { options: reorderedOptions });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>

//       <div className="add-option">
//         <input
//           type="text"
//           placeholder="Type a new option and press Add"
//           value={newOptionText}
//           onChange={(e) => setNewOptionText(e.target.value)}
//         />
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>

//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="options-list">
//           {(provided) => (
//             <div
//               className="options"
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//             >
//               <h4>Options (Drag to reorder):</h4>
//               {options.map((option, index) => (
//                 <Draggable key={option.id} draggableId={option.id.toString()} index={index}>
//                   {(provided) => (
//                     <div
//                       className="option"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <label>
//                         <input
//                           type="checkbox"
//                           checked={option.checked}
//                           onChange={() => toggleCheckbox(option.id)}
//                         />
//                         {option.text}
//                       </label>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>

//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;


// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(
//     question.text || "The quick brown fox jumps over the lazy dog"
//   );
//   const [options, setOptions] = useState(question.options || []);
//   const [newOptionText, setNewOptionText] = useState(""); // State for new option input

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(
//         selectedText,
//         `<span class="blank" data-id="${newOption.id}">____</span>`
//       );
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const handleAddOption = () => {
//     if (newOptionText.trim() !== "") {
//       const newOption = { id: options.length + 1, text: newOptionText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);
//       updateQuestion(question.id, { options: [...options, newOption] });
//       setNewOptionText(""); // Clear input field after adding
//     }
//   };

//   const toggleCheckbox = (id) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     updateQuestion(question.id, {
//       options: options.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       ),
//     });
//   };

//   const onDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedOptions = Array.from(options);
//     const [movedOption] = reorderedOptions.splice(result.source.index, 1);
//     reorderedOptions.splice(result.destination.index, 0, movedOption);

//     setOptions(reorderedOptions);
//     updateQuestion(question.id, { options: reorderedOptions });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>

//       <div className="add-option">
//         <input
//           type="text"
//           placeholder="Type a new option and press Add"
//           value={newOptionText}
//           onChange={(e) => setNewOptionText(e.target.value)}
//         />
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>

//       <div className="options">
//         <h4>Options:</h4>
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="options">
//             {(provided) => (
//               <div
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//                 style={{ display: "flex", flexDirection: "column", gap: "10px" }}
//               >
//                 {options.map((option, index) => (
//                   <Draggable key={option.id} draggableId={`${option.id}`} index={index}>
//                     {(provided) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         className="option"
//                         style={{
//                           padding: "10px",
//                           border: "1px solid #ccc",
//                           borderRadius: "5px",
//                           backgroundColor: "#f9f9f9",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "space-between",
//                           ...provided.draggableProps.style,
//                         }}
//                       >
//                         <label>
//                           <input
//                             type="checkbox"
//                             checked={option.checked}
//                             onChange={() => toggleCheckbox(option.id)}
//                           />
//                           {option.text}
//                         </label>
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </div>

//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;



// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(
//     question.text || "The quick brown fox jumps over the lazy dog"
//   );
//   const [options, setOptions] = useState(question.options || []);
//   const [newOptionText, setNewOptionText] = useState(""); // State for new option input

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(
//         selectedText,
//         `<span class="blank" data-id="${newOption.id}">____</span>`
//       );
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const handleAddOption = () => {
//     if (newOptionText.trim() !== "") {
//       const newOption = { id: options.length + 1, text: newOptionText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);
//       updateQuestion(question.id, { options: [...options, newOption] });
//       setNewOptionText(""); // Clear input field after adding
//     }
//   };

//   const toggleCheckbox = (id) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     updateQuestion(question.id, {
//       options: options.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       ),
//     });
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedOptions = Array.from(options);
//     const [movedOption] = reorderedOptions.splice(result.source.index, 1);
//     reorderedOptions.splice(result.destination.index, 0, movedOption);

//     setOptions(reorderedOptions);
//     updateQuestion(question.id, { options: reorderedOptions });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>

//       <div className="add-option">
//         <input
//           type="text"
//           placeholder="Type a new option and press Add"
//           value={newOptionText}
//           onChange={(e) => setNewOptionText(e.target.value)}
//         />
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>

//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="options-list">
//           {(provided) => (
//             <div
//               className="options"
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//             >
//               <h4>Options (Drag to reorder):</h4>
//               {options.map((option, index) => (
//                 <Draggable
//                   key={option.id}
//                   draggableId={option.id.toString()}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <div
//                       className="option"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <label>
//                         <input
//                           type="checkbox"
//                           checked={option.checked}
//                           onChange={() => toggleCheckbox(option.id)}
//                         />
//                         {option.text}
//                       </label>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>

//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;






// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(
//     question.text || "The quick brown fox jumps over the lazy dog"
//   );
//   const [options, setOptions] = useState(question.options || []);
//   const [newOptionText, setNewOptionText] = useState(""); // State for new option input

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(
//         selectedText,
//         `<span class="blank" data-id="${newOption.id}">____</span>`
//       );
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const handleAddOption = () => {
//     if (newOptionText.trim() !== "") {
//       const newOption = { id: options.length + 1, text: newOptionText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);
//       updateQuestion(question.id, { options: [...options, newOption] });
//       setNewOptionText(""); // Clear input field after adding
//     }
//   };

//   const toggleCheckbox = (id) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     updateQuestion(question.id, {
//       options: options.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       ),
//     });
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedOptions = Array.from(options);
//     const [movedOption] = reorderedOptions.splice(result.source.index, 1);
//     reorderedOptions.splice(result.destination.index, 0, movedOption);

//     setOptions(reorderedOptions);
//     updateQuestion(question.id, { options: reorderedOptions });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>

//       <div className="add-option">
//         <input
//           type="text"
//           placeholder="Type a new option and press Add"
//           value={newOptionText}
//           onChange={(e) => setNewOptionText(e.target.value)}
//         />
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>

//       {/* Drag-and-Drop Context */}
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="options-list">
//           {(provided) => (
//             <div
//               className="options"
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//             >
//               <h4>Options (Drag to reorder):</h4>
//               {options.map((option, index) => (
//                 <Draggable
//                   key={option.id}
//                   draggableId={option.id.toString()}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <div
//                       className="option"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <label>
//                         <input
//                           type="checkbox"
//                           checked={option.checked}
//                           onChange={() => toggleCheckbox(option.id)}
//                         />
//                         {option.text}
//                       </label>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>

//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;



// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(
//     question.text || "The quick brown fox jumps over the lazy dog"
//   );
//   const [options, setOptions] = useState(question.options || []);
//   const [newOptionText, setNewOptionText] = useState(""); // State for new option input

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(
//         selectedText,
//         `<span class="blank" data-id="${newOption.id}">____</span>`
//       );
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const handleAddOption = () => {
//     if (newOptionText.trim() !== "") {
//       const newOption = { id: options.length + 1, text: newOptionText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);
//       updateQuestion(question.id, { options: [...options, newOption] });
//       setNewOptionText(""); // Clear input field after adding
//     }
//   };

//   const toggleCheckbox = (id) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     updateQuestion(question.id, {
//       options: options.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       ),
//     });
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedOptions = Array.from(options);
//     const [movedOption] = reorderedOptions.splice(result.source.index, 1);
//     reorderedOptions.splice(result.destination.index, 0, movedOption);

//     setOptions(reorderedOptions);
//     updateQuestion(question.id, { options: reorderedOptions });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>

//       <div className="add-option">
//         <input
//           type="text"
//           placeholder="Type a new option and press Add"
//           value={newOptionText}
//           onChange={(e) => setNewOptionText(e.target.value)}
//         />
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>

//       {/* Wrap the whole list in DragDropContext and ensure proper rendering */}
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="options-list">
//           {(provided) => (
//             <div
//               className="options"
//               ref={provided.innerRef} // Important to assign ref for droppable
//               {...provided.droppableProps}
//             >
//               <h4>Options (Drag to reorder):</h4>
//               {options.map((option, index) => (
//                 <Draggable
//                   key={option.id}
//                   draggableId={option.id.toString()}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <div
//                       className="option"
//                       ref={provided.innerRef} // Important to assign ref for draggable
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <label>
//                         <input
//                           type="checkbox"
//                           checked={option.checked}
//                           onChange={() => toggleCheckbox(option.id)}
//                         />
//                         {option.text}
//                       </label>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder} {/* Ensure placeholder is rendered */}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>

//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;



// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(
//     question?.text || "The quick brown fox jumps over the lazy dog"
//   );
//   const [options, setOptions] = useState(question?.options || []);
//   const [newOptionText, setNewOptionText] = useState(""); // State for new option input

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(
//         selectedText,
//         `<span class="blank" data-id="${newOption.id}">____</span>`
//       );
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const handleAddOption = () => {
//     if (newOptionText.trim() !== "") {
//       const newOption = { id: options.length + 1, text: newOptionText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);
//       updateQuestion(question.id, { options: [...options, newOption] });
//       setNewOptionText(""); // Clear input field after adding
//     }
//   };

//   const toggleCheckbox = (id) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     updateQuestion(question.id, {
//       options: options.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       ),
//     });
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedOptions = Array.from(options);
//     const [movedOption] = reorderedOptions.splice(result.source.index, 1);
//     reorderedOptions.splice(result.destination.index, 0, movedOption);

//     setOptions(reorderedOptions);
//     updateQuestion(question.id, { options: reorderedOptions });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>

//       <div className="add-option">
//         <input
//           type="text"
//           placeholder="Type a new option and press Add"
//           value={newOptionText}
//           onChange={(e) => setNewOptionText(e.target.value)}
//         />
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>

//       {/* DragDropContext should wrap the entire section where you want drag-and-drop */}
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="options-list">
//           {(provided) => (
//             <div
//               className="options"
//               ref={provided.innerRef} // Ref must be assigned here
//               {...provided.droppableProps}
//             >
//               <h4>Options (Drag to reorder):</h4>
//               {options.map((option, index) => (
//                 <Draggable
//                   key={option.id}
//                   draggableId={option.id.toString()}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <div
//                       className="option"
//                       ref={provided.innerRef} // Ref must be assigned here as well
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <label>
//                         <input
//                           type="checkbox"
//                           checked={option.checked}
//                           onChange={() => toggleCheckbox(option.id)}
//                         />
//                         {option.text}
//                       </label>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder} {/* Placeholder for reordering */}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>

//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;



// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(
//     question.text || "The quick brown fox jumps over the lazy dog"
//   );
//   const [options, setOptions] = useState(question.options || []);
//   const [newOptionText, setNewOptionText] = useState(""); // State for new option input

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(
//         selectedText,
//         `<span class="blank" data-id="${newOption.id}">____</span>`
//       );
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const handleAddOption = () => {
//     if (newOptionText.trim() !== "") {
//       const newOption = { id: options.length + 1, text: newOptionText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);
//       updateQuestion(question.id, { options: [...options, newOption] });
//       setNewOptionText(""); // Clear input field after adding
//     }
//   };

//   const toggleCheckbox = (id) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     updateQuestion(question.id, {
//       options: options.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       ),
//     });
//   };

//   const handleDragEnd = (result) => {
//     const { source, destination } = result;

//     // If dropped outside the droppable area
//     if (!destination) return;

//     // Reordering the options array based on the drag result
//     const reorderedOptions = Array.from(options);
//     const [movedOption] = reorderedOptions.splice(source.index, 1);
//     reorderedOptions.splice(destination.index, 0, movedOption);

//     setOptions(reorderedOptions);
//     updateQuestion(question.id, { options: reorderedOptions });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>

//       <div className="add-option">
//         <input
//           type="text"
//           placeholder="Type a new option and press Add"
//           value={newOptionText}
//           onChange={(e) => setNewOptionText(e.target.value)}
//         />
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>

//       {/* React Beautiful DnD Context */}
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="options-list">
//           {(provided) => (
//             <div
//               className="options"
//               ref={provided.innerRef} // Ref must be assigned here
//               {...provided.droppableProps}
//             >
//               <h4>Options (Drag to reorder):</h4>
//               {options.map((option, index) => (
//                 <Draggable key={option.id} draggableId={option.id.toString()} index={index}>
//                   {(provided) => (
//                     <div
//                       className="option"
//                       ref={provided.innerRef} // Ref must be assigned here as well
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <label>
//                         <input
//                           type="checkbox"
//                           checked={option.checked}
//                           onChange={() => toggleCheckbox(option.id)}
//                         />
//                         {option.text}
//                       </label>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder} {/* Placeholder for reordering */}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>

//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;


// import React, { useState } from "react"; 

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(
//     question.text || "The quick brown fox jumps over the lazy dog"
//   );
//   const [options, setOptions] = useState(question.options || []);
//   const [newOptionText, setNewOptionText] = useState(""); // State for new option input

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(
//         selectedText,
//         <span class="blank" data-id="${newOption.id}">____</span>
//       );
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const handleAddOption = () => {
//     if (newOptionText.trim() !== "") {
//       const newOption = { id: options.length + 1, text: newOptionText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);
//       updateQuestion(question.id, { options: [...options, newOption] });
//       setNewOptionText(""); // Clear input field after adding
//     }
//   };

//   const toggleCheckbox = (id) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     updateQuestion(question.id, {
//       options: options.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       ),
//     });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>

//       <div className="add-option">
//         <input
//           type="text"
//           placeholder="Type a new option and press Add"
//           value={newOptionText}
//           onChange={(e) => setNewOptionText(e.target.value)}
//         />
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>

//       <div className="options">
//         <h4>Options:</h4>
//         {options.map((option) => (
//           <div key={option.id} className="option">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={option.checked}
//                 onChange={() => toggleCheckbox(option.id)}
//               />
//               {option.text}
//             </label>
//           </div>
//         ))}
//       </div>

//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;




// import React, { useState } from "react";

// const ClozeQuestion = ({ question, updateQuestion, deleteQuestion }) => {
//   const [questionText, setQuestionText] = useState(
//     question.text || "The quick brown fox jumps over the lazy dog"
//   );
//   const [options, setOptions] = useState(question.options || []);
//   const [newOptionText, setNewOptionText] = useState(""); // State for new option input

//   const handleUnderline = () => {
//     const selectedText = window.getSelection().toString();
//     if (selectedText) {
//       const newOption = { id: options.length + 1, text: selectedText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);

//       const updatedText = questionText.replace(
//         selectedText,
//         `<span class="blank" data-id="${newOption.id}">____</span>`
//       );
//       setQuestionText(updatedText);

//       updateQuestion(question.id, { text: updatedText, options: [...options, newOption] });
//     }
//   };

//   const handleAddOption = () => {
//     if (newOptionText.trim() !== "") {
//       const newOption = { id: options.length + 1, text: newOptionText, checked: false };
//       setOptions((prevOptions) => [...prevOptions, newOption]);
//       updateQuestion(question.id, { options: [...options, newOption] });
//       setNewOptionText(""); // Clear input field after adding
//     }
//   };

//   const toggleCheckbox = (id) => {
//     setOptions((prevOptions) =>
//       prevOptions.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//     updateQuestion(question.id, {
//       options: options.map((option) =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       ),
//     });
//   };

//   return (
//     <div className="cloze-question">
//       <h3>Cloze Fill-in-the-Blank Question</h3>
//       <div className="question-text" dangerouslySetInnerHTML={{ __html: questionText }} />
//       <button onClick={handleUnderline}>Underline Text to Create a Blank</button>

//       <div className="add-option">
//         <input
//           type="text"
//           placeholder="Type a new option and press Add"
//           value={newOptionText}
//           onChange={(e) => setNewOptionText(e.target.value)}
//         />
//         <button onClick={handleAddOption}>Add Option</button>
//       </div>

//       <div className="options">
//         <h4>Options:</h4>
//         {options.map((option) => (
//           <div key={option.id} className="option">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={option.checked}
//                 onChange={() => toggleCheckbox(option.id)}
//               />
//               {option.text}
//             </label>
//           </div>
//         ))}
//       </div>

//       <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//     </div>
//   );
// };

// export default ClozeQuestion;







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

      <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
    </div>
  );
};

export default ClozeQuestion;