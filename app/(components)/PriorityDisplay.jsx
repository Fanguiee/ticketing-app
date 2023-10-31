import {
  faAppleWhole,
  faCircleHalfStroke,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faCircle}
        className={` pr-1 ${
          priority > 0 ? "text-prio-red" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faCircle}
        className={` pr-1 ${
          priority > 1 ? " text-prio-red" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faCircle}
        className={`  pr-1 ${
          priority > 2 ? " text-prio-red" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faCircle}
        className={` pr-1 ${
          priority > 3 ? " text-prio-red" : " text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faCircle}
        className={` ${priority > 4 ? " text-prio-red" : " text-slate-400"}`}
      />
    </div>
  );
};

export default PriorityDisplay;
