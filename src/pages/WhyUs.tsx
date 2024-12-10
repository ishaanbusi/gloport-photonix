import { Check, Trophy, Users, ThumbsUp } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Successful Projects', value: '500+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Team Members', value: '50+' },
];

const reasons = [
  {
    title: 'Industry Expertise',
    description: 'Deep understanding of various industries and their unique challenges.',
    icon: Trophy,
  },
  {
    title: 'Dedicated Team',
    description: 'Skilled professionals committed to delivering exceptional results.',
    icon: Users,
  },
  {
    title: 'Client Success',
    description: 'Proven track record of helping clients achieve their goals.',
    icon: ThumbsUp,
  },
];

export default function WhyUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team collaboration"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Why Choose Us
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            We combine expertise, innovation, and dedication to deliver exceptional results
            that drive your business forward.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-indigo-50 rounded-lg px-6 py-8 text-center"
              >
                <p className="text-3xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Differentiators */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Strengths
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Sets Us Apart
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="relative bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{reason.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-gray-500">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              The Advantages You Get
            </h2>
            <dl className="space-y-6">
              {[
                'Customized solutions tailored to your needs',
                'Transparent communication and reporting',
                'Dedicated support team',
                'Competitive pricing',
                'Fast turnaround times',
                'Industry-leading expertise',
              ].map((feature) => (
                <div key={feature} className="flex">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <dt className="text-lg leading-6 font-medium text-gray-900">{feature}</dt>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}