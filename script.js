/*$(document).ready(function () {
  // Step 1: Show "Happy" and move it
  $('#happy').fadeIn(1000).animate({
    left: '200px',
    width: '200px',
    height: '200px'
  }, 1000, function () {

    // Step 2: Show "Birth" and move it
    $('#birth').fadeIn(1000).animate({
      top: '400px',
      width: '200px',
      height: '200px'
    }, 1000, function () {

      // Step 3: Show "Day" and move it
      $('#day').fadeIn(1000).animate({
        left: '500px',
        top: '100px',
        width: '200px',
        height: '200px'
      }, 1000, function () {

        // Step 4: Show "FOMENA" and move it
        $('#Fomena').fadeIn(1000).animate({
          left: '600px',
          top: '400px',
          width: '200px',
          height: '200px'
        }, 1000, function () {

          // Step 5: Show "DIVINE" and move it
          $('#Divine').fadeIn(1000).animate({
            left: '800px',
            top: '600px',
            width: '200px',
            height: '200px'
          }, 1000, function () {

            // Step 6: Show confetti after all
            $('.confetti').fadeIn(1000).delay(3000).fadeOut(1000);
          });
        });
      });
    });
  });
});
*/

    $(document).ready(function () {
      $('#happy').fadeIn(1000).animate({
        left: '200px',
        top: '200px',
        width: '200px',
        height: '100px'
      }, 1000, function () {

        $('#birth').fadeIn(1000).animate({
          left: '400px',
          top: '100px',
          width: '200px',
          height: '100px'
        }, 1000, function () {

          $('#day').fadeIn(1000).animate({
            left: '600px',
            top: '300px',
            width: '200px',
            height: '100px'
          }, 1000, function () {

            $('#Fomena').fadeIn(1000).animate({
              left: '800px',
              top: '200px',
              width: '200px',
              height: '100px'
            }, 1000, function () {

              $('#Divine').fadeIn(1000).animate({
                left: '1000px',
                top: '400px',
                width: '200px',
                height: '100px'
              }, 1000, function () {

                // Petite pause + confettis
                $('.confetti').fadeIn(500).delay(1000).fadeOut(500);

                // Tous les mots s’alignent horizontalement avec animation
                setTimeout(() => {
                  const startLeft = 100;
                  const spacing = 180;

                  $('#happy').animate({
                    top: '500px',
                    left: `${startLeft}px`
                  }, 1500);

                  $('#birth').animate({
                    top: '500px',
                    left: `${startLeft + spacing}px`
                  }, 1500);

                  $('#day').animate({
                    top: '500px',
                    left: `${startLeft + spacing * 2}px`
                  }, 1500);

                  $('#Fomena').animate({
                    top: '500px',
                    left: `${startLeft + spacing * 3}px`
                  }, 1500);

                  $('#Divine').animate({
                    top: '500px',
                    left: `${startLeft + spacing * 4}px`
                  }, 1500);
                  // Step 6: Show "much"
$('#much').fadeIn(1000).animate({
  left: '100px',
  top: '700px'
}, 1000, function () {

  // Step 7: Show "of"
  $('#of').fadeIn(1000).animate({
    left: '250px',
    top: '700px'
  }, 1000, function () {

    // Step 8: Show "love"
    $('#love').fadeIn(1000).animate({
      left: '400px',
      top: '700px'
    }, 1000, function () {

      // Step 9: Show "from"
      $('#from').fadeIn(1000).animate({
        left: '550px',
        top: '700px'
      }, 1000, function () {

        // Step 10: Show "SIMENI"
        $('#simeni').fadeIn(1000).animate({
          left: '700px',
          top: '700px'
        }, 1000, function () {

          // Step 11: Show "T. HAROLD"
          $('#harold').fadeIn(1000).animate({
            left: '900px',
            top: '700px'
          }, 1000, function () {

            // Step 12: Final confetti animation
            $('.confetti').fadeIn(1000).delay(3000).fadeOut(1000);
          });
        });
      });
    });
  });
});

                }, 1500);

              });
            });
          });
        });
      });
    });
  
