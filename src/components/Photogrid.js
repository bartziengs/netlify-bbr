import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PropTypes from "prop-types";
import React from "react";

const PhotoGrid = ({ data }) => (
  <div className="section pt-1 pb-3 is-mobile">
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <h3 className="has-text-weight-semibold is-size-3">{data.heading}</h3>
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child">
                  <PreviewCompatibleImage imageInfo={data.image1} />
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child">
                  <PreviewCompatibleImage imageInfo={data.image2} />
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child">
                <PreviewCompatibleImage imageInfo={data.image3} />
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

PhotoGrid.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
};

export default PhotoGrid;
