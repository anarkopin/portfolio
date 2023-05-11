import { Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />

        <NavLink to={url} target="_blank" style={{color: "white" }}>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
                
              </NavLink>
       

      </div>
    </Col>
  )
}