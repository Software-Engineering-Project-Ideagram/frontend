import React from "react";
import classes from "./MainPage.module.scss";
import { Idea } from "../../components";
import { useState } from "react";

const MainPage = () => {
  const [seeAll, setSeeAll] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.toolbar}>
        <button>Arts</button>
        <button>Design & Tech</button>
        <button>Food</button>
        <button>Games</button>
        <button>Films</button>
        <button>Music</button>
        <button>Publishing</button>
        <button>Science</button>
      </div>

      <div className={classes.body}>
        <button
          className={`${classes.seeAllIdeas} ${
            seeAll && classes.disableButton
          }`}
          onClick={() => setSeeAll(true)}
          disabled={seeAll}
        >
          See All
        </button>

        <div className={`${classes.ideas} ${seeAll && classes.scrollable}`}>
          {seeAll ? (
            <>
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
            </>
          ) : (
            <>
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
              <Idea type="MainPage" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
