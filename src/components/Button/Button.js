const button = (props) => {
  let btnClass = 'btn-';

  if (typeof props !== "undefined" && typeof props.type !== "undefined") {
    btnClass = btnClass + props.type;
  }

  return <button className={btnClass}>{props.children}</button>;
};

export default button;
