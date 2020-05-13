const header = `<DE>1P  0      R</DE>`;
const test_case_number = 'C0';


function generarMock(){

	//const separator = 'Ú';
  const separator = 'Ð';
	
	const descriptor =
	`UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð01Ð00001ÐCCC    ÐID DE PRESTAMO      ÐAÐ020Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð02Ð00021ÐIDMVPCUÐNUM. OPERACION      ÐAÐ043Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð03Ð00064ÐIDTIPREÐID. TIP. PRESTAMO   ÐAÐ002Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð04Ð00066ÐDETIPREÐDET. TIP. PRESTAMO  ÐAÐ020Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð05Ð00086ÐNROCCC ÐNUMER PRESTAMO      ÐAÐ020Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð06Ð00106ÐESTADO ÐESTADO PRESTAMO     ÐAÐ002Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð07Ð00108ÐDESESTAÐDESC. EST. PRESTAMO ÐAÐ020Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð08Ð00128ÐFEFORMAÐFEC. CONT. PRESTAMO ÐAÐ010Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð09Ð00138ÐHOFORMAÐHORA CONTR. PREST.  ÐAÐ008Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð10Ð00146ÐIMPORTEÐMONTO DE PRESTAMO   ÐNÐ015Ð2ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð11Ð00161ÐDIVISA ÐMONEDA MONTO OFERTA ÐAÐ003Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð12Ð00164ÐMONPRINÐIND. MONEDA PRESTAMOÐAÐ001Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð13Ð00165ÐDIPAGO ÐDIA DE PAGO         ÐNÐ002Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð14Ð00167ÐPLAZO  ÐNUMERO DE PLAZOS    ÐNÐ003Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð15Ð00170ÐFRECPLZÐIDEN. FREC. DE PLAZOÐAÐ001Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð16Ð00171ÐCCCVIN ÐCONTR. VINCULADO    ÐAÐ020Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð17Ð00191ÐNROPRO ÐNRO. PRODUCTO       ÐAÐ020Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð18Ð00211ÐTIPCVINÐTIP. NRO. CONTR.    ÐAÐ001Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð19Ð00212ÐDETIPCVÐDESC. TIP. CONTR.   ÐAÐ050Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð20Ð00262ÐIDVIN  ÐID. PROD. VINCULADO ÐAÐ002Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð21Ð00264ÐDEIDVINÐDESC. PROD. RELACIONÐAÐ050Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð22Ð00314ÐTIPVIN ÐTIP. PROD. VINCULADOÐAÐ001Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð23Ð00315ÐDETIPV ÐDESC PROD. VINCULADOÐAÐ050Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð24Ð00365ÐTIPREL ÐTIP.REL. CONT.PREST ÐAÐ001Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð25Ð00366ÐDTIPRELÐDES.REL. CONT.PREST ÐAÐ050Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð26Ð00416ÐPAGDOB ÐID. PAGO DOBLE      ÐAÐ001Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð27Ð00417ÐTIPOENVÐID. ENVIO DOCUMENTO ÐAÐ001Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð28Ð00418ÐIDEMAILÐID. EMAIL CLIENTE   ÐAÐ015Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð29Ð00433ÐCONMAILÐCONTRATO PAGO       ÐAÐ001Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð30Ð00434ÐCROMAILÐCRONOGRAMA PAGO     ÐAÐ001Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð31Ð00435ÐSEGMAILÐSEGURO DESGRAVAMEN  ÐAÐ001Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð32Ð00436ÐIDOFER ÐIDENT. OFERTA       ÐAÐ010Ð0ÐSÐ        Ð
UGFSGOA ÐAFILIACION DE PRESTAMO ADS    ÐXÐ33Ð00460Ð33Ð00446ÐTOTCOMIÐTOTAL DE COMISIONES ÐNÐ015Ð2ÐSÐ        Ð`.trim();




var transaction_name = 'REMSA01';

	//let attributes = extractDataFromDescriptor(descriptor, separator); // Si se tiene el descriptor, sino asignar name y length manualmente 
  
   let attributes =			[{
	"name": "nomcli",
	"length": 40
	},
	{
	"name": "desemp",
	"length": 40
	},
	{
	"name": "desser",
	"length": 30
	},
	{
	"name": "divser",
	"length": 3
	},
	{
	"name": "desdivi",
	"length": 12
	},
	{
	"name": "servici",
	"length": 4
	}];


	let mock_data = {
  "divser": "PEN",
  "desdivi": "Nuevos soles",
  "desemp": "Luis",
  "desser": "Jose",
  "nomcli": "Javier Lacalle",
  "servici": "1234"
};

  console.log(createPlainFormat(attributes, mock_data, transaction_name));
}

function createPlainFormat(attributes, mock_data, transaction_name){
	let mockBody = '';
	if(Array.isArray(mock_data)){
		mock_data.forEach(mock_element => {
    	
			/*mockBody += '<OC>' + test_case_number + fillLength(transaction_name, 8);
			attributes.forEach(attribute => {
					mockBody += fillLength(mock_element[attribute.name], attribute.length);
			});
			mockBody += '</OC>';*/
      mockBody += createSinglePlainFormat(attributes, mock_element, transaction_name);
		});

	}else if(typeof mock_data === 'object'){
  
			/*mockBody += '<OC>' + test_case_number + fillLength(transaction_name, 8);
			attributes.forEach(attribute => {
					mockBody += fillLength(mock_element[attribute.name], attribute.length);
			});*/
      mockBody += createSinglePlainFormat(attributes, mock_data, transaction_name);
	}else{
		throw 'Provided mock_data is invalid, it\'s not an object nor an array';
	}
	return header + mockBody;
}

function extractDataFromDescriptor(descriptor, separator){
	let items = descriptor.split('\n');
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

function createSinglePlainFormat(attributes, mock_data, transaction_name){
		let mockFormat = '';
    mockFormat += '<OC>' + test_case_number + fillLength(transaction_name, 8);
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
