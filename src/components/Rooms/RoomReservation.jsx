import React from "react";
import DatePicker from "./RoomCalender";
import Button from "../Button/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white border-[1px] border-neutral-200 rounded-xl overflow-hidden p-4 ">
      <div className="flex flex-row items-center p-4 gap-1.5">
        <div className="text-2xl font-semibold">night</div>
        <div className="text-neutral-600 font-light">$ 200</div>
      </div>
      <hr />

      <DatePicker />

      <hr />
      <div className="p-4">
        <Button label="Reserve" />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between text-lg font-semibold">
        <div>Total</div>
        <div>$ 300</div>
      </div>
      <hr />
    </div>
  );
};

export default RoomReservation;
