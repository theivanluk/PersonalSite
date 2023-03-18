import React, { FC } from "react";
import Image from "next/image";

interface BlogEntryProps {
  title: string,
  id: number,
  picture: string,
  content: string,
  date: string
}

const BlogEntry: FC<BlogEntryProps> = ({ title, id, picture, content, date }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Image src={picture} alt={`${title} picture`} width={500} height={500}/>
      <p>{date}</p>
    </div>
  )
}

export default BlogEntry;