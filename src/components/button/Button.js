import './Button.css';

function Button({ type = "button", disabled, clickHandler,  children }){
    return(
        <button
            disabled={disabled}
            type={type}
            onClick={clickHandler}
            className="button"
        >
            {children}
        </button>
    )
}
export default Button;