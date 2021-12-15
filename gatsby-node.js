const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const getContentType = (node) => node.fileAbsolutePath.match(/content(.*)/)[0].split(`/`)[1];

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const contentType = getContentType(node);
    const path = `content/${contentType}/`;
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: path });
    createNodeField({ node, name: `slug`, value: `/${contentType}${slug}` });
  }
};
