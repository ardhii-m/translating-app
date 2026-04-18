import soundIcon from "../assets/sound_max_fill.svg";
import CopyIcon from '../assets/Copy.svg'

function BottomButtons({ onClick }) {
  return (
    <div className="flex gap-2">
      <button onClick={onClick} className="cursor-pointer p-2 border border-(--border-color) rounded-xl">
        <img src={soundIcon} alt="Listen" className="w-5 h-5" />
      </button>
      <button onClick={onClick} className="cursor-pointer p-2 border border-(--border-color) rounded-xl">
        <img src={CopyIcon} alt="Copy text" className="w-5 h-5" />
      </button>
    </div>
  );
}

export default BottomButtons;