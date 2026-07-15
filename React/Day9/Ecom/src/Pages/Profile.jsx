const Profile = () => {
  return (
    <div className="min-h-[86vh] flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition duration-300">

        <img
          className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-green-500 shadow-lg"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />

        <h2 className="mt-6 text-2xl font-bold text-gray-800">
          Mickey
        </h2>

        <p className="mt-2 text-gray-500">
          Full Stack Developer
        </p>

        <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
          Edit Profile
        </button>

      </div>

    </div>
  );
};

export default Profile;