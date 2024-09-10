//listing elements
document.getElementById('resumeform')?.addEventListener('submit',function(event){
    event.preventDefault();
    

    //type asertion

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const expericeElement = document.getElementById('experience') as HTMLInputElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && expericeElement && skillElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = expericeElement.value;
        const skill = skillElement.value;
  




    //create resume output
    const resumeoutput = `
    <h2>Resume</h2>
    <p><strong>Name: </strong>${name } </p>
    <p><strong>Email: </strong>${email} </p>
    <p><strong>Pone: </strong>${phone} </p>


    <h3>Education</h3>
    <p>${ education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skill</h3>
    <p>${skill }</p>

    `;

    const resumeoutputElement = document.getElementById('resumeoutput')
    if (resumeoutputElement){
        resumeoutputElement.innerHTML = resumeoutput
    }else{
        console.error('the resume output elements are missing')
    }
} else{
    console.error('One or more elements are missing')
} 
})