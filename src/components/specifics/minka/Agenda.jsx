import React from 'react';
import { Box } from 'grommet';

import Title from 'components/generics/Title';
import Table from 'components/specifics/agenda/Table';
import {
  TXT_73,
  TXT_74,
  TXT_75,
  TXT_76,
  TXT_77,
  TXT_78,
  TXT_79,
  TXT_80,
  TXT_81,
  TXT_82,
  TXT_83,
  TXT_84,
  TXT_85,
  TXT_86,
  TXT_87,
  TXT_88,
  TXT_89,
  TXT_90,
  TXT_91,
} from 'assets/strings';

export default () => {
  return (
    <Box
      align='center'
      background='dark-2'
      pad={{ horizontal: 'xlarge', bottom: 'large' }}>
      <Title
        textOne={TXT_73}
        textTwo={TXT_74}
      />
      <Table
        headers={[TXT_75, TXT_76]}
        data={[
          [TXT_77,TXT_78],
          [TXT_79,TXT_80],
          [TXT_81,TXT_82],
          [TXT_83,TXT_84],
          [TXT_85,TXT_86],
          [TXT_87,TXT_88],
        ]}
        footer={[TXT_89,TXT_90,TXT_91]}
      />
    </Box>
  );
};