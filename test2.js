                function CallbackFunction(data) {
                    // This is where you handle your response. 'data' is the JSON object received from the server.
                    console.log("Inside Callback"); // For example, log the received data to the console
                    console.log(data.data.length);
                    // You could also parse or use this data in other ways, e.g., appending it to your webpage.
                    // Assuming it's a list of colors in the palette, you might do something like this:

                    var myDiv = document.getElementById("paintchip");

                    var tLength = data.data.colors.length;

                    // creates a <table> element and a <tbody> element
                    const tbl = document.createElement("table");
                    const tblBody = document.createElement("tbody");
                    var x = 0; // Table Columns
                    var y = 0; // Table Rows




                    if (data.data.colors) {
                        console.log("colors:" + data.data.colors.length);
                            // creating all cells
                            while (x < tLength) {
                                // creates a table row
                                const row = document.createElement("tr");

                                y = 0;

                                while (y < 6) {
					    const cell = document.createElement("td");
					data.data.colors.forEach(function(color) {
					    // Do something with each color, like appending them to a part of your webpage


					    // Create a <td> element and a text node, make the text
					    // node the contents of the <td>, and put the <td> at
					    // the end of the table row
					    var colorDiv = document.createElement('div');
					    colorDiv.innerHTML = "<p>" + color.name + "</p><p>" + color.number + ":" + color.hex + "</p>"; // assuming there's a 'name' field
					    colorDiv.style.width = "200px";
					    colorDiv.style.padding = "0.5rem";
					    colorDiv.style.borderBottom = "thin solid lightgray";
					    colorDiv.style.backgroundColor = "#" + color.hex // assuming there's a 'hexValue' field

					    y++;
					    x++;

					    cell.appendChild(colorDiv);
				    });
                                    row.appendChild(cell);
				}
				// add the row to the end of the table body
                                tblBody.appendChild(row);

				}
                                                            

                            // put the <tbody> in the <table>
                            tbl.appendChild(tblBody);
                            // appends <table> into <body>
                            myDiv.appendChild(tbl);
                            // sets the border attribute of tbl to '2'
                            tbl.setAttribute("border", "2");


                        
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
                    error: function(xhr, status, error) {
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
