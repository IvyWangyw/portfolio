import { faBowlRice, faCar, faCarrot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const features = [
  {
    name: 'Food in, code out',
    description:
      'Born in Yunnan Plateau, love to explore different varieties of rice noodles',
    icon: () => <FontAwesomeIcon className="absolute left-1 top-1 h-5 w-5 text-rose-400" aria-hidden="true" icon={faBowlRice} />,

  },
  {
    name: 'Newbie gardener',
    description: 'First year veggie grower, currently experimenting with Bokashi compost.',
    icon: () => <FontAwesomeIcon className="absolute left-1 top-1 h-5 w-5 text-rose-400" aria-hidden="true" icon={faCarrot} />,
  },

]

export default function About() {
  return (
    <div className="overflow-hidden flex flex-col justify-center grow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-rose-400">Live, laugh, love</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About me</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transforming into a frontend developer. Determined to
                grow, I'm yet to reach my final form.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="./about-me-pic.jpg"
            alt="about-me-pic"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
