import PropTypes from "prop-types";

export default function ProjectCard({ title, description, img, href }) {
  return (
    <a
      className="project-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-thumb">
        <img src={img} alt={`${title} preview`} loading="lazy" />
      </div>

      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <span className="project-cta">View project →</span>
    </a>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
