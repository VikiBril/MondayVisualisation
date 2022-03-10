const keyToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0ODA5NDI5NCwidWlkIjoyODQzNjU0NiwiaWFkIjoiMjAyMi0wMi0yN1QxMjoxMTowNy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6OTE1OTE0NSwicmduIjoidXNlMSJ9.CNqP02pksjgjUWJ_IvPkzI8EyyQnAs_dT19S18pkaUE";

export function getMondayData() {
  console.log("fetching");
  let query =
    "{boards(ids: 1363112921) { views(ids: 42028689) { id } items{ groups{ title }id name column_values{ title value} } } } }";
  let response;
  fetch("https://api.monday.com/v2", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: keyToken,
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const persons = res.data.filter((item) => {
        return item.id === "person";
      });
      console.log(persons, "persons");
      return JSON.stringify(res, null, 2);
    });
  return response;
}
