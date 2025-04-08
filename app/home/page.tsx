import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, User } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-blue-50">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-slate-100">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="text-xl font-medium">
            <span className="text-rose-500">Port</span>
            <span className="text-slate-700">folio</span>
          </Link>
          <nav className="hidden space-x-6 text-sm font-medium md:flex">
            <Link href="#projects" className="text-slate-700 hover:text-rose-500 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-slate-700 hover:text-rose-500 transition-colors">
              Skills
            </Link>
            <Link href="#about" className="text-slate-700 hover:text-rose-500 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-slate-700 hover:text-rose-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
            Resume
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center text-center">
              <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-100">Available for work</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-slate-800 md:text-6xl mb-6">
                Hi, I'm <span className="text-rose-500">Sarah</span>
              </h1>
              <p className="max-w-[600px] text-slate-600 md:text-xl mb-8">
                A product designer and frontend developer crafting beautiful digital experiences with a focus on
                user-centered design.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="bg-rose-500 hover:bg-rose-600">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Featured Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-blue-50">
          <div className="container px-4 mx-auto md:px-6">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Skills & Expertise</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard
                title="UI/UX Design"
                skills={["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"]}
              />
              <SkillCard
                title="Frontend Development"
                skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
              />
              <SkillCard
                title="Other Skills"
                skills={["Responsive Design", "Design Systems", "Accessibility", "SEO", "Performance"]}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-300 to-blue-300 opacity-20 blur-xl"></div>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-rose-200 to-blue-200"></div>
                  <div className="absolute inset-6 rounded-full bg-white flex items-center justify-center">
                    <User className="w-24 h-24 text-slate-300" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">About Me</h2>
                <p className="text-slate-600 mb-4">
                  I'm a passionate designer and developer with over 5 years of experience creating digital products that
                  users love. My approach combines aesthetic sensibility with technical expertise to build solutions
                  that are both beautiful and functional.
                </p>
                <p className="text-slate-600 mb-6">
                  When I'm not designing or coding, you can find me exploring nature trails, experimenting with new
                  recipes, or attending local tech meetups.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full border-slate-200">
                    <Github className="h-5 w-5 text-slate-700" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-slate-200">
                    <Linkedin className="h-5 w-5 text-slate-700" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-slate-200">
                    <Mail className="h-5 w-5 text-slate-700" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-rose-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Get In Touch</h2>
              <p className="text-slate-600 mb-8">Have a project in mind or want to chat? Feel free to reach out!</p>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 min-h-[120px]"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <Button className="w-full bg-rose-500 hover:bg-rose-600">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-white border-t border-slate-100">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Sarah's Portfolio. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-slate-500 hover:text-rose-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-slate-500 hover:text-rose-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Project Card Component
function ProjectCard( {project} : {project: any}) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative aspect-video bg-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200/20 to-blue-200/20"></div>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex gap-2 mb-3">
          {project.tags.map(({tag, index } : {tag: any, index : any}) => (
            <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-100">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="text-rose-600 border-rose-200 hover:bg-rose-50">
            View Details
          </Button>
          <Button variant="ghost" size="sm" className="text-slate-700">
            <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Skill Card Component
function SkillCard({ title, skills }: { title: any; skills: any }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill:any , index :any) => (
            <Badge key={index} className="bg-white text-slate-700 border border-slate-200 hover:bg-white">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Sample project data
const projects = [
  {
    title: "E-commerce Redesign",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "/images/ecomerce.png",
    tags: ["UI/UX", "React"],
  },
  {
    title: "Finance Dashboard",
    description: "An intuitive dashboard for tracking personal finances with data visualization and insights.",
    image: "/images/finance.png",
    tags: ["Dashboard", "Next.js"],
  },
  {
    title: "Travel App",
    description: "A mobile-first travel application helping users discover and plan their perfect getaway.",
    image: "/images/travel.webp",
    tags: ["Mobile", "API"],
  },
]
