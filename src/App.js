import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <>
      <p>
        X: {mousePosition.x}, Y: {mousePosition.y}
      </p>
    </>
  );
};

export default App;

function NewPage() {
  return <div>New Page</div>;
}

const rootNode = document.getElementById('root');
setTimeout(() => ReactDOM.render(<NewPage />, rootNode), 2000)

