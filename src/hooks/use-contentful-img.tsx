import { graphql, useStaticQuery } from 'gatsby';

interface ImageFile {
  url: string;
}

interface Image {
  file: ImageFile;
}

interface Node {
  title: string;
  description: string;
  image: Image;
  category: string;
}

interface Edge {
  node: Node;
}

interface Data {
  allContentfulPhotobuckets: {
    edges: Edge[];
  };
}

const useContentfulImg = (): Node[] => {
  const data: Data = useStaticQuery(graphql`
    query {
      allContentfulPhotobuckets {
        edges {
          node {
            title
            description
            image {
              file {
                url
              }
            }
            category
          }
        }
      }
    }
  `);

  return data.allContentfulPhotobuckets.edges.map(edge => edge.node);
};

export default useContentfulImg;