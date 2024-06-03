import React from "react";
import Container from "../../components/shared/Container";
import RoomHeader from "../../components/Rooms/RoomHeader";
import RoomInfo from "../../components/Rooms/RoomInfo";
import RoomReservation from "../../components/Rooms/RoomReservation";

const RoomDetails = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto ">
        <div className="flex flex-col gap-6">
          <RoomHeader />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <RoomInfo />
            <div>
              <RoomReservation />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
