const phoneBooks = [
  { userName: "Alice", userNumber: "(816)-403-5456" },
  { userName: "Daniel", userNumber: "(816)-403-5456" },
  { userName: "Cris", userNumber: "(864)-309-4841" },
  { userName: "Loc", userNumber: "(864)-309-4841" },
  { userName: "Bob", userNumber: "(864)-566-2397" },
];

document.addEventListener("DOMContentLoaded", function () {
  savePhoneBook();
  getPhoneBook();
});

function savePhoneBook() {
  const arrPhoneBook = JSON.stringify(phoneBooks);
  localStorage.setItem("mangDanhBa", arrPhoneBook);
}

function getPhoneBook() {
  if (localStorage.getItem("mangDanhBa")) {
    const _arrPhoneBook = localStorage.getItem("mangDanhBa");
    arrPhoneBook = JSON.parse(_arrPhoneBook);
    renderListPhoneBook(arrPhoneBook);
  }
}

function renderListPhoneBook(arrPhoneBook) {
  let sHTML = "";
  let arrStorage = arrPhoneBook?.sort(function (a, b) {
    if (a.userName < b.userName) return -1;
    if (a.userName > b.userName) return 1;
    return 0;
  });
  for (let index = 0; index < arrStorage.length; index++) {
    const phoneBook = arrStorage[index];
    sHTML += `
      <div class='phone-book-item'>
        <h5>${phoneBook.userName}</h5>
        <p>${phoneBook.userNumber}</p>
      </div>
    `;
  }
  document.querySelector("#phone-book-body").innerHTML = sHTML;
}

document.querySelector("#phone-book-submit").onclick = function (e) {
  e.preventDefault();
  let userNameInput = document.querySelector("#userName").value;
  let userPhoneInput = document.querySelector("#phoneNumber").value;

  phoneBooks.push({
    id: Math.floor(Math.random() * 100),
    userName: userNameInput,
    userNumber: userPhoneInput,
  });

  renderListPhoneBook(phoneBooks);
  savePhoneBook();
};

document.querySelector("#btnSearch").onclick = function (e) {
  e.preventDefault();
  let keyword = document.querySelector("#keyword").value;
  console.log(keyword);
  keyword = keyword.trim().toLowerCase();
  let arrPhoneBookSearch = [];
  for (let index = 0; index < phoneBooks.length; index++) {
    const phoneBookItem = phoneBooks[index];
    if (
      phoneBookItem.userName
        .trim()
        .toLowerCase()
        .search(keyword.trim().toLowerCase()) !== -1
    ) {
      arrPhoneBookSearch.push(phoneBookItem);
    } else if (keyword === phoneBookItem.userNumber) {
      arrPhoneBookSearch.push(phoneBookItem);
    }
  }
  renderListPhoneBook(arrPhoneBookSearch);
};

document.querySelector("#btnDeleteReplace").onclick = function (e) {
  e.preventDefault();
  let arrPhoneBookReplace = [];
  const uniquePhoneBook = phoneBooks.filter((item) => {
    const isDouplicate = arrPhoneBookReplace.includes(item.userNumber);
    if (!isDouplicate) {
      arrPhoneBookReplace.push(item.userNumber);
      return true;
    }
    return false;
  });
  renderListPhoneBook(uniquePhoneBook);
};
