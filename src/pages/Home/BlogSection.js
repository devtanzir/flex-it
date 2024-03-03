import React from "react";
import DefaultHeading from "../../components/DefaultHeading";
import DefaultHeadingBtn from "../../components/DefaultHeadingBtn";
import BlogPost from "../../components/BlogPost";
import PostImage1 from "../../assets/Image/blog/post-images/1.jpg";
import PostImage2 from "../../assets/Image/blog/post-images/2.jpg";
import PostImage3 from "../../assets/Image/blog/post-images/3.jpg";

const BlogSection = () => {
  return (
    <>
      <section className="blog blog-home mega-section" id="blog">
        <div className="container">
          <DefaultHeading title="blog" heading1="latest" heading2="news">
            <DefaultHeadingBtn text="see all posts" />
          </DefaultHeading>
          <div className="row">
            <div className="col-12">
              <div className="posts-grid">
                <div className="row">
                  <BlogPost
                    title="How litespeed technology works to speed up your
                              site"
                    img={PostImage1}
                    day="05"
                    year="oct 2022"
                    InfoIcon1="bi-bookmark"
                    Infotext1="hosting"
                    InfoIcon2="bi-person"
                    Infotext2="Allan Moore"
                    postDesc="Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.Iure nulla dolorem, voluptates molestiae"
                  />
                  <BlogPost
                    title="give your website a new look and feel with themes"
                    img={PostImage2}
                    day="15"
                    year="sep 2022"
                    InfoIcon1="bi-bookmark"
                    Infotext1="web dev"
                    InfoIcon2="bi-person"
                    Infotext2="mhmd amin"
                    postDesc="Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.Iure nulla dolorem, voluptates molestiae"
                  />
                  <BlogPost
                    title="the role of domain names in SEO world explained"
                    img={PostImage3}
                    day="27"
                    year="aug 2022"
                    InfoIcon1="bi-bookmark"
                    Infotext1="SEO"
                    InfoIcon2="bi-person"
                    Infotext2="yusuf amin"
                    postDesc="Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.Iure nulla dolorem, voluptates molestiae"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
