export const initialState = {
  offers: {
    data: [
      {
        id: "1",
        region: "Riviera Maya",
        title: "The most beautiful beaches in the World!",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 3000,
        image: [
          "/images/offers/tulum.jpg",
          "/images/offerss/IslaMujeres.jpg",
          "/images/offers/PuertoMorelos.jpg",
        ],
      },
      {
        id: "2",
        region: "Oaxaca",
        title: "The heart of Mexican cultute",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 3000,
        image: [
          "/images/offers/oaxaca.jpg",
          "/images/offerss/hierveAqua.jpg",
          "/images/offers/PuertoEscondido.jpg",
        ],
      },
      {
        id: "3",
        region: "Chiapas",
        title: "Chiapas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 3000,
        image: [
          "/images/offers/oaxaca.jpg",
          "/images/offerss/hierveAqua.jpg",
          "/images/offers/PuertoEscondido.jpg",
        ],
      },
      {
        id: "4",
        region: "Jalisco",
        title: "Tequila region",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 3000,
        image: [
          "/images/offers/Tequila.jpg",
          "/images/offerss/tequila2.jpg",
          "/images/offers/Guadalajara.jpg",
        ],
      },
      {
        id: "5",
        region: "Ciudad de Mexico",
        title: "Amazig capital",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 3000,
        image: [
          "/images/offers/CDMX.jpg",
          "/images/offerss/CDMX2.jpg",
          "/images/offers/teotihuacan.jpg",
        ],
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  regions: {
    data: [
      { id: "1", name: "Riviera Maya", image: "/images/offers/tulum.jpg" },
      { id: "2", name: "Oaxaca", image: "/images/offers/oaxaca.jpg" },
      { id: "3", name: "Chiapas", image: "/images/offers/Palenque2.jpg" },
      { id: "4", name: "Jalisco", image: "/images/offers/tequila2.jpg" },
      { id: "5", name: "Ciudad de Mexico", image: "/images/offers/CDMX.jpg" },
      {
        id: "6",
        name: "Huasteca Potosina",
        image: "/images/offers/Huasteca2.jpg",
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
