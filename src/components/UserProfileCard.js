import React, { useState, useEffect } from 'react';

const UserProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error(`Could not fetch user: ${error}`);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-50 to-green-100">
      <div className="w-full max-w-4xl mx-4 bg-white rounded-2xl border-4 border-dashed border-blue-400 p-8 shadow-2xl transform transition-all hover:scale-105">
        <div className="flex flex-col md:flex-row md:items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg overflow-hidden">
          <div className="flex justify-center md:justify-start px-4 py-4">
            <img className="w-48 h-48 md:w-72 md:h-auto rounded-full border-4 border-white shadow-lg" src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <h2 className="text-5xl font-extrabold">{`${user.name.first} ${user.name.last}`}</h2>
            <p className="mt-3 text-xl">
              <span className="font-bold">Gender:</span>
              <span className="ml-2">{user.gender}</span>
            </p>
            <p className="mt-2 text-xl">
              <span className="font-bold">Phone:</span>
              <span className="ml-2">{user.phone}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
