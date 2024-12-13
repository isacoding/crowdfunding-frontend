async function postSignup(credentials) {
  const url = `${import.meta.env.VITE_API_URL}/users/`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.detail || "Failed to create account");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export default postSignup;
