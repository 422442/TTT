"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const projects = [
  {
    title: "Metropolitan Tower",
    location: "New York, NY",
    year: "2023",
    category: "Commercial",
    description: "45-story glass curtain wall installation with custom spider glazing system.",
    image: "/modern-glass-skyscraper.jpg",
    stats: { area: "125,000 sq ft", duration: "18 months" },
  },
  {
    title: "Riverside Medical Center",
    location: "Chicago, IL",
    year: "2023",
    category: "Healthcare",
    description: "State-of-the-art medical facility with energy-efficient glazing solutions.",
    image: "/modern-hospital-building-glass-facade.jpg",
    stats: { area: "85,000 sq ft", duration: "14 months" },
  },
  {
    title: "Tech Campus Phase II",
    location: "San Francisco, CA",
    year: "2022",
    category: "Technology",
    description: "Multi-building campus with integrated facade systems and automated entrances.",
    image: "/modern-tech-campus-glass-buildings.jpg",
    stats: { area: "200,000 sq ft", duration: "24 months" },
  },
  {
    title: "Grand Hotel Renovation",
    location: "Miami, FL",
    year: "2022",
    category: "Hospitality",
    description: "Historic hotel modernization with custom glass balustrades and entrance systems.",
    image: "/luxury-hotel-glass-entrance.jpg",
    stats: { area: "65,000 sq ft", duration: "12 months" },
  },
  {
    title: "University Science Building",
    location: "Boston, MA",
    year: "2021",
    category: "Education",
    description: "LEED Platinum certified building with advanced thermal glazing systems.",
    image: "/modern-university-science-building.jpg",
    stats: { area: "95,000 sq ft", duration: "16 months" },
  },
  {
    title: "Downtown Retail Complex",
    location: "Seattle, WA",
    year: "2021",
    category: "Retail",
    description: "Mixed-use development with expansive storefront glazing and automatic door systems.",
    image: "/modern-retail-complex-glass-storefront.jpg",
    stats: { area: "110,000 sq ft", duration: "15 months" },
  },
]

const categories = ["All", "Commercial", "Healthcare", "Technology", "Hospitality", "Education", "Retail"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif mb-4">
              <span className="text-foreground">Featured </span>
              <span className="gold-text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Showcasing our commitment to excellence across diverse industries and project types.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "gold-gradient text-primary-foreground"
                    : "border-border hover:border-primary/50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group h-full">
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">Area</div>
                      <div className="text-sm font-medium text-foreground">{project.stats.area}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">Duration</div>
                      <div className="text-sm font-medium text-foreground">{project.stats.duration}</div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
