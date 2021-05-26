export const initialState = {
  offers: {
    data: [
      {
        id: "1",
        region: "Riviera Maya",
        title: "The most beautiful beaches",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 3000,
        image: [
          "/images/offers/tulum.jpg",
          "/images/offers/IslaMujeres.jpg",
          "/images/offers/PuertoMorelos.jpg",
        ],
      },
      {
        id: "2",
        region: "Oaxaca",
        title: "The heart of Mexican culture",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 9000,
        image: [
          "/images/offers/oaxaca.jpg",
          "/images/offers/hierveAqua.jpg",
          "/images/offers/PuertoEscondido.jpg",
        ],
      },
      {
        id: "3",
        region: "Chiapas",
        title: "Around San Cristobal",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 7000,
        image: [
          "/images/offers/sanCristobal.jpg",
          "/images/offers/sanCristobal2.jpg",
          "/images/offers/Palenque.jpg",
        ],
      },
      {
        id: "4",
        region: "Jalisco",
        title: "Around Guadalajara",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 5000,
        image: [
          "/images/offers/Tequila.jpg",
          "/images/offers/tequila2.jpg",
          "/images/offers/Guadalajara.jpg",
        ],
      },
      {
        id: "5",
        region: "CDMX",
        title: "Amazig capital",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 7000,
        image: [
          "/images/offers/CDMX.jpg",
          "/images/offers/CDMX2.jpg",
          "/images/offers/teotihuacan.jpg",
        ],
      },
      {
        id: "6",
        region: "Riviera Maya",
        title: "Amazing Bacalar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 3000,
        image: [
          "/images/offers/bacalar.jpg",
          "/images/offers/IslaMujeres.jpg",
          "/images/offers/PuertoMorelos.jpg",
        ],
      },
      {
        id: "7",
        region: "Oaxaca",
        title: "The heart of Mexican culture",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 3000,
        image: [
          "/images/offers/PuertoEscondido.jpg",
          "/images/offers/hierveAgua.jpg",
          "/images/offers/PuertoEscondido.jpg",
        ],
      },
      {
        id: "8",
        region: "Chiapas",
        title: "Chiapas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 9000,
        image: [
          "/images/offers/Palenque.jpg",
          "/images/offers/sanCristobal.jpg",
          "/images/offers/Palenque2.jpg",
        ],
      },
      {
        id: "9",
        region: "Jalisco",
        title: "Tequila",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 3500,
        image: [
          "/images/offers/Tequila2.jpg",
          "/images/offers/tequila.jpg",
          "/images/offers/Guadalajara1.jpg",
        ],
      },
      {
        id: "10",
        region: "CDMX",
        title: "Ciudad de Mexico",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 3890,
        image: [
          "/images/offers/CDMX2.jpg",
          "/images/offers/CDMX.jpg",
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
