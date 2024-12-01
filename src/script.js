function copyEmail() {
    const email = 'your.email@example.com';
    navigator.clipboard.writeText(email).then(() => {
        const emailBtn = document.querySelector('.email');
        const icon = emailBtn.querySelector('i');
        const text = emailBtn.childNodes[0];
        
        // Update button state
        text.textContent = 'Email Copied! ';
        icon.classList.remove('fa-envelope');
        icon.classList.add('fa-check');
        
        // Reset after 2 seconds
        setTimeout(() => {
            text.textContent = 'Email Me ';
            icon.classList.remove('fa-check');
            icon.classList.add('fa-envelope');
        }, 2000);
    }).catch(() => {
        // Fallback for browsers that don't support clipboard API
        window.location.href = `mailto:${email}`;
    });
}