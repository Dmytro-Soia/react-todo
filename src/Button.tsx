const Button = ({ buttonText, buttonId }: { buttonText: string, buttonId: string}) =>  {
    return (
        <button className="button" id={buttonId}>{buttonText}</button>
    )
}

export default Button