import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default () => {
return html`
<${React.Fragment}>
<${Wrapper}>
  About
<//>
<p>
    This is an example of a modern React template that doesn't require any transpiling or bundling thanks to ES modules, importmaps along with workbox for offline PWA capabilities.
</p>
<//>
`;
}
