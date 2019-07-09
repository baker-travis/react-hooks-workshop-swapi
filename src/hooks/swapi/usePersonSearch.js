import useFetch from '../useFetch';

function extractId(url) {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

function transform(response) {
  return (
    response &&
    response.results.map(person => ({
      ...person,
      id: extractId(person.url)
    }))
  );
}

const fetchConfig = {
  defaultVal: [],
  transform
};

export default function usePersonSearch(name = '') {
  const people = useFetch(
    `https://swapi.co/api/people/?search=${encodeURIComponent(name)}`,
    fetchConfig
  );

  return people;
}
