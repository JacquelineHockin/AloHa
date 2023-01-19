import React from "react";
import { Nav, Container } from "react-bootstrap";
import { withRouter } from "react-router";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { HouseFill } from "react-bootstrap-icons";
import { BookmarksFill } from "react-bootstrap-icons";
import { SunFill } from "react-bootstrap-icons";
import { CalendarCheckFill } from "react-bootstrap-icons";

const SideNav = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};
  console.log(error);
  console.log(userData);

  return (
    <>
      <Nav className="col-md-12 d-none d-md-block sidebar" activeKey="/home">
        <Container className="users-name">
          <p id="first-name">
            <span>
              {userData.firstname} {userData.lastname}
            </span>
          </p>
          <div className="sidebar-sticky"></div>
        </Container>
        <Nav.Item>
          <Nav.Link href="" className="link first">
            <HouseFill class="side-nav-icons" />
            &nbsp; Your Neighbors
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="link">
            <BookmarksFill class="side-nav-icons" />
            &nbsp; Saved Profiles
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="link">
            <SunFill class="side-nav-icons sun" />
            &nbsp; Resources
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" className="link">
            <CalendarCheckFill class="side-nav-icons" />
            &nbsp; Events
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default SideNav;
