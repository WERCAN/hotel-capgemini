var UNCLEANED_API = "http://localhost:9090/api/uncleanedRooms";
var ROOMS_API = "http://localhost:9090/api/rooms"

var roomsTable;

function init(){


  initRoomsTable();
  getRoomsData();

//  $("#checkRoomsForm").on("submit",function(event){
//      event.preventDefault();
//      getRoomsData();
//    });

  $("#roomsTable tbody").on("click", "tr", function () {
    console.log("Clicking on row");
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      roomsTable.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  //******* Edit UncleanedRoom ********
       $("#cleanedRoomsButton").click( function () {

          console.log("Inside click of cleanedRoomsButton");
          // Get the data from selected row and fill fields in modal
          if (roomsTable.row($('.selected')).data() == undefined) {
              alert("Select room first!");
          }else{
          var roomInfoEdit = roomsTable.row($('.selected')).data();


           if(roomInfoEdit.cleanRoom == true){
            $("#isCleanYes").prop("checked", true);
           }else{
            $("#isCleanNo").prop("checked", true);
           }
           $('#editCheckModal').modal('show');

      }});

  $('#editCheckModal').on('submit', function(e){
          e.preventDefault();
          console.log("Edit checkRoom Modal Form submitted!");
          updateRoom();
          $('#editCheckModal').modal('hide');
       });




  // INIT Table
function initRoomsTable(){
   console.log("inside initRoomsTable")

   columns = [

           { "title":  "Room No",
               "data": "roomNumber" },


           { "title":  "isClean",
                "data": "cleanRoom",
                render: function(data,type,row){
                         if(data === true){
                          return "<span class='yes'>CLEAN</span>";
                          } else { return "<span class='no'>UNCLEANED</span>";}
           }}]

    roomsTable = $("#roomsTable").DataTable( {
            "order": [[ 0, "asc" ]],
            "columns": columns})
}}
function getRoomsData(){
    console.log('inside getRoomsData' );
    // http:/localhost:9090/api/rooms
    // json list of rooms
    $.ajax({
        url: UNCLEANED_API,
        type: "get",
        dataType: "json",
        // success: function(reservations, textStatus, jqXHR){
        success: function(rooms){
            //console.log('Data: ' + rooms[0].roomNumber );
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
  //roomInfoEdit.roomNumber = $("#editRoomNo").val();

  var isClean= $("#isClean  input[name='isCleanRadioName']:checked").val();
  console.log("isClean: "+ isClean);
  if(isClean == "yes"){
    roomInfoEdit.cleanRoom = true;
  }else{
    roomInfoEdit.cleanRoom = false;
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

