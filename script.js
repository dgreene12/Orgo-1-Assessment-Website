document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const offset = 150; // Adjust this value as needed

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            const section = document.querySelector(sectionId);

            // Calculate position to scroll to, taking the offset into account
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset;

            // Scroll to the calculated position
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        });
    });

    window.handleTimelineInfo = function(period) {
        const infoBox = document.getElementById('timeline-info');
        // Check if the info box is already open for the same period
        if (infoBox.dataset.currentPeriod === period && infoBox.style.display === 'block') {
            // Toggle visibility off
            infoBox.style.display = 'none';
            infoBox.dataset.currentPeriod = '';
        } else {
            // Update and show info for the new period
            infoBox.style.display = 'block';
            infoBox.dataset.currentPeriod = period; // Track the current period
            switch (period) {
                case 'week1':
                    infoBox.innerHTML = '<ul><li><p>Introduce the student cohort in the Organic Chemistry I course to the research’s objectives and modalities</p></li><li><p>Conduct initial survey</p></li><li>Provide students with detailed research participation agreement to obtain informed consent<ul>';
                    break;
                case 'week2-7':
                    infoBox.innerHTML = '<ul><li><p>Monitor and collect help room attendance data and academic performance metrics, including grades from assignments and formative assessments, to evaluate the immediate impact of help room utilization</p></li><li><p>Administer periodic surveys to collect both quantitative and qualitative data, with short, open-ended reflection questions about their experiences with the help room</p></li></ul>';
                    break;
                case 'week8':
                    infoBox.innerHTML = '<ul><li><p>Collect the scores from the midterm examinations</p></li><li><p>Administer mid-semester survey/check-in to probe for any adjustments students may have made in their study habits or help room usage because of their midterm performance<ul>';
                    break;
                case 'week9-14':
                    infoBox.innerHTML = '<ul><li><p>Continue to observe both academic progression and help room usage</p><li>Administer terminal survey prior to finals week</li><ul>';
                    break;
                case 'week15':
                    infoBox.innerHTML = '<ul><li><p>Collect scores from final examination</p><li>Begin data analysis and draft paper for internal publication</li><li><p>Depending on findings, continue the research at other R1 institutions</><ul>';
                    break;
                default:
                    infoBox.innerHTML = '<p>Select a week to see details.</p>';
            }
        }
    };
    
    

    function onScroll() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const offset = 200;
        
        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop - offset <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                navLinks.forEach(lnk => lnk.style.color = '#fff'); // Reset all links to white
                link.style.color = '#d4af37'; // Change color of active link
            }
        });
    }

    // Event listener for scroll events
    window.addEventListener('scroll', onScroll);
    // Additional interactive features as needed
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.classList.remove('show');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add('show');
            } 
        });
    });

});
