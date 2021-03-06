import React from "react"
import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledContainer = tw.section`bg-black font-cyber text-white flex flex-col`
const StyledTitleText = tw.div`pt-16 mb-8 uppercase text-center font-semibold text-3xl tracking-widest`
const StyledImageName = tw.div`font-semibold mt-8 mb-4`
const StyledImagePosition = tw.div`font-extralight`
const StyledImages = tw.div`flex`
const StyledImageData = tw.div`text-center`
const StyledImageContainer = tw.div` flex flex-col flex-1 justify-center items-center`

const PeopleWithInfluence = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/^(influencia)/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                base64
                aspectRatio
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  const ImageData = {
    "influencia_edward_snowden.jpg": {
      name: "Edward Snowden",
      position: "Periodista, ex-empleado NSA",
    },
    "influencia_chema_alonso.jpg": {
      name: "Chema Alonso",
      position: "Chief Digital Consumer Officer, Telefónica",
    },
    "influencia_Eugene_Kaspersky.jpg": {
      name: "Eugene Kaspersky",
      position: "CEO, Kaspersky Lab",
    },
  }

  return (
    <StyledContainer
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <StyledTitleText>Personas con influencia en el sector</StyledTitleText>
      <StyledImages>
        {data.allFile.edges.map(({ node }) => (
          <StyledImageContainer key={node.base}>
            <Img
              style={{ width: `80%`, height: `80%` }}
              imgStyle={{ objectFit: "scale-down" }}
              fluid={node.childImageSharp.fluid}
            ></Img>
            <StyledImageData>
              <StyledImageName>{ImageData[node.base].name}</StyledImageName>
              <StyledImagePosition>
                {ImageData[node.base].position}
              </StyledImagePosition>
            </StyledImageData>
          </StyledImageContainer>
        ))}
      </StyledImages>
    </StyledContainer>
  )
}

export default PeopleWithInfluence
