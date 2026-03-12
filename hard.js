// ====================== ROADMAP DATA TEMPLATES ======================
const roleTemplates = {
    "Frontend Developer": [
        { m:1, title:"HTML, CSS & Responsive Mastery", hours:18, weeks:[
            {w:1, title:"Week 1: Semantic HTML + Flexbox", tasks:["Build 5 semantic landing pages","Master Flexbox with 3 layouts","Create mobile-first navbar"]},
            {w:2, title:"Week 2: Advanced CSS + Animations", tasks:["CSS Grid portfolio","Keyframe animations","CSS Variables & custom properties"]}
        ]},
        { m:2, title:"JavaScript Fundamentals", hours:22, weeks:[
            {w:1, title:"Week 1: DOM & Events", tasks:["Todo App with localStorage","Interactive quiz","Fetch API weather widget"]},
            {w:2, title:"Week 2: ES6+ & Async", tasks:["Promise chaining","Async/Await mini-project"]}
        ]},
        { m:3, title:"React & State Management", hours:25, weeks:[
            {w:1, title:"Week 1: React Basics", tasks:["React 18 project setup","Props & State","Hooks deep dive"]},
            {w:2, title:"Week 2: Routing + API", tasks:["Full React Router app","Context API + useReducer"]}
        ]},
        { m:4, title:"Advanced Frontend + Portfolio", hours:20, weeks:[
            {w:1, title:"Week 1: Next.js Intro", tasks:["Next.js 15 app","Server Components"]},
            {w:2, title:"Week 2: Tailwind + Deployment", tasks:["Tailwind mastery","Deploy 3 projects to Vercel"]}
        ]},
        { m:5, title:"DSA + System Design", hours:15, weeks:[
            {w:1, title:"Week 1: Arrays & Strings", tasks:["LeetCode 50 easy","Two-pointer technique"]},
            {w:2, title:"Week 2: Mock Interviews", tasks:["3 mock interviews","Behavioral questions"]}
        ]},
        { m:6, title:"Job Ready + Freelance", hours:12, weeks:[
            {w:1, title:"Week 1: Open Source & Resume", tasks:["Contribute to 2 repos","Build stunning resume"]},
            {w:2, title:"Week 2: Interviews", tasks:["Apply to 20 jobs","Final portfolio polish"]}
        ]}
    ],
    "Full Stack Developer": [
        { m:1, title:"MERN Stack Foundations", hours:24, weeks:[] },
        { m:2, title:"Advanced Backend + Auth", hours:25, weeks:[] },
        { m:3, title:"Frontend React + Redux", hours:23, weeks:[] },
        { m:4, title:"Full Projects (E-commerce)", hours:28, weeks:[] },
        { m:5, title:"DevOps & Deployment", hours:18, weeks:[] },
        { m:6, title:"System Design & Interviews", hours:16, weeks:[] }
    ],
    "Data Analyst": [
        { m:1, title:"Excel + SQL Mastery", hours:16, weeks:[] },
        { m:2, title:"Python for Data", hours:20, weeks:[] },
        { m:3, title:"Power BI / Tableau", hours:22, weeks:[] },
        { m:4, title:"Statistics & Visualization", hours:19, weeks:[] },
        { m:5, title:"Capstone Projects", hours:25, weeks:[] },
        { m:6, title:"Portfolio + Interviews", hours:14, weeks:[] }
    ],
    "AI Engineer": [
        { m:1, title:"Python + ML Basics", hours:25, weeks:[] },
        { m:2, title:"Deep Learning & TensorFlow", hours:28, weeks:[] },
        { m:3, title:"NLP & Computer Vision", hours:26, weeks:[] },
        { m:4, title:"LLM Fine-tuning", hours:22, weeks:[] },
        { m:5, title:"MLOps & Deployment", hours:20, weeks:[] },
        { m:6, title:"Research Papers + Portfolio", hours:18, weeks:[] }
    ],
    "Software Engineer": [
        { m:1, title:"Algorithms & Data Structures", hours:30, weeks:[] },
        { m:2, title:"OOP + Design Patterns", hours:24, weeks:[] },
        { m:3, title:"System Design", hours:26, weeks:[] },
        { m:4, title:"Cloud (AWS/Azure)", hours:22, weeks:[] },
        { m:5, title:"Microservices", hours:25, weeks:[] },
        { m:6, title:"Leadership & Interviews", hours:15, weeks:[] }
    ]
    ,
    "Cybersecurity Specialist": [
        { m:1, title:"Security Fundamentals & Networking", hours:20, weeks:[
            {w:1, title:"Week 1: Networking Basics", tasks:["OSI model + TCP/IP","Wireshark basics","Mini lab: packet capture"]},
            {w:2, title:"Week 2: Linux & Shell", tasks:["Linux hardening","Bash scripting","Permissions & users"]}
        ]},
        { m:2, title:"Web App Security", hours:22, weeks:[
            {w:1, title:"Week 1: OWASP Top 10", tasks:["Exploit & fix XSS","SQLi labs","Secure headers"]},
            {w:2, title:"Week 2: Auth & Sessions", tasks:["JWT vs sessions","Implement secure auth","Pen-test checklist"]}
        ]},
        { m:3, title:"Cloud Security", hours:20, weeks:[] },
        { m:4, title:"Incident Response", hours:18, weeks:[] },
        { m:5, title:"Certifications Prep", hours:22, weeks:[] },
        { m:6, title:"Portfolio & Bug Bounties", hours:16, weeks:[] }
    ],
    "Cloud Engineer": [
        { m:1, title:"Cloud Foundations (AWS/GCP/Azure)", hours:22, weeks:[] },
        { m:2, title:"Infrastructure as Code", hours:20, weeks:[] },
        { m:3, title:"CI/CD & Monitoring", hours:20, weeks:[] },
        { m:4, title:"Containers & Orchestration", hours:24, weeks:[] },
        { m:5, title:"Security & Cost Optimization", hours:18, weeks:[] },
        { m:6, title:"Projects & Certification", hours:16, weeks:[] }
    ],
    "Mobile Developer": [
        { m:1, title:"Kotlin/Swift Fundamentals", hours:20, weeks:[] },
        { m:2, title:"UI & Navigation Patterns", hours:18, weeks:[] },
        { m:3, title:"State Management & Architecture", hours:22, weeks:[] },
        { m:4, title:"Native APIs & Performance", hours:20, weeks:[] },
        { m:5, title:"Testing & Play Store/App Store", hours:18, weeks:[] },
        { m:6, title:"Portfolio Apps & Interviews", hours:16, weeks:[] }
    ],
    "Product Manager": [
        { m:1, title:"Product Thinking & Research", hours:18, weeks:[] },
        { m:2, title:"Roadmaps & Prioritization", hours:16, weeks:[] },
        { m:3, title:"Metrics & Experiments", hours:18, weeks:[] },
        { m:4, title:"Stakeholder Communication", hours:16, weeks:[] },
        { m:5, title:"Go-to-market & Launches", hours:16, weeks:[] },
        { m:6, title:"Interview Prep & Case Studies", hours:14, weeks:[] }
    ],
    "UX/UI Designer": [
        { m:1, title:"Design Basics & Research", hours:18, weeks:[] },
        { m:2, title:"Wireframing & Prototyping", hours:20, weeks:[] },
        { m:3, title:"Visual Design & Tools", hours:20, weeks:[] },
        { m:4, title:"Design Systems & Accessibility", hours:18, weeks:[] },
        { m:5, title:"Portfolio Projects", hours:22, weeks:[] },
        { m:6, title:"Interviews & Case Studies", hours:14, weeks:[] }
    ],
    "Data Scientist": [
        { m:1, title:"Python & Math Foundations", hours:24, weeks:[] },
        { m:2, title:"Machine Learning Basics", hours:26, weeks:[] },
        { m:3, title:"Deep Learning", hours:26, weeks:[] },
        { m:4, title:"Production ML & MLOps", hours:20, weeks:[] },
        { m:5, title:"NLP & CV Projects", hours:22, weeks:[] },
        { m:6, title:"Research + Portfolio", hours:18, weeks:[] }
    ]
};

// ====================== GLOBAL VARIABLES ======================
let currentRoadmap = [];
let userInfo = {};
let selectedRole = null;

// ====================== POPULATE ROLE CARDS ======================
function populateRoles() {
    const grid = document.getElementById('role-grid');
    grid.innerHTML = '';
    Object.keys(roleTemplates).forEach(role => {
        const card = document.createElement('div');
        card.className = 'role-card';
        card.innerHTML = `<span>💼</span><strong>${role}</strong>`;
        card.onclick = () => {
            document.querySelectorAll('.role-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedRole = role;
        };
        grid.appendChild(card);
    });
}

// ====================== GENERATE FULL ROADMAP ======================
function generateFullRoadmap(role) {
    let template = roleTemplates[role] || roleTemplates["Frontend Developer"];
    
    return template.map(month => {
        if (!month.weeks || month.weeks.length === 0) {
            month.weeks = [
                {w:1, title:`Week 1: Core Concepts`, tasks:["Study 4 hours daily","Complete 10 LeetCode","Build mini project"]},
                {w:2, title:`Week 2: Practice & Project`, tasks:["Weekly revision","Mock interview","Deploy project"]}
            ];
        }
        month.completed = false;
        month.weeks.forEach(week => {
            week.completed = false;
            week.tasks = week.tasks.map(task => ({ text: task, completed: false }));
        });
        return month;
    });
}

// ====================== GENERATE ROADMAP ======================
function generateRoadmap() {
    const gradYear = document.getElementById('grad-year').value;
    const degree = document.getElementById('degree').value;
    const status = document.getElementById('status').value;

    if (!selectedRole) {
        alert("Please select a target role!");
        return;
    }

    userInfo = { gradYear, degree, status, role: selectedRole };
    currentRoadmap = generateFullRoadmap(selectedRole);

    // Switch views
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';

    renderTimeline();
    updateGlobalProgress();
    saveToLocalStorage();

    window.scrollTo({ top: 400, behavior: 'smooth' });
}

// ====================== RENDER TIMELINE ======================
function renderTimeline() {
    const container = document.getElementById('timeline');
    container.innerHTML = '';

    currentRoadmap.forEach((month, mIndex) => {
        const monthEl = document.createElement('div');
        monthEl.className = 'month-card';
        monthEl.innerHTML = `
            <div class="month-header" onclick="toggleMonth(this)">
                <div>
                    <strong>Month ${month.m}: ${month.title}</strong>
                    <div style="font-size:0.9rem; opacity:0.7;">${month.hours} hrs • ${month.weeks.length} weeks</div>
                </div>
                <div style="display:flex; align-items:center; gap:1rem;">
                    <div class="month-progress" style="width: ${calculateMonthProgress(mIndex)}%; height:8px; background:linear-gradient(90deg,var(--primary),var(--accent)); border-radius:4px;"></div>
                    <span style="font-size:1.8rem;">▼</span>
                </div>
            </div>
            <div class="week-list">
                ${month.weeks.map((week, wIndex) => `
                    <div class="week-card" onclick="toggleWeek(this)">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <strong> ${week.w}: ${week.title}</strong>
                            <span>${week.tasks.filter(t=>t.completed).length}/${week.tasks.length} done</span>
                        </div>
                        <div class="task-list">
                            ${week.tasks.map((task, tIndex) => `
                                <div class="task-item">
                                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                                           onchange="toggleTaskComplete(${mIndex},${wIndex},${tIndex}, this.checked)">
                                    <span ondblclick="makeEditable(this)">${task.text}</span>
                                </div>
                            `).join('')}
                            <button onclick="addCustomTask(event, ${mIndex}, ${wIndex})" 
                                    style="margin-top:1rem; background:#333; color:white; padding:0.5rem 1rem; border:none; border-radius:8px; cursor:pointer;">
                                + Add custom task
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(monthEl);
    });
}

function toggleMonth(el) {
    el.nextElementSibling.classList.toggle('open');
}

function toggleWeek(el) {
    el.querySelector('.task-list').classList.toggle('open');
}

function toggleTaskComplete(mIdx, wIdx, tIdx, isChecked) {
    currentRoadmap[mIdx].weeks[wIdx].tasks[tIdx].completed = isChecked;

    const month = currentRoadmap[mIdx];
    const allDone = month.weeks.every(w => w.tasks.every(t => t.completed));
    
    if (allDone && !month.completed) {
        month.completed = true;
        launchConfetti();
    }

    updateGlobalProgress();
    saveToLocalStorage();
    renderTimeline();
}

function calculateMonthProgress(mIdx) {
    const month = currentRoadmap[mIdx];
    let done = 0, total = 0;
    month.weeks.forEach(w => {
        total += w.tasks.length;
        done += w.tasks.filter(t => t.completed).length;
    });
    return total ? Math.round(done / total * 100) : 0;
}

function updateGlobalProgress() {
    let done = 0, total = 0, totalHours = 0;

    currentRoadmap.forEach(month => {
        totalHours += month.hours;
        month.weeks.forEach(w => {
            total += w.tasks.length;
            done += w.tasks.filter(t => t.completed).length;
        });
    });

    const percent = total ? Math.round(done / total * 100) : 0;
    const offset = 578 - (578 * percent / 100);

    document.getElementById('progress-circle').setAttribute('stroke-dashoffset', offset);
    document.getElementById('progress-percent').textContent = percent + '%';
    document.getElementById('total-hours').textContent = totalHours;
    document.getElementById('total-tasks').textContent = total;

    document.getElementById('plan-header').innerHTML = `
        ${userInfo.role} • ${userInfo.degree} • Grad ${userInfo.gradYear}
    `;
}

// ====================== EDITABLE TASKS & CUSTOM TASKS ======================
function makeEditable(el) {
    el.contentEditable = true;
    el.focus();
    el.onblur = () => { el.contentEditable = false; };
}

function addCustomTask(e, mIdx, wIdx) {
    e.stopImmediatePropagation();
    const taskText = prompt("New micro-task:");
    if (!taskText) return;

    currentRoadmap[mIdx].weeks[wIdx].tasks.push({ text: taskText, completed: false });
    saveToLocalStorage();
    renderTimeline();
}

// ====================== CONFETTI ANIMATION ======================
function launchConfetti() {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    const colors = ['#00f5ff', '#ff00aa', '#9d4edd', '#00ff88'];
    let particles = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 12 + 6;
            this.speed = Math.random() * 6 + 4;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.angle = Math.random() * 360;
        }
        update() { this.y += this.speed; this.angle += 8; }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
            ctx.restore();
        }
    }

    for (let i = 0; i < 180; i++) particles.push(new Particle());

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.update();
            p.draw();
            if (p.y > canvas.height) particles.splice(i, 1);
        });
        frame++;
        if (frame < 180) requestAnimationFrame(animate);
    }
    animate();
}

// ====================== DOWNLOAD & STORAGE ======================
function downloadPDF() {
    alert("📄 Opening print dialog (optimized for PDF).\n\nChoose 'Save as PDF' in the print menu.");
    window.print();
}

function saveToLocalStorage() {
    localStorage.setItem('careerRoadmap', JSON.stringify({
        userInfo,
        roadmap: currentRoadmap,
        timestamp: Date.now()
    }));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('careerRoadmap');
    if (saved) {
        const data = JSON.parse(saved);
        userInfo = data.userInfo;
        currentRoadmap = data.roadmap;

        document.getElementById('form-section').style.display = 'none';
        document.getElementById('result-section').style.display = 'block';

        renderTimeline();
        updateGlobalProgress();
    }
}

function resetPlan() {
    if (confirm("Start a completely new roadmap?")) {
        localStorage.removeItem('careerRoadmap');
        location.reload();
    }
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('theme-icon').textContent = isDark ? '☀️' : '🌙';
}

function showForm() {
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('result-section').style.display = 'none';
}

// ====================== INITIALIZATION ======================
window.onload = () => {
    populateRoles();
    loadFromLocalStorage();

    // Easter egg: Ctrl + C for confetti
    document.addEventListener('keydown', e => {
        if (e.key === 'c' && e.ctrlKey) launchConfetti();
    });

    window.addEventListener('resize', () => {
        const c = document.getElementById('confetti');
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    });
};