const header = `<DE>1P  0      R</DE>`;
//const test_case_number = 'C0';
var attributes = [];

function createPlainFormat(attributes, mock_data, transaction_code, test_case_number){
	let mockBody = '';
	if(Array.isArray(mock_data)){
		mock_data.forEach(mock_element => 
      		mockBody += createSinglePlainFormat(attributes, mock_element, transaction_code, test_case_number)
		);
	}else if(typeof mock_data === 'object'){
      mockBody += createSinglePlainFormat(attributes, mock_data, transaction_code, test_case_number);
	}else{
		throw 'Provided mock_data is invalid, it\'s not an object nor an array';
	}
	return mockBody;
}

function extractDataFromDescriptor(descriptor){
	let items = descriptor.trim().split('\n');
	let separator = items[0].charAt(8);
	let attributes = [];
	items.forEach(row => {
	    let data = row.split(separator);
	    attributes.push({
	        //transaction: data[0].trim(),
	        name: data[7].trim().toLowerCase(),
	        length: Number(data[10].trim()),
          decimals: Number(data[11].trim())
	    })
	});
	return attributes;
}

function createSinglePlainFormat(attributes, mock_data, transaction_code, test_case_number){
    	let mockFormat = '<OC>' + test_case_number + fillLength(transaction_code, 8);
		attributes.forEach(attribute => {
				mockFormat += fillLength(mock_data[attribute.name], attribute.length);
		});
		return mockFormat += '</OC>';
}

function fillLength(text, expected_length){
	text =  text !== undefined ? text.toString().replace('.','') : '';
  if(text.length < expected_length){
  	while(text.length < expected_length){
	 		text += ' ';
		}
  }else if(text.length > expected_length){
  	console.error(`Given value length is higher than expected, given value: ${text} length: ${text.length}, expected length: ${expected_length}\nReducing length...`);
    text = text.substr(0, expected_length);
    console.error(`New value: '${text}'`);
  }
	return text;
}

$(document).ready(function() {
	$("#txtAttributes").bind("paste", e => {
		debugger
		let attributes_source = $("input[name='chkMockAttributesSource']:checked").val();
		if(attributes_source === 'descriptor'){
			setTimeout(() => {
				$("#txtTransactionCode").val($(e.currentTarget).val($(e.currentTarget).val().trim()).val().substr(0,7).trim());
			}, 100);
		}
	});

	$("input[name='chkMockAttributesSource']").change(e => {
	if($(e.currentTarget).prop("checked")){
		$("#txtTransactionCode").prop("disabled", $(e.currentTarget).val() === 'descriptor');
		if($("#txtAttributes").val() !== ""){
			$("#txtTransactionCode").val($("#txtAttributes").val($("#txtAttributes").val().trim()).val().substr(0,7).trim());
		}
	}
	});
});


//form.validate({errorPlacement: function errorPlacement(error, element) { element.before(error); }});
$("#frmMockData").children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex){
    	try{
    		if(currentIndex === 0 && newIndex === 1){
    			let attributes_source = $("input[name='chkMockAttributesSource']:checked").val();
   				switch (attributes_source){
   					case 'json':
   						attributes = JSON.parse($("#txtAttributes").val());
   						if(!Array.isArray(attributes) || attributes.length === 0)
    						throw 'No se ha registrado ningún atributo';
   					break;
   					case 'descriptor':
   						attributes = extractDataFromDescriptor($("#txtAttributes").val());
   					break;
   				};
    			if($("#txtTransactionCode").val() === "")
    				throw 'Debe proporcionar el código de transacción';
	    	}else if (currentIndex === 1 && newIndex === 2){
	    		if($("#txtCaseNumber").val() === "" || $("#txtCaseNumber").val().length !== 2)
	    			throw 'El número de caso proporcionado no es válido';
	    		$("#txtPlainTextData").val(
	    			($("#chkAddHeader").prop("checked") ? header : '')
	    			+ 
	    			createPlainFormat(attributes,
	    				JSON.parse($("#txtMockData").val()),
	    				$("#txtTransactionCode").val(),
	    				$("#txtCaseNumber").val())
	    		);
	    	}
    	 }catch(error){
    		alert(error);
    		return false;
    	}
        return true;
    }/*,
    onFinished: function (event, currentIndex){
        alert("Submitted!");
    }*/
});