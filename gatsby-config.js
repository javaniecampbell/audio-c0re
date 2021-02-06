module.exports = {
  siteMetadata: {
    title: "AudioC0RE",
    siteUrl: "https://preview-audioc0remain29063.gtsb.io/"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "eT1f7zSeQmuI995iElRB9o7-Ua-kAxWPlxdPGomfTuM",
        spaceId: "pbo7wtpluif1",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
      resolve: "@chakra-u/gatsby-plugin",
      options: {
        /**
        * @property {boolean} [isResettingCSS=true]
        * if `false`, this plugin will not use `<CSSReset />
        */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if `false`, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        /**
         * @property {number} [portalZIndex=40]
         * The z-index to apply to all portal nodes. This is useful
         * if your app uses a lot z-index to position elements.
         */
        portalZIndex: 40,
      }
    }
  ],
};
