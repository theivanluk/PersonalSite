import { listenerCount } from "process";
import React from "react";
import BlogEntry from "./BlogEntry";

interface BlogEntryEntity {
  post_title: string,
  post_id: number,
  picture: string,
  blog: string,
  date_posted: string
}

const BlogList = ({ list = [] }: { list: BlogEntryEntity[]}) => {

  return (
    <>
      {
        list.length === 0 ?
        <div>No Content</div> :
        list.map(({post_title, post_id, picture, blog, date_posted}) =>
          <BlogEntry
            title={post_title}
            id={post_id}
            picture={picture}
            content={blog}
            date={date_posted}
          />
        )
      }
    </>
  )
}

export default BlogList;