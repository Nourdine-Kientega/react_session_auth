

interface InputComponentProps {
    value: string;
    onChangeValue: (s: string) => void;
};

const InputComponent = ({value, onChangeValue}: InputComponentProps) => {

  return (
    <input type="text" value={value} onChange={(e) => onChangeValue(e.target.value)}/>
  )
};

export default InputComponent;