import { blogPostQuery, BlogRoll } from "./BlogRoll";
import { StaticQuery } from "gatsby";
import React from "react";

export const HomePageBlogRoll = () => (
  <StaticQuery
    query={blogPostQuery}
    render={(data)  => <BlogRoll data={data} forHomePage={true} />}
  />
);