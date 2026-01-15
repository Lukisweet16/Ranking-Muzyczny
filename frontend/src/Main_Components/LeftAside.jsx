const LeftAsideAccountInfo = (props) => {
  return (
    <div className="LeftAside">
      <p>Statystyki {props.AccountUserName ?? "guest"}</p>
      <hr className="DividingLine" />
      <p>Piosenek swipnietych : {props.AccountSwipes ?? 0}</p>
    </div>
  );
};
export default LeftAsideAccountInfo;
