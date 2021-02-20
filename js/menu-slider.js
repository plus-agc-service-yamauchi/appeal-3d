$(function() {
    $('.multiple-item').slick({
          infinite: true,
          dots:true,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [{
               breakpoint: 1280,
                    settings: {
                         slidesToShow: 4,
                         slidesToScroll: 1,
			}
               }
          ]
     });
});