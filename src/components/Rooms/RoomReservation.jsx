import React from "react";
import DatePicker from "./RoomCalender";

const RoomReservation = () => {
  return (
    <div className="bg-white border-[1px] text-neutral-200 p-4 md:col-span-3">
      <div className="flex flex-row justify-between w-full gap-4">
        <div>night</div>
        <div>$ 200</div>
      </div>
      <hr />
      <div>
        <DatePicker />
      </div>
      <hr />
      <div className="flex flex-row justify-between">
        <div>Total</div>
        <div>$ 300</div>
        <hr />
      </div>
    </div>
  );
};

export default RoomReservation;
