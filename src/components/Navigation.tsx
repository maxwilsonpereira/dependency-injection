// npm install react-router-dom@6
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
        fontWeight: "bold",
      }}
    >
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "darkred" : "",
            textDecoration: "none",
          };
        }}
        to={`/`}
      >
        HOME
      </NavLink>{" "}
      |{" "}
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "darkred" : "",
            textDecoration: "none",
          };
        }}
        to={`/fetchusers`}
      >
        FETCH USERS
      </NavLink>{" "}
      |{" "}
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "darkred" : "",
            textDecoration: "none",
          };
        }}
        to={`/about`}
      >
        ABOUT
      </NavLink>
    </nav>
  );
}
