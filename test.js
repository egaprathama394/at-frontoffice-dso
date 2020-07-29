// // var rtbHeader = ['Tgl.Order','No.Order','Nama Customer','Produk','Metode Pembayaran','Status'];
// //     for(let i = 0; i < rtbHeader.length; i++){
// //         console.log('thead th:nth-child(' + `${i+1}` + ')');
// //         console.log(rtbHeader[i+1]);
// //     }

// const { client } = require("nightwatch-api/lib");


// // const rowData = {
// //     rtb: {
// //         tanggal: 'a',
// //         noOrder: 'b',
// //         namaCustomer: 'c',
// //         produk: 'd',
// //         metodePembayaran: 'e',
// //         status: 'f'
// //     }
// // }
// // rowData.rtb['tanggal'] = c;
// // console.log(rowData.rtb['tanggal']);

// // var a = '1234567890'
// // a = a.substring(0,8);
// // console.log(a);
// // var rowData = {
// //     tanggalOrder: '',
// //     namaCustomer: ''
// // }

// // client.getText('elemet', (res) => {
// //     rowData.tanggalOrder = res.value;
// // });

// // client.setValue('elemnt', rowData.tanggalOrder);

// // client.expect.element('elemnt').text.to.content(rowData.tanggalOrder);


// var judul = 'NEW TERBARU'

// // console.log(judul);
// // client.expect.elemnt('').text.to.equal(judul);

// // if(judul == 'NEW TERBARUUU'){
// //     console.log('1')
// // }if(judul == 'NEW TERBARU'){
// //     console.log('2')
// // }if(judul == 'NEW TERBARU'){
// //     console.log('3')
// // }
// // var a = {};
// // var a = [];
// var a = (a) => {
//     console.log(a)
// }
// a('a');


// // a.substring();

// // for(let i = 0; i < 5;){

// // }

// const tanggal = new Date(2018,9);

// console.log(tanggal.toDateString());
const date = new Date();
date.setMonth(date.getMonth()+1);
const currdate = date.toString();
var monthYear = `${currdate.substring(4,7)}` + ` ${currdate.substring(11,15)}`;


console.log(monthYear)