import React, { useEffect, useState } from 'react';
import { Anchor, Box } from 'grommet';

import firestore from 'services/firestore';
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
    getAll('participants')
    .then((result) => {
      const csv = parse(result, {fields});
      const file = new Blob([csv], { type: 'text/csv' });
      setHref(URL.createObjectURL(file));
    })
  }, [])

  const getAll = async (collectionName) => {
    let query = firestore.collection(collectionName)
    const snaphost = await query.get()
    const result = []

    snaphost.forEach(doc => {
      result.push({
        id: doc.id,
        ...doc.data()
      })
    })

    return result
  }

  return (
    <Box
      fill
      justify='center'
      align='center'>
      <Anchor href={href}>Descargar</Anchor>
    </Box>
  );
}

