import { BlogEntryEntity } from "../../Entities/BlogEntities";
import { listenerCount } from "process";
import React from "react";
import BlogEntry from "./BlogEntry";



const BlogList = ({ list = [] }: { list: BlogEntryEntity[] | undefined }) => {

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