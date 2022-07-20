var UNCLEANED_API = "http://localhost:9090/api/uncleanedRooms";
var ROOMS_API = "http://localhost:9090/api/rooms"

var roomsTable;

function init(){

  initRoomsTable();
  getRoomsData();

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
  $("#editRoomBtn").click( function () {
      // Get the data from selected row and fill fields in modal
      if (roomsTable.row($('.selected')).data() == undefined) {
          alert("Select room first!");
      }else{
         var roomInfoEdit = roomsTable.row($('.selected')).data();
           roomInfoEdit.cleanRoom = true;

         var roomJson=JSON.stringify(roomInfoEdit);

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
  });

}

  // INIT Table
function initRoomsTable(){
   console.log("inside initRoomsTable")

   columns = [
       { "title":  "Room No",
           "data": "roomNumber"
       },
       { "title":  "isClean",
            "data": "cleanRoom",
            render: function(data,type,row){
                     if(data === true){
                      return "<span class='yes'>Clean</span>";
                      } else { return "<span class='no'>UnCleaned</span>";}
       }}
       ]

    roomsTable = $("#roomsTable").DataTable( {
            "order": [[ 0, "asc" ]],
            "columns": columns,
            dom: '<"top">ct<"top"><"clear">'
          })
}

function getRoomsData(){
    console.log('inside getRoomsData' );
    // http:/localhost:9090/api/rooms
    // json list of rooms
     $.ajax({
         url: UNCLEANED_API,
         type: "get",
         dataType: "json",
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


