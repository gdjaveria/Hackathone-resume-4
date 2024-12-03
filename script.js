"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");
    const resumeOutput = document.getElementById("resumeOutput");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // Collect form data
        const data = {
            personalInfo: {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                address: document.getElementById("address").value,
            },
            education: document.getElementById("education").value,
            experience: document.getElementById("experience").value,
            skills: document.getElementById("skills").value,
            description: document.getElementById("description").value,
        };
        // Generate editable resume
        generateEditableResume(data, resumeOutput);
    });
});
function generateEditableResume(data, outputElement) {
    outputElement.innerHTML = `
        <h2>Generated Resume</h2>
        <h3>Personal Information</h3>
        <label>Name: <input type="text" value="${data.personalInfo.name}" id="edit-name"></label><br>
        <label>Email: <input type="email" value="${data.personalInfo.email}" id="edit-email"></label><br>
        <label>Phone: <input type="text" value="${data.personalInfo.phone}" id="edit-phone"></label><br>
        <label>Address: <input type="text" value="${data.personalInfo.address}" id="edit-address"></label><br>

        <h3>Education</h3>
        <label><input type="text" value="${data.education}" id="edit-education"></label><br>

        <h3>Work Experience</h3>
        <label><input type="text" value="${data.experience}" id="edit-experience"></label><br>

        <h3>Skills</h3>
        <label><input type="text" value="${data.skills}" id="edit-skills"></label><br>

        <h3>Description</h3>
        <label><input type="text" value="${data.description}" id="edit-description"></label><br>

        <button id="saveResume">Save Changes</button>
        <button id="resetForm">Reset</button>
    `;
    const saveButton = document.getElementById("saveResume");
    const resetButton = document.getElementById("resetForm");
    saveButton.addEventListener("click", () => {
        const updatedData = {
            personalInfo: {
                name: document.getElementById("edit-name").value,
                email: document.getElementById("edit-email").value,
                phone: document.getElementById("edit-phone").value,
                address: document.getElementById("edit-address").value,
            },
            education: document.getElementById("edit-education").value,
            experience: document.getElementById("edit-experience").value,
            skills: document.getElementById("edit-skills").value,
            description: document.getElementById("edit-description").value,
        };
        generateEditableResume(updatedData, outputElement);
    });
    resetButton.addEventListener("click", () => {
        outputElement.innerHTML = '';
        document.getElementById("resumeForm").reset();
    });
}
