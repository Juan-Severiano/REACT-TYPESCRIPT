import { ButtonProps } from "../../interfaces/button-props"
import './button.css'

const Button = ({ title, priority, action, type, disable }: ButtonProps) => {
  return (
    <button
        onClick={action}
        type={ type ? type : 'button' }
        className={ `btn ${priority === 'Input' ? 'greenBg' : 'redBg'} ` }
        disabled={ disable ? disable : false }
    >
        {title}
    </button>
  )
}

export default Button