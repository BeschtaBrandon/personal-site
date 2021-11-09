import React from "react";
import { Col, Container, Image, Row, ListGroup } from "react-bootstrap";
import moment from "moment";
import { useTranslation } from "react-i18next";

import "./Home.scss";
import nasaPhoto from "../../images/outer_space.jpg";
import portrait from "../../images/portrait.jpg";

const Home = () => {
  const { t } = useTranslation();

  const renderAboutSection = () => {
    const curr_time = moment().format("dddd, MMMM Do YYYY, h:mm a");
    const paragraph =
      "Currently working as a software engineer as of " +
      curr_time +
      ". Always eager to learn new web technologies and advance my software skills. Work best when surrounded by my peers and find immense benefit in collaborating with other engineers. " +
      "Also, thrive in a company who encourages their employees to try something new and adapt to this ever-changing world.";

    return (
      <Row className="home-content">
        <Col xs={8}>
          <div className="lead">
            <p>{paragraph}</p>
          </div>
        </Col>
        <Col xs={4} className="col-md-push-1">
          <Image className="img-fluid self-portrait" src={portrait} thumbnail />
        </Col>
      </Row>
    );
  };

  const renderTechContent = () => {
    return (
      <Row className="tech">
        <Col xs={5} md={4}>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              <strong>Tech</strong>
              <i className="fas fa-code-branch" />
            </ListGroup.Item>
            <ListGroup.Item action href="https://git-scm.com/">
              Git
              <i className="fab fa-github-square" />
            </ListGroup.Item>
            <ListGroup.Item action href="https://www.gnu.org/software/bash/">
              Bash
              <i className="fas fa-terminal" />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Linux <i className="fab fa-linux" />/ Ubuntu
              <i className="fab fa-ubuntu" />/ Windows
              <i className="fab fa-windows" />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              NGINX Web Server / Traefik (reverse proxy)
            </ListGroup.Item>
            <ListGroup.Item action href="https://docker.com">
              Docker
              <i className="fab fa-docker" />
            </ListGroup.Item>
            <ListGroup.Item action href="https://azure.microsoft.com/en-us/">
              Azure / AWS
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Jenkins / Travis
              <i className="fab fa-jenkins" />
            </ListGroup.Item>
            <ListGroup.Item action href="https://heroku.com">
              Heroku
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={7} md={8}>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              <strong>Languages</strong>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              JavaScript (ES6^)
              <i className="fab fa-js-square" />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              HTML5 / CSS3 / Sass
              <i className="fab fa-html5" />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              SQL / PostgreSQL
              <i className="fas fa-database" />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              PHP
              <i className="fab fa-php" />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              C# <i class="fab fa-microsoft" />
            </ListGroup.Item>
            <ListGroup.Item as="li">
              Java
              <i className="fab fa-java" />
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    );
  };

  const renderHomeHeader = () => {
    return (
      <h3 className="home-header">
        {t("home.header")}
        <i class="fas fa-globe-americas" />
      </h3>
    );
  };

  const renderHomeContent = () => {
    return (
      <Row className="home-content">
        <Col xs={5} md={4}>
          <Image className="img-fluid" src={nasaPhoto} thumbnail />
        </Col>
        <Col xs={7} md={8}>
          {renderHomeHeader()}
          <p className="lead">{t("home.main-paragraph")}</p>
        </Col>
      </Row>
    );
  };

  return (
    <Container className="home-page">
      {renderAboutSection()}
      {renderHomeContent()}
      {renderTechContent()}
    </Container>
  );
};

export default Home;
