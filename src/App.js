
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
    {/* <Footer/> */}
    </DndProvider>
   
  );
}

export default App;
