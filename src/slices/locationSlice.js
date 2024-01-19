const initialState = {
  locations: [
    {
      city: "Marrakech",
      addresses: [
        {
          name: "Marrakech Central Square Luggage Storage",
          street: "Jemaa el-Fnaa",
          zipcode: "40000",
          latitude: 31.6257,
          longitude: -7.9891,
          price: "$4.75",
          status: true,
          rate: 4,
          img: "assets/locations/jama-lfna.jpg",
        },
        {
          name: "Marrakech Souk Market Luggage Storage",
          street: "Souk Semmarine",
          zipcode: "40030",
          latitude: 31.629,
          longitude: -7.9825,
          price: "$4.75",
          status: true,
          rate: 4,
          img: "assets/locations/souk-semmarine.jpg",
        },
        {
          name: "Marrakech Royal Palace Luggage Storage",
          street: "Bab Agnaou",
          zipcode: "40100",
          latitude: 31.6232,
          longitude: -7.9834,
          price: "$4.75",
          status: true,
          rate: 4,
          img: "assets/locations/bab-agnao.jpg",
        },
        {
          name: "Marrakech Gardens Luggage Storage",
          street: "Jardin Majorelle",
          zipcode: "40110",
          latitude: 31.6338,
          longitude: -7.9882,
          price: "$5.25",
          status: false,
          rate: 4,
          img: "assets/locations/majorelle.jpg",
        },
      ],
    },
    {
      city: "Agadir",
      addresses: [
        {
          name: "Agadir Beachfront Luggage Storage",
          street: "Avenue Mohammed V",
          zipcode: "80000",
          latitude: 30.421,
          longitude: -9.598,
          price: "$4.75",
          status: true,
          rate: 4,
          img: "assets/locations/agadir-beachfront.jpg",
        },
        {
          name: "Agadir Marina Luggage Storage",
          street: "Marina Agadir",
          zipcode: "80010",
          latitude: 30.4225,
          longitude: -9.5985,
          status: true,
          rate: 4,
          img: "assets/locations/marina.png",
        },
        {
          name: "Agadir Kasbah Luggage Storage",
          street: "Kasbah Agadir Oufella",
          zipcode: "80020",
          latitude: 30.427,
          longitude: -9.596,
          price: "$4.75",
          status: true,
          rate: 4,
          img: "assets/locations/kasbah.png",
        },
        {
          name: "Agadir Golf Club Luggage Storage",
          street: "Golf du Soleil",
          zipcode: "80030",
          latitude: 30.4105,
          longitude: -9.5802,
          price: "$7.50",
          status: true,
          rate: 4,
          img: "assets/locations/golf-club.jpg",
        },
      ],
    },
  ],
};

function locationReducer(state = initialState, action) {
  switch (action.type) {
    case "addLocation":
      return state;
    default:
      return state;
  }
}

function addLocation() {
  // Will be created later
}

export { locationReducer };
