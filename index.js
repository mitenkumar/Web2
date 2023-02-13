myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (e) {
  e.preventDefault(); // It will helps to stop reload

  // Targeting all values
  const Email = document.getElementById("inputEmail4").value;
  const Password = document.getElementById("inputPassword4").value;
  const Address = document.getElementById("inputAddress").value;
  const City = document.getElementById("inputCity").value;
  const State = document.getElementById("inputState").value;
  if (
    Email == "" ||
    Password == "" ||
    Address == "" ||
    City == "" ||
    State == ""
  ) {
    alert("Please Filled Up the Complete Form");
  }
  // Making Object
  var Data = {
    Email: Email,
    Password: Password,
    Address: Address,
    City: City,
    State: State,
  };
  console.log(Data);

  // Table Stripes
  document.getElementById("demo").innerHTML += `<tr>
    <td contenteditable='true'>${Data.Email}</td>
    <td contenteditable='true'>${Data.Password}</td>
    <td contenteditable='true'>${Data.Address}</td>
    <td contenteditable='true'>${Data.City}</td>
    <td contenteditable='true'>${Data.State}</td> 
    <td><button class='btn btn-outline-danger' onclick='deletePost(this)'>Delete</button> 
    </tr>`;

    // editPost = function () {
    //     Data.Email = prompt("Enter The Email");
    //     Data.Password = prompt("Enter the password");
    //     Data.Address = prompt("Enter the Address");
    //     Data.City = prompt("Enter the City");
    //     Data.State = prompt("Enter the State Gujarat or Maharastra");
    //     console.log(Data);
    // }

    deletePost = (e) => {
      e.parentElement.parentElement.remove();
    };
});

// Delete

// Edit