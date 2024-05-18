document.getElementById('filter').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const projects = document.querySelectorAll('#projectList li');
    projects.forEach(function (project) {
        const tech = project.getAttribute('data-tech').toLowerCase();
        if (tech.includes(filter)) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    });
});
