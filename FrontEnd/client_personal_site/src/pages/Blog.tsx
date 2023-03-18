import { FC, useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '@/components/Common/Layout';
import BlogList from '@/components/Blog/BlogList';
import { useResource } from '@/hooks/DataRetrieval';
import { BlogEntryEntity } from '@/Entities/BlogEntities';

const Blog: FC = () => {

  const blogs = useResource<BlogEntryEntity[]>('http://localhost:8000/blog?page=1');

  return (
    <Layout name="Blog">
      <BlogList list={blogs}/>
    </Layout>
  )
}

export default Blog