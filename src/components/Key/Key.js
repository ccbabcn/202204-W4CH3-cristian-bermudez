const Key = ({ text, action, nameClass }) => {
  return (
    <li>
      <button onClick={action} className={nameClass}>
        {text}
      </button>
    </li>
  );
};

export default Key;
