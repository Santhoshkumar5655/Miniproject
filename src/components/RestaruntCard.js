const RestaruntCard = ({ resdata }) => {
  const list = resdata;
  console.log(list);
  return (
    <div className="m-2 p-1 w-56 h-40 bg-red-500 ">
      <h1> Restarunt Name : {resdata?.name}</h1>
      <h1>Cuisines :{resdata?.cuisine} </h1>
      <h1>Location {resdata?.location}</h1>
      <h1>Rating {resdata?.rating} ⭐</h1>
    </div>
  );
};

export default RestaruntCard;
