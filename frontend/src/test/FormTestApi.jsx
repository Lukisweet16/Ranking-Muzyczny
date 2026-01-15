import { useCallback, useEffect, useState } from "react";

const TestForm = () => {
  const [dataFromBackend, setDataFromBackend] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    console.log(data);
    setDataFromBackend(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <p>{dataFromBackend.message}</p>
    </div>
  );
};
export default TestForm;
