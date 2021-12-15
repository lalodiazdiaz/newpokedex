import axios from 'axios';

const pokeUrl = 'https://pokeapi.co/api/v2/';

export const getpokeKanto = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=151&offset=0`);
  return resp.data.results;
};

export const getpokeJohto = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=100&offset=151`);
  return resp.data.results;
};

export const getpokeHoenn = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=135&offset=251`);
  return resp.data.results;
};

export const getpokeSinnoh = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=105&offset=386`);
  return resp.data.results;
};

export const getpokeTeselia = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=158&offset=491`);
  return resp.data.results;
};
export const getpokeKalos = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=72&offset=649`);
  return resp.data.results;
};

export const getpokeAlola = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=86&offset=721`);
  return resp.data.results;
};

export const getpokeGalar = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=89&offset=809`);
  return resp.data.results;
};

export const getpokeFormas = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=32&offset=898`);
  return resp.data.results;
};

export const getpokeMega = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=47&offset=930`);
  return resp.data.results;
};
export const getpokeGiga = async () => {
  const resp = await axios.get(`${pokeUrl}pokemon?limit=34&offset=1083`);
  return resp.data.results;
};

//service detail pokemon

export const getpokeDetails = async name => {
  const resp = await axios.get(`${pokeUrl}pokemon/${name}`);
  return resp.data;
};
