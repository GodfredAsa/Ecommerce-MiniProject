

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}


function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 :  value;
   if(value-- <= 0){
	   value = 0;
   }
    document.getElementById('number').value = value;
}


// HIDING AND SHOWING AN OBJECT
$(document).ready(function(){
  $("#hide").click(function(){
    $(".us").hide();
  });
	
  $("#show").click(function(){
    $(".us").show();
  });
});


//TRYING THE POP UP 

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
myBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let item_title='';
let item_price ='';
let item_size ='';
let item_qty = '';

//DISPLAYING STORED ITEMS IN THE POP SIDE MENU

$('#myBtn').click(function(){
	//PULING DATA ENTERED USING LOCAL STORAGE
item_title = $('#item-title').text().trim();
//console.log(item_title);

item_price = $('#item-price').text().trim().slice(8,);
//console.log(item_price);

item_size = $('#item-size').find(":selected").text().trim();
//console.log(item_size );

item_qty = $('.item-qty').val();
//console.log(item_qty);


	
$('#title-picked').text(item_title);
$('#price-picked').text('Price: $ '+item_price);
$('#size-picked').text('Item Size: '+item_size);
$('#qty-picked').text('Item Quantity: '+item_qty);



	
localStorage.setItem('title',item_title);
localStorage.setItem('price', item_price);
localStorage.setItem('size', item_size);
localStorage.setItem('quantity', item_qty);

	

//alert(100*item_price);


	
});







