https://www.gatsbyjs.org/tutorial/part-one/

1. Download Gatsby CLI

    npm install --global gatsby-cli

2. Downlaod the started template

    gatsby new tutorial-part-one https://github.com/gatsbyjs/gatsby-starter-hello-world

3. Run that app/template

    cd tutorial-part-one
    gatsby develop

4. For production use:

    gatsby build

5.  To add links

    import Link from 'gatsby-link';
    ...
    eg.
    <Link to='/page-2/'>Go to Page 2</Link>
    or
    <Link to="/">back home</Link>

    then create that page that gatsby is looking for

6.  Simple counter using class Component

      import React from 'react';

      class Counter extends React.Component {
        constructor() {
          super();
          this.state = { count: 0 };
        }

        render() {
          return (
              <div>
                <h1>Counter</h1>
                <p>current count: {this.state.count}</p>
                <button onClick={ () => this.setState({ count: this.state.count + 1 })}>plus</button>
                <button onClick={ () => this.setState({ count: this.state.count - 1 })}>minus</button>
              </div>
          );
        }
      }

      export default Counter;

7. Deploying using Surge

    >npm install --global surge
    >surge (this runs surge and you log-in/sign-up)

8.  >gatsby build (in root directory)  
    >surge public/
