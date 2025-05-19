import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    priceMonthly: '$29',
    description: 'Perfect for small teams looking to digitize asset tracking and streamline management.',
    features: [
      'Up to 30 employers',
      '5 users',
      'Basic reporting',
      'Email support (48-hour response)',
    ],
  },
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '#',
    priceMonthly: '$89',
    description: 'Ideal for growing companies needing more control and team collaboration.',
    features: [
      'Up to 500 assets',
      '25 users',
      'Custom roles and permissions',
      'Standard reports & analytics',
      'Priority support (24-hour response)',
    ],
  },  
]

export default function LandingThirdSection() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base/7 font-semibold text-indigo-400">Pricing</h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Choose the right plan for you
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
          Select a flexible plan designed to help your team manage assets, streamline workflows, and support your growing organization — all at an affordable price.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-4 sm:pb-4">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                >
                  <div>
                    <h3 id={tier.id} className="text-base/7 font-semibold text-indigo-600">
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-semibold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                      <span className="text-base/7 font-semibold text-gray-600">/month</span>
                    </div>
                    <p className="mt-6 text-base/7 text-gray-600">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm/6 text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started today
                  </a>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-base/7 font-semibold text-indigo-600">Discounted</h3>
                  <p className="mt-1 text-base/7 text-gray-600">
                    Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non voluptatem sunt eos nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy discounted license <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
