import ActionContext from "./ActionContext";

const ActionProvider = ({ children }) => {
  const text = "text";
  const textTest = "Texto de prueba";

  return (
    <ActionContext.Provider value={[text, textTest]}>
      {children}
    </ActionContext.Provider>
  );
};

export default ActionProvider;
