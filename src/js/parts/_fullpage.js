new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    slidesNavigation: true
});


// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         'verticalCentered': false,
//         'css3': true,
//         'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
//         'navigation': true,
//         'navigationPosition': 'right',
//         'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

//         afterLoad: function(anchorLink, index){
//             if(index == 2){
//                 $('#iphone3, #iphone2, #iphone4').addClass('active');
//             }
//             $('#infoMenu').toggleClass('whiteLinks', index ==4);

//         },

//         onLeave: function(index, newIndex, direction){
//             if (index == 3 && direction == 'down'){
//                 $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
//             }
//             else if(index == 3 && direction == 'up'){
//                 $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
//             }

//             $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
//             $('#staticImg').toggleClass('moveDown', newIndex == 4);
//             $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
//         },

//         /*
//         Needed to maintain the fixed position of the element
//         due to problems using translate3d and fixed elements.
//         */
//         afterRender: function(){
//             $('#infoMenu').appendTo('body');

//             $('#githubLink, .twitter-share-button').appendTo('body');
//         }

//     });
// });