function handleGetFormData() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let zipCode = document.getElementById("zip-code").value;
    let status = document.getElementById("status").checked;
  
    return { name, city, email, zipCode, status };
  }
  
  const formData = handleGetFormData();
  const warningDiv = document.getElementById("warning");
  
  function isNumber(str) {
      return !isNaN(str);
  }
  
  function checkboxIsChecked() {
    const checkbox = document.getElementById("status");
    return checkbox.checked;
  }
  
  function validateFormData(formData) {
    return (
      formData !== null && isNumber(formData.zipCode) && checkboxIsChecked(true)
    );
  }
  
  document.getElementById('Form').addEventListener('submit',(event)=>{
      event.preventDefault();
      submit();
  });
  
  function submit(event){ 
    if (!validateFormData(handleGetFormData())){
      warningDiv.innerHTML = "Periksa form anda sekali lagi";
    }
    else{
      warningDiv.innerHTML=" ";
    }
  }

const burger = document.querySelector('.burger');
const navUl = document.querySelector('.nav ul');

burger.addEventListener('click', () => {
  navUl.classList.toggle('active');
  burger.classList.toggle('toggle');
});
