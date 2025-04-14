document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const theme = localStorage.getItem('theme');
    
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    darkModeToggle.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // Countdown Timer with weeks, days, hours, seconds
    function updateCountdown() {
        const electionDate = new Date("May 12, 2025 00:00:00").getTime();
        const now = new Date().getTime();
        const timeLeft = electionDate - now;

        const weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").textContent =
            `${weeks}w ${days}d ${hours}h ${mins}m ${seconds}s`;
            
        // Add animation when time is running out
        if (weeks === 0 && days < 7) {
            document.getElementById("countdown").classList.add('pulse');
        } else {
            document.getElementById("countdown").classList.remove('pulse');
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Candidate data with additional fields for filtering
    const candidateDetails = [
        {
            name: "1. ABALOS Benhur",
            party: "Partido Federal ng Pilipinas (PFP)",
            age: "62",
            job: "Lawyer",
            incumbent: false,
        },
        {
            name: "2. ADONIS Jerome",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            age: "52",
            job: "Labor Leader",
            incumbent: false,
        },
        {
            name: "3. AMAD Wilson",
            party: "N/A - Indepedent",
            age: "52",
            job: "Broadcaster-Preacher",
            incumbent: false,
        },
        {
            name: "4. ANDAMO Nars Alyn",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            age: "62",
            job: "Registered Nurse",
            incumbent: false,
        },
        {
            name: "5. AQUINO Bam",
            party: "Katipunan ng Nagkakaisang Pilipino (KNP)",
            age: "48",
            job: "Businessman",
            incumbent: false,
        },
        {
            name: "6. ARAMBULO Ronnel",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            age: "48",
            job: "Mangingisda",
            incumbent: false,
        },
        {
            name: "7. ARELLANO Ernesto",
            party: "Katipunan ng Kamalayang Kayumanggi (KTPNAN)",
            age: "84",
            job: "Lawyer",
            incumbent: false,
        },
        {
            name: "8. BALLON Roberto",
            party: "N/A - Indepedent",
            age: "56",
            job: "Fish Farmer",
            incumbent: false,
        },
        {
            name: "9. BINAY Abby",
            party: "National People's Coalition (NPC)",
            age: "48",
            job: "Mayor",
            incumbent: false,
        },
        {
            name: "10. BONDOC Jimmy",
            party: "Partido Demokratiko Pilipino Lakas ng Bayan (PDP-Laban)",
            age: "49",
            job: "Lawyer/Musician",
            incumbent: false,
        },
        {
            name: "11. BONG REVILLA Ramon Jr.",
            party: "Lakas Christian Muslim Democrats (Lakas-CMD)",
            age: "58",
            job: "Senator",
            incumbent: true,
        },
        {
            name: "12. BOSITA Colonel",
            party: "N/A - Indepedent",
            age: "58",
            job: "Member House of Representatives",
            incumbent: false,
        },
        {
            name: "13. BROSAS Arlene",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            bio: "48",
            job: "Legislator",
            incumbent: false,
        },
        {
            name: "14. CABONEGRO Roy",
            party: "Democratic Party of the Philippines (DPP)",
            age: "50",
            job: "Media",
            incumbent: false,
        },
        {
            name: "15. CAPUYAN Allen",
            party: "Partido Pilipino sa Pagbabago (PPP)",
            age: "62",
            job: "Community Organizer",
            incumbent: false,
        },
        {
            name: "16. CASIÑO Teddy",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            age: "55",
            job: "Writer/Activist",
            incumbent: false,
        },
        {
            name: "17. CASTRO France",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            bio: "58",
            job: "Professional Teacher",
            incumbent: false,
        },
        {
            name: "18. CAYETANO Pia",
            party: "Nacionalista Party (NP)",
            age: "58",
            job: "Lawyer/Senator",
            incumbent: true,
        },
        {
            name: "19. D'ANGELO David",
            party: "Bunyog (Pagkakaisa)",
            age: "46",
            job: "Digital Marketing Consultant",
            incumbent: false,
        },
        {
            name: "20. DE ALBAN Angelo",
            party: "N/A - Indepedent",
            age: "43",
            job: "Lawyer/Teacher",
            incumbent: false,
        },
        {
            name: "21. DE GUZMAN Ka Leody",
            party: "Partido Lakas ng Masa (PLM)",
            age: "65",
            job: "Labor Leader",
            incumbent: false,
        },
        {
            name: "22. DELA ROSA Bato",
            party: "Partido Demokratiko Lakas ng Bayan (PDP-Laban)",
            age: "62",
            job: "Government Official",
            incumbent: true,
        },
        {
            name: "23. DORINGO Mimi",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            age: "48",
            job: "Community Organizer",
            incumbent: false,
        },
        {
            name: "24. ESCOBAL Arnel",
            party: "Partido Maharlika (PM)",
            age: "59",
            job: "Not Stated",
            incumbent: false,
        },
        {
            name: "25. ESPIRITU Luke",
            party: "Partido Lakas ng Masa (PLM)",
            age: "49",
            job: "Lawyer",
            incumbent: false,
        },
        {
            name: "26. FLORANDA Mody",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            age: "58",
            job: "Transport Federation Leader",
            incumbent: false,
        },
        {
            name: "27. GAMBOA Marc Louie",
            party: "N/A - Indepedent",
            age: "40",
            job: "Businessman/Vlogger",
            incumbent: false,
        },
        {
            name: "28. GO Bong",
            party: "Partido Demokratiko Pilipino Lakas ng Bayan (PDP-Laban)",
            age: "50",
            job: "Senator",
            incumbent: true,
        },
        {
            name: "29. GONZALES Norberto",
            party: "Partido Demokratiko Sosyalista ng Pilipinas (PDSP)",
            age: "77",
            job: "Retired",
            incumbent: false,
        },

        {
            name: "30. HINLO Jayvee",
            party: "Partido Demokratiko Pilipino Lakas ng Bayan (PDP-Laban)",
            age: "53",
            job: "Lawyer",
            incumbent: false,
        },
        {
            name: "31. HONASAN Gringo",
            party: "Reform PH - People's Party",
            age: "76",
            job: "Public Servant",
            incumbent: false,
        },
        {
            name: "32. JOSE Relly Jr.",
            party: "Kilusang Bagong Lipunan (KBL)",
            age: "56",
            job: "Businessman (Ex. Seafarer)", 
            incumbent: false,
        },
        {
            name: "33. LACSON Ping",
            party: "N/A - Indepedent",
            age: "76",
            job: "Businessman",
            incumbent: false,
        },
        {
            name: "34. LAMBINO Raul",
            party: "Partido Demokratiko Pilipino Lakas ng Bayan (PDP-Laban)",
            age: "67",
            job: "Lawyer",
            incumbent: false,
        },
        {
            name: "35.LAPID Lito",
            party: "Nationalist People's Coalition (NPC)",
            age: "68",
            job: "Public Officer/Senator",
            incumbent: true,
        },
        {
            name: "37. LIDASAN Amirah",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            age: "50",
            job: "NGO Worker",
            incumbent: false,
        },
        {
            name: "38. MARCOLETA Rodante",
            party: "N/A - Indepedent",
            age: "71",
            job: "Lawyer/Legislator",
            incumbent: false,
        },
        {
            name: "39. MARCOS Imee",
            party: "Nacionalista Party (NP)",
            age: "68",
            job: "Senator",
            incumbent: true,
        },
        {
            name: "40. MARQUEZ Norman",
            party: "N/A - Indepedent",
            age: "63",
            job: "Animal Welfare Advocate",
            incumbent: false,
        },
        {
            name: "41. MARTINEZ Eric",
            party: "N/A - Indepedent",
            age: "52",
            job: "Congressman",
            incumbent: false,
        },
        {
            name: "42. MATA Marites",
            party: "N/A - Indepedent",
            age: "52",
            job: "Physician",
            incumbent: false,
        },
        {
            name: "43. MATULA Sonny",
            party: "Workers' and Peasants' Party (WPP)",
            age: "59",
            job: "Labor Lawyer",
            incumbent: false,
        },
        {
            name: "44. MAZA Liza",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            age: "67",
            job: "Retired",
            incumbent: false,
        },
        {
            name: "45. MENDOZA Heidi",
            party: "N/A - Indepedent",
            age: "61",
            job: "Certified Public Accountant and Professor",
            incumbent: false,
        },
        {
            name: "46. MONTEMAYOR Joey",
            party: "N/A - Indepedent",
            age: "62",
            job: "Physician/Lawyer",
            incumbent: false,
        },
        {
            name: "47. MUSTAPHA Subair",
            party: "Workers' and Peasants' Party (WPP)",
            age: "72",
            job: "Businessman",
            incumbent: false,
        },
        {
            name: "48. OLIVAR Jose Jessie",
            party: "N/A - Indepedent",
            age: "57",
            job: "Businessman",
            incumbent: false,
        },
        {
            name: "50. PACQUIAO Manny",
            party: "Partido Federal ng Pilipinas",
            age: "46",
            job: "Businessman/Boxer",
            incumbent: false,
        },
        {
            name: "51. PANGILINAN Kiko",
            party: "Liberal Party (LP)",
            age: "61",
            job: "Lawyer",
            incumbent: false,
        },
        {
            name: "52. QUERUBIN Ariel",
            party: "Nacionalista Party (NP)",
            age: "68",
            job: "Retired Colonel",
            incumbent: false,
        },
        {
            name: "53. QUIBOLOY Apollo",
            party: "N/A - Indepedent",
            age: "74",
            job: "Evangelist/Pastor",
            incumbent: false,
        },
        {
            name: "54. RAMOS Danilo",
            party: "Makabayang Koalisyon ng Mamamayan (MKBYN)",
            age: "68",
            job: "Magsasaka",
            incumbent: false,
        },
        {
            name: "55. REVILLAME Willie",
            party: "N/A - Indepedent",
            age: "63",
            job: "TV Host",
            incumbent: false,
        },
        {
            name: "56. RODRIGUEZ Vic",
            party: "N/A - Indepedent",
            age: "50",
            job: "Lawyer",
            incumbent: false,
        },
        {
            name: "57. SAHIDULLA Nur-ana",
            party: "N/A - Indepedent",
            age: "63",
            job: "Housewife",
            incumbent: false,
        },
        {
            name: "58. SALVADOR Phillip Ipe",
            party: "Partido Demokratiko Pilipino Lakas ng Bayan (PDP-Laban)",
            age: "71",
            job: "Actor",
            incumbent: false,
        },
        {
            name: "59. SOTTO Tito",
            party: "Nacionalist People's Coalition (NPC)",
            age: "76",
            job: "Businessman and TV Host",
            incumbent: false,
        },
        {
            name: "60. TAPADO Michael Bongbong",
            party: "Partido Maharlika (PM)",
            age: "55",
            job: "Financial Management Consultant",
            incumbent: false,
        },
        {
            name: "61. TOLENTINO Francis",
            party: "Partido Federal ng Pilipinas",
            age: "64",
            job: "Lawyer",
            incumbent: true,
        },
        {
            name: "62. TULFO Ben Bitag",
            party: "N/A - Indepedent",
            age: "69",
            job: "Journalist",
            incumbent: false,
        },
        {
            name: "63. TULFO Erwin",
            party: "Lakas Christian Muslim Democrats (Lakas-CMD)",
            age: "61",
            job: "Journalist/Congressman",
            incumbent: false,
        },
        {
            name: "64. VALBUENA Mar Manibela",
            party: "N/A - Indepedent",
            age: "44",
            job: "Transport Operator",
            incumbent: false,
        },
        {
            name: "65. VERCELLES Leandro",
            party: "N/A - Indepedent",
            age: "67",
            job: "Lawyer",
            incumbent: false,
        },
        {
            name: "66. VILLAR Camille",
            party: "Nacionalista Party (NP)",
            age: "39",
            job: "Legislator",
            incumbent: false,
        }
        // ... (include all other candidates with the same structure)
        // For brevity, I'm showing just 2 candidates, but you should include all from your original list
        // Make sure to add the incumbent: true/false field for each
    ];

    // Generate candidate cards with detailed popups
    const candidateList = document.getElementById("candidate-list");
    
    function renderCandidates(filter = 'all') {
        candidateList.innerHTML = '';
        
        const filteredCandidates = candidateDetails.filter(candidate => {
            if (filter === 'all') return true;
            if (filter === 'incumbent') return candidate.incumbent;
            if (filter === 'new') return !candidate.incumbent;
            return true;
        });

        filteredCandidates.forEach(candidate => {
            const div = document.createElement("div");
            div.classList.add("candidate");
            div.setAttribute('data-incumbent', candidate.incumbent);
        
            div.innerHTML = `
                <h3 class="candidate-name">${candidate.name}</h3>
                <p class="candidate-party"><strong>Political Party:</strong> ${candidate.party}</p>
                <p class="candidate-age"><strong>Age:</strong> ${candidate.age}</p>
                <p class="candidate-job"><strong>Profession:</strong> ${candidate.job}</p>
                <p class="candidate-status"><strong>Status:</strong> ${candidate.incumbent ? 'Incumbent' : 'New Candidate'}</p>
            `;
        
            candidateList.appendChild(div);
        });
    }

    // Initial render
    renderCandidates();

    // Live search filter
    // Live search filter
    document.getElementById("search").addEventListener("input", function () {
        const filter = this.value.toLowerCase();
        const candidates = document.querySelectorAll(".candidate");
        
        candidates.forEach(candidate => {
            const textContent = candidate.textContent.toLowerCase();
            candidate.style.display = textContent.includes(filter) ? "block" : "none";
        });
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderCandidates(button.dataset.filter);
        });
    });

    // Message form submission
    const messageForm = document.getElementById('message-form');
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (message.length < 10) {
            alert('Please write a more detailed message (at least 10 characters)');
            return;
        }
        
        // In a real app, you would send this to your server
        alert(`Thank you for your message, ${name}! We'll contact you at ${email} soon.`);
        this.reset();
        
        // Analytics event
        console.log('Contact form submission:', { name, email, message });
    });

    // Social share buttons
    document.querySelectorAll('.share-buttons a').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.classList.contains('facebook') ? 'Facebook' :
                           this.classList.contains('twitter') ? 'Twitter' : 'WhatsApp';
            
            let url;
            const shareText = 'Check out this voter education website for the 2025 Philippine Elections!';
            const shareUrl = window.location.href;
            
            switch(platform) {
                case 'Facebook':
                    url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
                    break;
                case 'Twitter':
                    url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
                    break;
                case 'WhatsApp':
                    url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
                    break;
            }
            
            window.open(url, '_blank', 'width=600,height=400');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
