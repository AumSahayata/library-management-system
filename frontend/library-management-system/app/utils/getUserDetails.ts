import getSession from "./getSession";

const getuserdetails = async () => {
  try {
    const authToken = getSession();
    if (!authToken) return null;
    const response = await fetch(`${process.env.BASE_URL}/api/auth/info`, {
      headers: {
        Authorization: `Bearer ${authToken?.value}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export default getuserdetails;
