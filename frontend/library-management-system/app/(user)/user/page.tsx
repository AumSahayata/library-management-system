import React from "react";
import UserProfile from "@/app/components/userprofile";

import getuserdetails from "@/app/utils/getUserDetails";
import Navbar from "@/app/components/nav";
import getSession from "@/app/utils/getSession";

const getBorrowed = async () => {
  try {
    const authToken = getSession()?.value;
    const res = await fetch(`${process.env.BASE_URL}/api/book/borrowed`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await res.json()
    return data;
  } catch (error) {
    console.log(error)
  }
};

export default async function UserPage() {
  const data = await getuserdetails();
  const borrowedData = await getBorrowed()
  return (
    <>
      <Navbar loggedIn={true} />
      <UserProfile data={data} borrowed={borrowedData}/>
    </>
  );
}
