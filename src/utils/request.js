export async function request(route, method = "GET", data) {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) options.body = JSON.stringify(data);

    const response = await fetch(`http://localhost:8080/api/${route}`, options);
    return await response.json();
  } catch (err) {
    throw new Error(err);
  }
}
