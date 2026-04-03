import { useState, useEffect } from "react";

const Dimension = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Dimension Page</h1>
      <p>Height: {height}px</p>
      <p>Width: {width}px</p>
    </div>
  );
};

export default Dimension;
