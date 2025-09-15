import { ExternalLink, Mail, Linkedin, Github, Play, MapPin, Brain, Trophy } from "lucide-react";
import seattleBackground from "@/assets/seattle-background.jpg";

const Index = () => {
  const articles = [
    { title: "Building accessible apps in Power Apps: A comprehensive guide" },
    { title: "Power Platform governance strategies for enterprise scale" },
    { title: "Optimizing performance in canvas apps: Best practices" },
    { title: "Creating seamless user experiences with Power Apps portals" },
    { title: "Data modeling fundamentals for Power Platform solutions" },
    { title: "Advanced Power Automate patterns for complex workflows" },
  ];

  return (
    <div className="min-h-screen bg-background font-system">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{ backgroundImage: `url(${seattleBackground})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light text-text-primary mb-6 text-balance">
            Srihari Srinivasa
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-4 font-medium">
            Product @ Microsoft | Seattle
          </p>
          <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto text-balance">
            Helping people build powerful solutions, one app at a time
          </p>
        </div>
      </section>

      {/* About Me */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed">
            <p className="text-xl mb-6 text-justify">
              I'm a Product Manager at Microsoft Power Apps, where I help democratize app development 
              (no code? no problem). Based in Seattle with my family – we've fully embraced the coffee 
              culture and consider rain a feature, not a bug.
            </p>
            <p className="text-xl text-justify">
              I'm a husband, father, and someone who believes the best products remove barriers rather 
              than create them. When I'm not shipping features at Microsoft, you'll find me shipping 
              myself across Seattle's trails, one stride at a time.
            </p>
          </div>
        </div>
      </section>

      {/* What I'm Into */}
      <section className="py-16 px-6 bg-card-subtle">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-12 text-center">
            What I'm into
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Running */}
            <div className="card-interactive p-8">
              <div className="w-12 h-12 bg-primary-subtle rounded-xl flex items-center justify-center mb-6">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Running</h3>
              <p className="text-text-secondary leading-relaxed">
                Chasing PRs and endorphins. Currently debugging my marathon pace. Building Run Down 
                because finding races shouldn't be a marathon itself.
              </p>
            </div>

            {/* Quizzing */}
            <div className="card-interactive p-8">
              <div className="w-12 h-12 bg-primary-subtle rounded-xl flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Quizzing</h3>
              <p className="text-text-secondary leading-relaxed">
                Trivia pursuit that's anything but trivial. I collect facts like some people collect 
                stamps, except mine take up less space and occasionally win bar credits.
              </p>
            </div>

            {/* Meta-Thinking */}
            <div className="card-interactive p-8">
              <div className="w-12 h-12 bg-primary-subtle rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Meta-Thinking</h3>
              <p className="text-text-secondary leading-relaxed">
                Thinking about thinking (it's not redundant, it's recursive). Finding patterns across 
                domains because the best solutions are often imports from unexpected libraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work & Writing */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-6">
              Work & Writing
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {articles.map((article, index) => (
              <div key={index} className="card-interactive p-6">
                <h3 className="font-semibold text-text-primary mb-2 leading-snug">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a href="https://www.microsoft.com/power-platform/blog/author/srihas/" className="link-primary font-medium">
              More on Microsoft Blog →
            </a>
          </div>
        </div>
      </section>

      {/* Currently Building */}
      <section className="py-16 px-6 bg-card-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-12">
            Currently building
          </h2>
          
          <div className="card-interactive p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🏃‍♂️</div>
            <h3 className="text-2xl font-semibold text-text-primary mb-6">Run Down</h3>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              A running race discovery platform for helps runners: The starting line for finding every finish line.
            </p>
            <a href="https://run-down.vercel.app" className="btn-primary inline-flex items-center gap-2">
              View Project
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-text-primary mb-8">
            Connect
          </h2>
          
          <div className="mb-12">
            <p className="text-xl text-text-secondary mb-4">
              Always up for conversations about products, puns, or personal records
            </p>
            <p className="text-lg text-text-muted">
              Reach out if you want to talk shop, swap dad jokes, or diss on Seattle food scene.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:Srihari.srinivasa@gmail.com" className="btn-subtle inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a href="http://linkedin.com/in/srihari-srinivasa/" className="btn-subtle inline-flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com/sriharibs-lab/" className="btn-subtle inline-flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted">
            Built in Seattle with ☕ and ⌨️ (and an unreasonable amount of iteration)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;