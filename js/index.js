// JavaScript for handling the accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Function to collapse all accordion items
function collapseAll() {
  document.querySelectorAll('.accordion-content').forEach(content => {
    content.classList.remove('active');
  });
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.classList.remove('active');
  });
  document.querySelectorAll('.accordion-icon').forEach(icon => {
    icon.style.transform = 'rotate(0deg)';
  });
}

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');

    // If this item is already active, collapse it. Otherwise, collapse all and open this item
    if (content.classList.contains('active')) {
      collapseAll();  // Collapse everything
    } else {
      collapseAll();  // Collapse all
      content.classList.add('active');
      header.classList.add('active');
      icon.style.transform = 'rotate(180deg)';
    }
  });
});

// Open the first accordion item by default
document.querySelector('.accordion-header').click();
