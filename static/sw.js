self.addEventListener("fetch", function(event) {
  console.log(
    "url: ",
    event.request.url,
    " ",
    event.request.cache,
    " mode: ",
    event.request.mode
  );
  console.log("here2");
});
