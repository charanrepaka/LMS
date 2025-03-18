document.addEventListener('DOMContentLoaded', () => {
   console.log('DOM fully loaded'); // Debugging: Check if DOMContentLoaded is firing

   // Select all required elements
   const toggleBtn = document.querySelector('#toggle-btn');
   const userBtn = document.querySelector('#user-btn');
   const searchBtn = document.querySelector('#search-btn');
   const menuBtn = document.querySelector('#menu-btn');
   const closeSideBar = document.querySelector('#close-btn'); // Fixed selector
   const profile = document.querySelector('.header .flex .profile');
   const searchForm = document.querySelector('.header .flex .search-form');
   const sideBar = document.querySelector('.side-bar');
   const body = document.body;

   // Debugging: Log all selected elements
   console.log('Toggle Button:', toggleBtn); // Debugging: Check if toggleBtn is selected
   console.log('User Button:', userBtn); // Debugging: Check if userBtn is selected
   console.log('Search Button:', searchBtn); // Debugging: Check if searchBtn is selected
   console.log('Menu Button:', menuBtn); // Debugging: Check if menuBtn is selected
   console.log('Close Sidebar Button:', closeSideBar); // Debugging: Check if closeSideBar is selected

   // Check if all elements exist
   if (!toggleBtn || !userBtn || !searchBtn || !menuBtn || !closeSideBar) {
      console.error('One or more elements are missing! Check the IDs and classes.'); // Debugging: Error if any element is null
      return;
   }

   // Event listener for user button
   userBtn.onclick = () => {
      profile.classList.toggle('active');
      searchForm.classList.remove('active');
   };

   // Event listener for search button
   searchBtn.onclick = () => {
      searchForm.classList.toggle('active');
      profile.classList.remove('active');
   };

   // Event listener for menu button
   menuBtn.onclick = () => {
      sideBar.classList.toggle('active');
      body.classList.toggle('active');
   };

   // Event listener for close sidebar button
   closeSideBar.onclick = () => {
      sideBar.classList.remove('active');
      body.classList.remove('active');
   };

   // Event listener for number inputs
   document.querySelectorAll('input[type="number"]').forEach(InputNumber => {
      InputNumber.oninput = () => {
         if (InputNumber.value.length > InputNumber.maxLength) InputNumber.value = InputNumber.value.slice(0, InputNumber.maxLength);
      };
   });

   // Event listener for window scroll
   window.onscroll = () => {
      profile.classList.remove('active');
      searchForm.classList.remove('active');

      if (window.innerWidth < 1200) {
         sideBar.classList.remove('active');
         body.classList.remove('active');
      }
   };

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

   // Add comment functionality
   const commentForm = document.querySelector('.add-comment');
   const commentBox = document.querySelector('.box-container');
   const userName = document.querySelector('.profile .name').textContent;

   if (commentForm && commentBox && userName) {
      commentForm.addEventListener('submit', (e) => {
         e.preventDefault(); // Prevent form submission

         const textarea = commentForm.querySelector('textarea[name="comment_box"]');
         const commentText = textarea.value;

         if (commentText.trim() !== '') {
            // Create new comment element
            const newComment = document.createElement('div');
            newComment.className = 'box';
            newComment.innerHTML = `
               <div class="user">
                  <h3>${userName}</h3>
               </div>
               <div class="comment-box">${commentText}</div>
            `;

            // Add the new comment at the beginning of the container
            if (commentBox.firstChild) {
               commentBox.insertBefore(newComment, commentBox.firstChild);
            } else {
               commentBox.appendChild(newComment);
            }

            // Clear the textarea
            textarea.value = '';
         }
      });
   } else {
      console.error('Comment form, comment box, or user name not found!'); // Debugging: Error if elements are missing
   }
});



//Add a script to handle the search form submission
document.addEventListener('DOMContentLoaded', () => {
   const searchForm = document.getElementById('search-form');
   const searchBox = document.getElementById('search-box');

   searchForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent the default form submission

      const searchQuery = searchBox.value.trim().toLowerCase(); // Get the search query
      if (searchQuery) {
         // Redirect to the courses page with the search query as a URL parameter
         window.location.href = `coursecontainer.html?search=${encodeURIComponent(searchQuery)}`;
      }
   });
});

//Add a script to read the search query from the URL and scroll to the relevant section:
document.addEventListener('DOMContentLoaded', () => {
   // Get the search query from the URL
   const urlParams = new URLSearchParams(window.location.search);
   const searchQuery = urlParams.get('search');

   if (searchQuery) {
      // Map search queries to course section IDs
      const courseSections = {
         'html': 'html-course',
         'css': 'css-course',
         'bootstrap': 'bootstrap-course',
         'javascript': 'javascript-course',
         'react': 'react-course',
         'node.js': 'nodejs-course',
         'mongodb': 'mongodb-course'
      };

      // Find the matching course section
      const sectionId = courseSections[searchQuery];

      if (sectionId) {
         // Scroll to the matching section
         const section = document.getElementById(sectionId);
         if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
         }
      } else {
         console.log('No matching course found for:', searchQuery);
      }
   }
});

//Update the script to handle the URL parameter and scroll to the corresponding course section:
document.addEventListener('DOMContentLoaded', () => {
   // Get the search query from the URL
   const urlParams = new URLSearchParams(window.location.search);
   const searchQuery = urlParams.get('search');

   if (searchQuery) {
      // Map search queries to course section IDs
      const courseSections = {
         'html': 'html-course',
         'css': 'css-course',
         'javascript': 'javascript-course',
         'react': 'react-course',
         'nodejs': 'nodejs-course',
         'bootstrap': 'bootstrap-course',
         'mongodb': 'mongodb-course'
      };

      // Find the matching course section
      const sectionId = courseSections[searchQuery];

      if (sectionId) {
         // Scroll to the matching section
         const section = document.getElementById(sectionId);
         if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
         }
      } else {
         console.log('No matching course found for:', searchQuery);
      }
   }
});


 // Sample Notifications Data (Can be fetched from a server in a real application)
 const notifications = [
   {
      title: "New Course Added",
      message: "A new course on 'Advanced JavaScript' has been added. Check it out!",
      time: "2 hours ago"
   },
   {
      title: "Assignment Deadline Reminder",
      message: "The deadline for the 'HTML Basics' assignment is tomorrow. Submit your work on time.",
      time: "5 hours ago"
   },
   {
      title: "Live Session Announcement",
      message: "Join the live session on 'React Hooks' tomorrow at 10:00 AM.",
      time: "1 day ago"
   },
   {
      title: "Course Completion",
      message: "Congratulations! You have successfully completed the 'CSS Fundamentals' course.",
      time: "3 days ago"
   }
];

// Function to dynamically add notifications to the page
function renderNotifications() {
   const notificationsList = document.getElementById('notifications-list');

   notifications.forEach(notification => {
      const notificationBox = document.createElement('div');
      notificationBox.className = 'notification-box';

      notificationBox.innerHTML = `
         <i class="fas fa-bell"></i>
         <div class="content">
            <h3>${notification.title}</h3>
            <p>${notification.message}</p>
         </div>
         <div class="time">${notification.time}</div>
      `;

      notificationsList.appendChild(notificationBox);
   });
}

// Render notifications when the page loads
document.addEventListener('DOMContentLoaded', renderNotifications);

document.addEventListener('DOMContentLoaded', () => {
   // Get the current page's URL
   const currentPage = window.location.pathname.split('/').pop();

   // Get all sidebar links
   const sidebarLinks = document.querySelectorAll('.side-bar .navbar a');

   // Loop through each link
   sidebarLinks.forEach(link => {
      // Get the link's href attribute (e.g., 'home.html', 'coursecontainer.html')
      const linkHref = link.getAttribute('href');

      // Check if the link's href matches the current page
      if (linkHref === currentPage) {
         // Add the 'active' class to the matching link
         link.classList.add('active');
      }
   });
});

//If you are using JavaScript to toggle the active class, ensure that it is applied to the "Progress" link as well:
document.addEventListener('DOMContentLoaded', () => {
   // Get the current page's URL
   const currentPage = window.location.pathname.split('/').pop();

   // Get all sidebar links
   const sidebarLinks = document.querySelectorAll('.side-bar .navbar a');

   // Loop through each link
   sidebarLinks.forEach(link => {
      // Get the link's href attribute (e.g., 'home.html', 'coursecontainer.html')
      const linkHref = link.getAttribute('href');

      // Check if the link's href matches the current page
      if (linkHref === currentPage) {
         // Add the 'active' class to the matching link
         link.classList.add('active');
      }
   });
});

// Password visibility toggle function
function togglePasswordVisibility(inputId, eyeIcon) {
   const input = document.getElementById(inputId);
   if (input.type === "password") {
       input.type = "text";
       eyeIcon.classList.remove("fa-eye");
       eyeIcon.classList.add("fa-eye-slash"); // Change to open eye
   } else {
       input.type = "password";
       eyeIcon.classList.remove("fa-eye-slash");
       eyeIcon.classList.add("fa-eye"); // Change to closed eye
   }
}

// Form submission handling for Signup
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const password = document.getElementById("signupPassword").value;
   const confirmPassword = document.getElementById("signupConfirmPassword").value;

   // Basic validation
   if (password !== confirmPassword) {
       alert("Passwords do not match!");
       return;
   }

   // Simulate successful registration
   alert("Registration Successful!");
   console.log("User Details:", { name, email, password });

   // Redirect to home.html after successful registration
   window.location.href = "home.html";

   // Reset the form
   signupForm.reset();
});



// Form submission handling for Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
   loginForm.addEventListener("submit", (e) => {
       e.preventDefault(); // Prevent default form submission

       const email = document.getElementById("loginEmail").value;
       const password = document.getElementById("loginPassword").value;

       console.log("Login form submitted"); // Debugging

       // Simulate successful login
       alert("Login Successful!");
       console.log("Login Details:", { email, password });

       // Redirect to home.html after successful login
       console.log("Redirecting to home.html"); // Debugging
       window.location.href = "home.html";

       // Reset the form
       loginForm.reset();
   });
} else {
   console.error("Login form not found!"); // Debugging
}