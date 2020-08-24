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
          <h3 id="dynamic-styles" className="contact_us">
            Contact Us
          </h3>
          <table className="infoTable">
            <tbody>
              <tr>
                <td>Phone</td>
                <td className="answer">
                  <a href="tel:7085274329">(708) 527-4329</a>
                </td>
              </tr>
              <tr>
                <td>E-Mail</td>
                <td className="answer">
                  <a href="mailto:thebodyshopbytimmyv@gmail.com">
                    thebodyshopbytimmyv@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td className="answer">
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
                <td className="answer">
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
      <sub className="signature">
        Site Created by <a href="kieran815.github.io">K. Michael Milligan</a>
      </sub>
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
