document.addEventListener("DOMContentLoaded", function() {
    const coursesList = document.getElementById("coursesList");
    const searchBar = document.getElementById("searchBar");
    const searchButton = document.getElementById("searchButton");

    let courses = [];

    // Fetch courses from JSON
    fetch("../courses.json")
        .then(response => response.json())
        .then(data => {
            courses = data.courses;
            displayCourses(courses); // Display all courses initially
        })
        .catch(error => console.error("Error fetching courses:", error));

    // Function to display courses
    function displayCourses(filteredCourses) {
        coursesList.innerHTML = "";
        filteredCourses.forEach(course => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${course.code}</strong>: ${course.description} 
                <span class="course-details">(${course.year_level}, ${course.sem}, ${course.credit} credits)</span>
            `;
            coursesList.appendChild(li);
        });
    }

    // Search functionality
    function searchCourses() {
        const searchText = searchBar.value.toLowerCase();
        const filteredCourses = courses.filter(course =>
            course.description.toLowerCase().includes(searchText) ||
            course.code.toLowerCase().includes(searchText) ||
            course.year_level.toLowerCase().includes(searchText)
        );
        displayCourses(filteredCourses);
    }

    // Add event listeners
    searchBar.addEventListener("input", searchCourses); // Search as you type
    searchButton.addEventListener("click", searchCourses); // Search on button click
});