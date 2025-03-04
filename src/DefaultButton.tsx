interface DefaultButtonProps {
  buttonText: string;
  buttonId: string;
  onClick: () => void;
  buttonStatus: boolean;
}

const DefaultButton = ({
  buttonText,
  buttonId,
  onClick,
  buttonStatus
}: DefaultButtonProps) => {
  return (
    <button className="button" disabled={buttonStatus} onClick={onClick} id={buttonId}>
      {buttonText}
    </button>
  );
};

export default DefaultButton;
