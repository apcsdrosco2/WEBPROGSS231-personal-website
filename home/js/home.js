function showSection(sectionId) {
    const sections = document.querySelectorAll('.hidden-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}