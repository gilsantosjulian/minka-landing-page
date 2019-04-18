import React from 'react';
import { Box } from 'grommet';

import Title from 'components/generics/Title';
import Table from 'components/specifics/agenda/Table';
import {
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
  TXT_92,
  TXT_93,
  TXT_94,
  TXT_95,
  TXT_96,
  TXT_97,
  TXT_98,
  TXT_99,
  TXT_100,
  TXT_101,
  TXT_102,
  TXT_103,
  TXT_104,
  TXT_105,
  TXT_106,
  TXT_107,
  TXT_108,
  TXT_109,
  TXT_110,
  TXT_111,
  TXT_112,
  TXT_113,
  TXT_114,
  TXT_115,
} from 'assets/strings';

const ID = 'agenda';

export default () => {
  return (
    <Box
      id={ID}
      align='center'
      background='dark-2'
      pad={{ horizontal: 'large', bottom: 'large' }}>
      <Title
        textOne={TXT_77}
        textTwo={TXT_78}
      />
      <Table
        headers={[TXT_79, TXT_80]}
        data={[
          [TXT_81, TXT_82],
          [TXT_83, TXT_84],
          [TXT_85, TXT_86],
          [TXT_87, TXT_88],
          [TXT_89, TXT_90],
          [TXT_91, TXT_92],
          [TXT_93, TXT_94],
          [TXT_95, TXT_96],
          [TXT_97, TXT_98],
        ]}
        footer={[]}
      />

      <Title
        textOne={TXT_99}
        textTwo={TXT_100}
      />
      <Table
        headers={[TXT_101, TXT_102]}
        data={[
          [TXT_103, TXT_104],
          [TXT_105, TXT_106],
          [TXT_107, TXT_108],
          [TXT_109, TXT_110],
          [TXT_111, TXT_112],
        ]}
        footer={[TXT_113, TXT_114, TXT_115]}
      />
    </Box>
  );
};