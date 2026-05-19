type Props = {
  href: string;
  eventName: string;
  eventLabel: string;
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
};

export default function TrackingLink({
  href,
  eventName,
  eventLabel,
  className,
  target,
  rel,
  children,
}: Props) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      data-event={eventName}
      data-label={eventLabel}
    >
      {children}
    </a>
  );
}
