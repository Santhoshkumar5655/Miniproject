import { RESIMG } from "../utils/constants";
const BodyImage = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <img src={RESIMG} />
      </div>
      <div>
        <p className="m-2 p-2 text-lg">
          Welcome to our restaurant, where every meal is a celebration of flavor
          and every guest is treated like family. Our chefs craft culinary
          masterpieces with fresh, locally-sourced ingredients, ensuring each
          dish is a symphony of taste and texture. As you dine, bask in the warm
          ambiance, where elegant decor and attentive service create an
          unforgettable experience. Savor the moment, indulge in the
          extraordinary, and let your senses embark on a journey of gastronomic
          delight. Here, every bite tells a story, and every visit is a
          cherished memory in the making.
        </p>
      </div>
    </div>
  );
};

export default BodyImage;
