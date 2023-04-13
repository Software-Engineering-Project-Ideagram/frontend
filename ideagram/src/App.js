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
} from "./pages";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.body}>
        <ProfileStructure />
      </div>
      <Footer />
    </div>
  );
}

export default App;
