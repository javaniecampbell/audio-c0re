import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}


// data
const links = [
  {
    text: "Home",
    url: "/home",
    description:
      "Our Home page can be found. A great place to start",
    color: "#E95800",
  },
  {
    text: "About US",
    url: "/about",
    description:
      "More details about us can be found here",
    color: "#1099A8",
  },
  {
    text: "Location - Los Angeles",
    url: "/location/los-angeles",
    description:
      "Our Los Angeles Location",
    color: "#BC027F",
  },
  {
    text: "Location - San Francisco",
    url: "/location/san-francisco",
    description:
      "Our San Franscisco Location",
    color: "#0D96F2",
  },
  {
    text: "Location - San Jose",
    url: "/location/san-jose",
    description:
      "Our San Jose Location",
    color: "#000000",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Welcome Page</title>
      <h1 style={headingStyles}>
        AudioC0RE
        <br />
        <span style={headingAccentStyles}>— Welcome to our site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        {/* {" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span> */}
      </p>
      <ul style={listStyles}>

        {links.map(link => (
          <li style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
