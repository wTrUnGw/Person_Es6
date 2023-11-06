export async function fetchData() {
  try {
    const response = await fetch(
      "https://650f9b1554d18aabfe9a2044.mockapi.io/api/person"
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

//   this.getPersonById = function (id) {
//     var promise = axios({
//       url: `https://650f9b1554d18aabfe9a2044.mockapi.io/api/person/${id}`,
//       method: "GET",
//     });

//     return promise;
//   };

//   this.updatePersonApi = function (person) {
//     return axios({
//       url: `https://650f9b1554d18aabfe9a2044.mockapi.io/api/person/${person.id}`,
//       method: "PUT",
//       data: person,
//     });
//   };
// }
