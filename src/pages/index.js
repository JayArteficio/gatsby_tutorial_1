import React from 'react';
import Link from 'gatsby-link';

export default () =>
  <div style={{ color: 'pink' }}>
    <h1>Hello world!!!!!!!!!!</h1>
    <p>lorem ipsum</p>
    <img src='https://source.unsplash.com/random/400x200' alt='' />
    <br />
    <div>
      <Link to='/page-2/'>Go to Page 2</Link>
    </div>
    <div>
      <Link to='/counter/'>Counter</Link>
    </div>
  </div>;
