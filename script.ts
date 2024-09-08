// Access form and resume elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const resName = document.getElementById('res-name') as HTMLElement;
const resEmail = document.getElementById('res-email') as HTMLElement;
const resObjective = document.getElementById('res-objective') as HTMLElement;
const resEducation = document.getElementById('res-education') as HTMLElement;
const resExperience = document.getElementById('res-experience') as HTMLElement;
const resSkills = document.getElementById('res-skills') as HTMLElement;

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Capture form input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Display the values dynamically in the resume section
    resName.textContent = `Name: ${name}`;
    resEmail.textContent = `Email: ${email}`;
    resObjective.textContent = objective;
    resEducation.textContent = education;
    resExperience.textContent = experience;

    // Clear the existing skills list
    resSkills.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        resSkills.appendChild(li);
    });
});