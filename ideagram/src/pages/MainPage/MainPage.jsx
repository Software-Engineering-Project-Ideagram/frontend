import React from "react";
import classes from "./MainPage.module.scss";
import { Idea, Skeleton } from "../../components";
import { useState } from "react";

const MainPage = () => {
  const [seeAll, setSeeAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.toolbar}>
        <button>Arts</button>
        <button>Tech</button>
        <button>Food</button>
        <button>Games</button>
        <button>Films</button>
        <button>Music</button>
        <button>Publishing</button>
        <button>Science</button>
      </div>

      <div className={classes.body}>
        <div className={classes.seeAllContainer}>
          <h1>Ideas</h1>

          <button
            className={`${classes.seeAllIdeas} ${
              seeAll && classes.disableButton
            }`}
            onClick={() => setSeeAll(true)}
            disabled={seeAll}
          >
            See All
          </button>
        </div>

        <div className={`${classes.ideas} ${seeAll && classes.scrollable}`}>
          {isLoading ? (
            <Skeleton type="Idea" />
          ) : (
            <>
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
                  <Idea type="MainPage" />
                  <Idea type="MainPage" />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
