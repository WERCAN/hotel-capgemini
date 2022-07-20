var RESERVATION_API = "http://localhost:9090/api/reservations" ;
var CUSTOMERS_API="http://localhost:9090/api/customer";
var ROOMS_API = "http://localhost:9090/api/rooms";
var USERS_API="http://localhost:9090/api/users";
var availableRoomsApi="http://localhost:9090/api/reservations/availableRooms";


var RESERVATION_PAGE_ROUTE="http://localhost:9090/reservation/reservationpage";
var HOME_ROUTE = "http://localhost:9090/home" ;

var jsonData={"data":{"First":[{"Id":1,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":2,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":3,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":4,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":5,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":6,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":7,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":8,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Disabled room","Prijzen ":240},{"Id":9,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Disabled room","Prijzen ":240},{"Id":10,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed ","Comments":"Disabled room","Prijzen ":380},{"Id":11,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":380},{"Id":12,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed","Comments":"Non Smoking","Prijzen ":380},{"Id":13,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"2 Single bed","Comments":"Non Smoking","Prijzen ":220},{"Id":14,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"2 Single bed","Comments":"Non Smoking","Prijzen ":220},{"Id":15,"Room":"Double","Adults":2,"Childeren/baby":1,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":380},{"Id":16,"Room":"Double","Adults":2,"Childeren/baby":1,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":380},{"Id":17,"Room":"Double","Adults":2,"Childeren/baby":2,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":380},{"Id":18,"Room":"Double","Adults":2,"Childeren/baby":2,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":380},{"Id":19,"Room":"2 x Double","Adults":4,"Childeren/baby":2,"Bed":"2xD 1XS 1XBaby beds","Comments":"Non Smoking","Prijzen ":550}],"Second floor":[{"Id":1,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":2,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":3,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":4,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":5,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":6,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":7,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":220},{"Id":8,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Disabled room","Prijzen ":240},{"Id":9,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Disabled room","Prijzen ":240},{"Id":10,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed ","Comments":"Disabled room","Prijzen ":380},{"Id":11,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":380},{"Id":12,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed","Comments":"Non Smoking","Prijzen ":380},{"Id":13,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"2 Single bed","Comments":"Non Smoking","Prijzen ":220},{"Id":14,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"2 Single bed","Comments":"Non Smoking","Prijzen ":220},{"Id":15,"Room":"Double","Adults":2,"Childeren/baby":1,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":380},{"Id":16,"Room":"Double","Adults":2,"Childeren/baby":1,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":380},{"Id":17,"Room":"Double","Adults":2,"Childeren/baby":2,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":380},{"Id":18,"Room":"Double","Adults":4,"Childeren/baby":2,"Bed":"2xD 1xS 1xBaby beds","Comments":"Non Smoking","Prijzen ":550},{"Id":19,"Room":"Double","Adults":2,"Childeren/baby":2,"Bed":"Double bed","Comments":"Non Smoking","Prijzen ":380}],"Third floor":[{"Id":1,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":0},{"Id":2,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":0},{"Id":3,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":0},{"Id":4,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":0},{"Id":5,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":0},{"Id":6,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":0},{"Id":7,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Non Smoking","Prijzen ":0},{"Id":8,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Disabled room","Prijzen ":0},{"Id":9,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Disabled room","Prijzen ":0},{"Id":10,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed ","Comments":"Disabled room","Prijzen ":0},{"Id":11,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":0},{"Id":12,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed","Comments":"Non Smoking","Prijzen ":0},{"Id":13,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"2 Single bed","Comments":"Non Smoking","Prijzen ":0},{"Id":14,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"2 Single bed","Comments":"Non Smoking","Prijzen ":0},{"Id":15,"Room":"2x Double","Adults":4,"Childeren/baby":2,"Bed":"2x D 1xS 1xBaby beds","Comments":"Non Smoking","Prijzen ":0},{"Id":16,"Room":"Double","Adults":2,"Childeren/baby":1,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":0},{"Id":17,"Room":"Double","Adults":2,"Childeren/baby":2,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":0},{"Id":18,"Room":"Double","Adults":2,"Childeren/baby":2,"Bed":"Double bed ","Comments":"Non Smoking","Prijzen ":0},{"Id":19,"Room":"Double","Adults":2,"Childeren/baby":2,"Bed":"Double bed","Comments":"Non Smoking","Prijzen ":0}],"Fourth floor":[{"Id":41,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Smoking","Prijzen ":0},{"Id":42,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Smoking","Prijzen ":0},{"Id":43,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Smoking","Prijzen ":0},{"Id":44,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Smoking","Prijzen ":220},{"Id":45,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Smoking","Prijzen ":220},{"Id":46,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Smoking","Prijzen ":0},{"Id":47,"Room":"Single","Adults":1,"Childeren/baby":1,"Bed":"Single ","Comments":"Smoking","Prijzen ":0},{"Id":48,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Disabled room","Prijzen ":0},{"Id":49,"Room":"Single","Adults":1,"Childeren/baby":0,"Bed":"Single ","Comments":"Disabled room","Prijzen ":0},{"Id":410,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed ","Comments":"Disabled room","Prijzen ":0},{"Id":411,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed ","Comments":"Smoking","Prijzen ":0},{"Id":412,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"Double bed","Comments":"Smoking","Prijzen ":0},{"Id":413,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"2 Single bed","Comments":"Smoking","Prijzen ":0},{"Id":414,"Room":"Double","Adults":2,"Childeren/baby":0,"Bed":"2 Single bed","Comments":"Smoking","Prijzen ":0},{"Id":415,"Room":"Double","Adults":2,"Childeren/baby":1,"Bed":"Double bed ","Comments":"Smoking","Prijzen ":0},{"Id":416,"Room":"Double","Adults":2,"Childeren/baby":1,"Bed":"Double bed ","Comments":"Smoking","Prijzen ":0},{"Id":417,"Room":"Double","Adults":2,"Childeren/baby":2,"Bed":"Double bed ","Comments":"Smoking","Prijzen ":0},{"Id":418,"Room":"Penthouse","Adults":8,"Childeren/baby":2,"Bed":"2xD 4XS 2XBaby beds","Comments":"Smoking","Prijzen ":800},{"Id":419,"Room":"Penthouse","Adults":8,"Childeren/baby":2,"Bed":"2xD 4XS 2XBaby beds","Comments":"Smoking","Prijzen ":800}]}};
var reservationTable;
var roomsTable;
var customerInfo=[];
var roomInfoEdit;
var reRoomsTable;
var reservationInfoEdit;

// INIT
function init() {
  //console.log("inside init");

   initReservationTable();
   // Get reservations from backend and update DOM
   getReservationData();

   initCustomersTable();
   getCustomersData();

   initRoomsTable();
   getRoomsData();

   initUsersTable();
   getUsersData();

   initreRoomstable();

     // -------------------------
     // ----  VALIDATIONS -------
     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     const forms = document.querySelectorAll('.needs-validation')
     // Loop over them and prevent submission
     Array.from(forms).forEach(form => {
       form.addEventListener('submit', event => {
         if (!form.checkValidity()) {
           event.preventDefault();
           event.stopPropagation();
         }
         form.classList.add('was-validated');
       }, false)
     });

     // -------------------------
     // ----  RESERVATIONS -------
     // Add event listener for opening and closing details
     $("#reservationsTable tbody").on("click", "#information", function () {
    var tr = $(this).closest("tr");
    var row = reservationTable.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row (the format() function would return the data to be shown)
      row.child(format(row.data())).show();
      tr.addClass("shown");
    }
  });

     $("#reservationsTable tbody, #customersTable tbody, #roomsTable tbody, #usersTable tbody, #reRoomsTable tbody").on("click", "tr", function () {
    console.log("Clicking on row");
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
      // emptyRoomModals();
    } else {
      reservationTable.$("tr.selected").removeClass("selected");
      customersTable.$("tr.selected").removeClass("selected");
      roomsTable.$("tr.selected").removeClass("selected");
      usersTable.$("tr.selected").removeClass("selected");
      reRoomsTable.$("tr.selected").removeClass("selected");
      // emptyRoomModals();
      $(this).addClass("selected");
    }
  });

     //******* Edit Reservation ********
     $("#editReservationButton").click( function () {
    console.log("Inside click of editReservationButton");
    // Get the data from selected row and fill fields in modal
    if (reservationTable.row($('.selected')).data() == undefined) {
        alert("Select reservation first");
    }else{
        reservationInfoEdit = reservationTable.row($('.selected')).data();

         $("#editStartDate").val(reservationInfoEdit.startDate);
         $("#editEndDate").val(reservationInfoEdit.endDate);
         $("#editBabyBed").val(reservationInfoEdit.babyBed);
         $("#editTotalPrice").val(reservationInfoEdit.totalPrice);
         $("#editServicePrice").val(reservationInfoEdit.roomServicePrice);
         $("#adults").val(reservationInfoEdit.room.sizePerson);
         $("#children").val(reservationInfoEdit.room.childrenPlace);
         $("#editBookingPrice").val(reservationInfoEdit.price);
         //$("#reEditRoomType").val(reservationInfoEdit.room.roomType);
         var selectType=reservationInfoEdit.room.roomType;
         var indx;
                 switch (selectType) {
                   case "Single":
                     indx = 1;
                     break;
                   case "Double":
                     indx = 2;
                     break;
                   case "2x Double":
                     indx = 3;
                     break;
                   case "Penthouse":
                     indx = 4;
                     break;
                 };
         document.getElementById("reEditRoomType").selectedIndex=indx-1;


          if(reservationInfoEdit.payment == true){
           $("#paymentPaidRadio").prop("checked", true);
         }else{
           $("#paymentUnPaidRadio").prop("checked", true);
         }

         if(reservationInfoEdit.checkedIn == true){
           $("#checkedInYesRadioId").prop("checked", true);
         }else{
           $("#checkedInNoRadioId").prop("checked", true);
         }

         if(reservationInfoEdit.checkedOut == true){
           $("#checkedOutYesRadioId").prop("checked", true);
         }else{
           $("#checkedOutNoRadioId").prop("checked", true);


         }

         if(reservationInfoEdit.room.smoke == true){
           $("#smoking").prop("checked", true);
         }else{
           $("#nonSmoking").prop("checked", true);
         }

         if(reservationInfoEdit.room.disabled == true){
            $("#disabled").prop("checked", true);
         }

         $('#editReservationModal').modal('show');
    }
    });


    $("#reRoomsTable tbody").on("click", "#infoReRoom", function () {
             var tr = $(this).closest("tr");
             var row = reRoomsTable.row(tr);
               console.log(row.data());
             if (row.child.isShown()) {
               // This row is already open - close it
               row.child.hide();
               tr.removeClass("shown");
             } else {
               // Open this row (the format() function would return the data to be shown)
               row.child(formatRoomFacilities(row.data())).show();
               tr.addClass("shown");
             }
           });
        //Edit Submit
     $('#reEditSubmitButton').click(function(e){



         if(reservationInfoEdit.startDate==$("#editStartDate").val()
         && reservationInfoEdit.endDate==$("#editEndDate").val()
         && reservationInfoEdit.room.roomType==$("#reEditRoomType :selected").text()
         && reservationInfoEdit.room.sizePerson==$("#adults").val()
         && reservationInfoEdit.room.childrenPlace==$("#children").val()
         && ((reservationInfoEdit.room.smoke==true && document.getElementById('smoking').checked==true)
         || (reservationInfoEdit.room.smoke==false && document.getElementById('nonSmoking').checked==true)
         || (reservationInfoEdit.room.disabled==true && document.getElementById('disabled').checked==true))
         ){
         console.log("submit button");
         editBasicReservationInfo();
         $('#editReservationModal').modal('hide');
         }else{



         if ( reRoomsTable.rows( '.selected' ).any() ){
                      console.log("submit button");
                      editReservation(); //burada
                      getReservationData();
                      $('#editReservationModal').modal('hide');
         }else{alert("Please check the availability");}



     }









//    e.preventDefault();
//    console.log("submit button");
//    editReservation(); //burada
//    getReservationData();
//
//    $('#editReservationModal').modal('hide');
  });

  $("#reEditCheckRoomsButton").click( function (){
          console.log("inside check availability button!");
          checkAvailability();
      });

     //---Delete reservation
     $("#deleteReservationButton").click(function () {
      console.log("Inside click of deleteReservationButton");
      if (reservationTable.row($('.selected')).data() == undefined) {
        alert("Select customer first");
    }else{
        $('#reservationDeleteModal').modal('show');
    }
    });

     // Delete Button in modal
     $("#deleteReservationConfirmButton").click(function () {
      console.log("Inside click of deleteCustomerButton");
      deleteReservation();
      $("#reservationDeleteModal").modal("hide");
    });

     // Datatable Search Filtering
     $("#filterReservations").keyup(function () {
        reservationTable.search(this.value).draw();
      });
      $("#filterRooms").keyup(function () {
        roomsTable.search(this.value).draw();
      });
      $("#filterCustomers").keyup(function () {
        customersTable.search(this.value).draw();
      });

     //******* Edit Customer ********
     $("#editReCustomerButton").click( function () {
    console.log("Inside click of editReservationButton");
    // Get the data from selected row and fill fields in modal
    if (reservationTable.row($('.selected')).data() == undefined) {
        alert("Select customer first");
    }else{
        var customerInfoEdit = reservationTable.row($('.selected')).data();

         $("#editReFirstName").val(customerInfoEdit.customers[0].firstName);
         $("#editReLastName").val(customerInfoEdit.customers[0].lastName);
         $("#editEmail").val(customerInfoEdit.customers[0].email);
         $("#editPhone").val(customerInfoEdit.customers[0].phone);
         $("#editDocumentType").val(customerInfoEdit.customers[0].typeOfDocument);
         $("#editReAddress").val(customerInfoEdit.customers[0].address);

         $('#editReCustomerModal').modal('show');
    }
    });

     $('#editReCustomerModal').on('submit', function(e){
  e.preventDefault();
    console.log("Submitting Edit Customer Modal Form!");
    updateCustomerInfo();
    $('#editReCustomerModal').modal('hide');
  });


     //******* Edit Room ********
     $("#editRoomButton").click( function () {

        console.log("Inside click of editRoomButton");
        // Get the data from selected row and fill fields in modal
        if (roomsTable.row($('.selected')).data() == undefined) {
            alert("Select room first!");
        }else{
        var roomInfoEdit = roomsTable.row($('.selected')).data();
        var selectType=roomInfoEdit.roomType;
        var indx;
        switch (selectType) {
          case "Single":
            indx = 1;
            break;
          case "Double":
            indx = 2;
            break;
          case "2x Double":
            indx = 3;
            break;
          case "Penthouse":
            indx = 4;
            break;
        }

         $("#editRoomModal #editRoomNo").val(roomInfoEdit.roomNumber);
         $("#editRoomModal #editRoomGuests").val(roomInfoEdit.sizePerson);
         $("#editRoomModal #editBaby").val(roomInfoEdit.childrenPlace);
         $("#editRoomModal #editRoomPrice").val(roomInfoEdit.price);
         $("#editRoomModal #editSingleBed").val(roomInfoEdit.singleBedAmount);
         $("#editRoomModal #editDoubleBed").val(roomInfoEdit.doubleBedAmount);
         $("#editRoomModal #editFacilities").val(roomInfoEdit.facilities);
         //  $("#editFacilities").val(roomInfoEdit.facilities);

         document.getElementById("selectRoom").selectedIndex=indx;

         if(roomInfoEdit.cleanRoom == true){
          $("#isCleanYes").prop("checked", true);
         }else{
          $("#isCleanNo").prop("checked", true);
         }

         if(roomInfoEdit.roomActive == true){
          $("#isActiveYes").prop("checked", true);
         }else{
          $("#isActiveNo").prop("checked", true);
         }

         if(roomInfoEdit.disabled == true){
          $("#isDisabledYes").prop("checked", true);
         }else{
          $("#isDisabledNo").prop("checked", true);
         }

         if(roomInfoEdit.smoke == true){
          $("#isSmokingYes").prop("checked", true);
         }else{
          $("#isSmokingNo").prop("checked", true);
         }

         $('#editRoomModal').modal('show');
    }
    });

     $('#editRoomModal').on('submit', function(e){
        e.preventDefault();
        console.log("Edit Room Modal Form submitted!");
        updateRoom();
        $('#editRoomModal').modal('hide');
     });

     $('#addRoomModal').on('submit', function(e){
         e.preventDefault();
         console.log("ADD Room Modal Form submitted!");
         createRoom();
         $('#addRoomModal').modal('hide');
     });

      $("#roomsTable tbody").on("click", "#infoRoom", function () {
         var tr = $(this).closest("tr");
         var row = roomsTable.row(tr);
           console.log(row.data());
         if (row.child.isShown()) {
           // This row is already open - close it
           row.child.hide();
           tr.removeClass("shown");
         } else {
           // Open this row (the format() function would return the data to be shown)
           row.child(formatRoomFacilities(row.data())).show();
           tr.addClass("shown");
         }
       });

     $("#deleteRoomButton").click(function () {
    console.log("Inside click of deleteRoomButton");
    if (roomsTable.row($('.selected')).data() == undefined) {
      alert("Select room first");
  }else{

    var roomInfoActivateEdit = roomsTable.row($('.selected')).data();
    if(roomInfoActivateEdit.roomActive == true){
      roomInfoActivateEdit.roomActive = false;
    }
    console.log(roomInfoActivateEdit);
    var roomJson=JSON.stringify(roomInfoActivateEdit);
    console.log(roomInfoActivateEdit);
    $.ajax({
      url: ROOMS_API,
      type: "post",
      contentType:"application/json",
      datatype: "json",
      data: roomJson,
      // success: function(reservations, textStatus, jqXHR){
      success: function(response){
          if (response) {
             console.log("Success!!!!!!");
             getRoomsData();
          }else{
            console.log("NOT Success!!!!!!");
          }
      },
      fail: function (error) {
          console.log('Error: ' + error);
      }
  });
  }
  });

     // Add event listener for opening and closing details
     $('#customersTable tbody').on('click', '#infoCustomer', function () {
      var tr = $(this).closest('tr');
      var row = customersTable.row(tr);

      if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      } else {
          // Open this row
          row.child(formatCustomerPage(row.data())).show();
          tr.addClass('shown');
      }
  });

//-----------------
//----  User ------
//-----------------

     //Create User
     $('#addUserModal').on('submit', function(e){
    e.preventDefault();
    console.log("Submitting Add New User!");
    createUser();
    $('#addUserModal').modal('hide');
    });

     //Update User
     $("#editUserButton").click( function (e) {
        e.preventDefault();
        console.log("Inside click of editUserButton");
        // Get the data from selected row and fill fields in modal
        if (usersTable.row($('.selected')).data() == undefined) {
            alert("Select user first");
        }else{
            var userInfoEdit = usersTable.row($('.selected')).data();
            var selectRole=userInfoEdit.role;
            var indexRole;
            switch (selectRole) {
              case "AD":
                indexRole = 1;
                break;
              case "GM":
                indexRole = 2;
                break;
              case "RE":
                indexRole = 3;
                break;
              case "RC":
                indexRole = 4;
                break;
            }

             $("#editUserFirstName").val(userInfoEdit.firstName);
             $("#editUserLastName").val(userInfoEdit.lastName);
             $("#editUserEmail").val(userInfoEdit.emailAddress);
             $("#editUserAddress").val(userInfoEdit.address);
             $("#editUserPassword").val(userInfoEdit.password);
             $("#editUserBirthdate").val(userInfoEdit.birthDate);
             $("#editUserUsername").val(userInfoEdit.username);
             document.getElementById("selectUserRole").selectedIndex=indexRole;

             $('#editUserModal').modal('show');
        }
        });

     $('#editUserModal').on('submit', function(e){
        e.preventDefault();
        console.log("Submitting Edit USER Modal Form!");
        updateUserInfo();
        $('#editUserModal').modal('hide');
      });

     //User Info Show
     $('#usersTable tbody').on('click', '#infoUser', function () {
    var tr = $(this).closest('tr');
    var row = usersTable.row(tr);

    if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    } else {
        // Open this row
        row.child(formatUserPage(row.data())).show();
        tr.addClass('shown');
    }
});

     //---Delete User
     $("#deleteUserButton").click(function () {
         console.log("Inside click of deleteReservationButton");
         if (usersTable.row($('.selected')).data() == undefined) {
           alert("Select User first");
       }else{
           $('#userDeleteModal').modal('show');
       }
       });

       // Delete User Confirmation
     $("#deleteUserConfirmButton").click(function () {
        console.log("Inside click of deleteUserButton");
        deleteUser();
        $("#userDeleteModal").modal("hide");
      });

      //-----------------
      //--- LOG OUT -----
     $("#logoutConfirmButton").click(function(){
          window.location.href = HOME_ROUTE;
     });

     //----------------------------------
     //--- ROUTING RESERVATION PAGE -----
     $("#addNewReservationBtn").click(function(){
       window.location.href = RESERVATION_PAGE_ROUTE;
     });
}

//------- RESERVATIONS -------
// INIT Reservations Table
function initReservationTable() {
    console.log('inside initReservationTable' );
    // Create columns (with titles) for datatable: id, name, address, age
     var checkTrue=`<i class="fa-solid fa-check checkTrueIcon"></i>`;
     var checkFalse=`<i class="fa-solid fa-check checkFalseIcon"></i>`;

    var infoBtn='<div><button type="button" class="btn btn-info p-1 m-0" id="information">Info</button></div>'
    columns = [
        { "title": "ID",
            "data": "id" },
        { "title":  "Room",
            "data": "room.roomNumber" },
        { "title":  "Date",
            "data": "startDate",
            render: function(data,type,row){
            const date = new Date(data);
            return (date.getMonth()+1)+'/' + date.getDate() + '/'+ date.getFullYear();
            }
        },
        { "title": "Checked -in",
          "data": "startDate",
          render: function(data, type,row){
              if (row.checkedIn == true) {
                 return data + checkTrue;
              }else{return data + checkFalse;
              }
        } },
        { "title":  "Checked-out",
          "data": "endDate",
          render: function(data, type,row){
              if (row.checkedOut == true && row.checkedIn == true) {
                 return data + checkTrue;
              }else{return data + checkFalse;
              }
        } },
        { "title": "Name",
            "data": "customers.0.firstName"},
        { "title": "Room Type",
          "data": "room.roomType"},
        { "title":  "Payment",
             "data": "payment",
             render: function(data,type,row){
                      if(data === true){
                       return "<span class='paid'>Paid</span>";
                       } else { return "<span class='unPaid'>unPaid</span>";}
         }},
        { "title": "Total Price",
            "data": "totalPrice",
            render: function ( data, type, row ) {
              return '¥'+ data;
          }}
    ];

    // Define new table with above columns
    reservationTable = $("#reservationsTable").DataTable( {
        "order": [[ 0, "asc" ]],
        "columns": columns,
        columnDefs: [
                    {
                        targets: 2,
                        render: DataTable.render.datetime('Do MMM YYYY'),
                    },
                    {
                       targets: 9,
                        render: function(){
                        return infoBtn;
                        },
                 },
                ],
        pageLength: 7,
        "lengthMenu": [ 5, 10, 15, 20 ],
        dom: '<"top">ct<"top"lip><"clear">',
    });

    $("tr td:first-child").addClass("td-roomNum");
}

function getReservationData(){
    console.log('inside getReservationsData' );
    // http:/localhost:9090/api/reservation
    // json list of reservation
    $.ajax({
        url: RESERVATION_API,
        type: "get",
        dataType: "json",
        // success: function(reservations, textStatus, jqXHR){
        success: function(reservations){
            if (reservations) {
                reservationTable.clear();
                reservationTable.rows.add(reservations);
                reservationTable.columns.adjust().draw();
            }


           reservations.forEach(item => {
              //console.log(item);
              const obj={
                roomNo: null,
                firstName: null,
                lastName: null
              };
             obj.roomNo = item.room.roomNumber ;
             obj.firstName = item.customers[0].firstName ;
             obj.lastName =  item.customers[0].lastName ;

             customerInfo.push(obj);
            });
            //console.log("CUSTOMER INFO:" + customerInfo[0].roomNo);
        },
        fail: function (error) {
            console.log('Error: ' + error);
        }
    });
}

function createReservation(){
  console.log('create Reservation FUNCTION!');

  var reservationInfoEdit = reservationTable.row($('.selected')).data();

  //Put reservation data from page in Javascript object
    reservationInfoEdit.startDate = $("#editStartDate").val();
    reservationInfoEdit.endDate   = $("#editEndDate").val();
    reservationInfoEdit.babyBed = $("#editBabyBed").val();
    reservationInfoEdit.price = $("#editTotalPrice").val();
    reservationInfoEdit.totalPrice = parseFloat( $("#editTotalPrice").val()) + parseFloat( $("#editServicePrice").val());
    reservationInfoEdit.roomServicePrice = $("#editServicePrice").val();

    var checkedIn= $("#checkedIn  input[name='checkedInRadioName']:checked").val();
            if(checkedIn == "yes"){
              reservationInfoEdit.checkedIn = true;
            }else{
              reservationInfoEdit.checkedIn = false;
            }

        var checkedOut= $("#checkedOut  input[name='checkedOutRadioName']:checked").val();
            if(checkedOut == "yes"){
              reservationInfoEdit.checkedOut = true;
              reservationInfoEdit.room.cleanRoom=false;
            }else{
              reservationInfoEdit.checkedOut = false;
              reservationInfoEdit.room.cleanRoom=true;
            }

        var paymentStatus= $("#paymentStatus  input[name='paymentRadioName']:checked").val();
        if(paymentStatus == "paid"){
          reservationInfoEdit.payment = true;
        }else{
          reservationInfoEdit.payment = false;
        }
        //update if the room is clean
     var reservationRoomJson = JSON.stringify(reservationInfoEdit.room);
     var reservationJson = JSON.stringify(reservationInfoEdit);
     console.log(reservationJson);
     $.ajax({
           url: ROOMS_API,
           type: "post",
           contentType:"application/json",
           datatype: "json",
           data: reservationRoomJson,
           // success: function(reservations, textStatus, jqXHR){
           success: function(response){
               if (response) {
                  console.log("ROOM ISCLEAN UPDATED Success!!!!!!");
                  getRoomsData();
               }else{
                 console.log("NOT ISCLEAN Success!!!!!!");
               }
           },
           fail: function (error) {
               console.log('Error: ' + error);
           }
       });


    $.ajax({
      url: RESERVATION_API,
      type: "post",
      contentType:"application/json",
      datatype: "json",
      data: reservationJson,
      // success: function(reservations, textStatus, jqXHR){
      success: function(response){
          if (response) {
             console.log("Success!!!!!!");
           getReservationData();
           getRoomsData();
          }
      },
      fail: function (error) {
          console.log('Error: ' + error);
      }
  });
}

function updateCustomerInfo(){
  console.log("Updating Customer Info");
  var customerInfoEdit = reservationTable.row($('.selected')).data().customers[0];
//console.log('CUSTOMER INFO : ', customerInfoEdit);
  customerInfoEdit.firstName=$("#editReFirstName").val();
  customerInfoEdit.lastName=$("#editReLastName").val();
  customerInfoEdit.email= $("#editEmail").val();
  customerInfoEdit.phone=$("#editPhone").val();
  customerInfoEdit.typeOfDocument= $("#editDocumentType").val();
  customerInfoEdit.address=$("#editReAddress").val();

  var updatedJson = JSON.stringify(customerInfoEdit);

  $.ajax({
    url: CUSTOMERS_API,
    type: "post",
    contentType:"application/json",
    datatype: "json",
    data: updatedJson,
    // success: function(reservations, textStatus, jqXHR){
    success: function(response){
        if (response) {
           console.log("Customer HAS BEEN CHANGED!!!!!!");

           getReservationData();
        }
    },
    fail: function (error) {
        console.log('Error: ' + error);
    }
});
}

// Format Customer Information Table that is inside Reservation Table
function format(d) {
  // `d` is the original data object for the row
  var infoHtml = `<table class="table-info" cellpadding="5" cellspacing="0" style="padding-left: 50px">
  <tr>
    <div class="information disabled">
      <div class="customerInfo-left">
        <div class="name">
          <span>Name: </span>
          <p>${d.customers[0].firstName}</p>
        </div>
        <div class="email">
          <span>Email: </span>
          <p>${d.customers[0].email}</p>
        </div>
        <div class="phone">
          <span>Phone: </span>
          <p>${d.customers[0].phone}</p>
        </div>
        <div class="documentType">
          <span>Document: </span>
          <p>${d.customers[0].typeOfDocument}</p>
        </div>
      </div>
      <div class="customerInfo-right">
        <div class="guests">
          <span> Guests: </span>
          <p>${d.customers.length}</p>
        </div>
        <div class="babyBed">
          <span>Baby Bed: </span>
          <p>${d.babyBed}</p>
        </div>
        <div class="roomPrice">
          <span>Room Price: ¥</span>
          <p>${d.room.price}</p>
        </div>
        <div class="servicePrice">
          <span>Service Price: ¥</span>
          <p>${d.roomServicePrice}</p>
        </div>
        <div class="detail">

        </div>
      </div>
    </div>
  </tr>
</table>`;

  return infoHtml;
}

function deleteReservation(){
    if (reservationTable.row($('.selected')).data() == undefined) {
        alert("Select customer first");
    }else{
        var reservation = reservationTable.row($('.selected')).data();
        // http:9090/api/reservations/2
        console.log(RESERVATION_API + '/' + reservation.id);
        console.log(reservation);

            $.ajax({
                url: RESERVATION_API + '/' + reservation.id,
                contentType: "application/json",
                type: 'DELETE',
                dataType: "text",  // get back from frontend
                // success: function(reservation, textStatus, jqXHR){
                success: function(message){
                  console.log(message);
                  alert("Reservation deleted");
                  // Refresh table data
                  getReservationData();
                },
                fail: function (error) {
                  console.log('Error: ' + error);
                }
            });

    }

}


function editReservation(){

console.log("editReservation function");



    var selectedNewRoom =reRoomsTable.row($('.selected')).data();
    console.log(selectedNewRoom);

    var checkedIn= $("#checkedIn  input[name='checkedInRadioName']:checked").val();
    var infoCheckIn;
                if(checkedIn == "yes"){
                  infoCheckIn = true;
                }else{
                  infoCheckIn = false;
                }

    var checkedOut= $("#checkedOut  input[name='checkedOutRadioName']:checked").val();
    var infoCheckOut;
                if(checkedOut == "yes"){
                  infoCheckOut = true;
                }else{
                  infoCheckOut = false;
                }

    var paymentStatus= $("#paymentStatus  input[name='paymentRadioName']:checked").val();
    var infoPayment;
            if(paymentStatus == "paid"){
              infoPayment = true;
            }else{
              infoPayment = false;
            }

    let date = new Date();
    let currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;


       console.log(reservationInfoEdit.id.toString());

    var reservationInfoEditSave={
        id: reservationInfoEdit.id,
        startDate:  $("#editStartDate").val(),
        endDate : $("#editEndDate").val(),
        checkedIn : infoCheckIn,
        checkedOut : infoCheckOut,
        payment: infoPayment,
        price :$("#editBookingPrice").val(),
        totalPrice: parseFloat( $("#editBookingPrice").val()) + parseFloat( $("#editServicePrice").val()),
        roomServicePrice: $("#editServicePrice").val(),
        babyBed: $("#editBabyBed").val(),
        nowDate : currentDate,
        room: selectedNewRoom,
        customers: reservationInfoEdit.customers
    }

    var reservationInfoEditJson=JSON.stringify(reservationInfoEditSave);

    $.ajax({
            url: RESERVATION_API,
            type: "post",
            contentType:"application/json",
            datatype: "json",
            data: reservationInfoEditJson,
            success: function(reservation){
            console.log("Reservation is saved successfully");
            getReservationData();
            $('#editReservationModal').modal('hide');
            },
            fail: function (error) {
                console.log('Error: ' + error);
            }
        });

}

  //Put reservation data from page in Javascript object
//
//    if(reservationInfoEdit.startDate==$("#editStartDate").val()
//    && reservationInfoEdit.endDate==$("#editEndDate").val()
//    && reservationInfoEdit.room.roomType==$("#reEditRoomType").val()
//    && reservationInfoEdit.room.sizePerson==$("#adults").val()
//    && reservationInfoEdit.room.childrenPlace==$("#children").val()
//    && ((reservationInfoEdit.room.smoke==true && document.getElementById('smoking').checked==true)
//    || (reservationInfoEdit.room.smoke==false && document.getElementById('nonSmoking').checked==true)
//    || (reservationInfoEdit.room.disabled==true && document.getElementById('disabled').checked==true))
//    ){
//
//    editBasicReservationInfo();
//
//    }else{
//
//    alert("Please check the availability");
//
//     var reEditRoom = reRoomsTable.row($('.selected')).data();
//}


    //burada












function editBasicReservationInfo(){

console.log('editBasicReservationInfo FUNCTION!');

  var reservationInfoEdit = reservationTable.row($('.selected')).data();

    reservationInfoEdit.babyBed = $("#editBabyBed").val();
    reservationInfoEdit.price = $("#editBookingPrice").val();
    reservationInfoEdit.totalPrice = parseFloat( $("#editBookingPrice").val()) + parseFloat( $("#editServicePrice").val());
    reservationInfoEdit.roomServicePrice = $("#editServicePrice").val();

    var checkedIn= $("#checkedIn  input[name='checkedInRadioName']:checked").val();
            if(checkedIn == "yes"){
              reservationInfoEdit.checkedIn = true;
            }else{
              reservationInfoEdit.checkedIn = false;
            }

        var checkedOut= $("#checkedOut  input[name='checkedOutRadioName']:checked").val();
            if(checkedOut == "yes"){
              reservationInfoEdit.checkedOut = true;
              reservationInfoEdit.room.cleanRoom=false;
            }else{
              reservationInfoEdit.checkedOut = false;
              reservationInfoEdit.room.cleanRoom=true;
            }

        var paymentStatus= $("#paymentStatus  input[name='paymentRadioName']:checked").val();
        if(paymentStatus == "paid"){
          reservationInfoEdit.payment = true;
        }else{
          reservationInfoEdit.payment = false;
        }
        //update if the room is clean
     var reservationRoomJson = JSON.stringify(reservationInfoEdit.room);
     var reservationJson = JSON.stringify(reservationInfoEdit);
     console.log(reservationJson);
     $.ajax({
           url: ROOMS_API,
           type: "post",
           contentType:"application/json",
           datatype: "json",
           data: reservationRoomJson,
           // success: function(reservations, textStatus, jqXHR){
           success: function(response){
               if (response) {
                  console.log("ROOM ISCLEAN UPDATED Success!!!!!!");
                  getRoomsData();
               }else{
                 console.log("NOT ISCLEAN Success!!!!!!");
               }
           },
           fail: function (error) {
               console.log('Error: ' + error);
           }
       });


    $.ajax({
      url: RESERVATION_API,
      type: "post",
      contentType:"application/json",
      datatype: "json",
      data: reservationJson,
      // success: function(reservations, textStatus, jqXHR){
      success: function(response){
          if (response) {
             console.log("Success!!!!!!");
           getReservationData();
           getRoomsData();
          }
      },
      fail: function (error) {
          console.log('Error: ' + error);
      }
  });

}


function checkAvailability(){
  console.log('inside checkAvailability');

  var reservationInfoEdit = reservationTable.row($('.selected')).data();

 let date = new Date();
  let currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`


  var smoke=false;
  var disabled=false;
  var selectedComment= $("#comments  input[name='comments']:checked").val();
  if(selectedComment == "smoking"){
    smoke=true;
  }else if(selectedComment == "nonSmoking"){

  }else{
    disabled=true;
  }


   var filterRooms={
      startDate : $("#editStartDate").val(),
      endDate : $("#editEndDate").val(),
      roomType : $("#reEditRoomType :selected").text(),
      adultSize : $("#adults").val(),
      childrenSize : $("#children").val(),
      smoking : smoke,
      disabled : disabled
    }

     var filterRoomsJson=JSON.stringify(filterRooms);

     console.log(filterRoomsJson);

$.ajax({
      url: availableRoomsApi,
      type: "post",
      contentType:"application/json",
      datatype: "json",
      data: filterRoomsJson,
      success: function(rooms){

          if (rooms) {

                console.log("writing rooms");
              reRoomsTable.clear();
              reRoomsTable.rows.add(rooms);
              reRoomsTable.columns.adjust().draw();
          }
      },
      fail: function (error) {
          console.log('Error: ' + error);
      }
  });


}






//------- CUSTOMERS -------
// INIT CUSTOMERS Table
function initCustomersTable() {
  console.log('inside initCustomersTable' );
  // Create columns (with titles) for datatable: id, name, address, age
  var infoBtn='<div><button type="button" class="btn btn-info p-1 m-0" id="infoCustomer">Info</button></div>'
  columns = [
      { "title": "ID",
      "data": "id"
      },
      { "title":  "First Name",
          "data": "firstName"
      },
      { "title":  "Last Name",
          "data": "lastName"
      },
      { "title":  "Phone",
          "data": "phone",
          "width": "350px"
      },
      { "title":  "Email",
          "data": "email"
      },
      { "title":  "Document",
          "data": "typeOfDocument"
      }
  ];
  // Define new table with above columns
  customersTable = $("#customersTable").DataTable( {
      "order": [[ 0, "asc" ]],
      "columns": columns,
      columnDefs: [
        { targets: [ 3 ], width: '200px' },
        { targets: '_all', className: 'dt-left' },
        { targets: 6, render: function(){
                               return infoBtn
                            }
        }
                  ],
      pageLength: 6,
      "lengthMenu": [ 5, 10, 15, 20 ],
      dom: '<"top">ct<"top"lip><"clear">',
  });
}

function getCustomersData(){
  console.log('getCustomersData' );
  // http:/localhost:9090/api/customers
  // json list of customers
  $.ajax({
      url: CUSTOMERS_API,
      type: "get",
      dataType: "json",
      // success: function(reservations, textStatus, jqXHR){
      success: function(customers){
          if (customers) {
              customersTable.clear();
              customersTable.rows.add(customers);
              customersTable.columns.adjust().draw();
          }
      },
      fail: function (error) {
          console.log('Error: ' + error);
      }
  });
}

function createCustomer(){
  console.log('create Reservation FUNCTION!');

  var reservationInfoEdit = reservationTable.row($('.selected')).data();

  //Put customer data from page in Javascript object

    reservationInfoEdit.startDate = $("#editStartDate").val();
    reservationInfoEdit.endDate   = $("#editEndDate").val();
    reservationInfoEdit.babyBed = $("#editBabyBed").val();
    reservationInfoEdit.price = $("#editBookingPrice").val();
    reservationInfoEdit.totalPrice = $("#editTotalPrice").val();
    reservationInfoEdit.roomServicePrice = $("#editServicePrice").val();

    console.log(reservationInfoEdit);



    $.ajax({
      url: RESERVATION_API,
      type: "post",
      contentType:"application/json",
      datatype: "json",
      data: reservationInfoEdit,
      // success: function(reservations, textStatus, jqXHR){
      success: function(response){
          if (response) {
             console.log("Success!!!!!!");
          }else{
            console.log("NOT Success!!!!!!");
          }
      },
      fail: function (error) {
          console.log('Error: ' + error);
      }
  });
}

/* Formatting function for row details - modify as you need */
function formatCustomerPage(d) {
  // `d` is the original data object for the row
  return (
      '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
      '<tr>' +
      '<td>Address:</td>' +
      '<td>' +
      d.address +
      '</td>' +
      '</tr>' +
      '</table>'
  );
}

//------- ROOMS -------
//------- INIT Rooms Table -------
function initRoomsTable() {
    console.log('inside initRoomsTable' );
    // Create columns (with titles) for datatable: id, name, address, age
  //  var checkedInData1='<p class="checkin-Date">2011-04-25</p><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">'
   // var checkedInData2='<p class="checkin-Date">2011-04-25</p><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">'
   var infoBtn='<div><button type="button" class="btn btn-info p-1 m-0" id="infoRoom">Facilities</button></div>'
    columns = [
        { "title":  "ID",
            "data": "id" },
        { "title":  "Room No",
            "data": "roomNumber" },
        { "title":  "Room Type",
            "data": "roomType" },
        { "title":  "Adults",
            "data": "sizePerson"},
        { "title":  "Children",
            "data": "childrenPlace"},
        { "title":  "Single Bed",
            "data": "singleBedAmount"},
        { "title":  "Double Bed",
            "data": "doubleBedAmount"},
        { "title":  "isClean",
             "data": "cleanRoom",
             render: function(data,type,row){
                      if(data === true){
                       return "<span class='yes'>YES</span>";
                       } else { return "<span class='no'>NO</span>";}
        }},
        { "title":  "Price",
            "data": "price",
            render: function(data,type,row){
                      return "¥" + data;
        }},
        { "title":  "Disabled",
            "data": "disabled",
             render: function(data,type,row){
                     if(data === true){
                      return "<span class='yes'>YES</span>";
                     } else {return "<span class='no'>NO</span>"; }
        }},
        { "title": "Smoke",
            "data": "smoke",
            render: function(data,type,row){
                    if(data === true){
                     return "<span class='yes'>YES</span>";
                    }else{return "<span class='no'>NO</span>"; }
        }},
    ];

    // Define new table with above columns
    roomsTable = $("#roomsTable").DataTable( {
        "order": [[ 0, "asc" ]],
        "columns": columns,
        columnDefs: [
          {
                  targets: 11,
                  render: function(){
                  return infoBtn;
                 },
              },
          ],
        pageLength: 7,
        responsive: true,
        "lengthMenu": [ 5, 10, 15, 20 ],
        dom: '<"top">ct<"top"lip><"clear">',
    });
}

function getRoomsData(){
    console.log('inside getRoomsData' );
    // http:/localhost:9090/api/rooms
    // json list of rooms
    $.ajax({
        url: ROOMS_API,
        type: "get",
        dataType: "json",
        // success: function(reservations, textStatus, jqXHR){
        success: function(rooms){
            console.log('Data: ' + rooms[0].id );
            if (rooms) {
                roomsTable.clear();
                roomsTable.rows.add(rooms);
                roomsTable.columns.adjust().draw();
            }
        },
        fail: function (error) {
            console.log('Error: ' + error);
        }
    });
}

function updateRoom(){
  // console.log('create Room FUNCTION!');
  var roomInfoEdit = roomsTable.row($('.selected')).data();

  //Put room data from page in Javascript object
  roomInfoEdit.roomType = $("#selectRoom :selected").text();
  roomInfoEdit.roomNumber = $("#editRoomNo").val();
  roomInfoEdit.sizePerson = $("#editRoomGuests").val();
  roomInfoEdit.childrenPlace = $("#editBaby").val();
  roomInfoEdit.price = $("#editRoomPrice").val();
  roomInfoEdit.singleBedAmount = $("#editSingleBed").val();
  roomInfoEdit.doubleBedAmount = $("#editDoubleBed").val();
  roomInfoEdit.facilities = $("#editFacilities").val();

  var isClean= $("#isClean  input[name='isCleanRadioName']:checked").val();
  console.log("isClean: "+ isClean);
  if(isClean == "yes"){
    roomInfoEdit.cleanRoom = true;
  }else{
    roomInfoEdit.cleanRoom = false;
  }

  var isDisabled= $("#isDisabled  input[name='isDisabledRadioName']:checked").val();
  if(isDisabled == "yes"){
    roomInfoEdit.disabled = true;
  }else{
    roomInfoEdit.disabled = false;
  }

  var isSmoke= $("#isSmoke  input[name='isSmokingRadioName']:checked").val();
  if(isSmoke == "yes"){
    roomInfoEdit.smoke = true;
  }else{
    roomInfoEdit.smoke = false;
  }

  var roomJson=JSON.stringify(roomInfoEdit);
    console.log(roomInfoEdit);
    $.ajax({
      url: ROOMS_API,
      type: "post",
      contentType:"application/json",
      datatype: "json",
      data: roomJson,
      // success: function(reservations, textStatus, jqXHR){
      success: function(response){
          if (response) {
             console.log("ROOM UPDATED Success!!!!!!");
             getRoomsData();
          }else{
            console.log("NOT Success!!!!!!");
          }
      },
      fail: function (error) {
          console.log('Error: ' + error);
      }
  });
}

function createRoom(){
 console.log('create Room FUNCTION!');

   var isSmokeResult;
   var isSmokeNew= $("#isSmokeNewRoom  input[name='isSmokedNewRoomName']:checked").val();
   console.log(isSmokeNew);
   if(isSmokeNew == "yes"){
     isSmokeResult = true;
   }else{
     isSmokeResult = false;
   }
      console.log(isSmokeNew);

 var isDisabledResult;
 var isDisabledNew = $("#isDisabledNewRoom  input[name='isDisabledNewRoomName']:checked").val();
     console.log(isDisabledNew);

 if(isDisabledNew == "yes"){
   isDisabledResult= true;
 }else{
   isDisabledResult = false;
 }

 var isCleanResult;
 var isCleanNew = $("#isCleanNewRoom  input[name='isCleanNewRoomName']:checked").val();
    console.log(isCleanNew);
   if(isCleanNew == "yes"){
     isCleanResult = true;
   }else{
     isCleanResult = false;
   }

   var newRoom={

      roomType: $("#newSelectRoomType :selected").text(),

      sizePerson:$("#newRoomGuests").val(),

      roomNumber: $("#newRoomNumber").val(),

      singleBedAmount: $("#newRoomSingleBed").val(),

      doubleBedAmount: $("#newRoomDoubleBed").val(),

      cleanRoom: isCleanResult,

      roomActive: true,

      price: $("#newRoomPrice").val(),

      childrenPlace: $("#newRoomBaby").val(),

      disabled: isDisabledResult,

      smoke: isSmokeResult,

      facilities: $("#roomFacilities").val(),

      id: 0
    }

    console.log(newRoom);

  var newRoomJson=JSON.stringify(newRoom);
    console.log(newRoomJson);

    $.ajax({
      url: ROOMS_API,
      type: "post",
      contentType:"application/json",
      datatype: "json",
      data: newRoomJson,
      // success: function(reservations, textStatus, jqXHR){
      success: function(response){
          if (response) {
             console.log("Success!!!!!!");
             //Refresh
             getRoomsData();
          }else{
          alert("Room number exists.")
            console.log("NOT Success!!!!!!");
          }
      },
      fail: function (error) {
          console.log('Error: ' + error);
      }
  });
}

function formatRoomFacilities(d) {
  // `d` is the original data object for the row
  return (
      '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
      '<tr>' +
      '<td>Facilities:</td>' +
      '<td>' +
      d.facilities +
      '</td>' +
      '</tr>' +
      '</table>'
  );
}

function formatUserPage(d) {
  // `d` is the original data object for the row
  return (
      '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
      '<tr>' +
      '<td>Address:</td>' +
      '<td>' +
      d.address +
      '</td>' +
      '</tr>' +
      '</table>'
  );
}

//------- USERS -------
//------- INIT Users Table -------
function initUsersTable() {
  console.log('inside initUsersTable' );

  var infoBtn='<div><button type="button" class="btn btn-info p-1 m-0" id="infoUser">Info</button></div>'
  columns = [
      { "title": "ID",
          "data": "id"
      },
      { "title":  "First Name",
          "data": "firstName"
      },
      { "title":  "Last Name",
           "data": "lastName"
      },
      { "title":  "Password",
           "data": "password",
      },
      { "title":  "Email",
           "data": "emailAddress"
      },
      { "title":  "UserName",
           "data": "username"
      },
      { "title":  "BirthDate",
           "data": "birthDate"
      }
  ];
  // Define new table with above columns
  usersTable = $("#usersTable").DataTable( {
      "order": [[ 0, "asc" ]],
      "columns": columns,
      columnDefs: [
                  {
                     targets: 7,
                      render: function(){
                      return infoBtn;
                      },
               },
              ],
      pageLength: 7,
      "lengthMenu": [ 5, 10, 15, 20 ],
      dom: '<"top">ct<"top"lip><"clear">',
  });
}

function getUsersData(){
  console.log('inside getUsersData' );
  // http:/localhost:9090/api/users
  // json list of users
  $.ajax({
      url: USERS_API,
      type: "get",
      dataType: "json",
      success: function(users){
          if (users) {
              usersTable.clear();
              usersTable.rows.add(users);
              usersTable.columns.adjust().draw();
          }
      },
      fail: function (error) {
          console.log('Error: ' + error);
      }
  });
}

function updateUserInfo(){

  var userInfo = usersTable.row($('.selected')).data();

  userInfo.firstName = $("#editUserFirstName").val();
  userInfo.lastName = $("#editUserLastName").val();
  userInfo.emailAddress = $("#editUserEmail").val();
  userInfo.address = $("#editUserAddress").val();
  userInfo.password = $("#editUserPassword").val();
  userInfo.birthDate = $("#editUserBirthdate").val();
  userInfo.username = $("#editUserUsername").val();
  userInfo.role = $("#selectUserRole :selected").value;

  var userJson=JSON.stringify(userInfo);

  $.ajax({
    url: USERS_API,
    type: "post",
    contentType:"application/json",
    datatype: "json",
    data: userJson,
    // success: function(reservations, textStatus, jqXHR){
    success: function(response){
        if (response) {
           console.log("Success!!!!!!");
           getUsersData();
        }else{
          console.log("NOT Success!!!!!!");
        }
    },
    fail: function (error) {
        console.log('Error: ' + error);
    }
});

}

function createUser(){

  var newUser={
        id : 0,
        firstName: $("#newUserFirstName").val(),
        lastName : $("#newUserLastName").val(),
        username:$("#newUserName").val(),
        password : $("#newUserPassword").val(),
        role : $("#newUserRole").val(),
        emailAddress : $("#newUserEmail").val(),
        birthDate : $("#newUserBirthdate").val(),
        address : $("#newUserAddress").val()
        }
        if(checkPassword(newUser.password) == true){
        console.log("Success!!!!!!")}
        else{
        return}


var userJson=JSON.stringify(newUser);
    console.log(newUser);

    $.ajax({
          url: USERS_API,
          type: "post",
          contentType:"application/json",
          datatype: "json",
          data: userJson,
          // success: function(reservations, textStatus, jqXHR){
          success: function(response){
              if (response) {
                 console.log("Success!!!!!!");
                 //Refresh
                 getUsersData();
              }else{
                console.log("NOT Success!!!!!!");
              }
          },
          fail: function (error) {
              console.log('Error: ' + error);
          }
      });

}

function deleteUser(){
    if (usersTable.row($('.selected')).data() == undefined) {
        alert("Select user first");
    }else{
        var user = usersTable.row($('.selected')).data();
        // http:9090/api/user/2
        console.log(USERS_API + '/' + user.id);
        console.log(user);

            $.ajax({
                url: USERS_API + '/' + user.id,
                contentType: "application/json",
                type: 'DELETE',
                dataType: "text",  // get back from frontend
                // success: function(reservation, textStatus, jqXHR){
                success: function(message){
                  console.log(message);
                  alert("User deleted");
                  // Refresh table data
                  getUsersData();
                },
                fail: function (error) {
                  console.log('Error: ' + error);
                }
            });
    }
}
//Check Password
function checkPassword(password)
{
var passw=  /^[A-Za-z]\w{7,14}$/;
if(password.match(passw))
{
//alert('Correct, try another...')
return true;
}
else
{
alert('Password must be between 7 to 16 characters which must contain characters,numeric digits, underscore and first character must be a letter!')
return false;
}
}



//------ Date  -----
$( function() {
  var d=new Date();
    var dateFormat = "mm/dd/yy",
      from = $( "#editStartDate" )
        .datepicker({
          defaultDate: new Date(),
          changeMonth: true,
          changeYear: true,
          yearRange: "2022:2025",
          minDate: "+1d",
          firstDay: 1,
          numberOfMonths: 1,
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#editEndDate" ).datepicker({
        defaultDate: "+1d",
        changeMonth: true,
        changeYear: true,
        yearRange: "2022:2025",
        firstDay: 1,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });

    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }

      return date;
    }
  });

CheckOutAddOne = function(){
    CheckIn = $('#editStartDate').datepicker('getDate');
    CheckOut = CheckIn.setDate(CheckIn.getDate() + 1);
    $('#editEndDate').datepicker( "option", "minDate", new Date(CheckOut) );
}

function initreRoomstable(){
console.log('inside initreRoomsTable' );
var infoBtn='<div><button type="button" class="btn btn-info p-1 m-0" id="infoReRoom">Choose</button></div>'

columns = [
        { "title":  "Room No",
            "data": "roomNumber" },
        { "title":  "Room Type",
            "data": "roomType" },
        { "title":  "Adults",
            "data": "sizePerson"},
        { "title":  "Children",
            "data": "childrenPlace"},
        { "title":  "Price",
            "data": "price",
            render: function(data,type,row){
                      return "¥" + data;
        }},
    ];

    reRoomsTable = $("#reRoomsTable").DataTable( {
            "order": [[ 0, "asc" ]],
            "columns": columns,
            columnDefs: [
              {
                      targets: 5,
                      render: function(){
                      return infoBtn;
                     },
                  },
              ],
            pageLength: 7,
            responsive: true,
            "lengthMenu": [ 5, 10, 15, 20 ],
            dom: '<"top">ct<"top"lip><"clear">',
        });

}














//function initRoomsTable() {
//    console.log('inside initRoomsTable' );
//    // Create columns (with titles) for datatable: id, name, address, age
//  //  var checkedInData1='<p class="checkin-Date">2011-04-25</p><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">'
//   // var checkedInData2='<p class="checkin-Date">2011-04-25</p><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">'
//   var infoBtn='<div><button type="button" class="btn btn-info p-1 m-0" id="infoRoom">Facilities</button></div>'
//    columns = [
//        { "title":  "ID",
//            "data": "id" },
//        { "title":  "Room No",
//            "data": "roomNumber" },
//        { "title":  "Room Type",
//            "data": "roomType" },
//        { "title":  "Adults",
//            "data": "sizePerson"},
//        { "title":  "Children",
//            "data": "childrenPlace"},
//        { "title":  "Single Bed",
//            "data": "singleBedAmount"},
//        { "title":  "Double Bed",
//            "data": "doubleBedAmount"},
//        { "title":  "isClean",
//             "data": "cleanRoom",
//             render: function(data,type,row){
//                      if(data === true){
//                       return "<span class='yes'>YES</span>";
//                       } else { return "<span class='no'>NO</span>";}
//        }},
//        { "title":  "Price",
//            "data": "price",
//            render: function(data,type,row){
//                      return "¥" + data;
//        }},
//        { "title":  "Disabled",
//            "data": "disabled",
//             render: function(data,type,row){
//                     if(data === true){
//                      return "<span class='yes'>YES</span>";
//                     } else {return "<span class='no'>NO</span>"; }
//        }},
//        { "title": "Smoke",
//            "data": "smoke",
//            render: function(data,type,row){
//                    if(data === true){
//                     return "<span class='yes'>YES</span>";
//                    }else{return "<span class='no'>NO</span>"; }
//        }},
//    ];
//
//    // Define new table with above columns
//    roomsTable = $("#roomsTable").DataTable( {
//        "order": [[ 0, "asc" ]],
//        "columns": columns,
//        columnDefs: [
//          {
//                  targets: 11,
//                  render: function(){
//                  return infoBtn;
//                 },
//              },
//          ],
//        pageLength: 7,
//        responsive: true,
//        "lengthMenu": [ 5, 10, 15, 20 ],
//        dom: '<"top">ct<"top"lip><"clear">',
//    });
//}