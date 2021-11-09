import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Image } from "react-bootstrap";
import { RECENT_NEWS } from "./constants.js";
import moment from "moment";
import { useTranslation } from "react-i18next";

import "./News.scss";

const News = () => {
  const { t } = useTranslation();
  const [currentState, setCurrentState] = useState({
    error: null,
    isLoaded: false,
    articles: [],
    apiCode: "e6f7827e0da94e2a8f213be575bbf833"
  });
  const [spaceArticles, setSpaceArticles] = useState([]);

  useEffect(() => {
    fetch(`http://newsapi.org/v2/top-headlines?country=us`, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-Api-Key": currentState.apiCode
      }
    })
      .then(res => res.json())
      .then(
        result => {
          setCurrentState({
            isLoaded: true,
            articles: result.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setCurrentState({
            isLoaded: true,
            error
          });
        }
      );
  }, []);

  useEffect(() => {
    getSpaceNews();
  }, []);

  const getSpaceNews = async () => {
    fetch("https://test.spaceflightnewsapi.net/api/v2/blogs?_limit=10", {
      methood: "GET"
    })
      .then(response => response.json())
      .then(json => setSpaceArticles(json))
      .catch(error => console.log("error: ", error));
  };

  const renderNewsHeader = () => {
    return (
      <h2 className="mt-5 mb-4">
        {t("news.header")}
        <i className="fas fa-newspaper ml-2" />
      </h2>
    );
  };

  const renderSpaceNews = () => {
    if (spaceArticles.length) {
      return (
        <>
          {spaceArticles.map(article => {
            return (
              <div key={article.id} className="media">
                <div className="media-body">
                  <h4 className="media-heading">{article.title}</h4>
                  <p>{article.summary}</p>
                </div>
                <div className="media-right">
                  <img
                    src={article.imageUrl}
                    className="media-object img-responsive"
                    alt="News article"
                  />
                </div>
              </div>
            );
          })}
        </>
      );
    }
  };

  const handleClickNewsArticle = url => {
    window.location = url;
  };

  const renderNewsContent = () => {
    //const { error, isLoaded, articles } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {

    return (
      <ListGroup>
        {RECENT_NEWS &&
          RECENT_NEWS.slice(0, 8).map(item => (
            <ListGroupItem key={item.url} className="media">
              <div className="media-left">
                <Image className="media-object mr-3" src={item.urlToImage} />
              </div>
              <div className="media-body">
                <h4
                  onClick={() => handleClickNewsArticle(item.url)}
                  className="media-heading"
                >
                  {item.title}
                </h4>
                {`${item.description} - ${moment(item.publishedAt).format(
                  "MMMM D YYYY"
                )}`}
              </div>
            </ListGroupItem>
          ))}
      </ListGroup>
    );
    // }
  };

  const renderNewsAttribution = () => {
    return <a href="https://newsapi.org">Powered by News API</a>;
  };

  return (
    <div className="news-page">
      {renderNewsHeader()}
      {renderNewsContent()}
      {renderNewsAttribution()}
    </div>
  );
};

export default News;
