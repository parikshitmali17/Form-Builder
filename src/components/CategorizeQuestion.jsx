
//Complete all **************************************************************************************
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = {
  OPTION: "option",
};

const CategorizeQuestion = () => {
  const [questionText, setQuestionText] = useState("Click to add Question Here");
  const [categories, setCategories] = useState([
    { id: 1, name: "Category 1 (Edit)", items: [] },
    { id: 2, name: "Category 2 (Edit)", items: [] },
    { id: 3, name: "Category 3 (Click To Edit)", items: [] },
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
      <h4>Drag options to Category</h4>
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
