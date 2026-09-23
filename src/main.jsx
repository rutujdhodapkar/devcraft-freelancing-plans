import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Check, Code2, FileText, Github, GraduationCap, Layers3, MessageCircle, Presentation, Rocket, ShieldCheck, Sparkles, BookOpen, HelpCircle } from "lucide-react";
import "./styles.css";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    eyebrow: "Project essentials",
    description: "A complete foundation for a diploma final-year project with the core technical deliverables.",
    featured: false,
    items: [
      "Project planning & requirement analysis",
      "Working web / mobile / software project",
      "Source code",
      "Database integration",
      "Project documentation",
      "System design & architecture diagrams",
      "Installation & setup guide",
      "Basic testing",
      "2 revision rounds",
      "Project handover"
    ]
  },
  {
    name: "Professional",
    price: "₹20,000",
    eyebrow: "Most balanced",
    description: "A polished project package with the academic documentation students actually need around the build.",
    featured: true,
    items: [
      "Everything in Starter",
      "Modern responsive UI",
      "Black Book / project report",
      "PPT presentation deck",
      "ER / UML / flow diagrams",
      "Test cases & results",
      "Deployment assistance",
      "Demo preparation",
      "Viva question bank",
      "3 revision rounds",
      "Post-delivery technical support"
    ]
  },
  {
    name: "Complete",
    price: "₹30,000",
    eyebrow: "Full project package",
    description: "End-to-end technical delivery for larger, more involved projects and stronger presentation requirements.",
    featured: false,
    items: [
      "Everything in Professional",
      "Advanced feature development",
      "AI / ML / IoT / API integrations",
      "Production-style architecture",
      "Complete Black Book",
      "Premium PPT & presentation assets",
      "Detailed test documentation",
      "Live deployment",
      "Demo walkthrough",
      "Viva preparation session",
      "5 revision rounds",
      "30 days technical support"
    ]
  },
  {
    name: "Custom",
    price: "Let's scope it",
    eyebrow: "Built around your brief",
    description: "For ambitious builds, unusual requirements, multiple integrations, or projects that do not fit a fixed package.",
    featured: false,
    items: [
      "Custom project scope",
      "Custom technology stack",
      "AI / ML / deep learning systems",
      "Mobile & web applications",
      "IoT & hardware integrations",
      "APIs & third-party services",
      "Custom Black Book & documentation",
      "Custom PPT & diagrams",
      "Deployment & handover",
      "Tailored support & revisions"
    ]
  }
];

const extras = [
  ["Black Book", "Structured project report with chapters, diagrams, screenshots, testing and project-specific documentation.", BookOpen],
  ["PPT Deck", "Presentation-ready slides covering problem, objectives, methodology, architecture, results and conclusion.", Presentation],
  ["Source Code", "Clean, organized source code with setup instructions and project handover.", Code2],
  ["Demo & Viva Support", "Walkthrough material and technical questions to help you understand and present your project.", GraduationCap]
];

function App() {
  return (
    <div className="app">
      <header className="nav">
        <a className="brand" href="#top"><span className="brandMark">D</span><span>DevCraft</span></a>
        <nav>
          <a href="#plans">Plans</a>
          <a href="#deliverables">Deliverables</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="navCta" href="mailto:support@fennark.xyz?subject=DevCraft%20Project%20Inquiry">Start a project <ArrowRight size={15}/></a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="pill"><Sparkles size={14}/> Diploma project development, done properly.</div>
          <h1>Build the project.<br/><em>Own the presentation.</em></h1>
          <p className="heroCopy">DevCraft helps diploma students turn a project brief into a working, documented software project — from architecture and code to the Black Book, PPT, demo and deployment.</p>
          <div className="heroActions">
            <a className="primary" href="#plans">View plans <ArrowRight size={17}/></a>
            <a className="secondary" href="mailto:support@fennark.xyz?subject=Custom%20Project%20Inquiry">Discuss a custom project</a>
          </div>
          <div className="trust">
            <span><ShieldCheck size={15}/> Clear scope</span>
            <span><Code2 size={15}/> Real source code</span>
            <span><FileText size={15}/> Documentation included</span>
          </div>
        </section>

        <section className="section" id="plans">
          <div className="sectionHead">
            <div><span className="kicker">PLANS & PRICING</span><h2>Pick the scope.<br/>We build the stack.</h2></div>
            <p>Every plan is scoped before development begins. Need something specific? Custom projects are quoted after reviewing the requirements.</p>
          </div>
          <div className="plans">
            {plans.map((plan) => (
              <article className={`plan ${plan.featured ? "featured" : ""}`} key={plan.name}>
                {plan.featured && <div className="featuredTag">MOST POPULAR</div>}
                <div className="planTop">
                  <span className="eyebrow">{plan.eyebrow}</span>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="price">{plan.price}</div>
                  {plan.name !== "Custom" && <span className="priceNote">one-time project package</span>}
                </div>
                <div className="divider"/>
                <ul>{plan.items.map((item) => <li key={item}><Check size={16}/><span>{item}</span></li>)}</ul>
                <a className={plan.featured ? "planButton bright" : "planButton"} href={`mailto:support@fennark.xyz?subject=DevCraft%20${encodeURIComponent(plan.name)}%20Plan`}>
                  {plan.name === "Custom" ? "Request a quote" : "Choose this plan"} <ArrowRight size={16}/>
                </a>
              </article>
            ))}
          </div>
          <p className="scopeNote">Pricing is for development and technical support services. Final scope, technologies, timelines and deliverables are confirmed before work starts.</p>
        </section>

        <section className="darkBand" id="deliverables">
          <div className="sectionHead light">
            <div><span className="kicker">WHAT YOU GET</span><h2>Not just code.<br/>The whole project layer.</h2></div>
            <p>The build is only half the job. We package the technical work so you can understand it, demonstrate it and maintain it.</p>
          </div>
          <div className="extras">
            {extras.map(([title, text, Icon]) => <div className="extra" key={title}><div className="iconBox"><Icon size={20}/></div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="section process" id="process">
          <div className="sectionHead">
            <div><span className="kicker">HOW IT WORKS</span><h2>Simple process.<br/>Zero mystery.</h2></div>
          </div>
          <div className="steps">
            {[
              ["01","Brief","Share your project idea, requirements, college format and deadline."],
              ["02","Scope","We confirm features, technology, deliverables, price and timeline."],
              ["03","Build","Development, testing, documentation and review happen in defined stages."],
              ["04","Handover","You receive the project package, documentation, source code and presentation material."]
            ].map(([num,title,text]) => <div className="step" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="ctaSection">
          <div className="ctaCard">
            <div><span className="kicker">READY WHEN YOU ARE</span><h2>Have a project idea?<br/><em>Let's scope it.</em></h2><p>Send the brief. We'll figure out the architecture, deliverables and the right plan.</p></div>
            <a className="primary" href="mailto:support@fennark.xyz?subject=New%20DevCraft%20Project%20Brief">Send project brief <ArrowRight size={17}/></a>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="sectionHead"><div><span className="kicker">FAQ</span><h2>Before you hit send.</h2></div></div>
          <div className="faqGrid">
            <div><HelpCircle/><h3>Can I request a different technology?</h3><p>Yes. Custom stacks and integrations can be scoped. Share the required technology in your brief.</p></div>
            <div><HelpCircle/><h3>Is the Black Book included?</h3><p>Yes in Professional, Complete and Custom plans. Starter includes core project documentation.</p></div>
            <div><HelpCircle/><h3>Do you deploy the project?</h3><p>Deployment assistance is included from Professional onward, with live deployment included in Complete where the platform permits.</p></div>
            <div><HelpCircle/><h3>Can the scope change later?</h3><p>Small revisions are handled according to the plan. New features or major scope changes are quoted separately before implementation.</p></div>
          </div>
        </section>
      </main>

      <footer><div className="footerBrand"><span className="brandMark">D</span><strong>DevCraft</strong><span>by Fennark</span></div><p>Project development & technical support for diploma students.</p><div className="footerLinks"><a href="mailto:support@fennark.xyz">support@fennark.xyz</a><a href="https://github.com/rutujdhodapkar" target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a></div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
