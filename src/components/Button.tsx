type Props = {
   text: string;
   callback: () => void;
};

const Button = ({ text, callback }: Props) => {
   return (
      <button type="button" onClick={callback}>
         {text}
      </button>
   );
};

export default Button;
