import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="login_register_style bg-yellow-500">
      <h1 className="text-5xl bg-green-600">This is Your Dashboard Page</h1>
      <Link className="bg-green text-3xl" href={"/"}>Return to Home</Link>
    </div>
  );
};

export default Dashboard;
