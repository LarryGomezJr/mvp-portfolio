import Image from "next/image";

const techStack = [
  { name: "Tailwind CSS", logo: "/1.png" },
  { name: "Stripe", logo: "/2.png" },
  { name: "Microsoft SQL Server", logo: "/3.png" },
  { name: "RESTful API", logo: "/4.png" },
  { name: "React.js", logo: "/5.png" },
  { name: "Railway", logo: "/6.png" },
  { name: "Postman", logo: "/7.png" },
  { name: "OpenAI Codex", logo: "/8.png" },
  { name: "Node.js", logo: "/9.png" },
  { name: "Next.js", logo: "/10.png" },
  { name: "MySQL", logo: "/11.png" }
];

const marqueeRows = [techStack];

function LogoMark({ name, logo }: (typeof techStack)[number]) {
  return (
    <div className="flex h-28 w-[9rem] shrink-0 items-center justify-center sm:w-[10rem]">
      <Image
        src={logo}
        alt={name}
        width={600}
        height={100}
        className="h-auto w-[165%] max-w-none object-contain opacity-75 grayscale contrast-125 transition duration-300 hover:opacity-100 hover:grayscale-0 hover:contrast-100"
      />
    </div>
  );
}

export function TechMarquee() {
  return (
    <section
      id="techstack-marquee"
      aria-label="Technology stack"
      className="relative mx-auto w-[min(calc(100vw-2rem),70rem)] overflow-hidden py-2 sm:py-3"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16  sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28" />

      <div className="space-y-4">
        {marqueeRows.map((row, index) => (
          <div
            className="marquee"
            data-direction={index === 0 ? "left" : "right"}
            key={index}
          >
            <div className="marquee-track">
              {[...row, ...row].map((tech, techIndex) => (
                <LogoMark
                  key={`${tech.name}-${techIndex}`}
                  name={tech.name}
                  logo={tech.logo}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
