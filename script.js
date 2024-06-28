function toggleForms() {
  document.getElementById('login-container').classList.toggle('active');
  document.getElementById('register-container').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
  const availabilityInput = document.getElementById('availability');
  const dateList = document.getElementById('date-list');

  availabilityInput.addEventListener('change', function() {
      const selectedDate = this.value;
      let isDateAlreadyAdded = false;

      // Check if the selected date is already in the list
      const existingDates = dateList.getElementsByClassName('date-entry');
      for (let i = 0; i < existingDates.length; i++) {
          if (existingDates[i].textContent.includes(selectedDate)) {
              isDateAlreadyAdded = true;
              break;
          }
      }

      // Only add the date if it hasn't been added before
      if (selectedDate && !isDateAlreadyAdded) {
          const dateDiv = document.createElement('div');
          dateDiv.classList.add('date-entry');
          dateDiv.textContent = selectedDate;

          const removeBtn = document.createElement('button');
          removeBtn.textContent = 'X';
          removeBtn.classList.add('remove-date-btn');
          removeBtn.onclick = function() {
              dateList.removeChild(dateDiv);
          };

          dateDiv.appendChild(removeBtn);
          dateList.appendChild(dateDiv);
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const skillSelect = document.getElementById('skill-select');
  const skillAddButton = document.querySelector('.skill-add');
  const skillList = document.getElementById('skill-list');

  skillAddButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    const selectedSkill = skillSelect.value;
    let isSkillAlreadyAdded = false;

    // Check if the selected skill is already in the list
    const existingSkills = skillList.getElementsByClassName('skill-entry');
    for (let i = 0; i < existingSkills.length; i++) {
      if (existingSkills[i].textContent.includes(selectedSkill)) {
        isSkillAlreadyAdded = true;
        break;
      }
    }

    // Only add the skill if it hasn't been added before
    if (selectedSkill && !isSkillAlreadyAdded) {
      const skillDiv = document.createElement('div');
      skillDiv.classList.add('skill-entry');
      skillDiv.textContent = selectedSkill;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'X';
      removeBtn.classList.add('remove-skill-btn');
      removeBtn.onclick = function () {
        skillList.removeChild(skillDiv);
      };

      skillDiv.appendChild(removeBtn);
      skillList.appendChild(skillDiv);
    }
  });
});
