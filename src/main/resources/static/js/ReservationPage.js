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

  getHomeData();
  initRoomsTable();
    $("#enImg").click(function(){
      setLanguage('en');
      getLanguage();
      window.location.reload(true);
      $.datepicker.setDefaults( $.datepicker.regional["en-GB"]);
    })
    $("#cnImg").click(function(){
      setLanguage('cn');
      getLanguage();

     $.datepicker.setDefaults( $.datepicker.regional[ "zh-CN" ] );
    })

    getLanguage();

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
    getHomeData();
    getRoomsData();
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
                   if(data == true){
                    return "<span class='yes' id='disabledYes'>YES</span>";
                   } else {return "<span class='no' id='disabledNo'>NO</span>"; }
      }},
      { "title": "Smoke",
          "data": "smoking",
          render: function(data,type,row){
                  if(data == true){
                   return "<span class='yes'>Allowed</span>";
                  }else{return "<span class='no' id='notAllowed'>Not Allowed</span>"; }
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
      dom: '<"top">ct<"top"lip><"clear">',
  });
}

function getRoomsData(){
  console.log('inside getRoomsData');
  // http:/localhost:8080/api/rooms
  // json list of rooms
  var filter = localStorage.getItem('filterRoomsHome')
  var baby =localStorage.getItem('babyBedCheckbox')
  if(filter && baby){
  localStorage.removeItem('filterRoomsHome');
  localStorage.removeItem('babyBedCheckbox');
  location.reload();
  }else{


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

  var smoke=false;
  var disabled=false;
  var selectedComment= $("input[name='comments']:checked").val();
  if(selectedComment == "smoking"){
    smoke=true;
  }else if(selectedComment == "nonSmoking"){

  }else{
    disabled=true;
  }

  var filterRooms={
    startDate : $("#checkIn").val(),
    endDate : $("#checkOut").val(),
    roomType : $("#selectRoomType :selected").text(),
    adultSize : $("#adults").val(),
    childrenSize : children,
    smoking : smoke,
    disabled : disabled
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
           getLanguage();
      },
      fail: function (error) {
          console.log('Error: ' + error);
      }
  });
}}
function getHomeData(){
  console.log('inside getHomeData');
  // http:/localhost:8080/api/rooms
  // json list of rooms

 var filterRoomsHome = JSON.parse(localStorage.getItem("filterRoomsHome"));
     console.log(filterRoomsHome)
    if(filterRoomsHome){
               console.log(filterRoomsHome)

                var indx;
                switch (filterRoomsHome.roomType) {
                  case "Single":
                    indx = 0;
                    break;
                  case "Double":
                    indx = 1;
                    break;
                  case "2x Double":
                    indx = 2;
                    break;
                  case "Penthouse":
                    indx = 3;
                    break;
                }

       $("#checkIn").val(filterRoomsHome.startDate);
       $("#checkOut").val(filterRoomsHome.endDate);
       document.getElementById("selectRoomType").selectedIndex=indx;
       $("#adults").val(filterRoomsHome.adultSize);
       $("#children").val(filterRoomsHome.childrenSize);
       $("#smoking").val(filterRoomsHome.smoking);
       $("#nonSmoking").val(filterRoomsHome.nonSmoking);
       $("#disabled").val(filterRoomsHome.disabled);


       let filterRoomsHomeJson=JSON.stringify(filterRoomsHome);
           console.log(filterRoomsHome)
            $.ajax({
                 url: AVAILABLE_ROOMS_API,
                 type: "post",
                 contentType:"application/json",
                 datatype: "json",
                 data: filterRoomsHomeJson,
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






}

function reservationCreate(){
    selectedRoom=roomsTable.row($('.selected')).data();
console.log(selectedRoom.price);
    let date = new Date();
    let currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
     var baby= localStorage.getItem('babyBedCheckbox')
     var babyBedInit;
     if(baby){
         babyBedInit = baby
     }else{
         babyBedInit = $("#babyBed").val()}
    reservationInfo={
     id:0,
     startDate : $("#checkIn").val(),
     endDate : $("#checkOut").val(),
     checkedIn : false,
     checkedOut : false,
     payment : false,
     price : selectedRoom.price,
     totalPrice : selectedRoom.price,
     roomServicePrice : 0,
     babyBed : $("#babyBed").val(),
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
         typeOfDocument : $("#documentType :selected").text()
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



//--- LANGUAGE ----
//-----------------
var language;
function getLanguage() {
  (localStorage.getItem('language') == null) ? setLanguage('en') : false;

  var url= '/language/' +  localStorage.getItem('language') + '.json';

  $.getJSON(url, function(data){
    $("#aboutBtn").text(data.aboutUs);
    $("#contactBtn").text(data.contact);
    $("#loginBtn").text(data.logIn);
    $("#userName").text(data.username);
    $("#password").text(data.password);
    $("#submit").text(data.submit);
    $("#text-p1").text(data.textp1);
    $("#text-p2").text(data.textp2);
    $("#reservationBtn").text(data.reservation);
    $("#checkinLabel").text(data.checkIn);
    $("#checkoutLabel").text(data.checkOut);
    $("#room").text(data.room);
    $("#single").text(data.single);
    $("#double").text(data.double);
    $("#x2double").text(data.x2double);
    $("#pentHouse").text(data.pentHouse);
    $("#guests").text(data.guests);
    $("#adults").attr("placeholder", data.adults);
    $("#children").attr("placeholder", data.child);
    $("#babyBed").attr("placeholder", data.babyBed);
    $("#smoking_lang").text(data.smoking);
    $("#nonSmoking_lang").text(data.nonSmoking);
    $("#disabled_lang").text(data.disabled);
    $("#checkRoomsButton").text(data.checkAvalibility);
    $("#selectedRoomButton").text(data.continue);
    $("#aboutUsText").text(data.aboutUsText);
    $("#social").text(data.social);
    $("#socialDescription").text(data.socialDescription);
    $("#address").text(data.address);
    $("#monDay").text(data.monday);
    $("#tueDay").text(data.tuesday);
    $("#wedDay").text(data.wednesday);
    $("#thuDay").text(data.thursday);
    $("#friDay").text(data.friday);
    $("#satDay").text(data.saturday);
    $("#sunDay").text(data.sunday);
    $("#roomsTable th.dt-left.sorting")[0].innerText= data.roomNo;
    $("#roomsTable th.dt-left.sorting")[1].innerText= data.roomType;
    $("#roomsTable th.dt-left.sorting")[2].innerText= data.guests;
    $("#roomsTable th.dt-left.sorting")[3].innerText= data.children;
    $("#roomsTable th.dt-left.sorting")[4].innerText= data.singleBed;
    $("#roomsTable th.dt-left.sorting")[5].innerText= data.doubleBed;
    $("#roomsTable th.dt-left.sorting")[6].innerText= data.price;
    $("#roomsTable th.dt-left.sorting")[7].innerText= data.disabled;
    $("#roomsTable th.dt-left.sorting")[8].innerText= data.smoking;
    $("#titleRegistrationModal").text(data.titleRegistrationModal);
    $("#labelFirstName").text(data.labelFirstName);
    $("#labelLastName").text(data.labelLastName);
    $("#labelEmail").text(data.labelEmail);
    $("#email").attr("placeholder", data.emailPlaceholder);
    $("#textPassword").text(data.textPassword);
    $("#labelPhone").text(data.labelPhone);
    $("#labelAddress").text(data.labelAddress);
    $("#labelDocumentType").text(data.labelDocumentType);
    $("#reservationSubmit").text(data.submitButton);
    $("#closeButton").text(data.closeButton);




    var roomsTable = $('#roomsTable').DataTable();

    roomsTable.rows().every( function () {
        var d = this.data();

        var infoRoomText=document.querySelectorAll("#infoRoom");
        infoRoomText.forEach(btn => {
          btn.innerText = data.facilities ;
        });

        var disabledYes=document.querySelectorAll("#disabledYes");
        disabledYes.forEach(item => {
          item.innerText = data.yes ;
        });

        var disabledNo=document.querySelectorAll("#disabledNo");
        disabledNo.forEach(item => {
          item.innerText = data.no ;
        });

        var notAllowed=document.querySelectorAll("#notAllowed");
        notAllowed.forEach(item => {
          item.innerText = data.notAllowed ;
        });

        // update data source for the row
        if(d.roomType == "Single"){
        d.roomType = data.single;
        }else if(d.roomType == "Double"){
          d.roomType = data.double;
        }else if(d.roomType == "2 x Double"){
          d.roomType= data.x2double;
        }else if(d.roomType== "Penthouse"){
          d.roomType = data.pentHouse;
        }

        this.invalidate(); // invalidate the data DataTables has cached for this row

    } );

    // Draw once all updates are done
    roomsTable.draw();


  }).fail(function(){
      console.log("An error has occurred.");
  });
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
}