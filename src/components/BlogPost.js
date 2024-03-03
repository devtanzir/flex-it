import React from "react";
import { Link } from "react-router-dom";
import PostInfo from "./PostInfo";

const BlogPost = (props) => {
  return (
    <>
      <div className="col-12 col-lg-4">
        <div className="post-box">
          <Link className="post-link" to="/" title={props.title}>
            <div className="post-img-wrapper">
              <img
                className="parallax-img post-img"
                loading="lazy"
                src={props.img}
                alt="parallax Image"
              />
              <span className="post-date">
                <span className="day">{props.day} </span>
                {props.year}
              </span>
            </div>
          </Link>
          <div className="post-summary">
            <div className="post-info">
              <PostInfo
                classNameName="post-cat"
                to="/"
                icon={props.InfoIcon1}
                text={props.Infotext1}
              />
              <PostInfo
                classNameName="post-author"
                to="/"
                icon={props.InfoIcon2}
                text={props.Infotext2}
              />
            </div>
            <div className="post-text">
              <Link className="post-link" to="post-single.html">
                <h2 className="post-title">{props.title}</h2>
              </Link>
              <p className="post-excerpt">{props.postDesc}</p>
              <Link
                className="read-more"
                to="post-single.html"
                title={props.title}
              >
                read more<i className="bi bi-arrow-right icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
