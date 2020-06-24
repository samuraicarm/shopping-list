
'use strict';

// watch form and store value
function watchForm() {
    console.log("watch form");
    $('#js-shopping-list-form').submit(event => {
    console.log("I get called after the form is submitted.");
    event.preventDefault();
    let storeItem = $('#shopping-list-entry').val();
    addItem(storeItem);
    $('#js-shopping-list-form')[0].reset();
    console.log(storeItem)
    });
   }

// add value to list
function addItem(storeItem) {
    $('ul').append(`<li>
    <span class="shopping-item">${storeItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)
}


//remove item
$(function() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(event.target).closest('li').remove();
    });
  });

//toggle check
$(function() {
    $('.shopping-list').on ('click', '.shopping-item-toggle', function(event){
        $(this).closest('li','.shopping-item').toggleClass('shopping-item__checked');
      });
  }); 
  
  $(watchForm);