import React from 'react';
import { View, NotFoundBoundary, useLoadingRoute } from 'react-navi';
import { MDXProvider } from '@mdx-js/tag';
import { Grommet } from 'grommet';

import theme from 'config/theme';
import NotFound from 'views/public/NotFound.mdx';
import HorizontalSpinner from 'components/generics/HorizontalSpinner.jsx';

const styles = {
  container: {
    overflowX: 'hidden',
  },
};

export default () => {
  let loadingRoute = useLoadingRoute()

  return (
    <Grommet theme={theme} full style={styles.container}>
      <NotFoundBoundary render={() => <NotFound/>}>
        <HorizontalSpinner visibility={loadingRoute}/>
        <MDXProvider>
          <View />
        </MDXProvider>
      </NotFoundBoundary>
    </Grommet>
  );
}

