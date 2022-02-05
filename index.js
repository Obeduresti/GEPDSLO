var students = [
  {
    lname: "Uresti",
    name: "Obed Iñaki",
    age: 21,
    birthday: {
      year: 2000,
      month: "Agosto",
      day: 22
    },
    Career: "IDYGS"
  },

  {
    lname: "De la rosa",
    name: "Erick",
    age: 21,
    birthday: {
      year: 2000,
      month: "Noviembre",
      day: 5
    },
    Career: "IDYGS"
  },

  {
    lname: "Cortes",
    name: "Brandon",
    age: 21,
    birthday: {
      year: 2000,
      month: "July",
      day: 06
    },
    Career: "IDYGS"
  }
]

  var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < students.length; i++) {
  var templ = document.getElementById("tbodytempl").content.cloneNode(true);
  var tdnumber = templ.querySelector("span[name='tbodynumber']");
  var tdname = templ.querySelector("span[name='tbodyname']");
  var tdage = templ.querySelector("span[name='tbodyage']");
  var tdcareer = templ.querySelector("span[name='tbodycareer']");

  tdnumber.innerText = i + 1;
  tdname.innerText = students[i].lname + " " + students[i].name;
  tdage.innerText = students[i].age;
  tdcareer.innerText = students[i].Career;

  table.append(templ);
}