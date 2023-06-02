import { Header, Footer } from "./components";
import classes from "./App.module.scss";
import {
  MainPage,
  AccountReport,
  ForgotPassword,
  ShowProfile,
  CategoriesPage,
  ProfileStructure,
  IdeaStructure,
  CreateAccount,
  Login,
  StepsStructure,
} from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.body}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/accountReport" element={<AccountReport />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/showProfile" element={<ShowProfile />} />
          <Route path="/categoriesPage" element={<CategoriesPage />} />
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
            path="/profileStructure/followers"
            element={<ProfileStructure />}
          />
          <Route
            path="/profileStructure/editProfile"
            element={<ProfileStructure />}
          />
          <Route
            path="/profileStructure/createIdea"
            element={<ProfileStructure />}
          />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/stepsStructure/ideaShow/:ideaId"
            element={<StepsStructure />}
          />
          <Route
            path="/stepsStructure/financialStepShow/:ideaId"
            element={<StepsStructure />}
          />
          <Route
            path="/stepsStructure/collaborationRequestShow/:ideaId"
            element={<StepsStructure />}
          />
          <Route
            path="/stepsStructure/evolutionStepShow/:ideaId"
            element={<StepsStructure />}
          />
          <Route
            path="/stepsStructure/officialInformationShow/:ideaId"
            element={<StepsStructure />}
          />
          <Route
            path="/ideaStructure/collaborationRequest/:ideaId"
            element={<IdeaStructure />}
          />
          <Route
            path="/ideaStructure/evolutionStep/:ideaId"
            element={<IdeaStructure />}
          />
          <Route
            path="/ideaStructure/financialStep/:ideaId"
            element={<IdeaStructure />}
          />
          <Route
            path="/ideaStructure/officialInformation/:ideaId"
            element={<IdeaStructure />}
          />
          <Route
            path="/ideaStructure/editIdea/:ideaId"
            element={<IdeaStructure />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
