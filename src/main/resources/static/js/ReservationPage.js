var ROOMS_API = "http://localhost:9090/api/rooms";
var AVAILABLE_ROOMS_API="http://localhost:9090/api/reservations/availableRooms";

var roomsTable;

function init(){
  $.ajax({
    url: ROOMS_API,
    type: "get",
    datatype: "json",
    success: function(rooms){
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

  initRoomsTable();

  $("#checkRoomsButton").click(function(){
    getRoomsData();
  });

  $("#roomsTable tbody").on("click", "tr", function () {
    console.log("Clicking on row");
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      roomsTable.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

   //---  Continue Reservation Modal  -------
  $("#selectedRoomButton").click(function () {
    console.log("Inside click of selectedRoomButton");

    if (roomsTable.row($('.selected')).data() == undefined) {
        alert("Select room first");
    }else{
        $('#continueModal').modal('show');
    }
  });
}

//------ Date  -----
$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#checkIn" )
        .datepicker({
          defaultDate: new Date(),
          changeMonth: true,
          changeYear: true,
          yearRange: "2022:2025",
          minDate: "+1d",
          firstDay: 1,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#checkOut" ).datepicker({
        defaultDate: "+1",
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
    CheckIn = $('#checkIn').datepicker('getDate');
    CheckOut = CheckIn.setDate(CheckIn.getDate() + 1);
    $('#checkOut').datepicker( "option", "minDate", new Date(CheckOut) );
}

//------- ROOMS -------
//------- INIT Rooms Table -------
function initRoomsTable() {
  console.log('inside initRoomsTable' );
  // Create columns (with titles) for datatable: id, name, address, age
 var infoBtn='<div><button type="button" class="btn btn-info p-1 m-0" id="infoRoom">Facilities</button></div>'
  columns = [
      { "title":  "Room No",
          "data": "roomNumber" },
      { "title":  "Room Type",
          "data": "roomType" },
      { "title":  "Guests",
          "data": "sizePerson"},
      { "title":  "Childs",
          "data": "childrenPlace"},
      { "title":  "Single Bed",
          "data": "singleBedAmount"},
      { "title":  "Double Bed",
          "data": "doubleBedAmount"},

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
          "data": "smoking",
          render: function(data,type,row){
                  if(data === true){
                   return "<span class='yes'>Allowed</span>";
                  }else{return "<span class='no'>Not Allowed</span>"; }
        }},
  ];

  // Define new table with above columns
  roomsTable = $("#roomsTable").DataTable( {
      "order": [[ 0, "asc" ]],
      "columns": columns,
      columnDefs: [
        { targets: '_all', className: 'dt-left' },
        { targets: 9,
          render: function(){
                 return infoBtn
               }},
                  ],
      responsive: true,
      dom: '<"top">ct<"top"><"clear">',
  });
}

function getRoomsData(){
  console.log('inside getRoomsData');
  // http:/localhost:8080/api/rooms
  // json list of rooms
  let date = new Date();
  let currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  var babyBedCheckbox;
  if($("#babyBed").prop('checked')){
    babyBedCheckbox=true;
  }else{
    babyBedCheckbox=false;
  }

  var children;
  if($("#children").val() == "undefined"){
    children = 0;
  }else{
    children = $("#children").val();
  }

  var filterRooms={
    startDate : $("#checkIn").val(),
    endDate : $("#checkOut").val(),
    roomType : $("#selectRoomType :selected").text(),
    adultSize : $("#adults").val(),
    childrenSize : children,
    smoking : true,
    disabled : false
  }

   let filterRoomsJson=JSON.stringify(filterRooms);

  $.ajax({
      url: AVAILABLE_ROOMS_API,
      type: "post",
      contentType:"application/json",
      datatype: "json",
      data: filterRoomsJson,
      success: function(rooms){

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

function createReservation(){

//   {
//     "startDate": "07/07/2022",s
//     "endDate": "07/08/2022",
//     "checkedIn": true,
//     "checkedOut": true,
//     "payment": true,
//     "price": 641.76,
//     "totalPrice": 641.76,
//     "roomServicePrice": 0.0,
//     "babyBed": 6,
//     "nowDate": "07/06/2022",
//     "room": {
//         "roomType": "Double",
//         "sizePerson": 4,
//         "roomNumber": 1,
//         "singleBedAmount": 2,
//         "doubleBedAmount": 1,
//         "cleanRoom": true,
//         "roomActive": true,
//         "price": 22.0,
//         "childrenPlace": 2,
//         "disabled": false,
//         "smoke": true,
//         "id": 35
//     },
//     "customers": [
//         {
//             "id": 1,
//             "firstName": "Marlene",
//             "lastName": "Jones",
//             "address": "8554 Casper Plaza, North Rahul, NY 85427",
//             "email": "cordia.towne@yahoo.com",
//             "phone": "(408) 383-0656",
//             "typeOfDocument": "Passport"
//         },
//         {
//             "id": 2,
//             "firstName": "Monserrate",
//             "lastName": "Kautzer",
//             "address": "Suite 130 688 Lebsack Pines, South Khalid, ME 66714-3545",
//             "email": "flavio.ziemann@yahoo.com",
//             "phone": "1-329-106-5789",
//             "typeOfDocument": "Passport"
//         }
//     ],
//     "id": 42
// }

}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()