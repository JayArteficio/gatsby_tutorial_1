import React from "react";
import Link from "gatsby-link";

export default () => (
  <div>
    <p>Hello world from my second Gatsby page</p>
    <Link to='/page-3'>check out the 3rd page</Link>
    <br />
    <Link to="/">back home</Link>
  </div>
);
