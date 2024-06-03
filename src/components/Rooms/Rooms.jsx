import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import RoomCard from "./RoomCard";
import Loader from "../shared/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const Rooms = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log("category", category);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("../../../public/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filteredRooms = data.filter((r) => r.category === category);
          setRooms(filteredRooms);
        } else {
          setRooms(data);
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [category]);
  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      ) : (
        <div className="pt-12">
          <Heading
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
            center={true}
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
