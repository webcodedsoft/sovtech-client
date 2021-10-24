export type homeworld = {
  name: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
};

export type Results = {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld?: homeworld;
};
