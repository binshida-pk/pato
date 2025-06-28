import Card from "./Card";

function CardItem() {
  return (
    <div className="grid grid-cols-4  pl-[200px]   w-full bg-gray-200 ">
      <Card
        image="https://pato-place-seven.vercel.app/static/image/intro-01.jpg.webp"
        title="Romantic Restaurant"
        text=" Experience a magical dining atmosphere at our romantic restaurant, where elegant ambiance meets exquisite cuisine. Whether you're celebrating a special occasion or simply enjoying a cozy evening, our menu and setting will make your night unforgettable. 
      "
      />

      <Card
        image="https://pato-place-seven.vercel.app/static/image/intro-02.jpg.webp"
        title="Romantic Restaurant"
        text="     Our chefs craft every dish with passion, using only the freshest ingredients to bring out the best flavors. From gourmet delights to comforting classics, we serve food that satisfies your cravings and leaves you wanting more. 
      "
      />

      <Card
        image="https://pato-place-seven.vercel.app/static/image/intro-04.jpg.webp"
        title="Red Wines You Love"
        text="    Indulge in our carefully curated selection of fine red wines, handpicked to complement every meal. From rich and bold flavors to smooth and delicate notes, our wines offer the perfect pairing for a perfect evening. 
      "
      />
    </div>
  );
}
export default CardItem;
