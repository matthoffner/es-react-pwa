import * as React from 'react';
import * as ReactDOM from 'react-dom';
import htm from 'htm';

window.html = htm.bind(React.createElement)

const Route = {
  '/': React.lazy(() => import('./routes/home/index.js')),
  '/about': React.lazy(() => import('./routes/about/index.js')),
}

ReactDOM.render(
  html`
    <${React.Suspense} fallback=${html`<div>loading...</div>`}>
      <${Route[location.pathname] || Route['*']} />
    </>
  `,
  document.body
)