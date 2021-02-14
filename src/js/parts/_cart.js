// Кастомные кнопки изменения кол-ва товара в корзине
jQuery(function( $ ){

	$( 'body' ).on( 'click', '.quantity-input__plus', function(){

		var button = $(this),
				min = $(this).parent().data( 'min' ),
				max = $(this).parent().data( 'max' ),
				input = $(this).parent().find('input'),
				quantity = input.val();

		if( button.hasClass( 'inactive' ) ) {
			return false;
		}

		quantity++;

		input.val( quantity ).change();
		button.parent().find( '.quantity-input__count-value' ).text( quantity );

		if( max > 0 && quantity >= max ) {
			button.addClass( 'inactive' );
		}

		if( quantity > min ) {
			button.parent().find( '.quantity-input__minus' ).removeClass( 'inactive' );
		}

		$("[name='update_cart']").trigger("click");


	});



	$( 'body' ).on( 'click', '.quantity-input__minus', function(){

		var button = $(this),
				min = $(this).parent().data( 'min' ),
				max = $(this).parent().data( 'max' ),
				input = $(this).parent().find('input'),
				quantity = input.val();

		if( button.hasClass( 'inactive' ) ) {
			return false;
		}

		quantity--;

		input.val( quantity ).change();
		button.parent().find( '.quantity-input__count-value' ).text( quantity );

		if( quantity == 1 || quantity == min ) {
			button.addClass( 'inactive' );
		}

		if( max > 0 && quantity < max ) {
			button.parent().find( '.quantity-input__plus' ).removeClass( 'inactive' );
		}

		$("[name='update_cart']").trigger("click");

  });
});
