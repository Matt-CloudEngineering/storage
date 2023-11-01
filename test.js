                function CallbackFunction(data) {
                  // This is where you handle your response. 'data' is the JSON object received from the server.
                  console.log("Inside Callback");  // For example, log the received data to the console
                  console.log(data.data.length);
                  // You could also parse or use this data in other ways, e.g., appending it to your webpage.
                  // Assuming it's a list of colors in the palette, you might do something like this:
		
		  var myDiv = document.getElementById("paintchip");

                  if(data.data.colors) {
                    console.log("colors:"+data.data.colors.length);
                    data.data.colors.forEach(function(color) {
                      // Do something with each color, like appending them to a part of your webpage
                      var colorDiv = document.createElement('div');
                            colorDiv.innerHTML = "<p>" + color.name + "</p><p>" + color.number +":" + color.hex + "</p>"; // assuming there's a 'name' field
                            colorDiv.style.width = "200px";
                            colorDiv.style.padding = "0.5rem";
                            colorDiv.style.borderBottom = "thin solid lightgray";

			    colorDiv.style.backgroundColor = "#"+color.hex // assuming there's a 'hexValue' field
                      myDiv.appendChild(colorDiv);
                    });
                  }
                }

                $.ajax({
                  url: "//stage-api.benjaminmoore.com/api/88238a6f1629408b2cff/color/GetPaletteByCode",
                  data: "code=AF&colorData=true&countryCode=en-us",
                  dataType: "jsonp",
                  //jsonpCallback: "CallbackFunction",
                  success: function(response) {
                    // Handle successful response here if not using the 'CallbackFunction'
                    console.log(response);
                    CallbackFunction(response);
                  },
                  error: function (xhr, status, error) {
                    // Log the status and error to the console
                    console.error("AJAX Error: " + status + "; Error thrown: " + error);

                    // Additionally, you might want to log the entire xhr object for debugging
                    console.error(xhr);

                    // If you want more detailed server response text, you can log it like this:
                    if (xhr.responseText) {
                      try {
                        // Try to parse the error response from the server and log it
                        var jsonResponse = JSON.parse(xhr.responseText);
                        console.error("Server response:", jsonResponse);
                      } catch (e) {
                        // If the error message isn't valid JSON, just log the raw response
                        console.error("Raw server response:", xhr.responseText);
                      }
                    }
                  }
                });
