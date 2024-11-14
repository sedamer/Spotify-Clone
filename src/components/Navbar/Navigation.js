import Icon from "../../Icons";
import { useNavigate } from "react-router-dom";

// use "useNavigate" !

function Navigation() {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-4">
      <div className="flex gap-x-4">
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
        >
          <Icon name="prev" />
        </button>
        <button
          onClick={() => navigate(1)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
        >
          <Icon name="next" />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
