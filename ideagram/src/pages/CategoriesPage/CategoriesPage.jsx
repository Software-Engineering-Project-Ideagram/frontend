import React from "react";
import classes from "./CategoriesPage.module.scss";
import { Idea } from "../../components";
import { useState } from "react";
import IdeaImage from "../../images/idea.png";

const CategoriesPage = () => {
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
        {!seeAll && (
          <div className={classes.selectedIdea}>
            <h1>About Art</h1>
            <img src={IdeaImage} alt="Idea_Image" />
            <p>
              There’s an art to writing compelling exhibition and artwork
              descriptions. Read on to find out tried and true tips for
              successfully introducing your exhibition, artworks and objects to
              your visitors.
            </p>
          </div>
        )}
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
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
            </>
          ) : (
            <>
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
              <Idea type="CategoriesPage" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
