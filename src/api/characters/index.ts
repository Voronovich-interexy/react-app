import $api from '../Api';

export const getAllCharacters = async () => {
  const { data } = await $api.get('character/');
  return data.results;
};
export const getSingleCharacter = async (id: number) => {
  const { data } = await $api.get('character/' + id);
  return data;
};

export const fetchFourChars = async (ids: Array<number>) => {
  const fetchedArray = ids.map((id) => $api.get(`character/${id}`));

  const data = await Promise.all(fetchedArray);
  return data;
};

export const getCharByName = async (text: string) => {
  try {
    const result = await $api.get(`character/?name=${text}`);
    return result.data.results;
  } catch (error) {
    return [];
  }
};
