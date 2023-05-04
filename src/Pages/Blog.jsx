/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Pdf from "react-to-pdf";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "../daisy/Spiner";

const Blog = () => {
  const ref = React.createRef();
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <Spinner className="text-center" animation="border" variant="primary" />
    );
  }

  return (
    <div className="my-container">
      <Pdf targetRef={ref} filename="Question_Answer.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Generate PDF
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <h4 className="text-5xl text-center">Question Answers</h4>
        <div>
          <h1 className="mt-8 font-bold">
            Question 1 : Tell us the differences between uncontrolled and
            controlled components.
          </h1>
          <p>
            <strong> Answer: </strong>
            Tell us the differences between uncontrolled and controlled
            components. Uncontrolled components are components that store their
            own state internally, rather than being controlled by React.
            Controlled components are controlled by React.The main difference
            between these two approaches is that in a controlled component, the
            state of the input is managed by React, while in an uncontrolled
            component, it is managed by the DOM.
          </p>
        </div>
        <div>
          <h1 className="mt-8 font-bold">
            Question 2 : How to validate React props using PropTypes.
          </h1>
          <p>
            <strong> Answer: </strong>
            To validate React props using PropTypes, we need to import the
            PropTypes library from the 'prop-types' package, which is a separate
            package from React. We can then define the expected type and other
            validation rules for each prop that your component is expecting to
            receive.
          </p>
        </div>
        <div>
          <h1 className="mt-8 font-bold">
            Question 3 : Tell us the difference between nodejs and express js.
          </h1>
          <p>
            <strong> Answer: </strong>
            Node.js is a JavaScript runtime, while Express.js is a web framework
            built on top of Node.js. Node.js is used to build server-side
            applications in JavaScript, while Express.js provides a higher level
            of abstraction and features for building web applications on top of
            Node.js.
          </p>
        </div>
        <div>
          <h1 className="mt-8 font-bold">
            Question 4 : Tell us the differences between uncontrolled and
            controlled components.
          </h1>
          <p>
            <strong> Answer: </strong>
            A custom hook in React is a function that allows you to reuse
            stateful logic across multiple components. It's essentially a way to
            extract component logic into a reusable function. Custom hooks
            typically use one or more of the existing React hooks, such as
            useState, useEffect, useContext, or useCallback, to provide some
            useful functionality that can be shared across components. <br />
            Creating a custom hook can be beneficial when you find yourself
            duplicating code across multiple components that have similar
            functionality. By creating a custom hook, you can abstract away the
            common logic into a reusable function, making it easier to maintain
            and modify the code in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
