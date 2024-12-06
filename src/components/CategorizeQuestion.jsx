// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemType = {
//   OPTION: "option",
// };

// const CategorizeQuestion = () => {
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Category 1", items: [] },
//     { id: 2, name: "Category 2", items: [] },
//     { id: 3, name: "Category 3", items: [] },
//   ]);

//   const [options, setOptions] = useState([
//     { id: "o1", text: "Option 1" },
//     { id: "o2", text: "Option 2" },
//     { id: "o3", text: "Option 3" },
//     { id: "o4", text: "Option 4" },
//   ]);

//   const handleDrop = (item, categoryId) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === categoryId
//           ? { ...cat, items: [...cat.items, item] }
//           : cat
//       )
//     );
//     setOptions((prev) => prev.filter((opt) => opt.id !== item.id));
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="categorize-question">
//         <h3>Categorize the Options</h3>
//         <div className="options">
//           <h4>Options</h4>
//           {options.map((option) => (
//             <DraggableOption key={option.id} option={option} />
//           ))}
//         </div>
//         <div className="categories">
//           {categories.map((category) => (
//             <DroppableCategory
//               key={category.id}
//               category={category}
//               onDrop={handleDrop}
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// const DraggableOption = ({ option }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemType.OPTION,
//     item: option,
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className="draggable-option"
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "grab",
//         padding: "8px",
//         border: "1px solid #ccc",
//         margin: "5px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "4px",
//       }}
//     >
//       {option.text}
//     </div>
//   );
// };

// const DroppableCategory = ({ category, onDrop }) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ItemType.OPTION,
//     drop: (item) => onDrop(item, category.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={drop}
//       className="droppable-category"
//       style={{
//         padding: "15px",
//         border: "2px dashed #ccc",
//         margin: "10px",
//         borderRadius: "4px",
//         backgroundColor: isOver ? "#e8f5e9" : "#f1f1f1",
//       }}
//     >
//       <h4>{category.name}</h4>
//       <div className="category-items">
//         {category.items.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               padding: "8px",
//               border: "1px solid #ccc",
//               margin: "5px",
//               backgroundColor: "#f9f9f9",
//               borderRadius: "4px",
//             }}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorizeQuestion;




// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemType = {
//   OPTION: "option",
// };

// const CategorizeQuestion = () => {
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Category 1", items: [] },
//     { id: 2, name: "Category 2", items: [] },
//     { id: 3, name: "Category 3", items: [] },
//   ]);

//   const [options, setOptions] = useState([
//     { id: "o1", text: "Option 1" },
//     { id: "o2", text: "Option 2" },
//     { id: "o3", text: "Option 3" },
//     { id: "o4", text: "Option 4" },
//   ]);

//   const handleDrop = (item, categoryId) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === categoryId
//           ? { ...cat, items: [...cat.items, item] }
//           : cat
//       )
//     );
//     setOptions((prev) => prev.filter((opt) => opt.id !== item.id));
//   };

//   const updateCategoryName = (id, newName) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === id ? { ...cat, name: newName } : cat
//       )
//     );
//   };

//   const updateOptionText = (id, newText) => {
//     setOptions((prev) =>
//       prev.map((opt) =>
//         opt.id === id ? { ...opt, text: newText } : opt
//       )
//     );
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="categorize-question">
//         <h3>Categorize the Options</h3>
//         <div className="options">
//           <h4>Options</h4>
//           {options.map((option) => (
//             <DraggableOption
//               key={option.id}
//               option={option}
//               updateOptionText={updateOptionText}
//             />
//           ))}
//         </div>
//         <div className="categories">
//           {categories.map((category) => (
//             <DroppableCategory
//               key={category.id}
//               category={category}
//               onDrop={handleDrop}
//               updateCategoryName={updateCategoryName}
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// const DraggableOption = ({ option, updateOptionText }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemType.OPTION,
//     item: option,
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className="draggable-option"
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "grab",
//         padding: "8px",
//         border: "1px solid #ccc",
//         margin: "5px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "4px",
//       }}
//     >
//       <input
//         type="text"
//         value={option.text}
//         onChange={(e) => updateOptionText(option.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           width: "100%",
//         }}
//       />
//     </div>
//   );
// };

// const DroppableCategory = ({ category, onDrop, updateCategoryName }) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ItemType.OPTION,
//     drop: (item) => onDrop(item, category.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={drop}
//       className="droppable-category"
//       style={{
//         padding: "15px",
//         border: "2px dashed #ccc",
//         margin: "10px",
//         borderRadius: "4px",
//         backgroundColor: isOver ? "#e8f5e9" : "#f1f1f1",
//       }}
//     >
//       <input
//         type="text"
//         value={category.name}
//         onChange={(e) => updateCategoryName(category.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           fontWeight: "bold",
//           fontSize: "16px",
//           marginBottom: "10px",
//         }}
//       />
//       <div className="category-items">
//         {category.items.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               padding: "8px",
//               border: "1px solid #ccc",
//               margin: "5px",
//               backgroundColor: "#f9f9f9",
//               borderRadius: "4px",
//             }}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorizeQuestion;





// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemType = {
//   OPTION: "option",
// };

// const CategorizeQuestion = () => {
//   const [questionText, setQuestionText] = useState("Categorize the Options");
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Category 1", items: [] },
//     { id: 2, name: "Category 2", items: [] },
//     { id: 3, name: "Category 3", items: [] },
//   ]);

//   const [options, setOptions] = useState([
//     { id: "o1", text: "Option 1" },
//     { id: "o2", text: "Option 2" },
//     { id: "o3", text: "Option 3" },
//     { id: "o4", text: "Option 4" },
//   ]);

//   const handleDrop = (item, categoryId) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === categoryId
//           ? { ...cat, items: [...cat.items, item] }
//           : cat
//       )
//     );
//     setOptions((prev) => prev.filter((opt) => opt.id !== item.id));
//   };

//   const updateCategoryName = (id, newName) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === id ? { ...cat, name: newName } : cat
//       )
//     );
//   };

//   const updateOptionText = (id, newText) => {
//     setOptions((prev) =>
//       prev.map((opt) =>
//         opt.id === id ? { ...opt, text: newText } : opt
//       )
//     );
//   };

//   const updateQuestionText = (newText) => {
//     setQuestionText(newText);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="categorize-question">
//         {/* Editable Question Text */}
//         <h3>
//           <input
//             type="text"
//             value={questionText}
//             onChange={(e) => updateQuestionText(e.target.value)}
//             style={{
//               border: "none",
//               background: "transparent",
//               fontSize: "18px",
//               fontWeight: "bold",
//               width: "100%",
//               marginBottom: "10px",
//             }}
//           />
//         </h3>

//         <div className="options">
//           <h4>Options</h4>
//           {options.map((option) => (
//             <DraggableOption
//               key={option.id}
//               option={option}
//               updateOptionText={updateOptionText}
//             />
//           ))}
//         </div>
//         <div className="categories">
//           {categories.map((category) => (
//             <DroppableCategory
//               key={category.id}
//               category={category}
//               onDrop={handleDrop}
//               updateCategoryName={updateCategoryName}
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// const DraggableOption = ({ option, updateOptionText }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemType.OPTION,
//     item: option,
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className="draggable-option"
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "grab",
//         padding: "8px",
//         border: "1px solid #ccc",
//         margin: "5px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "4px",
//       }}
//     >
//       <input
//         type="text"
//         value={option.text}
//         onChange={(e) => updateOptionText(option.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           width: "100%",
//         }}
//       />
//     </div>
//   );
// };

// const DroppableCategory = ({ category, onDrop, updateCategoryName }) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ItemType.OPTION,
//     drop: (item) => onDrop(item, category.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={drop}
//       className="droppable-category"
//       style={{
//         padding: "15px",
//         border: "2px dashed #ccc",
//         margin: "10px",
//         borderRadius: "4px",
//         backgroundColor: isOver ? "#e8f5e9" : "#f1f1f1",
//       }}
//     >
//       <input
//         type="text"
//         value={category.name}
//         onChange={(e) => updateCategoryName(category.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           fontWeight: "bold",
//           fontSize: "16px",
//           marginBottom: "10px",
//         }}
//       />
//       <div className="category-items">
//         {category.items.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               padding: "8px",
//               border: "1px solid #ccc",
//               margin: "5px",
//               backgroundColor: "#f9f9f9",
//               borderRadius: "4px",
//             }}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorizeQuestion;




// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemType = {
//   OPTION: "option",
// };

// const CategorizeQuestion = () => {
//   const [questionText, setQuestionText] = useState("Categorize the Options");
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Category 1", items: [] },
//     { id: 2, name: "Category 2", items: [] },
//     { id: 3, name: "Category 3", items: [] },
//   ]);

//   const [options, setOptions] = useState([
//     { id: "o1", text: "Option 1" },
//     { id: "o2", text: "Option 2" },
//     { id: "o3", text: "Option 3" },
//     { id: "o4", text: "Option 4" },
//   ]);

//   const handleDrop = (item, categoryId) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === categoryId
//           ? { ...cat, items: [...cat.items, item] }
//           : cat
//       )
//     );
//     setOptions((prev) => prev.filter((opt) => opt.id !== item.id));
//   };

//   const updateCategoryName = (id, newName) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === id ? { ...cat, name: newName } : cat
//       )
//     );
//   };

//   const updateOptionText = (id, newText) => {
//     setOptions((prev) =>
//       prev.map((opt) =>
//         opt.id === id ? { ...opt, text: newText } : opt
//       )
//     );
//   };

//   const updateQuestionText = (newText) => {
//     setQuestionText(newText);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="categorize-question">
//         {/* Enhanced Editable Question Text */}
//         <h3 style={styles.questionText}>
//           <input
//             type="text"
//             value={questionText}
//             onChange={(e) => updateQuestionText(e.target.value)}
//             style={styles.questionInput}
//           />
//         </h3>

//         <div className="options">
//           <h4>Options</h4>
//           {options.map((option) => (
//             <DraggableOption
//               key={option.id}
//               option={option}
//               updateOptionText={updateOptionText}
//             />
//           ))}
//         </div>
//         <div className="categories">
//           {categories.map((category) => (
//             <DroppableCategory
//               key={category.id}
//               category={category}
//               onDrop={handleDrop}
//               updateCategoryName={updateCategoryName}
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// const DraggableOption = ({ option, updateOptionText }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemType.OPTION,
//     item: option,
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className="draggable-option"
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "grab",
//         padding: "8px",
//         border: "1px solid #ccc",
//         margin: "5px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "4px",
//       }}
//     >
//       <input
//         type="text"
//         value={option.text}
//         onChange={(e) => updateOptionText(option.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           width: "100%",
//         }}
//       />
//     </div>
//   );
// };

// const DroppableCategory = ({ category, onDrop, updateCategoryName }) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ItemType.OPTION,
//     drop: (item) => onDrop(item, category.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={drop}
//       className="droppable-category"
//       style={{
//         padding: "15px",
//         border: "2px dashed #ccc",
//         margin: "10px",
//         borderRadius: "4px",
//         backgroundColor: isOver ? "#e8f5e9" : "#f1f1f1",
//       }}
//     >
//       <input
//         type="text"
//         value={category.name}
//         onChange={(e) => updateCategoryName(category.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           fontWeight: "bold",
//           fontSize: "16px",
//           marginBottom: "10px",
//         }}
//       />
//       <div className="category-items">
//         {category.items.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               padding: "8px",
//               border: "1px solid #ccc",
//               margin: "5px",
//               backgroundColor: "#f9f9f9",
//               borderRadius: "4px",
//             }}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Styles for better visibility of the question
// const styles = {
//   questionText: {
//     fontSize: "24px", // Larger font size for clarity
//     fontWeight: "bold", // Make the text bold
//     textAlign: "center", // Center align the text
//     marginBottom: "20px", // Space below the question
//     color: "#333", // Dark text for better contrast
//     padding: "10px", // Padding around the question
//     backgroundColor: "#f1f1f1", // Light background color
//     borderRadius: "6px", // Slight rounding of corners for the input field
//     width: "80%", // Make the input width larger for better readability
//     margin: "0 auto", // Center the question box on the page
//   },
//   questionInput: {
//     width: "100%", // Make the input take up the full width of its container
//     padding: "8px", // Padding inside the input
//     fontSize: "18px", // Larger font size inside the input field
//     fontWeight: "bold", // Bold text for better visibility
//     border: "2px solid #ccc", // Subtle border around the input field
//     borderRadius: "4px", // Rounded corners for the input field
//     background: "#fff", // White background for the input field
//   },
// };

// export default CategorizeQuestion;



// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemType = {
//   OPTION: "option",
// };

// const CategorizeQuestion = () => {
//   const [questionText, setQuestionText] = useState("Categorize the Options");
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Category 1", items: [] },
//     { id: 2, name: "Category 2", items: [] },
//     { id: 3, name: "Category 3", items: [] },
//   ]);

//   const [options, setOptions] = useState([
//     { id: "o1", text: "Option 1" },
//     { id: "o2", text: "Option 2" },
//     { id: "o3", text: "Option 3" },
//     { id: "o4", text: "Option 4" },
//   ]);

//   const handleDrop = (item, categoryId) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === categoryId
//           ? { ...cat, items: [...cat.items, item] }
//           : cat
//       )
//     );
//     setOptions((prev) => prev.filter((opt) => opt.id !== item.id));
//   };

//   const updateCategoryName = (id, newName) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === id ? { ...cat, name: newName } : cat
//       )
//     );
//   };

//   const updateOptionText = (id, newText) => {
//     setOptions((prev) =>
//       prev.map((opt) =>
//         opt.id === id ? { ...opt, text: newText } : opt
//       )
//     );
//   };

//   const updateQuestionText = (newText) => {
//     setQuestionText(newText);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="categorize-question" style={{ padding: "20px" }}>
//         {/* Editable Question Text */}
//         <h3>
//           <input
//             type="text"
//             value={questionText}
//             onChange={(e) => updateQuestionText(e.target.value)}
//             style={{
//               border: "none",
//               background: "transparent",
//               fontSize: "18px",
//               fontWeight: "bold",
//               width: "100%",
//               marginBottom: "10px",
//               padding: "5px",
//               textAlign: "center",
//               wordWrap: "break-word", // Ensure the text wraps if it's too long
//               maxWidth: "100%", // Ensure the text does not overflow
//               minHeight: "30px", // Ensure the input box has a consistent height
//             }}
//           />
//         </h3>

//         <div className="options">
//           <h4>Options</h4>
//           {options.map((option) => (
//             <DraggableOption
//               key={option.id}
//               option={option}
//               updateOptionText={updateOptionText}
//             />
//           ))}
//         </div>
//         <div className="categories">
//           {categories.map((category) => (
//             <DroppableCategory
//               key={category.id}
//               category={category}
//               onDrop={handleDrop}
//               updateCategoryName={updateCategoryName}
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// const DraggableOption = ({ option, updateOptionText }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemType.OPTION,
//     item: option,
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className="draggable-option"
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "grab",
//         padding: "8px",
//         border: "1px solid #ccc",
//         margin: "5px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "4px",
//       }}
//     >
//       <input
//         type="text"
//         value={option.text}
//         onChange={(e) => updateOptionText(option.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           width: "100%",
//         }}
//       />
//     </div>
//   );
// };

// const DroppableCategory = ({ category, onDrop, updateCategoryName }) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ItemType.OPTION,
//     drop: (item) => onDrop(item, category.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={drop}
//       className="droppable-category"
//       style={{
//         padding: "15px",
//         border: "2px dashed #ccc",
//         margin: "10px",
//         borderRadius: "4px",
//         backgroundColor: isOver ? "#e8f5e9" : "#f1f1f1",
//       }}
//     >
//       <input
//         type="text"
//         value={category.name}
//         onChange={(e) => updateCategoryName(category.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           fontWeight: "bold",
//           fontSize: "16px",
//           marginBottom: "10px",
//           width: "100%",
//           textAlign: "center", // Ensure text is centered
//           wordWrap: "break-word", // Ensure the category name wraps to next line
//         }}
//       />
//       <div className="category-items">
//         {category.items.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               padding: "8px",
//               border: "1px solid #ccc",
//               margin: "5px",
//               backgroundColor: "#f9f9f9",
//               borderRadius: "4px",
//             }}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorizeQuestion;


// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemType = {
//   OPTION: "option",
// };

// const CategorizeQuestion = () => {
//   const [questionText, setQuestionText] = useState("Categorize the Options");
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Category 1", items: [] },
//     { id: 2, name: "Category 2", items: [] },
//     { id: 3, name: "Category 3", items: [] },
//   ]);

//   const [options, setOptions] = useState([
//     { id: "o1", text: "Option 1", correctCategory: null },
//     { id: "o2", text: "Option 2", correctCategory: null },
//     { id: "o3", text: "Option 3", correctCategory: null },
//     { id: "o4", text: "Option 4", correctCategory: null },
//   ]);

//   const handleDrop = (item, categoryId) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === categoryId
//           ? { ...cat, items: [...cat.items, item] }
//           : cat
//       )
//     );
//     setOptions((prev) => prev.filter((opt) => opt.id !== item.id));
//   };

//   const updateCategoryName = (id, newName) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === id ? { ...cat, name: newName } : cat
//       )
//     );
//   };

//   const updateOptionText = (id, newText) => {
//     setOptions((prev) =>
//       prev.map((opt) =>
//         opt.id === id ? { ...opt, text: newText } : opt
//       )
//     );
//   };

//   const updateCorrectCategory = (id, categoryId) => {
//     setOptions((prev) =>
//       prev.map((opt) =>
//         opt.id === id ? { ...opt, correctCategory: categoryId } : opt
//       )
//     );
//   };

//   const updateQuestionText = (newText) => {
//     setQuestionText(newText);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="categorize-question" style={{ padding: "20px" }}>
//         <h3>
//           <input
//             type="text"
//             value={questionText}
//             onChange={(e) => updateQuestionText(e.target.value)}
//             style={{
//               border: "none",
//               background: "transparent",
//               fontSize: "18px",
//               fontWeight: "bold",
//               width: "100%",
//               marginBottom: "10px",
//               padding: "5px",
//               textAlign: "center",
//             }}
//           />
//         </h3>

//         <div className="options">
//           <h4>Options</h4>
//           {options.map((option) => (
//             <DraggableOption
//               key={option.id}
//               option={option}
//               updateOptionText={updateOptionText}
//               updateCorrectCategory={updateCorrectCategory}
//               categories={categories}
//             />
//           ))}
//         </div>
//         <div className="categories">
//           {categories.map((category) => (
//             <DroppableCategory
//               key={category.id}
//               category={category}
//               onDrop={handleDrop}
//               updateCategoryName={updateCategoryName}
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// const DraggableOption = ({
//   option,
//   updateOptionText,
//   updateCorrectCategory,
//   categories,
// }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemType.OPTION,
//     item: option,
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className="draggable-option"
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "grab",
//         padding: "8px",
//         border: "1px solid #ccc",
//         margin: "5px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "4px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >
//       <input
//         type="text"
//         value={option.text}
//         onChange={(e) => updateOptionText(option.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           width: "60%",
//         }}
//       />
//       <select
//         value={option.correctCategory || ""}
//         onChange={(e) => updateCorrectCategory(option.id, parseInt(e.target.value))}
//         style={{
//           marginLeft: "10px",
//           padding: "5px",
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//         }}
//       >
//         <option value="" disabled>
//           Select Category
//         </option>
//         {categories.map((cat) => (
//           <option key={cat.id} value={cat.id}>
//             {cat.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// const DroppableCategory = ({ category, onDrop, updateCategoryName }) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ItemType.OPTION,
//     drop: (item) => onDrop(item, category.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={drop}
//       className="droppable-category"
//       style={{
//         padding: "15px",
//         border: "2px dashed #ccc",
//         margin: "10px",
//         borderRadius: "4px",
//         backgroundColor: isOver ? "#e8f5e9" : "#f1f1f1",
//       }}
//     >
//       <input
//         type="text"
//         value={category.name}
//         onChange={(e) => updateCategoryName(category.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           fontWeight: "bold",
//           fontSize: "16px",
//           marginBottom: "10px",
//           width: "100%",
//         }}
//       />
//       <div className="category-items">
//         {category.items.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               padding: "8px",
//               border: "1px solid #ccc",
//               margin: "5px",
//               backgroundColor: "#f9f9f9",
//               borderRadius: "4px",
//             }}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorizeQuestion;


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




// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemType = {
//   OPTION: "option",
// };

// const CategorizeQuestion = () => {
//   const [questionText, setQuestionText] = useState("Categorize the Options");
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Category 1", items: [] },
//     { id: 2, name: "Category 2", items: [] },
//     { id: 3, name: "Category 3", items: [] },
//   ]);

//   const [options, setOptions] = useState([
//     { id: "o1", text: "Option 1" },
//     { id: "o2", text: "Option 2" },
//     { id: "o3", text: "Option 3" },
//     { id: "o4", text: "Option 4" },
//   ]);

//   const handleDrop = (item, categoryId) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === categoryId
//           ? { ...cat, items: [...cat.items, item] }
//           : cat
//       )
//     );
//     setOptions((prev) => prev.filter((opt) => opt.id !== item.id));
//   };

//   const updateCategoryName = (id, newName) => {
//     setCategories((prev) =>
//       prev.map((cat) =>
//         cat.id === id ? { ...cat, name: newName } : cat
//       )
//     );
//   };

//   const updateOptionText = (id, newText) => {
//     setOptions((prev) =>
//       prev.map((opt) =>
//         opt.id === id ? { ...opt, text: newText } : opt
//       )
//     );
//   };

//   const updateQuestionText = (newText) => {
//     setQuestionText(newText);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="categorize-question" style={{ padding: "20px" }}>
//         {/* Editable Question Text */}
//         <h3>
//           <input
//             type="text"
//             value={questionText}
//             onChange={(e) => updateQuestionText(e.target.value)}
//             style={{
//               border: "none",
//               background: "transparent",
//               fontSize: "18px",
//               fontWeight: "bold",
//               width: "100%",
//               marginBottom: "10px",
//               padding: "5px",
//               textAlign: "center",
//               wordWrap: "break-word", // Ensure the text wraps if it's too long
//               maxWidth: "100%", // Ensure the text does not overflow
//               minHeight: "30px", // Ensure the input box has a consistent height
//             }}
//           />
//         </h3>

//         <div className="options">
//           <h4>Options</h4>
//           {options.map((option) => (
//             <DraggableOption
//               key={option.id}
//               option={option}
//               updateOptionText={updateOptionText}
//             />
//           ))}
//         </div>
//         <div className="categories">
//           {categories.map((category) => (
//             <DroppableCategory
//               key={category.id}
//               category={category}
//               onDrop={handleDrop}
//               updateCategoryName={updateCategoryName}
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// const DraggableOption = ({ option, updateOptionText }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemType.OPTION,
//     item: option,
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div
//       ref={drag}
//       className="draggable-option"
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         cursor: "grab",
//         padding: "8px",
//         border: "1px solid #ccc",
//         margin: "5px",
//         backgroundColor: "#f9f9f9",
//         borderRadius: "4px",
//       }}
//     >
//       <input
//         type="text"
//         value={option.text}
//         onChange={(e) => updateOptionText(option.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           width: "100%",
//         }}
//       />
//     </div>
//   );
// };

// const DroppableCategory = ({ category, onDrop, updateCategoryName }) => {
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: ItemType.OPTION,
//     drop: (item) => onDrop(item, category.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

//   return (
//     <div
//       ref={drop}
//       className="droppable-category"
//       style={{
//         padding: "15px",
//         border: "2px dashed #ccc",
//         margin: "10px",
//         borderRadius: "4px",
//         backgroundColor: isOver ? "#e8f5e9" : "#f1f1f1",
//       }}
//     >
//       <input
//         type="text"
//         value={category.name}
//         onChange={(e) => updateCategoryName(category.id, e.target.value)}
//         style={{
//           border: "none",
//           background: "transparent",
//           fontWeight: "bold",
//           fontSize: "16px",
//           marginBottom: "10px",
//           width: "100%",
//           textAlign: "center", // Ensure text is centered
//           wordWrap: "break-word", // Ensure the category name wraps to next line
//         }}
//       />
//       <div className="category-items">
//         {category.items.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               padding: "8px",
//               border: "1px solid #ccc",
//               margin: "5px",
//               backgroundColor: "#f9f9f9",
//               borderRadius: "4px",
//             }}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorizeQuestion;


// raw
// {/* <div className="categorize-question" style={{ padding: "20px" }}>
/* <h3>
<input
  type="text"
  value={questionText}
  onChange={(e) => updateQuestionText(e.target.value)}
  style={{
    border: "none",
    background: "transparent",
    fontSize: "18px",
    fontWeight: "bold",
    width: "100%",
    marginBottom: "10px",
    padding: "5px",
    textAlign: "center",
    wordWrap: "break-word",
    maxWidth: "100%",
    minHeight: "30px",
  }}
/>
</h3>

<div className="options">
<h4>Options</h4>
{options.map((option) => (
  <DraggableOption
    key={option.id}
    option={option}
    categories={categories}
    updateOptionText={updateOptionText}
    updateOptionCategory={updateOptionCategory}
  />
))}
</div>
<div className="categories">
{categories.map((category) => (
  <DroppableCategory
    key={category.id}
    category={category}
    onDrop={handleDrop}
    updateCategoryName={updateCategoryName}
  />
))}
</div>
// </div> */









//Complete all **************************************************************************************
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = {
  OPTION: "option",
};

const CategorizeQuestion = () => {
  const [questionText, setQuestionText] = useState("Categorize the Options");
  const [categories, setCategories] = useState([
    { id: 1, name: "Category 1", items: [] },
    { id: 2, name: "Category 2", items: [] },
    { id: 3, name: "Category 3", items: [] },
  ]);

  const [options, setOptions] = useState([
    { id: "o1", text: "Option 1", categoryId: null },
    { id: "o2", text: "Option 2", categoryId: null },
    { id: "o3", text: "Option 3", categoryId: null },
    { id: "o4", text: "Option 4", categoryId: null },
  ]);

  const handleDrop = (item, categoryId) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? { ...cat, items: [...cat.items, item] }
          : cat
      )
    );
    setOptions((prev) => prev.filter((opt) => opt.id !== item.id));
  };

  const updateCategoryName = (id, newName) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, name: newName } : cat
      )
    );
  };

  const updateOptionText = (id, newText) => {
    setOptions((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, text: newText } : opt
      )
    );
  };

  const updateOptionCategory = (id, categoryId) => {
    setOptions((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, categoryId: parseInt(categoryId) } : opt
      )
    );
  };

  const updateQuestionText = (newText) => {
    setQuestionText(newText);
  };

  return (
    <DndProvider backend={HTML5Backend}>
     
      <div className="categorize-question" style={{ padding: "20px" }}>
  <h3>
    <input
      type="text"
      value={questionText}
      onChange={(e) => updateQuestionText(e.target.value)}
      style={{
        border: "none",
        background: "transparent",
        fontSize: "18px",
        fontWeight: "bold",
        width: "100%",
        marginBottom: "10px",
        padding: "5px",
        textAlign: "center",
        wordWrap: "break-word",
        maxWidth: "100%",
        minHeight: "30px",
      }}
    />
  </h3>

  <div className="options-and-categories">
    <div className="options">
      <h4>Options</h4>
      {options.map((option) => (
        <DraggableOption
          key={option.id}
          option={option}
          categories={categories}
          updateOptionText={updateOptionText}
          updateOptionCategory={updateOptionCategory}
        />
      ))}
    </div>
    <div className="categories">
      {categories.map((category) => (
        <DroppableCategory
          key={category.id}
          category={category}
          onDrop={handleDrop}
          updateCategoryName={updateCategoryName}
        />
      ))}
    </div>
  </div>
</div>

    </DndProvider>
  );
};

const DraggableOption = ({ option, categories, updateOptionText, updateOptionCategory }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.OPTION,
    item: option,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="draggable-option"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
        padding: "8px",
        border: "1px solid #ccc",
        margin: "5px",
        backgroundColor: "#f9f9f9",
        borderRadius: "4px",
      }}
    >
      <input
        type="text"
        value={option.text}
        onChange={(e) => updateOptionText(option.id, e.target.value)}
        style={{
          border: "none",
          background: "transparent",
          width: "100%",
        }}
      />
      <select
        value={option.categoryId || ""}
        onChange={(e) => updateOptionCategory(option.id, e.target.value)}
        style={{ marginTop: "5px", padding: "5px", width: "100%" }}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const DroppableCategory = ({ category, onDrop, updateCategoryName }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.OPTION,
    drop: (item) => onDrop(item, category.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="droppable-category"
      style={{
        padding: "15px",
        border: "2px dashed #ccc",
        margin: "10px",
        borderRadius: "4px",
        backgroundColor: isOver ? "#e8f5e9" : "#f1f1f1",
      }}
    >
      <input
        type="text"
        value={category.name}
        onChange={(e) => updateCategoryName(category.id, e.target.value)}
        style={{
          border: "none",
          background: "transparent",
          fontWeight: "bold",
          fontSize: "16px",
          marginBottom: "10px",
          width: "100%",
          textAlign: "center",
          wordWrap: "break-word",
        }}
      />
      <div className="category-items">
        {category.items.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              margin: "5px",
              backgroundColor: "#f9f9f9",
              borderRadius: "4px",
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorizeQuestion;



//For Preview *******************************************************************************
