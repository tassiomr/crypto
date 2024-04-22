const timeout = 3000;

const cryptos = [
  {
    id: "1",
    name: "Bitcoin",
    label: "BT",
    shortName: "BTC",
    value: "32007.23",
    percent: "+14.5",
    valuePerDolar: "0.12234",
  },
  {
    id: "2",
    name: "Ethereum",
    label: "ETH",
    shortName: "ETH",
    value: "2345.67",
    percent: "-3.2",
    valuePerDolar: "0.08765",
  },
  {
    id: "3",
    name: "Cardano",
    label: "ADA",
    shortName: "ADA",
    value: "0.789",
    percent: "+0.5",
    valuePerDolar: "0.00312",
  },
  {
    id: "4",
    name: "Solana",
    label: "SOL",
    shortName: "SOL",
    value: "56.78",
    percent: "-1.8",
    valuePerDolar: "0.02234",
  },
  {
    id: "5",
    name: "Polkadot",
    label: "DOT",
    shortName: "DOT",
    value: "34.56",
    percent: "+2.1",
    valuePerDolar: "0.01345",
  },
];

const user = {
  avatar: "",
  name: "",
};

const portifolio = {
  value: "",
  percent: "",
};

const data = {
  cryptos,
  user,
  portifolio,
};

const newCoins = {};

const API = {
  get: async (route: string) => {
    await new Promise((resolve) => setTimeout(resolve, timeout));
    return { status: 200, data: data[route] };
  },
  post: async (route: string) => {},
  put: async (route: string) => {},
  remove: async (route: string) => {},
};

export default API;
