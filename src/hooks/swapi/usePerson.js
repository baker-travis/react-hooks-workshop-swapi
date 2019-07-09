import { useCallback, useMemo } from 'react';
import useFetch from '../useFetch';

export default function usePerson(id) {
  if (!id) throw new Error('You must pass an id to `usePerson`!');
  const transform = useCallback(
    result => {
      return { ...result, id };
    },
    [id]
  );

  const config = useMemo(() => ({ transform }), [transform]);

  const person = useFetch(`https://swapi.co/api/people/${id}/`, config);

  return person;
}
