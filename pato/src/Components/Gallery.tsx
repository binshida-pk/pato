import Footer from "./Footer";

function Gallery() {
  return (
    <>
      <div className="relative max-h-screen w-full bg-gray-100 px-0 ">
        <img
          className="w-full max-h-screen"
          src="https://pato-place-seven.vercel.app/static/image/pexels-robin-schreiner-1188739-2261165.jpg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 text-white text-center">
          <div className="text-7xl font-bold">Gallery</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 max-w-screen-xl mx-auto mb-5">
          <img
            className="rounded w-full"
            src="https://pato-place-seven.vercel.app/static/image/photo-gallery-13.jpg.webp"
          />
          <img
            className="rounded"
            src="https://pato-place-seven.vercel.app/static/image/photo-gallery-14.jpg.webp"
          />
          <img
            className="rounded"
            src="https://pato-place-seven.vercel.app/static/image/photo-gallery-15.jpg.webp"
          />
          <div></div>
          <img
            className="rounded"
            src="https://pato-place-seven.vercel.app/static/image/photo-gallery-16.jpg.webp"
          />
          <img
            className="rounded"
            src="https://pato-place-seven.vercel.app/static/image/photo-gallery-17.jpg.webp"
          />
          <img
            className="rounded"
            src="https://pato-place-seven.vercel.app/static/image/photo-gallery-18.jpg.webp"
          />
          <div></div>
          <img
            className="rounded"
            src="https://pato-place-seven.vercel.app/static/image/photo-gallery-19.jpg.webp"
          />
          <img
            className="rounded"
            src="https://pato-place-seven.vercel.app/static/image/photo-gallery-20.jpg.webp"
          />
          <img
            className="rounded"
            src="https://pato-place-seven.vercel.app/static/image/photo-gallery-21.jpg.webp"
          />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Gallery;
