const header = `<DE>1P  0      R</DE>`;
const json_atributes_data_source_placeholder = `Ingresar atributos 'name' y 'length' en un array. Ejemplo:
	[{
	"name": "nummovi",
	"length": 11
	},
	{
	"name": "fecpago",
	"length": 10
	},
	{
	"name": "horpago",
	"length": 8
	},
	{
	"name": "medpago",
	"length": 20
	}]`;
const descriptor_atributes_data_source_placeholder = `Ingrese el contenido del descriptor Ejemplo:
BGMQ511 ÐSALIDA COTIZACION T.CAMBIO    ÐXÐ15Ð00140Ð01Ð00016ÐGPIMPCVÐIMPORTE CONVERTIDO  ÐNÐ017Ð2ÐSÐ        Ð
BGMQ511 ÐSALIDA COTIZACION T.CAMBIO    ÐXÐ15Ð00140Ð02Ð00036ÐGPDIVISÐDIVISA CONVERSION   ÐAÐ003Ð0ÐSÐ        Ð
BGMQ511 ÐSALIDA COTIZACION T.CAMBIO    ÐXÐ15Ð00140Ð03Ð00042ÐGPTPCANÐT.CAMBIO PREFERENCIAÐNÐ011Ð7ÐSÐ        Ð
BGMQ511 ÐSALIDA COTIZACION T.CAMBIO    ÐXÐ15Ð00140Ð04Ð00056ÐGPTPCAPÐT.CAMBIO PIZARRA    ÐNÐ011Ð7ÐSÐ        Ð
BGMQ511 ÐSALIDA COTIZACION T.CAMBIO    ÐXÐ15Ð00140Ð05Ð00070ÐGPIMPTPÐIMPORTE T.C PIZARRA ÐNÐ017Ð2ÐSÐ        Ð`;

const roo_class_atributes_data_source_placeholder = `Pegar la clase roo, Ejemplo:
@Formato(nombre = "BQM59S1")
@RooJavaBean
@RooToString
@RooSerializable
public class FormatoBQM59S1 {

	/**
	 * <p>Campo <code>IDPAGIN</code>, &iacute;ndice: <code>1</code>, tipo: <code>ALFANUMERICO</code>
	 */
	@Campo(indice = 1, nombre = "IDPAGIN", tipo = TipoCampo.ALFANUMERICO, longitudMinima = 20, longitudMaxima = 20)
	private String idpagin;

	/**
	 * <p>Campo <code>TAMPAGI</code>, &iacute;ndice: <code>2</code>, tipo: <code>ENTERO</code>
	 */
	@Campo(indice = 2, nombre = "TAMPAGI", tipo = TipoCampo.ENTERO, longitudMinima = 3, longitudMaxima = 3)
	private Integer tampagi;`;


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

function extractDataFromRooClass(roo_class){
	let attributes = [];
	roo_class.split('\n').forEach((row, index) =>{
		if(row.indexOf('<p>Campo') !== -1){
			attributes.push({});
			row.split(',').forEach((code_tag, code_tag_index )=> {
					let value = getFromStringToString(code_tag, "<code>","</code>");
					if(code_tag_index === 0){
					 attributes[attributes.length-1].name = value.toLowerCase();
					}else if(code_tag_index === 1){
						attributes[attributes.length-1].index = Number(value);
					}else{
						attributes[attributes.length-1].type = value.toLowerCase();
					}
				})
		}else if(row.indexOf('@Campo') !== -1){
			let length = getFromStringToString(row, 'longitudMaxima = ', ')');
			if(length.indexOf(',') != -1){
				length = getFromStringToString(length, '', ',');
			}
			attributes[attributes.length-1].length = Number(length);
		};
	});
	return attributes;
}


function getFromStringToString(string, start_string, end_string){
	let response = string.substring(string.indexOf(start_string) + start_string.length);
	response = response.substring(0, response.indexOf(end_string));
	return response;
};


function createSinglePlainFormat(attributes, mock_data, transaction_code, test_case_number){
    	let mockFormat = '<OC>' + test_case_number + fillLength(transaction_code, 8);
		attributes.forEach(attribute => {
				mockFormat += fillLength(mock_data[attribute.name], attribute.length);
		});
		return mockFormat += '</OC>';
}

function fillLength(text, expected_length){
	text =  text !== undefined ? text.toString().replace('.0','0').normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
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
		let attributes_source = $("input[name='chkMockAttributesSource']:checked").val();
		if(attributes_source === 'descriptor'){
			setTimeout(() => {
				$("#txtTransactionCode").val($(e.currentTarget).val($(e.currentTarget).val().trim()).val().substr(0,7).trim());
			}, 100);
		}else if (attributes_source = 'roo_class'){
			setTimeout(() => {
				$("#txtTransactionCode").val(getFromStringToString($("#txtAttributes").val(),"class Formato", ' '));
			}, 100);
		}
	});

	$("input[name='chkMockAttributesSource']").change(e => {
	if($(e.currentTarget).prop("checked")){
		$txtAttributes = $("#txtAttributes");
		switch($(e.currentTarget).val()){
			case "descriptor":
				$("#txtTransactionCode").prop("disabled", true);
				$txtAttributes.attr("placeholder", descriptor_atributes_data_source_placeholder);
				if($txtAttributes.val() !== ""){
					$("#txtTransactionCode").val($txtAttributes.val($txtAttributes.val().trim()).val().substr(0,7).trim());
				}
			break;
			case "json":
				$("#txtTransactionCode").prop("disabled", false);
				$txtAttributes.attr("placeholder", json_atributes_data_source_placeholder);
				break;
			case "roo_class":
				$("#txtTransactionCode").prop("disabled", true);
				$txtAttributes.attr("placeholder", "Pegar la clase ROO ubicado en com.bbva.pzic.[api].dao.model.[transaccion].Formato...").attr("title", roo_class_atributes_data_source_placeholder);
				if($txtAttributes.val() !== ""){
					$("#txtTransactionCode").val(getFromStringToString($("#txtAttributes").val(),"class Formato", ' '));
				}
				break;
		}
	}
	});

	$("#chkRooClass").prop("checked", true).trigger("change");
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
   					case 'roo_class':
   						attributes = extractDataFromRooClass($("#txtAttributes").val());
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


