import React from "react";
import UserProfile from "@/app/components/userprofile";

import getuserdetails from "@/app/utils/getUserDetails";
import Navbar from "@/app/components/nav";

export default async function UserPage() {
  const data = await getuserdetails();
  return (
    <>
      <Navbar />
      <UserProfile data={data} />
    </>
  );
}
