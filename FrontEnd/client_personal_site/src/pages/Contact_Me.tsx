import { APP_BUILD_MANIFEST } from "next/dist/shared/lib/constants";
import React, { FC, useReducer, useState } from 'react';
import Layout from "@/components/Layout";

const Contact_Me: FC = () => {
  const [contactInfo, setContactInfo] = useState();

  console.log(process.env.NEXT_PUBLIC_test)

  return (
    <>
      <Layout name="Contact Me">
        <div>
          huh
        </div>
      </Layout>
    </>
  )
}

export default Contact_Me;

export async function getServerSideProps() {
  console.log('testing ', process.env.test)
  return { props: {} }
}