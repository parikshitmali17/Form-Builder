
// import './App.css';
// import React, { useState } from "react";
// import FormEditor from './components/FormEditor';
// import Question from './components/Question';
// import CategorizeQuestion from './components/CategorizeQuestion';
// import ComprehensionQuestion from './components/ComprehensionQuestion';
// import FormPreview from './components/FormPreview';

// function App() {
  

//   return (
//   <div> <FormEditor/>
//    <Question/>'
//    {/* <CategorizeQuestion/> */}
   
// {/* <ComprehensionQuestion/> */}


   
//    </div>
//   );
// }

// export default App;



// import './App.css';
// import React, { useState } from "react";
// import FormEditor from './components/FormEditor';
// import Question from './components/Question';
// import CategorizeQuestion from './components/CategorizeQuestion';
// import ComprehensionQuestion from './components/ComprehensionQuestion';
// import FormPreview from './components/FormPreview';
// import FormEditor from './components/FormEditor';


// function App() {
//   const [previewMode, setPreviewMode] = useState(false);

//   const headerImage = "https://via.placeholder.com/150"; // Example header image
//   const questions = [
//     {
//       text: "What is your favorite color?",
//       type: "radio",
//       options: ["Red", "Blue", "Green"],
//     },
//     {
//       text: "Attach an image (if any)",
//       type: "text",
//       image: "https://via.placeholder.com/100",
//     },
//   ]; // Example questions

//   return (
//     <div>
//       {previewMode ? (
//         <FormPreview
//           headerImage={headerImage}
//           questions={questions}
//           setPreviewMode={setPreviewMode}
//         />
//       ) : (
//         <div>
//           <FormEditor />
//           <Question />
//           {/* <CategorizeQuestion />
//           <ComprehensionQuestion /> */}
//           <button onClick={() => setPreviewMode(true)}>Preview Form</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


//2 Iterarion



// import './App.css';
// import React, { useState } from "react";
// import FormEditor from './components/FormEditor';
// import FormPreview from './components/FormPreview';

// function App() {
//   const [previewMode, setPreviewMode] = useState(false);
//   const [questions, setQuestions] = useState([]); // Move questions state to App
//   const [headerImage, setHeaderImage] = useState(""); // Example header image

//   return (
//     <div>
//       {previewMode ? (
//         <FormPreview
//           headerImage={headerImage}
//           questions={questions}
//           setPreviewMode={setPreviewMode}
//         />
//       ) : (
//         <FormEditor
//           questions={questions}
//           setQuestions={setQuestions}
//           headerImage={headerImage}
//           setHeaderImage={setHeaderImage}
//           setPreviewMode={setPreviewMode}
//         />
//       )}
//     </div>
//   );
// }

// export default App;



//3 Iteration


// import React, { useState } from "react";
// import './App.css';
// import FormEditor from './components/FormEditor';
// import FormPreview from './components/FormPreview';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';


// function App() {
//   const [previewMode, setPreviewMode] = useState(false);
//   const [questions, setQuestions] = useState([]); // Centralized question state
//   const [headerImage, setHeaderImage] = useState("https://via.placeholder.com/150");

//   return (
//     <DndProvider backend={HTML5Backend}>
//     <div>
       
//       {previewMode ? (
//         <FormPreview
//           headerImage={headerImage}
//           questions={questions}
//           setPreviewMode={setPreviewMode}
//         />
//       ) : (
//         <FormEditor
//           questions={questions}
//           setQuestions={setQuestions}
//           headerImage={headerImage}
//           setHeaderImage={setHeaderImage}
//           setPreviewMode={setPreviewMode}
//         />
//       )}
       
//     </div>
//     </DndProvider>
   
//   );
// }

// export default App;


///777777777777777777777777777


import React, { useState } from "react";
import './App.css';
import FormEditor from './components/FormEditor';
import FormPreview from './components/FormPreview';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


function App() {
  const [previewMode, setPreviewMode] = useState(false);
  const [questions, setQuestions] = useState([]); // Centralized question state
  const [headerImage, setHeaderImage] = useState();
  React.useEffect(() => {
    console.log("Questions updated:", questions);
  }, [questions]);

 
  
  return (
    <DndProvider backend={HTML5Backend}>
    <div>
       <Navbar/>
       
      {previewMode ? (
        <FormPreview
          headerImage={headerImage}
          questions={questions}
          setPreviewMode={setPreviewMode}
        />
      ) : (
        <FormEditor
          questions={questions}
          setQuestions={setQuestions}
          headerImage={headerImage}
          setHeaderImage={setHeaderImage}
          setPreviewMode={setPreviewMode}
        />
      )}
       
    </div>
    <Footer/>
    </DndProvider>
   
  );
}

export default App;
