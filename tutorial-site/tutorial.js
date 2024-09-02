const getData = () => {
  fetch("https://quran-api.santrikoding.com/api/surah")
  .then((response) => response.json())
  .then((data) => {
    let output = `<h2>Nomor dan Nama Surah: </h2>`;

      data.forEach((item) => {
        output += `
         <ul>
           <li>${item.nomor}. </li>
           <li>${item.nama_latin}</li>
           </ul>
           `;
      });
      document.getElementById("surah").innerHTML = output;
  })
  .catch((err) => console.log(err));
}

getData();