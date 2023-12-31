export default async (route, body, method = false, token = false) => {
  // console.log(route, method, body);

  const headers = {
    "Content-Type": "application/json",
  };

  // if (authHeader) {
  //   let token = await SecureStorage.getItem('token');

  //   // console.log('token => ', token);

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  //   console.log('Headers => ', headers, route);
  // }

  const response = await fetch(`${route}`, {
    method: method ? method : "get",
    headers,
    body: body && JSON.stringify(body),
  });

  console.log("response", response);

  const responseJSON = await response.json();
  console.log(responseJSON);
  return { payload: responseJSON, status: response.status };
};
