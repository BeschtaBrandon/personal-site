import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useTranslation } from "react-i18next";
import "./footer.scss";

const Footer = () => {
  const current_date = moment().format("ll");
  const { t } = useTranslation();

  return (
    <footer>
      <ul className="list-inline">
        <li className="list-inline-item">&copy; {current_date}</li>
        <li className="list-inline-item">
          <a
            href="https://www.linkedin.com/in/brandonbeschta/"
            aria-label="LinkedIn link"
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://github.com/BeschtaBrandon"
            aria-label="Github profile"
          >
            <i className="fab fa-github" aria-hidden="true" />
          </a>
        </li>
        <li className="list-inline-item">
          <Link to="/contact">{t("contact-me")}</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
