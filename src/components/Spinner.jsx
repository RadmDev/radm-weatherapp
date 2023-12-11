import Image from "next/image";
import React from "react";
import spinner from "../../public/triangle-spinner.gif";

const Spinner = () => {
  return (
    <div>
      <Image
        src={spinner}
        alt="loading.."
        width={200}
        className="w-[200px] m-auto block"
      />
    </div>
  );
};

export default Spinner;
