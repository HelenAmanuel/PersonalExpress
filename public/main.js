var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const BookTitle = this.parentNode.parentNode.childNodes[1].innerText
        const BookOwner = this.parentNode.parentNode.childNodes[3].innerText
        const BorrowerName = this.parentNode.parentNode.childNodes[5].innerText
        const Date = this.parentNode.parentNode.childNodes[7].innerText
        // console.log(this.parentNode.parentNode.childNodes[1].innerText)
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'BookTitle': BookTitle,
            'BookOwner': BookOwner,
            'BorrowerName': BorrowerName,
            'Date': Date,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
