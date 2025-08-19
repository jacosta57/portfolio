"use client";

import { useState } from "react";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectListPage() {
  const projectsArray = Object.keys(projects).map((key) => {
    const project = projects[key as keyof typeof projects];
    return {
      ...project,
      featured: project.featured || false,
      status: project.status || "Completed",
      category: project.category || "Development",
    };
  });

  const [activeFilter, setActiveFilter] = useState("All");
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);

  const categories = [
    ...new Set(projectsArray.map((project) => project.category)),
  ];

  const allTags = projectsArray.flatMap((project) => project.tags);
  const technologies = [...new Set(allTags)];

  const filteredProjects =
    activeFilter === "All"
      ? projectsArray
      : projectsArray.filter(
          (project) =>
            project.category === activeFilter ||
            project.tags.includes(activeFilter),
        );

  return (
    <div className="container mt-5">
      {/* Filters Section */}
      <div className="mb-4 d-flex flex-wrap align-items-center justify-content-between">
        <h2 className="border-bottom border-primary pb-2 d-inline-block me-3">
          All Projects
        </h2>
        <div className="filter-buttons">
          <button
            className={`btn ${activeFilter === "All" ? "btn-primary" : "btn-outline-primary"} me-2 mb-2`}
            onClick={() => setActiveFilter("All")}
          >
            All
          </button>

          {categories.map((category, index) => (
            <button
              key={index}
              className={`btn ${activeFilter === category ? "btn-primary" : "btn-outline-primary"} me-2 mb-2`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}

          <div className="dropdown d-inline-block position-relative">
            <button
              className="btn btn-outline-secondary dropdown-toggle me-2 mb-2"
              type="button"
              onClick={() => setTechDropdownOpen(!techDropdownOpen)}
            >
              Technologies
            </button>
            {techDropdownOpen && (
              <ul
                className="dropdown-menu show position-absolute"
                style={{ zIndex: 1000 }}
              >
                {technologies.slice(0, 10).map((tech, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        setActiveFilter(tech);
                        setTechDropdownOpen(false);
                      }}
                    >
                      {tech}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="row g-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              onTagClick={(tag) => setActiveFilter(tag)}
            />
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <p className="text-muted">No projects match the selected filter.</p>
            <button
              className="btn btn-primary mt-2"
              onClick={() => setActiveFilter("All")}
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
