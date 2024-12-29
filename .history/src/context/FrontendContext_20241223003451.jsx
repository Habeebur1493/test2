import { createContext, useState } from "react";


export const datacontext = createContext(null);

const FrontendContext = (props) => {
  const [data, setData] = useState("");

return (
  <datacontext.Provider value={[data, setData]}>
    {props.children}
  </datacontext.Provider>
);
};

export default FrontendContext;
