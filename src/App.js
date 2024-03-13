import React, { useState, useEffect, useRef } from 'react';
import ParentElement from './ParentElement';
import ChildElement from './ChildElement';
import './App.css';

function App() {
  const data = [
    {
      "element": "Alaska",
      "subElements": ["Bascom"]
    },
    {
      "element": "Connecticut",
      "subElements": []
    },
    {
      "element": "Wisconsin",
      "subElements": [
        "Oretta",
        "Konterra",
        "Guthrie"
      ]
    },
    {
      "element": "Nebraska",
      "subElements": [
        "Jennings",
        "Harviell",
        "Alfarata",
        "Bluffview",
        "Escondida"
      ]
    },
    {
      "element": "Georgia",
      "subElements": []
    }
  ];

  const [selectedElement, setSelectedElement] = useState(null);
  const expandedRef = useRef(null); 

  const handleElementClick = (title) => {
    setSelectedElement(title === selectedElement ? null : title);
  };

  useEffect(() => {
    if (expandedRef.current && selectedElement) {
      expandedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedElement]);

  return (
    <div className="app">
      {data.map((item, index) => (
        <div key={index} ref={item.element === selectedElement ? expandedRef : null}>
          <ParentElement
            title={item.element}
            expanded={item.element === selectedElement}
            onClick={() => handleElementClick(item.element)}
          >
            {item.subElements.map((subItem, subIndex) => (
              <ChildElement
                key={subIndex}
                title={subItem}
                selected={selectedElement === subItem}
                onClick={() => handleElementClick(subItem)}
              />
            ))}
          </ParentElement>
        </div>
      ))}
    </div>
  );
}

export default App;
