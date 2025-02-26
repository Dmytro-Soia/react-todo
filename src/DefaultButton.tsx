interface DefaultButtonProps {
    buttonText: string;
    buttonId: string;
    onClick: () => void;
  }

const DefaultButton = (
    { buttonText, buttonId, onClick }: DefaultButtonProps
) =>  {
    return (
        <button className="button" onClick={onClick} id={buttonId}>{buttonText}</button>
    )
}

export default DefaultButton