import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faBatteryHalf } from "@fortawesome/free-solid-svg-icons";

const date = new Date();

const notificationBar = () => (
  <div className="w-auto rounded-2xl mx-1 my-2 h-6 flex justify-between">
    <div className="text-sm">{date.getHours() + ":" + date.getMinutes()}</div>
    <div className="items-center text-xs space-x-1">
      <FontAwesomeIcon icon={faSignal} />
      <FontAwesomeIcon icon={faWifi} />
      <FontAwesomeIcon icon={faBatteryHalf} />
    </div>
  </div>
);

export default notificationBar;
