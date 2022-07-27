var RESERVATION_API = "http://localhost:9090/api/reservations" ;
var CUSTOMERS_API="http://localhost:9090/api/customer";
var ROOMS_API = "http://localhost:9090/api/rooms";
var availableRoomsApi="http://localhost:9090/api/reservations/availableRooms";

var RESERVATION_PAGE_ROUTE="http://localhost:9090/reservation/reservationpage";
var HOME_ROUTE = "http://localhost:9090/home" ;
var reRoomsTable;
var reservationTable;
var customerInfo=[];

// INIT
function init() {
  //console.log("inside init");

   initReservationTable();
   // Get reservations from backend and update DOM
   getReservationData();

   initreRoomstable();

//   initCustomersTable();
//   getCustomersData();


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

          $("#reservationsTable tbody, #reRoomsTable tbody").on("click", "tr", function () {
         console.log("Clicking on row");
         if ($(this).hasClass("selected")) {
           $(this).removeClass("selected");
           // emptyRoomModals();
         } else {
           reservationTable.$("tr.selected").removeClass("selected");
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



                     if((reRoomsTable.rows( '.selected' ).any()==false)
                     && reservationInfoEdit.startDate==$("#editStartDate").val()
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

              });

              $("#reEditCheckRoomsButton").click( function (){
                      console.log("inside check availability button!");
                      checkAvailability();
            });



            // Datatable Search Filtering
            $("#filterReservations").keyup(function () {
               reservationTable.search(this.value).draw();
             });



            //******* Edit Customer ********
            $("#editReCustomerButton").click( function () {
           console.log("Inside click of editReservationButton");
           // Get the data from selected row and fill fields in modal
           if (reservationTable.row($('.selected')).data() == undefined) {
               alert("Select reservation first");
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



         //-----------------
              //--- LOG OUT -----
             $("#logoutConfirmButton").click(function(){
              localStorage.setItem("re" , false);
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
    reservationInfoEdit.price = $("#editPrice").val();
    reservationInfoEdit.totalPrice = parseFloat( $("#editPrice").val()) + parseFloat( $("#editServicePrice").val());
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


//------- CUSTOMERS -------
// INIT CUSTOMERS Table
//function initCustomersTable() {
//  console.log('inside initCustomersTable' );
//  // Create columns (with titles) for datatable: id, name, address, age
//  var infoBtn='<div><button type="button" class="btn btn-info p-1 m-0" id="infoCustomer">Info</button></div>'
//  columns = [
//      { "title": "ID",
//      "data": "id"
//      },
//      { "title":  "First Name",
//          "data": "firstName"
//      },
//      { "title":  "Last Name",
//          "data": "lastName"
//      },
//      { "title":  "Phone",
//          "data": "phone",
//          "width": "350px"
//      },
//      { "title":  "Email",
//          "data": "email"
//      },
//      { "title":  "Document",
//          "data": "typeOfDocument"
//      }
//  ];
//  // Define new table with above columns
//  customersTable = $("#customersTable").DataTable( {
//      "order": [[ 0, "asc" ]],
//      "columns": columns,
//      columnDefs: [
//        { targets: [ 3 ], width: '200px' },
//        { targets: '_all', className: 'dt-left' },
//        { targets: 6, render: function(){
//                               return infoBtn
//                            }
//        }
//                  ],
//      pageLength: 6,
//      "lengthMenu": [ 5, 10, 15, 20 ],
//      dom: '<"top">ct<"top"lip><"clear">',
//  });
//}

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

//Customer inside of the edit reservation
function createCustomer(){
  console.log('create Reservation FUNCTION!');

  var reservationInfoEdit = reservationTable.row($('.selected')).data();

  //Put customer data from page in Javascript object

    reservationInfoEdit.startDate = $("#editStartDate").val();
    reservationInfoEdit.endDate   = $("#editEndDate").val();
    reservationInfoEdit.babyBed = $("#editBabyBed").val();
    reservationInfoEdit.price = $("#editPrice").val();
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