
$(function () {
    console.log("ready!");

    $.each(stuffIDo, function(index, value) {

        console.log(index, value);
            $('#myThings').append("<li>" + value + "</li>");

    }); 
});

const stuffIDo = [

    "Playing Basketball", 
    "Playing Guitar",
    "Fishing",
    "Watching Netflix"
]

const goochData = {
    teley: [
      { showName: "Supernatural", venue: "Netflix" },
      { showName: "The Boys", venue: "AmazonPrime" },
      { showName: "Alabama Football", venue: "SEC Network" }
    ],
    music: [
      { artistName: "Luke Combs" },
      { artistName: "Keith Whitely" },
      { artistName: "Foo Fighter" }
    ]
  };

    $.each(goochData, function (key, item) {
      $("#stuff-lists").append(`<h4> ${key} </h4> <ul id="-list${key}">`);
      $.each(item, function (index, val) {
        $.each(val, function (propertyName, propertyValue) {
          console.log(propertyName, propertyValue);

          $(`#${key}-list`).append(`<li> ${propertyValue}`);
  
        });
      });
    });
  

    
    
