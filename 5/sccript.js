import { data } from "./data.js";

const table = document.querySelector("table");
const dropdown = document.querySelector("#drop-down");

const generateMarkup = (data) => {
  const markup = data
    .map((item, i) => {
      return `
         <tr>
            <td>${i + 1}</td>
            <td>${item.nama}</td>
            <td>${item.nim}</td>
            <td>${item.prodi}</td>
         </tr>
         `;
    })
    .join("");
  return markup;
};

const renderData = (data) => {
  const markup = generateMarkup(data);
  console.log(typeof markup);
  table.insertAdjacentHTML("beforeend", markup);
};

const clearTable = () => {
  table.innerHTML = `
  <thead>
         <th>No</th>
         <th>Nama</th>
         <th>NIM</th>
         <th>Prodi</th>
   </thead>
  `;
};

const dropdownChangeHandler = (e) => {
  const value = e.target.value;
  console.log(value);
  const filteredData = data.filter(
    (item) => item.prodi.toLocaleLowerCase() === value
  );
  clearTable();
  renderData(filteredData);
};

dropdown.addEventListener("change", dropdownChangeHandler);
