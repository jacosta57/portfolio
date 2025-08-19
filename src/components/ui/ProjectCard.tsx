import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

interface Project {
  name: string;
  slug: string;
  status?: string;
  images?: string[];
  shortDescription?: string;
  description?: string;
  tags: string[];
  metrics?: string[];
  date?: string;
}

interface ProjectCardProps {
  project: Project;
  onTagClick?: (tag: string) => void;
}

function ProjectCard({ project, onTagClick }: ProjectCardProps) {
  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    if (onTagClick) {
      onTagClick(tag);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <Link href={`/projects/${project.slug}`} className="text-decoration-none">
        <div className="card h-100 border-0 bg-dark text-white modern-card">
          <div className="position-relative">
            <ExportedImage
              src={project.images?.[0] || "https://picsum.photos/400/200"}
              className="card-img-top"
              alt={project.name}
              width={400}
              height={200}
            />
          </div>
          <div className="card-body bg-dark text-white d-flex flex-column">
            <h5 className="card-title">{project.name}</h5>

            <div className="mb-3">
              {project.tags.slice(0, 3).map((tag: string, index: number) => (
                <span
                  className="modern-chip-interactive"
                  key={index}
                  onClick={(e) => handleTagClick(e, tag)}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="modern-chip">+{project.tags.length - 3}</span>
              )}
            </div>

            <p className="card-text">
              {project.shortDescription || project.description}
            </p>

            <div className="mt-auto text-end">
              <button className="btn btn-sm btn-outline-light">
                View Details
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
