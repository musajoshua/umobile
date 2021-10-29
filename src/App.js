import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";

import RideGroup from "./images/ride_group.png";
import { AppStoreBadge, PlayStoreBadge } from "./components/Badge";

function App() {
  return (
    <div className="">
      {/* <Landing /> */}
      <section className="bg-map text-center">
        <Navbar />
        <div className="p-6">
          <img src={RideGroup} alt="RideGroup" />
          <div>
            <h1 className="text-black font-bold text-5xl capitalize">
              book a <span className="text-electric-ultramarine">driver</span>!
            </h1>
            <p className="capitalize text-sm text-dark-silver">
              got a car but you're too tired to drive?
            </p>
            <p className="capitalize text-sm text-dark-silver">
              let's keep you moving
            </p>

            <div className="flex w-full justify-evenly">
              <PlayStoreBadge />
              <AppStoreBadge />
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-y-auto h-screen text-center">
        <h1 className="mt-7 text-lg text-black font-bold">Why US?</h1>
        <div className="mx-16 my-12 py-4 bg-white rounded-bl-3xl shadow-lg">
          <div className="inline-block rounded-full bg-gray-200 my-2 px-3 py-1">
            1
          </div>
          <h1 className="font-bold text-gray-700 mb-4">Lorem Ipsum</h1>
          <p className="text-gray-500 text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            deserunt soluta amet
          </p>
        </div>
      </section>
      <section className="overflow-y-auto h-screen text-center">
        <h1 className="mt-7 text-lg text-black font-bold">
          Keep Moving In 3 Steps
        </h1>
        <div className="mx-16 my-12 py-4 px-4 bg-white rounded-lg shadow-lg">
          <div className="flex justify-end">
            <div className="inline-block rounded-full bg-gray-200 my-2 px-4 py-4"></div>
          </div>
          <div className="text-left">
            <h2 className="text-gray-700 font-semibold">Lorem</h2>
            <p className="mt-2 text-gray-500 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
