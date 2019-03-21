import React from 'react';
import { View, NotFoundBoundary, useLoadingRoute, Link } from 'react-navi';
import { MDXProvider } from '@mdx-js/tag';
import { Grommet } from 'grommet';

import theme from 'config/theme';
import NotFound from 'views/public/NotFound.mdx';
import HorizontalSpinner from 'components/specifics/HorizontalSpinner.jsx';

export default () => {
  let loadingRoute = useLoadingRoute()

  return (
    <Grommet theme={theme}>
        <NotFoundBoundary render={() => <NotFound/>}>
          <HorizontalSpinner visibility={loadingRoute}/>
          <MDXProvider components={{
            // Use Navi's <Link> component to render links in
            // Markdown files, ensuring navigation is handled by Navi.
            a: Link,
          }}>
            <View />
          </MDXProvider>
        </NotFoundBoundary>
    </Grommet>
  );
}

