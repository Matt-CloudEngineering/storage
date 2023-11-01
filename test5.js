// Fixed CSV data as a string with line breaks
const csvData = `
MPI,NAME,NUMBER
43,AURA Interior Paint- Satin,N526
44,AURA Interior Paint- Eggshell,N524
53,AURA Interior Paint- Matte,N522
54,AURA Interior Paint- Semi-Gloss,N528
1(V200-78Aluminumonly),Alkyd Urethane Enamel - Gloss,V200
10,Cryli Cote® 100% Acrylic Exterior Paint - Semi-Gloss,N2
10,Regal Select Exterior High Build, Flat,400
10,Ultra Spec EXT Flat,447
10,AURA Exterior Paint Flat,N629
10,MoorLife Flat Finish,105
104,TuffCrete® Solvent Acrylic Concrete Waterproofing Stain,CST-5XXX
105,Aliphatic Acrylic Urethane - Gloss,V500
105,Waterborne Urethane,V540
107,Ultra Spec HP Acrylic Metal Primer,HP04
11,Cryli Cote® 100% Acrylic Exterior Paint - Flat,N10
11,Ultra Spec EXT Gloss,449
11,Regal Select Exterior High Build, Soft Gloss,403
114,MULTAPPLY™ Waterborne Acrylic Enamel - Gloss,1180
114,Ultra Spec HP D.T.M. Acrylic Gloss,HP28
114,Quick Dry Acrylic Spray DTM,V300
114,MULTAPPLY™ Waterborne Acrylic Enamel - Gloss,1180
116,Epoxy Mastic Coating,V160
117,Texcrete® Silicone Water Repellent,194
118,Super Kote 5000® Dry Fall Coating Latex - Flat,N110
118,Benjamin Moore Latex Dry Fall - Flat,395
121,Acrylic Polyurethane - Low Lustre,423
129,Acrylic Polyurethane - Low Lustre,423
`;

function parseCSV(csvText) {
    const rows = csvText.trim().split('\n');
    const headers = rows[0].split(',');
    const data = [];
    const fSelect = document.getElementById("prod");


    for (let i = 1; i < rows.length; i++) {
        const values = rows[i].split(',');
        const rowData = {};

        headers.forEach((header, index) => {
            rowData[header] = values[index];
        });
	
        data.push(rowData);
    }

    return data;
}

// Function to make an AJAX request for an object
function fetchDataForObject(obj) {
    // Replace with your actual AJAX endpoint and data retrieval logic
    const workingUrl = "https://stage-api.benjaminmoore.com/api/88238a6f1629408b2cff/product/GetProductDetail";
    $.ajax({
	    url: workingUrl,
	    data: "productNumber=" + obj.NUMBER + "&countryCode=en-us",
	    dataType: "jsonp",
	    jsonpCallback: "CallbackFunction",
	    error: function (xhr) {
		// Handle errors here
		    if (xhr.error!='') {
			    console.log("Error: "+ xhr.status);
		    }
	    },
	    /*
	    success: function (data) {
		// Handle the successful response here
		console.log(data);
		console.log("Success: " + obj.NUMBER);
	    }
	    */
	});
 

}

function CallbackFunction(success) {
	console.log(success);
}

const csvArray = parseCSV(csvData);

const Product = document.getElementById('product');
conOL = document.createElement('ol');

// Iterate through the CSV array and make AJAX requests for each object
csvArray.forEach(obj => {
	//console.log(obj.NUMBER);
	var conLI = document.createElement("li");
	conLI.innerHTML= obj.NUMBER;
	conOL.appendChild(conLI);
	
});

Product.appendChild(conOL);


