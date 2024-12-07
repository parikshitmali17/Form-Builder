

import React from "react";
import { DndProvider } from "react-dnd";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const FormPreview = ({ headerImage, questions=[], setPreviewMode }) => {
  console.log('Form PReviewQuestions:', questions);
  // console.log('HeaderImage :', headerImage);
  // console.log('setPreviewMode:',setPreviewMode);

  return (
    <div className="form-preview">
      <img src={headerImage} alt="Form Header" style={{ maxWidth: "100%", marginBottom: "20px" }} />
      <DndProvider backend={HTML5Backend}>

      {questions && questions.length > 0 ? (
    questions.map((question) => {
        // Render question-specific components here

        switch (question.type) {
          case "categorizeQuestion":
            return (
              <div key={question.id} className="categorize-question">
                <h3 style={{ textAlign: "center" }}>{question.text}</h3>
                <div className="options-and-categories">
                  <div className="options">
                    <h4>Options</h4>
                    {question.options.map((option) => (
                      <DraggableOptionPreview key={option.id} option={option} />
                    ))}
                  </div>
                  <div className="categories">
                    {question.categories.map((category) => (
                      <DroppableCategoryPreview
                        key={category.id}
                        category={category}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          default:
            return null;
        }
})
) : (
    <p>No questions to display</p>
)}


        {/* {questions.map((question) => {
          switch (question.type) {
            case "categorizeQuestion":
              return (
                <div key={question.id} className="categorize-question">
                  <h3 style={{ textAlign: "center" }}>{question.text}</h3>
                  <div className="options-and-categories">
                    <div className="options">
                      <h4>Options</h4>
                      {question.options.map((option) => (
                        <DraggableOptionPreview key={option.id} option={option} />
                      ))}
                    </div>
                    <div className="categories">
                      {question.categories.map((category) => (
                        <DroppableCategoryPreview
                          key={category.id}
                          category={category}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            default:
              return null;
          }
        })} */}
      </DndProvider>
      <button onClick={() => setPreviewMode(false)} style={{ marginTop: "20px" }}>
        Back to Editor
      </button>
    </div>
  );
};

const DraggableOptionPreview = ({ option }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "option",
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
      {option.text}
    </div>
  );
};

const DroppableCategoryPreview = ({ category }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "option",
    drop: (item) => console.log(`Dropped ${item.text} into ${category.name}`),
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
      <h4 style={{ textAlign: "center" }}>{category.name}</h4>
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

export default FormPreview;
