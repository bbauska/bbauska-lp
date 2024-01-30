/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	pathPrefix: "/reponame",
}
  siteMetadata: {
    title: `Gatsby-Brian`,
    siteUrl: `https://www.bbauska.org.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};