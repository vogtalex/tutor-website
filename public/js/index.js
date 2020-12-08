
$(function(){
  var tutorModal = document.getElementById("book-tutor-button");
  var modalBackdrop = document.getElementById('tutor-modal-backdrop');
  var modal = document.getElementById('tutor-modal');
  
  $('.action-button').click(function(){
    console.log($(this).attr('details'));
    $('.modal-body').html($(this).attr('details'))
    $('#tutor-modal-backdrop').toggle()
    $('#tutor-modal').toggle()
  })

  $('#tutor-modal-backdrop').click(function(){
    $('#tutor-modal-backdrop').toggle()
    $('#tutor-modal').toggle()  
  })

  $('#modal-close').click(function(){
    $('#tutor-modal-backdrop').toggle()
    $('#tutor-modal').toggle()
  })
  // tutorModal.addEventListener('click', function(){
  //   console.log("== the modal was clicked");
  //   modalBackdrop.classList.toggle('hidden');
  //   modal.classList.toggle('hidden');
  // });
  
  // var tutorCloseButton = document.getElementById("modal-close");
  $('.addTutors').click(function(){
      layer.open({
          type: 2,
          area: ['820px', '800px'],
          fixed: true, //不固定
          maxmin: true,
          content: 'form',
          end:function(){
            location.reload();
          }
      });
    })
})