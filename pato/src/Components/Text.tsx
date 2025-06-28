function Text() {
  return (
    <div className="grid grid-cols-1">
      <div className="absolute top-50 left-0 w-full h-full flex items-center justify-center z-10 ">
        <div className="h-[600px] mt-[600px] pl-50 sm:w-fit   grid grid-cols-2 bg-gray-200  ">
          <div className="p-6 sm:p-10 max-w-4xl mx-auto">
            <div className="text-4xl mt-15 font-semibold text-gray-800 sm:text-4xl sm:mt-16">
              Italian Restaurant
            </div>
            <div className="text-5xl sm:text-5xl font-bold text-gray-900 mt-2">
              Welcome
            </div>
            <div className="mt-6 sm:mt-10 text-gray-700 text-base sm:text-lg leading-relaxed">
              Welcome to PATO PLACE. Authentic Italian flavors, made with love!
              Indulge in the rich and timeless traditions of Italian cuisine.
              From freshly made pasta to wood-fired pizzas and fine wines, we
              bring you the true taste of Italy. Whether you're here for a
              romantic dinner or a family gathering, every meal is a celebration
              of flavor and passion.
            </div>
          </div>
          <img
            className="h-[350px] mt-20   w-[350px] rounded-xl"
            src="https://pato-place-seven.vercel.app/static/image/bruna-branco-t8hTmte4O_g-unsplash.jpg"
            alt="Italian food"
          />
        </div>
      </div>
    </div>
  );
}
export default Text;
