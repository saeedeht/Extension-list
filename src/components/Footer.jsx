import { Fragment } from "react";

export const Footer = () => {
  return (
    <Fragment>
      <p className="text-center">
        Project page, and code written by{" "}
        <span>
          <a
            href="https://github.com/Corbinhol"
            className="underline font-bold"
          >
            Corbin
          </a>
        </span>{" "}
      </p>
      <p className="text-center">
        Designed by{" "}
        <span>
          <a
            href="https://www.frontendmentor.io/"
            className="underline font-bold"
          >
            Frontend Mentor
          </a>
        </span>
      </p>
    </Fragment>
  );
};
