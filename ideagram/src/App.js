import { Header, Footer } from "./components";
import classes from "./App.module.scss";
import {
  MainPage,
  AccountReport,
  EvolutionStep,
  ForgotPassword,
  ShowProfile,
  CategoriesPage,
  ProfileStructure,
  IdeaStructure,
  CreateAccount,
  Login,
} from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.body}>
        <Routes>
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/accountReport" element={<AccountReport />} />
          <Route path="/evolutionStep" element={<EvolutionStep />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/showProfile" element={<ShowProfile />} />
          {/* <Route path="/categoriesPage" element={<CategoriesPage />} /> */}
          <Route
            path="/profileStructure/profile"
            element={<ProfileStructure />}
          />
          <Route
            path="/profileStructure/myIdeas"
            element={<ProfileStructure />}
          />
          <Route
            path="/profileStructure/savedIdeas"
            element={<ProfileStructure />}
          />
          <Route
            path="/profileStructure/followings"
            element={<ProfileStructure />}
          />
          <Route
            path="/profileStructure/editProfile"
            element={<ProfileStructure />}
          />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/ideaStructure/collaborationRequest"
            element={<IdeaStructure />}
          /> */}
          <Route
            path="/ideaStructure/officialInformation"
            element={<IdeaStructure />}
          />
          {/* <Route path="/ideaStructure/createIdea" element={<IdeaStructure />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
