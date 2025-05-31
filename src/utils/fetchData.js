const fetchData = async (apiEndpoint) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}${apiEndpoint}`, {
      next: { revalidate: 0 },
    });
    const responseData = await response.json();
    return responseData;
  } catch (e) {
    console.log(e, "Error fetching data");
  }
};

export default fetchData;
