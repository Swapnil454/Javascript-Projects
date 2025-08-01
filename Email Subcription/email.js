
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz3ARuxtWrPqEv9JN8NCoM_vX99UCWLvFv3cNm2DAG1LLyB12XKjOx9EGPGRxogRSI/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector("#msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing!";
        setTimeout(function(){
            msg.innerHTML = ""
        },4000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
      /*.catch(error => {
        msg.innerHTML = "Some Error Ouccurs Plese Try After Some Time ";
        setTimeout(function(){
            msg.innerHTML = ""
        },4000);
        form.reset();
      })*/
  })
