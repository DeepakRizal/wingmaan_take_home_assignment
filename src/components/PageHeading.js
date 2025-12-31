export default function PageHeading({ heading, subtitle, center = false }) {
  const headingClass = center ? "page-heading-center" : "page-heading";
  const subtitleClass = center ? "page-subtitle-center" : "page-subtitle";

  return (
    <div className="section-spacing">
      <h1 className={headingClass}>{heading}</h1>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </div>
  );
}

