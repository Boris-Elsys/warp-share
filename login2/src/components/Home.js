import React, { useState, useEffect } from "react";
//import { Card } from "react-bootstrap";
import UserService from "../services/user_service";

const Home = () => {

    // return (
    //     <>
    //       <div
    //         className="d-flex justify-content-center align-items-center"
    //         style={{ minHeight: "500px", minWidth: "600px" }}
    //       >
    //         <Card>
    //           <Card.Body>
    //             <Card.Text>
    //               Welcome to demo on ReactJS (v18) Jwt Authentication with HTTP Only
    //               cookie
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </div>
    //     </>
    //   );
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;