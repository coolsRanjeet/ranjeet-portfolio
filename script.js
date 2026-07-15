/* ===========================
   PROCESS SECTION
=========================== */

const processContent = document.getElementById("process-content");

const processSteps = document.querySelectorAll(".process-step");

const processData = {
    discovery: {
        badge: "Discovery",
        title: "Every great website starts with understanding.",
        description:
            "Before writing a single line of code, I learn about your business, target audience, competitors and objectives. This ensures the final website is built around your goals, not just aesthetics.",
        items: [
            "Business Goals",
            "Competitor Research",
            "User Journey",
            "Project Planning"
        ]
    },

    design: {
        badge: "Strategy & Design",
        title: "Design that builds trust.",
        description:
            "Every screen is designed to guide visitors naturally toward taking action while creating a premium first impression.",
        items: [
            "Wireframes",
            "Premium UI Design",
            "Responsive Layout",
            "Prototype"
        ]
    },

    development: {
        badge: "Development",
        title: "Fast, scalable and reliable.",
        description:
            "The website is built with clean code, responsive layouts, performance optimization and SEO best practices from day one.",
        items: [
            "HTML",
            "CSS",
            "JavaScript",
            "Performance & SEO"
        ]
    },

    launch: {
        badge: "Launch",
        title: "Go live with confidence.",
        description:
            "After testing every page and interaction, the website is deployed, optimized and ready to generate business.",
        items: [
            "Testing",
            "Deployment",
            "SEO Check",
            "Ongoing Support"
        ]
    }
};

processSteps.forEach(step => {

    step.addEventListener("click", () => {

        processSteps.forEach(btn => {

            btn.classList.remove(
                "active",
                "border-l-4",
                "border-primary",
                "bg-white",
                "shadow-lg"
            );

            btn.querySelector("span").classList.remove("text-primary");
            btn.querySelector("span").classList.add("text-slate-300");

            btn.querySelector("h3").classList.remove("text-primary");

        });

        step.classList.add(
            "active",
            "border-l-4",
            "border-primary",
            "bg-white",
            "shadow-lg"
        );

        step.querySelector("span").classList.remove("text-slate-300");
        step.querySelector("span").classList.add("text-primary");

        step.querySelector("h3").classList.add("text-primary");

        const data = processData[step.dataset.step];

        processContent.style.opacity = "0";

        setTimeout(() => {

            processContent.innerHTML = `
                <span class="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    ${data.badge}
                </span>

                <h3 class="mt-6 text-4xl font-bold">
                    ${data.title}
                </h3>

                <p class="mt-6 text-lg leading-8 text-slate-600">
                    ${data.description}
                </p>

                <div class="mt-10 grid gap-4 sm:grid-cols-2">

                    ${data.items.map(item => `
                        <div class="rounded-2xl bg-slate-50 p-5">
                            ✓ ${item}
                        </div>
                    `).join("")}

                </div>
            `;

            processContent.style.opacity = "1";

        }, 180);

    });

});