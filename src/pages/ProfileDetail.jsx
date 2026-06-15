import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileDetail = ({ allTracks = [] }) => {
  const navigate = useNavigate();

  const email = localStorage.getItem("email") || "guest@example.com";

  const username = "@" + email.split("@")[0];

  const displayName =
    email.split("@")[0].charAt(0).toUpperCase() +
    email.split("@")[0].slice(1);

  const likedSongs = allTracks.filter(
    (track) => track.liked
  ).length;

  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6 pb-32">

      {/* Header */}
      <div className="max-w-2xl mx-auto flex items-center gap-4 mb-8">

        <button
          onClick={() => navigate(-1)}
          className="text-pink-400 text-2xl hover:text-pink-300"
        >
          <i className="ri-arrow-left-line"></i>
        </button>
      </div>

      <div className="max-w-2xl mx-auto">

        {/* Profile Card */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 text-center">

          <div
            className=" w-24 h-24  mx-auto   rounded-full   bg-pink-500/20 border border-pink-500/30 flex items-center justify-center "
          >
            <i className="ri-user-3-line text-5xl text-pink-400"></i>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mt-5">
            {displayName}
          </h2>

          <p className="text-pink-400 mt-2">
            {username}
          </p>

          <p className="text-gray-400 text-sm mt-2">
            {email}
          </p>
        </div>

        {/* Liked Songs */}
        <div 
          onClick={() => navigate('/liked')}
        
        className="mt-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6">

          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Music
          </p>

          <div className="mt-4 flex items-center justify-between">

            <div>
              <h3 
              
              className="text-xl font-semibold">
                Liked Songs
              </h3>

              <p className="text-gray-400 text-sm">
                Songs you've saved
              </p>
            </div>

            <span 
            
            className="text-4xl font-bold text-pink-400">
              {likedSongs}
            </span>
          </div>
        </div>

        {/* Preferences */}
        <div className="mt-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6">

          <h3 className="text-xl font-semibold mb-6">
            Preferences
          </h3>

          {/* Dark Mode */}
          <div className="flex items-center justify-between py-4 border-b border-zinc-800">

            <div>
              <p className="font-medium">
                Dark Mode
              </p>

              <p className="text-gray-400 text-sm">
                Easier on your eyes
              </p>
            </div>

            <button
              onClick={() => handleToggle("darkMode")}
              className={`relative w-12 h-6 rounded-full transition ${
                settings.darkMode
                  ? "bg-pink-500"
                  : "bg-zinc-600"
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition ${
                  settings.darkMode
                    ? "right-0.5"
                    : "left-0.5"
                }`}
              />
            </button>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between py-4">

            <div>
              <p className="font-medium">
                Notifications
              </p>

              <p className="text-gray-400 text-sm">
                Music updates & alerts
              </p>
            </div>

            <button
              onClick={() => handleToggle("notifications")}
              className={`relative w-12 h-6 rounded-full transition ${
                settings.notifications
                  ? "bg-pink-500"
                  : "bg-zinc-600"
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition ${
                  settings.notifications
                    ? "right-0.5"
                    : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>
        {/* Logout */}
        <button
  onClick={handleLogout}
  className=" w-full mt-6    h-16 text-2xl  rounded-xl   bg-pink-500/15   border border-pink-500/30  text-pink-400  font-semibold  hover:bg-pink-500/25  transition-all "
>
  Logout
</button>

      </div>
    </div>
  );
};

export default ProfileDetail;