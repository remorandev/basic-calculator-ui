const button = (props) => {
  let btnClass = 'btn-';

  if (typeof props !== "undefined" && typeof props.type !== "undefined") {
    btnClass = btnClass + props.type;
  }

  return (
    <button className={btnClass} onClick={props.onButtonPress}>
      {props.children}
    </button>
  );
};

export default button;
