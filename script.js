// Access form and resume elements
var form = document.getElementById('resume-form');
var resName = document.getElementById('res-name');
var resEmail = document.getElementById('res-email');
var resObjective = document.getElementById('res-objective');
var resEducation = document.getElementById('res-education');
var resExperience = document.getElementById('res-experience');
var resSkills = document.getElementById('res-skills');
// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Display the values dynamically in the resume section
    resName.textContent = "Name: ".concat(name);
    resEmail.textContent = "Email: ".concat(email);
    resObjective.textContent = objective;
    resEducation.textContent = education;
    resExperience.textContent = experience;
    // Clear the existing skills list
    resSkills.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        resSkills.appendChild(li);
    });
});
