import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} w-[100%] h-[100%] bg-black flex-col  rounded-full cursor-pointer` }
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Get{" "}</span>
        </p>
        <img
          src={arrowUp}
          className="w-[30px] h-[23px] object-contain pl-1 "
          alt="arrow"
        />
      </div>
      <div className={`${styles.flexStart} flex-row`}>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
