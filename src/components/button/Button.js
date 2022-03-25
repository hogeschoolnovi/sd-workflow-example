import './Button.css';

function Button({ type = "button", disabled, clickHandler,  children }){
    return(
        <button
            disabled={disabled}
            type={type}
            onClick={clickHandler}
            className="button"
        >
            {children.toUpperCase()}
        </button>
    )
}
export default Button;