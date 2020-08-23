import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="briefAbout">
            Quality Work at Reasonable Prices. From Custom Paint Jobs to Fender
            Benders, We do it all!
            <br />
            We also do Restorations!
          </h2>
          <h3 id="dynamic-styles">
            <u>Contact Us</u>
          </h3>
          <table>
            <tbody>
              <tr>
                <td>Phone</td>
                <td>(708) 527-4329</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <a
                    href="https://www.google.com/maps/place/10321+Vans+Dr+Unit+C,+Frankfort,+IL+60423/@41.4886656,-87.8684424,17z/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    10321 Vans Dr, Unit C<br />
                    Frankfort, IL
                  </a>
                </td>
              </tr>
              <tr>
                <td>Hours</td>
                <td>
                  M-F: 8a-4p
                  <br />
                  Sat: 8a-12p
                </td>
              </tr>
            </tbody>
          </table>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.greenBannerCar.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    greenBannerCar: file(relativePath: { eq: "greenBannerCar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
