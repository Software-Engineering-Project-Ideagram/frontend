import { React, useContext, useEffect } from "react";
import classes from "./MainPage.module.scss";
import { Idea, Skeleton } from "../../components";
import { useState } from "react";
import AuthContext from "../../api/AuthContext";
import axios from "axios";

const MainPage = () => {
  const token = useContext(AuthContext).getAccessToken();
  console.log(token);

  const [seeAll, setSeeAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userIdeas, setUserIdeas] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.post(
          "http://api.iwantnet.space:8001/api/idea/filter/"
        );
        console.log(res);
        setUserIdeas(res.data);

        console.log(userIdeas);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, []);

  const applyFilter = async (filterItem) => {
    try {
      const res = await axios.post(
        "http://api.iwantnet.space:8001/api/idea/filter/user/",
        {
          classification: [filterItem],
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res.data);
      setUserIdeas(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.toolbar}>
        <button
          onClick={() => {
            applyFilter("art");
          }}
        >
          Arts
        </button>
        <button
          onClick={() => {
            applyFilter("tech");
          }}
        >
          Tech
        </button>
        <button
          onClick={() => {
            applyFilter("food");
          }}
        >
          Food
        </button>
        <button
          onClick={() => {
            applyFilter("games");
          }}
        >
          Games
        </button>
        <button
          onClick={() => {
            applyFilter("films");
          }}
        >
          Films
        </button>
        <button
          onClick={() => {
            applyFilter("music");
          }}
        >
          Music
        </button>
        <button
          onClick={() => {
            applyFilter("publishing");
          }}
        >
          Publishing
        </button>
        <button
          onClick={() => {
            applyFilter("science");
          }}
        >
          Science
        </button>
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

        <div className={classes.ideasContainer}>
          <div className={`${classes.ideas} ${seeAll && classes.scrollable}`}>
            {isLoading ? (
              <Skeleton type="Idea" />
            ) : (
              <>
                {seeAll
                  ? userIdeas.map((item, index) => (
                      <Idea
                        type="MainPage"
                        key={index}
                        uuid={item.uuid}
                        title={item.title}
                        goal={item.goal}
                        details={item.details}
                        likes={item.likes}
                        views={item.views}
                        comments={item.comments}
                      />
                    ))
                  : userIdeas.map(
                      (item, index) =>
                        index < 6 && (
                          <Idea
                            type="MainPage"
                            key={index}
                            uuid={item.uuid}
                            title={item.title}
                            goal={item.goal}
                            details={item.details}
                            likes={item.likes}
                            views={item.views}
                            comments={item.comments}
                          />
                        )
                    )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
