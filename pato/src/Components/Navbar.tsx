import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" col-span-2 flex  items-center h-16 pr-sm scroll-auto">
        <nav className="grid grid-cols-2  w-full lg:px-5 lg:pl-3  p-2  bg-black ">
          <div className="flex items-center justify-start w-full">
            <img
              src="https://pato-place-seven.vercel.app/static/image/logo.png.webp"
              onClick={() => navigate("/admin/home")}
            />

            <div className="flex  justify-center gap-3 pl-50 mb-4 sticky  text-white-100  text-white pt-5  ">
              <Button
                classes="w-30 mb-4"
                label="HOME"
                onClick={() => navigate("/admin/home")}
              />
              <Button
                classes="w-30 mb-4"
                label="MENU"
                onClick={() => navigate("/admin/menu")}
              />
              <Button
                classes="w-30 mb-4"
                label="RESERVATION"
                onClick={() => navigate("/admin/reservation")}
              />
              <Button
                classes="w-30 mb-4"
                label="GALLERY"
                onClick={() => navigate("/admin/gallery")}
              />
              <Button
                classes="w-30 mb-4"
                label="ABOUT"
                onClick={() => navigate("/admin/about")}
              />
              <Button
                classes="w-30 mb-4"
                label="CONTACT US"
                onClick={() => navigate("/admin/contactus")}
              />
              <Button
                classes="w-30 mb-4"
                label="SIGNIN"
                onClick={() => navigate("/admin/signin")}
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
