import './styles.css'

function Button({title, method}) {
    return (
            <div className="button" onClick={method}>
                {title}
            </div>
    );
}

export default Button;
