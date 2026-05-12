const Card = (props) => {
  return (
    <div className='bg-amber-100 rounded p-2'>
      <img
        src={props.url}
        alt={props.name}
        className="w-full h-40 object-cover"
      />

      <h2 className="text-center font-bold mt-2">
        {props.name}
      </h2>
    </div>
  );
};

export default Card;
