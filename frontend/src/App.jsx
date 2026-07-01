import { WallpaperProvider } from "./context/WallpaperContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Navigate, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "@clerk/react";
import PageLoader from "./components/PageLoader";

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <PageLoader></PageLoader>;

  return (
    <ThemeProvider>
      <WallpaperProvider>
        <Routes>
          <Route
            path="/"
            element={
              isSignedIn ? <ChatPage /> : <Navigate to={"/auth"} replace />
            }
          ></Route>
          <Route
            path="/auth"
            element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace />}
          ></Route>
        </Routes>
      </WallpaperProvider>
    </ThemeProvider>
  );
}

export default App;
