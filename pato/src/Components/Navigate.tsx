import { useNavigate } from "react-router-dom";
import Button from "./Button";
function Navigate() {
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/menu");
  };

  return <Button classes={"w-30 mb-4"} label="MENU" onClick={goToMenu} />;
}
export default Navigate;
