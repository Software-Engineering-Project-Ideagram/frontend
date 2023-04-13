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
} from "./pages";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.body}>
        <AccountReport />
      </div>
      <Footer />
    </div>
  );
}

export default App;
