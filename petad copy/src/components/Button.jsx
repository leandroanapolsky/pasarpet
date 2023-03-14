import "./Button.css";

function Button(props) {
  const { content, buttonStyle } = props;

  return <button className={buttonStyle}>{content}</button>;
}

export default Button;
