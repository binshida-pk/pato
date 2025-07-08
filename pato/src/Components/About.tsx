import Card from "./Card";

function About() {
  return (
    <div className="relative h-screen w-full bg-gray-100">
      <img
        src="https://pato-place-seven.vercel.app/static/image/pexels-pixabay-247195.jpg"
        alt="Restaurant"
        className="w-full h-full "
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 text-white text-center">
        <div className="font-bold text-7xl sm:text-4xl  lg:text-6xl mb-4">
          About Us
        </div>
      </div>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl pt-30 text-center ">
        Italian Restaurant <br />
        <h1 className="block mt-3 font-medium ">OUR STORY</h1>
      </p>
      <div className=" grid lg:grid-cols-3 justify-center text-center  font-serif">
        <div></div>
        At PATO PLACE, we believe that great food brings people together. Our
        journey began with a passion for authentic flavors and a desire to share
        our love for delicious, homemade meals with the world. Inspired by
        traditional recipes and crafted with the freshest ingredients, every
        dish we serve tells a story of culture, heritage, and a deep
        appreciation for good food. From our warm and inviting atmosphere to our
        carefully curated menu, we strive to create an experience that feels
        like home. Whether you're here for a casual meal, a special celebration,
        or simply to savor the rich flavors of our cuisine, we welcome you to be
        part of our story one bite at a time. Come dine with us and discover the
        taste of PATO PLACE!
      </div>
      <div className="grid lg:grid-cols-2 w-full gap-4 p-4 ">
        <Card
          title=" MISSION"
          text=" Our vision is to be the leading Italian restaurant in the region, known for our exceptional food, warm hospitality, and unforgettable dining experience. We aim to create a welcoming space where guests can enjoy the rich flavors of Italy, share special moments with loved ones, and create lasting memories. "
        />
        <Card
          title="VISION"
          text=" Our mission is to provide our guests with an authentic taste of Italy through our carefully crafted menu, warm ambiance, and exceptional service. We are committed to using the finest ingredients, traditional recipes, and innovative cooking techniques to create dishes that delight the senses and nourish the soul. "
        />
      </div>
    </div>
  );
}

export default About;
