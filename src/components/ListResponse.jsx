import "./ListResponse.css";

const ListResponse = (props) => {
  return (
    <>
      <div className="ListResponse">
        <ul>
          {props.messageList.map((val, id) => {
            return <li className='Message' key={id}>{val.message}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default ListResponse;
