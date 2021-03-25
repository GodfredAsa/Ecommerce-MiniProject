


let item_title='';
let item_price ='';
let item_size ='';
let item_qty = '';
let total = '';
//DISPLAYING STORED ITEMS IN THE POP SIDE MENU WHEN THE BUTTON IS CLICKED

$('#checkBtn').click(function(){
	//PULING DATA ENTERED USING LOCAL STORAGE
item_title = $('#item-title').text().trim();
//console.log(item_title);

item_price = $('#item-price').text().trim().slice(8,);
//console.log(item_price);

item_size = $('#item-size').find(":selected").text().trim();
//console.log(item_size );

item_qty = $('.item-qty').val();


	

//POP UP MENU	
$('#title-picked').text(item_title);
$('#price-picked').text('Price: $ '+item_price);
$('#size-picked').text('Item Size: '+item_size);
$('#qty-picked').text('Item Quantity: '+item_qty);
	
	
//IN THE CHECK OUT PAGE 
	
//localStorage.getItemtem('title',item_title);
//localStorage.setItem('price', item_price);
//localStorage.setItem('size', item_size);
//localStorage.setItem('quantity', item_qty);


//localStorage.getItemtem('title',item_title);
console.log(price);

	
});

//


	
$('#name').text(localStorage.getItem('title'));
$('#quanty').text(localStorage.getItem('quantity'));
$('#price').text(localStorage.getItem('price'));
$('#size').text(localStorage.getItem('size'));

//GETTING THE LOCAL STORED VARIABLES, ASSIGNING TO VARIABLE

let price = localStorage.getItem('price');
let qty = localStorage.getItem('quantity');

//CONVERTING PRICE TO FLOAT AND QTY TO NUMBER AND MULTIPLY
$('#total').text((parseFloat(price)*Number(qty)).toFixed(2));
//console.log(localStorage.getItem('title'));

$(document).ready(function(){
	let coupon = '';
	$('input').change(function(){
			coupon = $(this).val();
		if(coupon==''){
			coupon = 'No Coupon'+'  => No Discount ';
			$('#total').text((parseFloat(price)*Number(qty)).toFixed(2));
		}else if(coupon.length == 5){
			
			coupon = $(this).val()+ ' => 50% Discount';
			$('#total').text((parseFloat(price)*Number(qty))*
			(0.5).toFixed(2));

		}else{

			
			coupon = 'Fake Coupon'+ ' => No Discount';
			$('#total').text((parseFloat(price)*Number(qty)).toFixed(2));
		}
		
		$('#coupon-value').html(coupon);
		$('#coupon-value').css('color', 'red');
		
//		$('#total').text((parseFloat(price)*Number(qty)*(0.5)).toFixed(2));
	});
});
	



