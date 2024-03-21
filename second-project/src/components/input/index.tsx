import { InputProps } from "../../interfaces/input-interface";

export function Input (props: InputProps) {
  const { register, name, rules } = props

  console.log()
  return (
    <div>
      <input {...props} {...register(name!, rules)} />
      { props.error && <p>{props.error}</p> }
    </div>
  );
}