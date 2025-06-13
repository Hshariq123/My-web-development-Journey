axios.get("https://jsonplaceholder.typicode.com/users").
then((response)=>{
    const table = document.getElementById("userTable");
    table.style.border = "2px solid gray";
        table.style.borderCollapse = "collapse";
    table.innerHTML = "";
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["Names", "Usernames", "Emails"];
    headers.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      th.style.border = "2px solid gray";
      th.style.padding = "8px";
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
const tbody = document.createElement("tbody");

    response.data.forEach((user) => {
      const tr = document.createElement("tr");

      [user.name, user.username, user.email].forEach((val) => {
        const td = document.createElement("td");
        td.textContent = val;
        td.style.border = "1px solid gray";
        td.style.padding = "8px";
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
})
.catch((error)=>{
    console.error("Error Fetching users:", error);
    
})