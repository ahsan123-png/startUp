import React from "react";

const UserCard = () => {
  // User variables
  const username = "Ahsan Dev";
  const age = 26;
  const isLoggedIn = true;

  // Object with JSX usage
  const userDetails = {
    location: "Lahore",
    profession: "Software Engineer",
    skills: ["JavaScript", "React", "Django"]
  };

  // Function with JSX
  const greetUser = (name) => {
    return <h3>Welcome back, {name}!</h3>;
  };

  // Conditional JSX logic
//   if the value is empty of undifined we use defult value so we use `?` and `:`
  const status = isLoggedIn ? (
    <p className="text-green-600">Status: Online</p>
  ) : (
    <p className="text-red-600">Status: Offline</p>
  );

  // Mapping array inside JSX
  const skillList = userDetails.skills.map((skill, index) => (
    <li key={index} className="text-sm text-blue-700">
      ✅ {skill}
    </li>
  ));

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md w-96">
      <h2 className="text-xl font-bold">{username}</h2>
      <p>Age: {age}</p>
      {greetUser(username)}
      {status}

      <div className="mt-3">
        <p>
          <strong>Location:</strong> {userDetails.location}
        </p>
        <p>
          <strong>Profession:</strong> {userDetails.profession}
        </p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Skills:</h4>
        <ul>{skillList}</ul>
      </div>
    </div>
  );
};

export default UserCard;
