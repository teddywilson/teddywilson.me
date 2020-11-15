import React, { useContext } from "react"

export default ({ data }) => {
  return (
    <div className="body">
      <div className="info-container" id="info">
        <div className="header">Teddy Wilson</div>
        <div>
          <a href="https://clotheslinerecordings.com">
            <h5>Artist</h5>
          </a>
          <h5> & </h5>
          <a href="https://github.com/teddywilson">
            <h5>Software Engineer</h5>
          </a>{" "}
          <h5>based in New York</h5>
        </div>
        <div id="items">
          <h6>
            <u>Work</u>.
          </h6>
          <h3>
            Building out{" "}
            <a href="https://research.google/pubs/pub44824/">
              Network Load Balancing
            </a>{" "}
            infrastructure at <a href="https://www.google.com/">Google</a>
          </h3>
          <h6>
            <u>Contact</u>.
          </h6>
          <h6>
            <u>Newsletter</u>.
          </h6>
          <h4>
            Subscribe to my newsletter{" "}
            <a href="https://forms.gle/wC2Z4mVVMHV1itVU8">here</a>
          </h4>
        </div>
      </div>
    </div>
  )
}
