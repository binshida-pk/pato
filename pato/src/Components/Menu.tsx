import Card from "./Card";

function Menu() {
  return (
    <>
      <div className="grid grid-cols-2 justify-between w-full ">
        <h2 className="pl-20">PRODUCT LIST </h2>

        <svg
          className="w-full h-6 pl-100 text-gray-800 dark:text-black "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
      </div>
      <div className="grid  sm:grid-col-2 lg:grid-cols-4 bg-white pl-20 h-50">
        <Card
          image="https://pato-place-seven.vercel.app/static/image/starter5.jpeg"
          title="ONION BREAD WITH GARLIC, CHEESE AND HERBS"
          text=" $200"
        />
        <Card
          image="https://pato-place-seven.vercel.app/static/image/starter15.jpeg"
          title="DESSERT PLATTER"
          text=" $250"
        />
        <Card
          image="https://pato-place-seven.vercel.app/static/image/starter9.jpeg"
          title="HONEY COMB "
          text=" $290"
        />
        <Card
          image="https://pato-place-seven.vercel.app/static/image/localfood1.jpeg"
          title="POUNDED YAM WITH VEGETABLES"
          text=" $200"
        />
        <Card
          image="https://pato-place-seven.vercel.app/static/image/localfood2.jpeg"
          title="AMALA AND EWEDU"
          text="$300"
        />
        <Card
          image="https://pato-place-seven.vercel.app/static/image/localfood3.jpeg"
          title="YAM AND EGG SAUCE"
          text=" $200"
        />
        <Card
          image="https://pato-place-seven.vercel.app/static/image/localfood4.jpeg"
          title="NORISHING JOLLOF RICE AND CHICKEN"
          text=" $200"
        />
        <Card
          image="https://pato-place-seven.vercel.app/static/image/localfood5.jpeg"
          title="FRIES PLANTAIN"
          text=" $200"
        />
      </div>
    </>
  );
}

export default Menu;
