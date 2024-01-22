import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <Nav.Item>
          <Nav.Link href="#">Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Option 3</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Sidebar;
