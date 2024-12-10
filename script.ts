interface ResumeData{
    personalInfo:{
        name:string,
        email:string,
        phone:string,
        address:string,
    };
    education:string,
    experience:string,
    skills:string,
    description:string,
}

document.addEventListener("DOMContentLoaded",()=>{
    const form=document.getElementById('resumeForm')as HTMLFormElement;
    const resumeOutput=document.getElementById('resumeOutput')as HTMLDivElement;

    form.addEventListener("submit",(event)=>{
        event.preventDefault();

// Data Collection.................
        const data: ResumeData = {
            personalInfo:{
              name:(document.getElementById('name')as HTMLInputElement).value,
              email:(document.getElementById('email')as HTMLInputElement).value,
              phone:(document.getElementById('phone')as HTMLInputElement).value,
              address:(document.getElementById('address')as HTMLInputElement).value,
          
            },
            education:(document.getElementById('education')as HTMLInputElement).value,
            experience:(document.getElementById('experience')as HTMLInputElement).value,
            skills:(document.getElementById('skills')as HTMLInputElement).value,
            description:(document.getElementById('description')as HTMLInputElement).value,
};

// Editable Resume data for RESET AND SAVE.........................

generateEditableResume(data,resumeOutput);
});
});

function generateEditableResume(data: ResumeData,outputElement: HTMLDivElement):void{
    outputElement.innerHTML=
    ` <h2>Generated Resume</h2>
      <h3>Personal Information</h3>
      <label>Name:<input type="text" value="${data.personalInfo.name}" id="edit-name"><label><br>
      <label>Email::<input type="text" value="${data.personalInfo.email}" id="edit-email"><label><br>
      <label>Phone:<input type="text" value="${data.personalInfo.phone}" id="edit-phone"><label><br>
      <label>Address:<input type="text" value="${data.personalInfo.address}" id="edit-address"><label><br>
    
    <h3>Education</h3>
     <label>Education:<input type="text" value="${data.education}" id="edit-education"><label><br>
    
    <h3>Work Experience</h3>
     <label>Experience:<input type="text" value="${data.experience}" id="edit-experience"><label><br>
    
     <h3>Skills</h3>
     <label>Skills:<input type="text" value="${data.skills}" id="edit-skills"><label><br>
    
     <h3>Description</h3>
     <label>Description:<input type="text" value="${data.description}" id="edit-description"><label><br>
    
    <button id="saveResume">Save Changes</button>
    <button id="restResume">Reset</button>  `;

    const saveButton =document.getElementById('saveResume')as HTMLButtonElement;
    const resetButton =document.getElementById('resetForm')as HTMLButtonElement;

    saveButton.addEventListener("click",() => {
        const updatedData:ResumeData={
            personalInfo:{
                name:(document.getElementById('edit-name')as HTMLInputElement).value,
                email:(document.getElementById('edit-email')as HTMLInputElement).value,
                phone:(document.getElementById('edit-phone')as HTMLInputElement).value,
                address:(document.getElementById('edit-address')as HTMLInputElement).value,
            },
            education:(document.getElementById('edit-education')as HTMLInputElement).value,
            experience:(document.getElementById('edit-experience')as HTMLInputElement).value,
            skills:(document.getElementById('edit-skills')as HTMLInputElement).value,
            description:(document.getElementById('edit-description')as HTMLInputElement).value,
        };

        generateEditableResume(updatedData,outputElement)
    });

    resetButton.addEventListener("click",()=>{
        outputElement.innerHTML="";
        (document.getElementById('resumeForm')as HTMLFormElement).reset();
    });
}