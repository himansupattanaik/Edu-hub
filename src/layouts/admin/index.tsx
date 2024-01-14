import Head from "next/head";
import React from "react";
import AdminFooter from "./AdminFooter";
import AdminNavbar from "./AdminNavbar";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta />
        <title></title>
      </Head>
      <main>
        <AdminNavbar />
        {children}
        <AdminFooter />
      </main>
    </>
  );
};

export default AdminLayout;
