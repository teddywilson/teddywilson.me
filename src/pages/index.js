import React from "react"
import Typed from "react-typed"
import { FaLinkedin, FaGithub, FaGoodreads, FaEnvelope } from "react-icons/fa"

const TYPE_SPEED = 32
const ICON_SIZE = 16

export default ({ data }) => {
  return (
    <div className="body">
      <div className="info-container" id="info">
        <div className="header">
          {" > "}
          <Typed
            strings={[`Teddy Wilson`]}
            typeSpeed={TYPE_SPEED}
            showCursor={false}
          />
        </div>
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
          <h4>
            <div className="icons">
              <a href="https://www.linkedin.com/in/teddy-wilson-6287ab86/">
                <FaLinkedin size={ICON_SIZE} className="icon" />
              </a>
              <a href="https://github.com/teddywilson">
                <FaGithub size={ICON_SIZE} className="icon" />
              </a>
              <a href="https://www.goodreads.com/review/list/11857663?shelf=read">
                <FaGoodreads size={ICON_SIZE} className="icon" />
              </a>
              <a href="mailto:hello@teddywilson.me">
                <FaEnvelope size={ICON_SIZE} className="icon" />
              </a>
            </div>
          </h4>
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
