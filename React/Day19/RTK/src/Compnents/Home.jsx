import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aa, addfav } from "../Utils/FavSlice";

const Home = () => {
  const dis = useDispatch();

  const data = useSelector((store) => store.Favourite);

  useEffect(() => {
    dis(aa());
  }, [dis]);

  if (data.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-blue-600">Loading...</h1>
      </div>
    );
  }

  if (data.error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-red-600 text-2xl font-semibold">
          {data.error.message}
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {data.data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold text-lg line-clamp-1">
                {item.title}
              </h2>

              <div className="flex justify-between mt-3">
                <span className="text-green-600 font-bold text-lg">
                  ₹{item.price}
                </span>

                <span className="bg-yellow-400 px-2 py-1 rounded-md text-sm font-semibold">
                  ⭐ {item.rating}
                </span>
              </div>

              <p className="mt-3 text-gray-600">
                Stock: <span className="font-semibold">{item.stock}</span>
              </p>

              <button onClick={() => {
                dis(addfav())
              }} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                Add to Favourite
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;