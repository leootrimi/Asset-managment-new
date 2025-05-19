import { UserGroupIcon, ComputerDesktopIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import dashboardImg from '../../../assets/dashboard.png';

const features = [
    {
      name: 'Centralized Employer Management',
      description:
        'Easily manage all employee data in one place — including roles, departments, contact information, and assignment history.',
      icon: UserGroupIcon,
    },
    {
      name: 'Smart Asset Tracking',
      description:
        'Monitor laptops, headphones, and other equipment with real-time status updates, assignment logs, and warranty tracking.',
      icon: ComputerDesktopIcon,
    },
    {
      name: 'Request & Approval Workflow',
      description:
        'Simplify internal requests for equipment and resources with a built-in form and approval system that keeps teams aligned.',
      icon: ClipboardDocumentCheckIcon,
    },
  ];

export default function LandingSecondSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className=" text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Manage your workforce and equipment with clarity — track assets, roles, and approvals in a single smart dashboard.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              alt="Product screenshot"
              src={dashboardImg}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
