import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <div>
            <div className="container mt-5 pt-5">
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> <h3>What is the purpose of react  router ? </h3> </Accordion.Header>
        <Accordion.Body>
          <p>
          React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <h3>How to works Context API ?</h3> </Accordion.Header>
        <Accordion.Body>
           <p>
           The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
           </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> <h3>useref hooks work ?</h3> </Accordion.Header>
        <Accordion.Body>
           <p>
           The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument ( initialValue ).
           </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
        </div>
    );
};

export default Blog;