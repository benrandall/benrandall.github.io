module.exports = {
  siteMetadata: {
    title: "Ben Randall",
    description: "👁",
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
        name:'amag',
        link:'/amag'
      },
      {
        name:'kaiser',
        link:'/kaiser'
      },
      {
        name:'bcbf',
        link:'/bcbf'
      },
      {
        name:'fusebox',
        link:'/fusebox'
      },
      {
        name:'ffd',
        link:'/ffd'
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
      {
        name:'intheether',
        link:'/intheether'
      },
      {
        name:'desertrose',
        link:'/desertrose'
      },
      {
        name:'portfolioreview',
        link:'/portfolioreview'
      },
    ]
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    'gatsby-plugin-dark-mode',
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