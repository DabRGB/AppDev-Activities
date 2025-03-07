document.addEventListener("DOMContentLoaded", function() {
    fetch("../courses.json")
        .then(response => response.json())
        .then(data => {
            const coursesList = document.getElementById("coursesList");
            data.courses.forEach(course => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <strong>${course.code}</strong>: ${course.description} 
                    <span class="course-details">(${course.year_level}, ${course.sem}, ${course.credit} credits)</span>
                `;
                coursesList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching courses:", error));
});