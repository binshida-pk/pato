import Button from "./Button";
import Text from "./Text";
import CardItem from "./CardItem";

function Home() {
  return (
    <div>
      <div className="relative h-screen w-full">
        <img
          className="w-full h-full object-cover brightness-50 z-0"
          src="https://i.postimg.cc/mrM5p9dp/slide1-01.webp"
          alt="hero"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10">
          <h2 className="font-semibold text-4xl mb-4">Welcome to</h2>
          <h1 className="text-6xl font-bold px-4 py-2 rounded">PATO PLACE</h1>
          <div className="rounded hover:bg-amber-700 bg-amber-600 h-10 px-6 flex items-center mt-4">
            <Button classes="text-white" label="Look Menu" />
          </div>
        </div>
      </div>

      <img
        className="w-full"
        src="https://pato-place-seven.vercel.app/static/image/bg-intro-01.jpg"
        alt="intro"
      />

      <Text />
      <CardItem />
    </div>
  );
}

export default Home;
