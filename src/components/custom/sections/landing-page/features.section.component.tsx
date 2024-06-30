import { CloudArrowUpIcon } from "@heroicons/react/20/solid";
import { LockClosedIcon } from "@radix-ui/react-icons";
import { ServerIcon } from "lucide-react";
import { OrbitingCirclesComponent } from "../../animations/oribiting-circles.component";

export default function FeaturesSection() {
  const features = [
    {
      name: "Build faster.",
      description:
        "Get up and running in no time with pre-configured settings and best practices. Say goodbye to setup and focus on what truly matters - building your application.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Focus on business logic.",
      description:
        "Concentrate on solving business problems instead of dealing with the repetitive setup.",
      icon: LockClosedIcon,
    },
    {
      name: "Ready for scale.",
      description:
        "Prepare for growth from day one. With built-in optimizations and scalable architecture, your application will be ready to handle increased traffic and complexity.",
      icon: ServerIcon,
    },
  ];
  return (
    <section
      id="features"
      className="pt-10 w-full flex flex-row items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row lg:w-2/3 gap-5 p-4">
        <div>
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Cook faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight  dark:text-white text-gray-900 sm:text-4xl">
            A faster way to production
          </p>
          <p className="mt-6 text-lg leading-8  dark:text-gray-400 text-gray-600">
            Accelerate your development with this powerful Next.js boilerplate
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold dark:text-gray-100 text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <OrbitingCirclesComponent />
      </div>
    </section>
  );
}
