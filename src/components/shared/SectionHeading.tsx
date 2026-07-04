interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="mb-2 uppercase tracking-[0.3em] text-sm font-semibold text-[#B76E79]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-neutral-900">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}