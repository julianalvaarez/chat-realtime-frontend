import { Navigate, Route, Router, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase";
import { useState } from "react";
import { AuthRoutes } from "../auth/routes";
import { ChatPage } from "../chat/pages";
import { WelcomePage } from "../landing/WelcomePage";

export const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  onAuthStateChanged(FirebaseAuth, async (user) => {
    if (user) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  })

  return (
    <>
      <Routes>
        {
          isAuthenticated
          ? <Route path="/*" element={<ChatPage />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
        }
        <Route path="/*" element={<WelcomePage />} />
      </Routes>
    </>
  );
};
