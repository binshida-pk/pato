import Button from "./Button";
import Text from "./Text";
function Home() {
  return (
    <div className="w-full h-screen py-0 relative">
      <img
        className="w-full h-screen object-cover brightness-50"
        src="https://i.postimg.cc/mrM5p9dp/slide1-01.webp"
        alt="hero"
      />

      <div className="absolute top-0 left-0 w-full h-[70vh] flex flex-col items-center justify-center text-white">
        <h2 className="font-semibold text-4xl mb-4">Welcome to</h2>
        <h1 className="text-6xl font-bold  px-4 py-2 rounded">PATO PLACE</h1>
        <div className="rounded hover:bg-amber-700 bg-amber-600 h-10 px-6 flex items-center">
          <Button classes={"w-30 text-white"} label="Look Menu" />
        </div>
      </div>

      <img
        className="w-full grid grid-cols-1 "
        src="https://pato-place-seven.vercel.app/static/image/bg-intro-01.jpg"
      />
      <Text />
    </div>
  );
}

export default Home;
