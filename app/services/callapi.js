export async function fetchData() {
  try {
    const response = await fetch(
      "https://650f9b1554d18aabfe9a2044.mockapi.io/api/person/"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export function deletePersonById(id) {
  return axios({
    url: `https://650f9b1554d18aabfe9a2044.mockapi.io/api/person/${id}`,
    method: "DELETE",
  });
}

export function addPersonApi(person) {
  return axios({
    url: "https://650f9b1554d18aabfe9a2044.mockapi.io/api/person",
    method: "POST",
    data: person,
  });
}

export async function getPersonById(id) {
  try {
    const response = await fetch(
      `https://650f9b1554d18aabfe9a2044.mockapi.io/api/person/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
// export function getPersonById(id) {
//   return axios({
//     url: `https://64bd1ac52320b36433c76b24.mockapi.io/Products/${productId}`,
//     method: "GET",
//   });
// }

export function updatePersonApi(person) {
  return axios({
    url: `https://650f9b1554d18aabfe9a2044.mockapi.io/api/person/${person.id}`,
    method: "PUT",
    data: person,
  });
}
