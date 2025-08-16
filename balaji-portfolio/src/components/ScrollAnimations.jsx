import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Add stagger animation delays
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
      item.style.setProperty('--index', index);
    });

    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
      project.style.setProperty('--index', index);
    });

    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
      category.style.setProperty('--index', index);
    });

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return null;
};

export default ScrollAnimations;



