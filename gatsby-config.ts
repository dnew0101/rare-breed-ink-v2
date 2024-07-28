import type { GatsbyConfig } from "gatsby";
import fs from 'fs';
const path = `.env.${process.env.NODE_ENV}`;

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Rare Breed Ink Tattoo Studio`,
    siteUrl: `https://rarebreedinkstudio.com`,
    canonicalUrl: 'https://rarebreedinkstudio.com',
    author: 'Rare Breed Ink',
    description: `One of Washington State's highest-rated tattoo studios, located conveniently in the heart of downtown Tacoma. Experience world-class body art from our talented and licensed artists. We specialize in a wide range of artistic style, including black and gray realism, anime, horror, and much more. Book now!`,
    hours: '11am-7pm',
    phone: '(253)-301-1107',
    openGraph: {
      type: 'website',
      title: 'Rare Breed Ink Tattoo Studio',
      description: `Home to Tacoma's finest tattoo artists. Book your masterpiece today!`,
      url: 'https://rarebreedinkstudio.com',
      image: 'https://rarebreedinkstudio.com/og-image.jpg',
      site_name: 'Rare Breed Ink',
      locale: 'en_US'
    },
    location: {
      address: '711 St Helens Ave',
      suite: 'Suite 201',
      city: 'Tacoma',
      state: 'WA',
      zip: '98402',
      country: 'USA'
    },
    artists: [
      { name: 'Los', instagram: 'https://www.instagram.com/rarebreedinkstudio/',
        styles: 'black and gray, realism, portraits, coverups, and custom designs',
        gender: 'male artist', languages: ['English', 'Spanish'],
        email: 'rarebreedink206@gmail.com', facebook: 'https://www.facebook.com/rarebreedink66/'
      },
      { name: 'Sam', instagram: 'https://www.instagram.com/lovelyinink_/',
        styles: 'anime, stipple, japanese, neo traditional, watercolor, and custom designs',
        gender: 'female artist', languages: ['English']
      },
      { name: 'Raye', instagram: 'https://www.instagram.com/rayetattoos/',
        styles: 'horror, traditional, neo traditional, cyber sigilism, fine line, and custom designs',
        gender: 'female artist', languages: ['English'], email: 'raveninkworkbooking@gmail.com'
      }
    ],
    competitiors: [
      { name: `${process.env.COMPETITOR1}`, url: `${process.env.COMPETITOR1_URL}`},
      { name: `${process.env.COMPETITOR2}`, url: `${process.env.COMPETITOR2_URL}`},
      { name: `${process.env.COMPETITOR3}`, url: `${process.env.COMPETITOR3_URL}`}
    ],
    developer:  
      { name: 'David Newman', 
        github: 'https://github.com/dnew0101', 
        linkedin: 'https://www.linkedin.com/in/john-david-newman0101'
      },
    photographer: 
      { name: 'Chelsea Tornga', 
        instagram: 'https://www.instagram.com/chelsea_tornga_photography/', 
        threads: 'https://www.threads.net/@chelsea_tornga_photography/',
        website: 'https://www.chelseatorngaphotography.com/' 
      },

  // More easily incorporate content into your pages through automatic TypeScript 
    // type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      "spaceId": `${process.env.CONTENTFUL_SPACE_ID}`
      }
    }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss"]
  }
};

export default config;
