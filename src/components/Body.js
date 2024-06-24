import BodyImage from "./BodyImage";
import RestaruntCard from "./RestaruntCard";
import Footer from "./Footer";
import Reslis from "../utils/Data";

const Body = () => {
  console.log(Reslis);
  return (
    <div>
      <BodyImage />
      <div className="flex flex-wrap">
        {Reslis.map((res) => (
          <RestaruntCard key={res?.name} resdata={res} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
