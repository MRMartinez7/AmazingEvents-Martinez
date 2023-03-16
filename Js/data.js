async function getdata() {
    await fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(Response => Response.json())
    .then(json => datas=json)
    localStorage.setItem("data", JSON.stringify(datas));
  }
  getdata();
  let datas= localStorage.getItem("data");
  // console.log(datas);
  datas = JSON.parse(datas);

const data = datas.events