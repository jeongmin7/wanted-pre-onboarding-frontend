import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/wanted-pre-onboarding-frontend/todo");
    }
  }, [navigate]);
  return (
    <div>
      <Login />
    </div>
  );
};

export default Main;
