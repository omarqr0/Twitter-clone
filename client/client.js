const form = document.querySelector('form');
const API_URL = 'http://localhost:6969/tweets'

$(".progress").toggle();
form.addEventListener('submit',(event) => { 
  $('.progress').toggle();
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const content = formData.get('content');
  const tweet = {
    name,
    content,
  };
  // $('.progress').toggle();  
  // setTimeout(function(){
  //   // toggle back after 1 second
  //   $('.progress').toggle();  
  // },1000);

  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(tweet),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
    .then(createdTweet => {
      console.log(createdTweet);
      $('.progress').toggle();
  });
});