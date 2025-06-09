import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./start";
import SignUp from "./auth/signup";
import SignIn from "./auth/signin";
import Home from "./Home/Home";
import Library from "./library/Library";
import ShareAndEarn from "./share&earn/ShareAndEarn";
import MainChatPage from "./chat/MainChatPage";
import { useAuthContext } from "./context/auth.context";
import ChatBox from "./chat/components/ChatBox";
import Category from "./admin/category";
import UpcomingEvents from "./events/upcomingevents";

function App() {
  const { authUser, loading } = useAuthContext();
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/signup"
          element={!authUser ? <SignUp /> : <Navigate to="/home" />}
        />
        <Route
          path="/signin"
          element={!authUser ? <SignIn /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={authUser ? <Home /> : <Navigate to="/signin" />}
        />
        <Route
          path="/library"
          element={authUser ? <Library /> : <Navigate to="/signin" />}
        />
        <Route
          path="/refer-and-earn"
          element={authUser ? <ShareAndEarn /> : <Navigate to="/signin" />}
        />
        <Route
          path="/chat"
          element={authUser ? <MainChatPage /> : <Navigate to="/signin" />}
        />
        <Route path={'/admin'} element={<Category />}></Route>
        <Route path={"/upcomingevents"} element={<UpcomingEvents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
