import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";

const Arrow = (props: { disabled: boolean; left?: boolean; onClick: (e: any) => void }) => {
  return (
    <div onClick={props.onClick}>
      <div className="bg-white md:w-[74px] md:min-w-[74px] md:min-h-[74px] md:max-h-[74px] w-[60px] min-w-[60px] min-h-[60px] max-h-[60px] border border-arrowColor text-arrowColor mr-4 flex justify-center items-center cursor-pointer hover:text-white hover:bg-primary hover:border-transparent transition-all duration-300 ease-in-out">
        {props.left && <PiCaretLeftThin className="md:w-12 md:h-12 w-10 h-10" />}
        {!props.left && <PiCaretRightThin className="md:w-12 md:h-12 w-10 h-10" />}
      </div>
    </div>
  );
};

export default Arrow;
