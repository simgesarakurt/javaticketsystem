var selectedRow =null;

//Show Alerts
function showAlert(message,className){
    const div =document.createElement("div");
    div.className=`alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container =document.querySelector(".container");
    const main=document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);
}

//Clear All Fields
function clearFields(){
    document.querySelector("#firstName").value ="";
    document.querySelector("#lastName").value ="";
    document.querySelector("#rollName").value ="";
     document.querySelector("#city").value ="";
     document.querySelector("#city1").value ="";
      document.querySelector("#seat1").value ="";
      
}


//Add Data
document.querySelector("#user-form").addEventListener("submit",(e) =>{
    e.preventDefault();

    //Get Form Values
    const firstName =document.querySelector("#firstName").value;
    const lastName =document.querySelector("#lastName").value;
    const rollNo =document.querySelector("#rollNo").value;
     const city =document.querySelector("#city").value;
      const city1 =document.querySelector("#city1").value;
       const seat1 =document.querySelector("#seat1").value;

    
    //validate
    if(firstName =="" || lastName =="" || rollNo=="" || city=="" || city1==""  || seat1==""){
        showAlert("Please fill in all fields" , "danger");
    }
    else{
        if(selectedRow == null){
            const list =document.querySelector("#user-list");
            const row=document.createElement("tr");

            row.innerHTML =`
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>${city}</td>
            <td>${city1}</td>
            <td>${seat1}</td>
       
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Düzenle</a>
            <a href="#" class="btn btn-danger btn-sm delete">Sil</a>
            
            `;
            list.appendChild(row);
            selectedRow=null;
            showAlert("Bilet Eklendi" , "success");
        }

        else{
            selectedRow.children[0].textContent=firstName;
            selectedRow.children[1].textContent=lastName;
            selectedRow.children[2].textContent=rollNo;
            selectedRow.children[3].textContent=city;
            selectedRow.children[4].textContent=city1;
            selectedRow.children[5].textContent=seat1;

            selectedRow=null;
            showAlert("bilet düzenlendi" , "info");
        }
        clearFields();
    }
});

//edit data
document.querySelector("#user-list").addEventListener("click" , (e) =>{
    target=e.target;
    if(target.classList.contains("edit")){
        selectedRow=target.parentElement.parentElement;
        document.querySelector("#firstName").value=selectedRow.children[0].textContent;
        document.querySelector("#lastName").value=selectedRow.children[1].textContent;
        document.querySelector("#rollNo").value=selectedRow.children[2].textContent;
        document.querySelector("#city").value=selectedRow.children[3].textContent;
        document.querySelector("#city1").value=selectedRow.children[4].textContent;
        document.querySelector("#seat1").value=selectedRow.children[5].textContent;
    }

});





//Delete Data

document.querySelector("#user-list").addEventListener("click" , (e) =>{
    target=e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Kullanıcı silindi" , "danger");
    }

});
