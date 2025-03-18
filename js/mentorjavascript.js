let body = document.body;
let profile = document.querySelector('.header .flex .profile');
let searchForm = document.querySelector('.header .flex .search-form');
let sideBar = document.querySelector('.side-bar');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   searchForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   searchForm.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

document.addEventListener('DOMContentLoaded', function () {
    let body = document.body;
    let profile = document.querySelector('.header .flex .profile');
    let searchForm = document.querySelector('.header .flex .search-form');
    let sideBar = document.querySelector('.side-bar');

    if (profile && searchForm && sideBar) {
        document.querySelector('#user-btn').onclick = () => {
            profile.classList.toggle('active');
            searchForm.classList.remove('active');
        };

        document.querySelector('#search-btn').onclick = () => {
            searchForm.classList.toggle('active');
            profile.classList.remove('active');
        };

        document.querySelector('#menu-btn').onclick = () => {
            sideBar.classList.toggle('active');
            body.classList.toggle('active');
        };

        document.querySelector('.side-bar .close-side-bar').onclick = () => {
            sideBar.classList.remove('active');
            body.classList.remove('active');
        };

        window.onscroll = () => {
            profile.classList.remove('active');
            searchForm.classList.remove('active');

            if (window.innerWidth < 1200) {
                sideBar.classList.remove('active');
                body.classList.remove('active');
            }
        };
    } else {
        console.error("One or more elements not found in the DOM.");
    }
});


console.log("addcourse.js is loaded!");
// JavaScript to dynamically add lesson fields
document.getElementById('add-lesson-btn').addEventListener('click', function () {
    const lessonFields = document.getElementById('lesson-fields');

    // Create a new lesson group
    const lessonGroup = document.createElement('div');
    lessonGroup.classList.add('lesson-group');

    // Create "Name of Lesson" input field
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name of Lesson';
    nameInput.required = true;

    // Create "Link" input field
    const linkInput = document.createElement('input');
    linkInput.type = 'url';
    linkInput.placeholder = 'Link';
    linkInput.required = true;

    // Append inputs to the lesson group
    lessonGroup.appendChild(nameInput);
    lessonGroup.appendChild(linkInput);

    // Append the lesson group to the lesson fields container
    lessonFields.appendChild(lessonGroup);
});

// Handle form submission
document.getElementById('course-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect course name
    const courseName = document.getElementById('course-name').value;

    // Collect all lesson data
    const lessonGroups = document.querySelectorAll('.lesson-group');
    const lessons = [];

    lessonGroups.forEach(group => {
        const name = group.querySelector('input[type="text"]').value;
        const link = group.querySelector('input[type="url"]').value;
        lessons.push({ name, link });
    });

    // Log the course name and lessons to the console (you can replace this with an API call)
    console.log('Course Name:', courseName);
    console.log('Lessons:', lessons);

    // Show a success message
    alert('Course submitted successfully!');
});

 // Dark mode functionality
 let darkMode = localStorage.getItem('dark-mode');

 const enableDarkMode = () => {
    console.log('Enabling dark mode'); // Debugging: Check if function is called
    toggleBtn.classList.remove('fa-sun');
    toggleBtn.classList.add('fa-moon');
    document.body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
 };

 const disableDarkMode = () => {
    console.log('Disabling dark mode'); // Debugging: Check if function is called
    toggleBtn.classList.remove('fa-moon');
    toggleBtn.classList.add('fa-sun');
    document.body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
 };

 // Check the saved state on page load
 if (darkMode === 'enabled') {
    enableDarkMode();
 } else {
    disableDarkMode();
 }

 // Event listener for toggle button
 toggleBtn.addEventListener('click', () => {
    console.log('Toggle button clicked'); // Debugging: Check if event listener is working
    darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
       enableDarkMode();
    } else {
       disableDarkMode();
    }
 });