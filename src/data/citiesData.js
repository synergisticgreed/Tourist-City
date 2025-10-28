// City data with Picsum photos (reliable free image service)
const citiesData = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    lat: 48.8566,
    lng: 2.3522,
    imageId: '1502602898657-3e91760cbb34',
    description: 'The City of Light',
    touristPlaces: [
      { 
        name: 'Eiffel Tower', 
        lat: 48.8584, 
        lng: 2.2945, 
        rating: 4.7, 
        time: '2-3 hours',
        imageId: '1511739001486-6bfe10ce785f',
        description: 'Iconic iron lattice tower and symbol of Paris'
      },
      { 
        name: 'Louvre Museum', 
        lat: 48.8606, 
        lng: 2.3376, 
        rating: 4.8, 
        time: '3-4 hours',
        imageId: '1499856871958-5b9627545d1a',
        description: 'World\'s largest art museum'
      },
      { 
        name: 'Notre-Dame', 
        lat: 48.8530, 
        lng: 2.3499, 
        rating: 4.6, 
        time: '1-2 hours',
        imageId: '1431274172761-fca41d930114',
        description: 'Medieval Gothic cathedral'
      },
      { 
        name: 'Arc de Triomphe', 
        lat: 48.8738, 
        lng: 2.2950, 
        rating: 4.7, 
        time: '1 hour',
        imageId: '1549375481-593dc54c2e8f',
        description: 'Monumental arch of triumph'
      }
    ]
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    lat: 35.6762,
    lng: 139.6503,
    imageId: '1540959733332-eab4deabeeaf',
    description: 'Where Tradition Meets Future',
    touristPlaces: [
      { 
        name: 'Senso-ji Temple', 
        lat: 35.7148, 
        lng: 139.7967, 
        rating: 4.6, 
        time: '1-2 hours',
        imageId: '1528360983277-13d401cdc186',
        description: 'Ancient Buddhist temple'
      },
      { 
        name: 'Tokyo Skytree', 
        lat: 35.7101, 
        lng: 139.8107, 
        rating: 4.5, 
        time: '2-3 hours',
        imageId: '1536098561742-ca998e48cbcc',
        description: 'Tallest structure in Japan'
      },
      { 
        name: 'Shibuya Crossing', 
        lat: 35.6595, 
        lng: 139.7004, 
        rating: 4.5, 
        time: '30 mins',
        imageId: '1542051841857-5f90071e7989',
        description: 'World\'s busiest crossing'
      },
      { 
        name: 'Tokyo Tower', 
        lat: 35.6586, 
        lng: 139.7454, 
        rating: 4.4, 
        time: '1-2 hours',
        imageId: '1513407030348-c983a97b98d8',
        description: 'Iconic red communications tower'
      }
    ]
  },
  {
    id: 'newyork',
    name: 'New York',
    country: 'USA',
    lat: 40.7128,
    lng: -74.0060,
    imageId: '1496442226666-8d4d0e62e6e9',
    description: 'The City That Never Sleeps',
    touristPlaces: [
      { 
        name: 'Statue of Liberty', 
        lat: 40.6892, 
        lng: -74.0445, 
        rating: 4.7, 
        time: '3-4 hours',
        imageId: '1508591090116-7a5a1d2b38c0',
        description: 'Symbol of freedom'
      },
      { 
        name: 'Central Park', 
        lat: 40.7829, 
        lng: -73.9654, 
        rating: 4.8, 
        time: '2-3 hours',
        imageId: '1568515387631-8b650bbcdb90',
        description: 'Urban oasis in Manhattan'
      },
      { 
        name: 'Empire State Building', 
        lat: 40.7484, 
        lng: -73.9857, 
        rating: 4.7, 
        time: '2 hours',
        imageId: '1546436836-07a91091f160',
        description: 'Art Deco masterpiece'
      },
      { 
        name: 'Times Square', 
        lat: 40.7580, 
        lng: -73.9855, 
        rating: 4.6, 
        time: '1 hour',
        imageId: '1560260170-957a9a6e0a82',
        description: 'Bright lights, big city'
      }
    ]
  },
  {
    id: 'london',
    name: 'London',
    country: 'UK',
    lat: 51.5074,
    lng: -0.1278,
    imageId: '1513635269975-59663e0ac1ad',
    description: 'Royal Heritage & Modern Culture',
    touristPlaces: [
      { 
        name: 'Big Ben', 
        lat: 51.5007, 
        lng: -0.1246, 
        rating: 4.7, 
        time: '30 mins',
        imageId: '1543832923-44667a44c804',
        description: 'Iconic clock tower'
      },
      { 
        name: 'Tower of London', 
        lat: 51.5081, 
        lng: -0.0759, 
        rating: 4.6, 
        time: '2-3 hours',
        imageId: '1529655683826-aba9b3e77383',
        description: 'Historic royal castle'
      },
      { 
        name: 'London Eye', 
        lat: 51.5033, 
        lng: -0.1195, 
        rating: 4.5, 
        time: '1 hour',
        imageId: '1486299267070-83823f5448dd',
        description: 'Giant observation wheel'
      },
      { 
        name: 'Buckingham Palace', 
        lat: 51.5014, 
        lng: -0.1419, 
        rating: 4.5, 
        time: '1-2 hours',
        imageId: '1578070181910-f1e514afdd08',
        description: 'Royal residence'
      }
    ]
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    lat: 25.2048,
    lng: 55.2708,
    imageId: '1512453979798-5ea266f8880c',
    description: 'Luxury in the Desert',
    touristPlaces: [
      { 
        name: 'Burj Khalifa', 
        lat: 25.1972, 
        lng: 55.2744, 
        rating: 4.7, 
        time: '2-3 hours',
        imageId: '1582672060674-bc2bd808a8b5',
        description: 'World\'s tallest building'
      },
      { 
        name: 'Palm Jumeirah', 
        lat: 25.1124, 
        lng: 55.1390, 
        rating: 4.6, 
        time: '2-3 hours',
        imageId: '1518684079-3c830dcef090',
        description: 'Artificial palm island'
      },
      { 
        name: 'Dubai Marina', 
        lat: 25.0805, 
        lng: 55.1403, 
        rating: 4.6, 
        time: '2 hours',
        imageId: '1566073771259-6a8506099945',
        description: 'Stunning waterfront'
      },
      { 
        name: 'Dubai Mall', 
        lat: 25.1975, 
        lng: 55.2796, 
        rating: 4.6, 
        time: '3-4 hours',
        imageId: '1546412414-e1885259563a',
        description: 'Shopping paradise'
      }
    ]
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    lat: 41.9028,
    lng: 12.4964,
    imageId: '1552832230-c0197dd311b5',
    description: 'The Eternal City',
    touristPlaces: [
      { 
        name: 'Colosseum', 
        lat: 41.8902, 
        lng: 12.4922, 
        rating: 4.7, 
        time: '2-3 hours',
        imageId: '1552832230-c0197dd311b5',
        description: 'Ancient gladiator arena'
      },
      { 
        name: 'Trevi Fountain', 
        lat: 41.9009, 
        lng: 12.4833, 
        rating: 4.7, 
        time: '30 mins',
        imageId: '1531572753322-ad063cecc140',
        description: 'Baroque masterpiece'
      },
      { 
        name: 'Vatican Museums', 
        lat: 41.9065, 
        lng: 12.4536, 
        rating: 4.7, 
        time: '3-4 hours',
        imageId: '1549813069-f95e44d7f498',
        description: 'World-class art collection'
      },
      { 
        name: 'Pantheon', 
        lat: 41.8986, 
        lng: 12.4768, 
        rating: 4.7, 
        time: '1 hour',
        imageId: '1548585744-4afb9fd5e23c',
        description: 'Ancient Roman temple'
      }
    ]
  }
];

export default citiesData;