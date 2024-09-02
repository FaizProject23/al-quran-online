const inputan = document.getElementById("inputan");
const getData = () => {
  fetch(`https://quran-api.santrikoding.com/api/surah/${inputan.value}`)
    .then((response) => response.json())
    .then((data) => {
      const ayat = data.ayat;

      let output = `<ul class="judul">
        <li>${data.nomor}. ${data.nama_latin} {${data.nama}}</li>
        <li>(${data.jumlah_ayat} Ayat)</li>
      </ul>`;

      console.log(data);
      console.log(inputan);

      ayat.forEach((item) => {
        output += `
         <ul class="content">
           <li class="ayat">${item.ar} {${item.nomor}}</li>
           <li class="arti">${item.idn}</li>
           </ul>
           `;
      });
      document.getElementById("surat").innerHTML = output;
    })
    .catch((err) => console.log(err));
};
