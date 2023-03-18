import { FC, useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '@/components/Common/Layout';
import BlogList from '@/components/Blog/BlogList';

const Blog: FC = () => {

  const [blogs, setBlogs] = useState([]);

  async function getBlogsFromServer(): Promise<void> {
    try {
      const { data } = await axios.get('http://localhost:8000/blog?page=1');
      console.log(data);
      setBlogs(data);
    } catch(err) {

    }
  }

  useEffect(() => { getBlogsFromServer() }, []);

  return (
    <Layout name="Blog">
      <BlogList list={blogs}/>
    </Layout>
  )
}

export default Blog