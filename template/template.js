document.addEventListener("DOMContentLoaded", () => {
    let resumeData = {
        name: "Jon Doe",
        jobTitle: "Computer Engineering Student",
        phone: "2222222222",
        email: "example@gmail.com",
        github: "github.com",
        linkedin: "linkedin.com/in",
        aboutMe: "I am a self-taught developer with experience in various technologies.",
        education: "Ilia State University | 2024 - 2028",
        workExperience: [
            "Assisted in setting up and managing network devices and ensuring system reliability.",
            "Worked on small-scale web development projects using React and Node.js."
        ],
        certifications: [
            "Google IT Support Professional Certificate",
            "Introduction to Cybersecurity - Cisco Networking Academy"
        ],
        skills: ["HTML", "CSS", "JavaScript"],
        languages: ["English", "Georgian"]
    };

    const updateResumeDisplay = () => {
        document.querySelector('[data-key="name"]').innerText = resumeData.name;
        document.querySelector('[data-key="jobTitle"]').innerText = resumeData.jobTitle;
        document.querySelector('[data-key="phone"]').innerText = `Phone: ${resumeData.phone}`;
        document.querySelector('[data-key="email"]').innerHTML = `Email: <a href="mailto:${resumeData.email}">${resumeData.email}</a>`;
        document.querySelector('[data-key="github"]').innerHTML = `GitHub: <a href="https://github.com/${resumeData.github}">${resumeData.github}</a>`;
        document.querySelector('[data-key="linkedin"]').innerHTML = `LinkedIn: <a href="https://www.linkedin.com/in/${resumeData.linkedin}/">${resumeData.linkedin}</a>`;
        document.querySelector('[data-key="aboutMe"]').innerText = resumeData.aboutMe;
        document.querySelector('[data-key="education"]').innerText = resumeData.education;

        const workExperienceContainer = document.querySelector('[data-key="workExperience"]');
        workExperienceContainer.innerHTML = '';
        resumeData.workExperience.forEach(work => {
            const workItem = document.createElement('div');
            workItem.classList.add('work-item');
            workItem.innerHTML = `
                <p class="editable-text" contenteditable="true">${work}</p>
            `;
            workExperienceContainer.appendChild(workItem);
        });

        const certificationsContainer = document.querySelector('[data-key="certifications"]');
        certificationsContainer.innerHTML = '';
        resumeData.certifications.forEach(cert => {
            const certItem = document.createElement('div');
            certItem.classList.add('certification-item');
            certItem.innerHTML = `
                <span contenteditable="true">${cert}</span>
            `;
            certificationsContainer.appendChild(certItem);
        });

  
        const languagesContainer = document.querySelector('[data-key="languages"]');
        languagesContainer.innerHTML = '';
        resumeData.languages.forEach(language => {
            const langItem = document.createElement('span');
            langItem.classList.add('editable-text');
            langItem.setAttribute('contenteditable', 'true');
            langItem.innerText = language;
            languagesContainer.appendChild(langItem);
        });
    };

    //fix
    document.querySelector('.pdf-btn').addEventListener('click', function() {
        const resumeContainer = document.querySelector('.resume-container');

        html2canvas(resumeContainer).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('Resume.pdf');
        });
    });

    updateResumeDisplay();
});
