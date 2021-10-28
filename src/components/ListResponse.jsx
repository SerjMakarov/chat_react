import "./ListResponse.css";

const ListResponse = (props) => {
  // console.log(typeof props.messageList);
  return (
    <>
      <div className="ListResponse">
        <ul>
          {props.messageList.map((val) => {
            return <li className="Message">{val.message}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default ListResponse;
