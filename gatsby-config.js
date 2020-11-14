module.exports = {
  siteMetadata: {
    title: `teddywilson.me`,
    author: `Teddy Wilson`,
    firstName: `Teddy`,
    lastName: `Wilson`,
    description: `Teddy Wilsons's personal site`,
    occupation: `Artist & Software Engineer`,
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
    unemployed: true,
    // TODO(teddywilson) lol remove
    designations: [
      `Coding Monkey`,
      `Jedi Master`,
      `Binary Sunset Enthusiast`,
      `Moisture Farmer`,
    ],
    readingList: [
      {
        title: `Sapiens: A Brief History of Humankind`,
        author: `Yuval Noah Harari`,
        link: `https://www.goodreads.com/book/show/23692271-sapiens`,
      },
      {
        title: `Behave: The Biology of Humans at our Best and Worst`,
        author: `Robert Sapolsky`,
        link: `https://www.goodreads.com/book/show/31170723-behave`,
      },
      {
        title: `The Gene: An Intimate History`,
        author: `Siddhartha Mukeherjee`,
        link: `https://www.goodreads.com/book/show/27276428-the-gene`,
      },
    ],
    showsList: [
      {
        title: `Avatar: The Last Airbender`,
        author: `Micheal DiMartino, Bryan Konietzko`,
        link: `https://www.imdb.com/title/tt0417299/`,
      },
      {
        title: `Love, Death & Robots`,
        author: `Tim Miller`,
        link: `https://www.imdb.com/title/tt9561862/`,
      },
      {
        title: `Star Wars: The Clone Wars`,
        author: `George Lucas, Dave Filoni`,
        link: `https://www.imdb.com/title/tt0458290/`,
      },
    ],
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Doe's Personal Site`,
        short_name: `J.Doe`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
};
