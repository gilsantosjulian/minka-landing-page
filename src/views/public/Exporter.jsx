import React, { useEffect, useState } from 'react';
import { Anchor, Box } from 'grommet';

import requester from 'services/requester';
const parse = require('json2csv').parse;
const fields = [
  {
    value: 'name',
    label: 'Nombre',
  },
  {
    value: 'email',
    label: 'Correo',
  },
  {
    value: 'phone',
    label: 'Teléfono',
  },
  {
    value: 'team',
    label: 'Equipo',
  },
  {
    value: 'hackathonBefore',
    label: 'Participación previa',
  },
  {
    value: 'studies',
    label: 'Estudios',
  },
  {
    value: 'gitAccount',
    label: 'Cuenta git',
  },
  {
    value: 'nodeExperience',
    label: 'Experiencia en node',
  },
  {
    value: 'programmingLanguages',
    label: 'Lenguajes de programación',
  },
  {
    value: 'blockchainExperience',
    label: 'Experiencia en blockchain',
  },
  {
    value: 'cloudPlatforms',
    label: 'Plataformas de cloud',
  },
  {
    value: 'currentlyEmployed',
    label: 'Empleo actual',
  },
  {
    value: 'minkaHackaton',
    label: 'Canal por el cual se entero de la hackaton',
  },
];




export default () => {
  const [href, setHref] = useState('');

  useEffect(() => {
    requester
    .get('/users')
    .then(({ data }) => {
      const csv = parse(data, {fields});
      const file = new Blob([csv], { type: 'text/csv' });
      setHref(URL.createObjectURL(file));
    })
  }, [])

  return (
    <Box
      fill
      justify='center'
      align='center'>
      <Anchor href={href}>Descargar</Anchor>
    </Box>
  );
}

