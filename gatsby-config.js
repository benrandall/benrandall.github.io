module.exports = {
  siteMetadata: {
    title: "Ben Randall",
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'portfolio',
        link:'/portfolio'
      },
      {
        name:'chlorobo',
        link:'/chlorobo'
      },
      {
        name:'laruta',
        link:'/laruta'
      },
      {
        name:'staticpillars',
        link:'/staticpillars'
      },
      {
        name:'sharedfrequencies',
        link:'/sharedfrequencies'
      },
    ]
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
