const Key = ({ text, action, nameClass }) => {
  return (
    <li>
      <button onClick={action} class={nameClass}>
        {text}
      </button>
    </li>
  );
};

export default Key;
