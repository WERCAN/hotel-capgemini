var ROOMS_API = "http://localhost:9090/api/rooms";
var AVAILABLE_ROOMS_API="http://localhost:9090/api/reservations/availableRooms";
var customersApi = "http://localhost:9090/api/customer"
var reservationApi = "http://localhost:9090/api/reservations";
var lastCustomerApi = "http://localhost:9090/api/reservations/lastcustomer"

var customerInfo;
var selectedRoom;
var createdCustomer;
var roomsTable;
var reservationInfo;

var trial;
var customerInfoList = [];

function init(){

  initRoomsTable();

  $("#checkRoomsForm").on("submit",function(event){
      event.preventDefault();
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

  $("#customerForm").on('submit',function(e){
    e.preventDefault();
    console.log("Inside reservationSubmit");
    customerCreate();
    reservationCreate();
  })
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

function reservationCreate(){
    selectedRoom=roomsTable.row($('.selected')).data();

    let date = new Date();
    let currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    reservationInfo={
     id:0,
     startDate : $("#checkIn").val(),
     endDate : $("#checkOut").val(),
     checkedIn : false,
     checkedOut : false,
     payment : false,
     price : 0,
     totalPrice : 0,
     roomServicePrice : 0,
     babyBed : 0,
     nowDate : currentDate,
     room: selectedRoom,
     customers: customerInfoList
     }

     var reservationInfoJson=JSON.stringify(reservationInfo);
     $.ajax({
        url: reservationApi,
        type: "post",
        contentType:"application/json",
        datatype: "json",
        data: reservationInfoJson,
        success: function(reservation){
        console.log("Reservation is saved successfully");
        $('#continueModal').modal('hide');
        },
        fail: function (error) {
            console.log('Error: ' + error);
        }
    });

     $( function getDate( element ) {
         var dateFormat = "mm/dd/yy";
         var date;
         try {
           date = $.datepicker.parseDate( dateFormat, element.value );
         } catch( error ) {
           date = null;
         }
         return date;
       }
     );
}

function customerCreate(){
    customerInfo={
         id:0,
         firstName : $("#firstName").val(),
         lastName : $("#lastName").val(),
         address : $("#address").val(),
         email : $("#email").val(),
         phone : $("#phone").val(),
         typeOfDocument : $("#documentType").val()
     }

     var customerInfoJson=JSON.stringify(customerInfo);
     console.log(customerInfoJson);

     $.ajax({
           url: customersApi,
           type: "post",
           contentType:"application/json",
           datatype: "json",
           async: false,
           data: customerInfoJson,
           success: function(returnCustomers){
               customerInfoList[0]=returnCustomers;
               console.log(returnCustomers);
                   if (returnCustomers) {
                       $("#firstName").val('');
                       $("#lastName").val('');
                       $("#address").val('');
                       $("#email").val('');
                       $("#phone").val('');
                       $("#documentType").val('');
                   }
               },
           fail: function (error) {
               console.log('Error: ' + error);
           }
       });
}