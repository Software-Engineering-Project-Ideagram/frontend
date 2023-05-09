import { Header, Footer, SavedIdeas, Idea } from "./components";
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
} from "./pages";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.body}>
        <CreateAccount />
      </div>
      <Footer />
    </div>
  );
}

export default App;
