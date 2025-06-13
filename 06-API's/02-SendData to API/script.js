document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Response:", data);
      document.getElementById("responseBox").textContent =
        "POST request successful! ID: " + data.id;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});