import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Blog = () => {
  return (
    <div>
      <div className="container mt-5 pt-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {" "}
              <h3>What is the purpose of react router ? </h3>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <p>
                React Router is a standard library for routing in React. It
                enables the navigation among views of various components in a
                React Application, allows changing the browser URL, and keeps
                the UI in sync with the URL.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <h3>How does context API works ?</h3>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The React Context API is a way for a React app to effectively
                produce global variables that can be passed around. This is the
                alternative to "prop drilling" or moving props from grandparent
                to child to parent, and so on. Context is also touted as an
                easier, lighter approach to state management using Redux.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {" "}
              <h3>How does work useref hooks ?</h3>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <p>
                useRef returns a mutable ref object whose .current property is
                initialized to the passed argument ( initialValue ). The
                returned object will persist for the full lifetime of the
                component. Essentially, useRef is like a “box” that can hold a
                mutable value in its .current property. The useRef Hook allows
                you to persist values between renders. It can be used to store a
                mutable value that does not cause a re-render when updated. It
                can be used to access a DOM element directly.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
