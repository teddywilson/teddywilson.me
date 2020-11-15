module.exports = {
  siteMetadata: {
    title: `teddywilson.me`,
    author: `Teddy Wilson`,
    firstName: `Teddy`,
    lastName: `Wilson`,
    city: `Brooklyn`,
    state: `New York`,
    description: `Teddy Wilsons's personal site`,
    occupation: `Artist & Software Engineer`,
    linkedin: `https://www.linkedin.com/in/teddy-wilson-6287ab86/`,
    github: `https://github.com/teddywilson`,
    email: `hello@teddywilson.me`,
    goodreads: `https://www.goodreads.com/review/list/11857663?shelf=read`,
    occupations: [
      {
        title: `Artist`,
        link: `https://clotheslinerecordings.com`,
      },
      {
        title: `Software Engineer`,
        link: `https://github.com/teddywilson`,
      },
    ],
    keywords: [
      `Teddy`,
      `Wilson`,
      `Personal`,
      `Blog`,
      `Resume`,
      `Projects`,
      `Work`,
    ],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
