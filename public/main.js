
console.log("Reading...");
console.log($("body"));
$("[data-toggle=popover]").popover({
  html: true,
  content: function () {
    return $("#popover-content").html();
  },
});
console.log(moment().calendar())
$(".date").each(function (index) {
  let date_string = $(this).text()
  $(this).text(moment(date_string).format('LLL'))
});
// moment($('#date').text()).calendar()
// $('#date').text(moment().calendar())
$(document).on("click", ".delete_item", function (event) {
  event.preventDefault();
  let item_id = $(this).attr("data-id");
  console.log(item_id);
  $.ajax({
    type: "DELETE",
    headers: { "Content-Type": "application/json" },
    url: "/todos/" + item_id,
    success: function (data) {
      console.log(data);
      console.log("successful");
    },
    error: function (err) {
      console.log(err);
    },
  });
  // $.ajax({
  //   type: "DELETE",
  //   headers: { 'Content-Type': 'application/json' },
  //   url: "/todos/"+item_id,
  //   success: function(data){
  //     console.log(data)
  //     console.log('successful')
  //     window.location.href = window.location.origin+"/todos"
  //   }
  // });
  // fetch('/todos', {
  //   method: 'delete',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     _id: item_id
  //   })
  // })
  // .then(res => {
  //     console.log(res)
  //     if (res.ok) return res.json()
  // })
  // .then(data => {
  //     window.location.reload()
  // })
});
