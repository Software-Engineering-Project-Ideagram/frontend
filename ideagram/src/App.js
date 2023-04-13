import { Header, Footer } from "./components";
import classes from "./App.module.scss";
import {
  Followings,
  MainPage,
  AccountReport,
  EvolutionStep,
  ForgotPassword,
  EditProfile,
  ShowProfile,
  Profile,
  CategoriesPage,
  SavedIdeas,
  MyIdeas,
} from "./pages";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.body}>
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
