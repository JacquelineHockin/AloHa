import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
// import { REMOVE_BOOK } from "../utils/mutations";
// import { removeBookId } from "../utils/localStorage";
import Post from "../components/Post";
import SideNav from "../components/SideNav";
import FeedCard from "../components/FeedCard";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

import Auth from "../utils/auth";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Container fluid bg->
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SideNav />
          </Col>
          <Col id="page-content-wrapper">
            <div id="total-feed">
              <Post></Post>
              <Container id="feed-container">
                <FeedCard></FeedCard>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
};

export default Dashboard;
