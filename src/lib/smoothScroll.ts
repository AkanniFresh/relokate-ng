// Function to handle smooth scrolling
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Account for navbar height
      behavior: "smooth"
    });
  }
};

// Function to add smooth scrolling to all links with # (hash)
export const setupSmoothScrolling = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
    anchor.addEventListener('click', (e: Event) => {
      e.preventDefault();
      const hrefAttribute = (anchor as HTMLAnchorElement).getAttribute('href');
      if (hrefAttribute && hrefAttribute !== '#') {
        const targetId = hrefAttribute.substring(1);
        scrollToSection(targetId);
      }
    });
  });
};