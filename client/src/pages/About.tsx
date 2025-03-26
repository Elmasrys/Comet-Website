import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Globe, Heart, Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-32">
      {/* About Section */}
      <section className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6 text-[hsl(var(--brand-navy))]">
            About Comet Innovations
          </h1>
          <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] mb-12">
            Comet is more than a tech company—it's a movement to reimagine
            how real estate operates. We're building an ecosystem where every
            solution works seamlessly together, enabling businesses to scale
            effortlessly and focus on what matters most: their customers and
            communities. As we continue to grow, our commitment remains the
            same: to empower real estate professionals with technology that
            doesn't just keep up with the market but pushes it forward. Whether
            it's creating happier tenant communities, helping investors make
            data-driven decisions, or enabling coworking operators to thrive,
            Comet is shaping the future of real estate technology—one solution
            at a time.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-[hsl(var(--brand-navy))]">
              Why Choose Comet Innovations
            </h2>
            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver unparalleled community management solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving communities across multiple regions with localized solutions"
              },
              {
                icon: Users,
                title: "Customer-Centric",
                description: "Dedicated to understanding and meeting our clients' unique needs"
              },
              {
                icon: Lightbulb,
                title: "Innovation Focus",
                description: "Continuously evolving our technology to stay ahead of industry needs"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-[hsl(var(--brand-gold))] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-navy))]">
                      {feature.title}
                    </h3>
                    <p className="text-[hsl(var(--brand-navy)_/_70%)]">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 py-16 bg-[hsl(var(--brand-navy)_/_2%)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-[hsl(var(--brand-gold))] mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--brand-navy))]">Our Vision</h3>
                  <p className="text-[hsl(var(--brand-navy)_/_70%)]">
                    To be the global leader in community management technology, creating more connected and efficient communities worldwide.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-[hsl(var(--brand-gold))] mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--brand-navy))]">Our Mission</h3>
                  <p className="text-[hsl(var(--brand-navy)_/_70%)]">
                    To empower communities through innovative technology solutions that enhance connectivity, efficiency, and engagement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-[hsl(var(--brand-navy))]">Our Values</h2>
            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl mx-auto">
              The principles that guide our actions and shape our culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries to create better solutions"
              },
              {
                title: "Integrity",
                description: "Operating with transparency and ethical principles"
              },
              {
                title: "Excellence",
                description: "Delivering the highest quality in everything we do"
              },
              {
                title: "Collaboration",
                description: "Working together to achieve exceptional results"
              },
              {
                title: "Customer Success",
                description: "Dedicated to helping our clients thrive"
              },
              {
                title: "Community Impact",
                description: "Making a positive difference in every community we serve"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-navy))]">
                      {value.title}
                    </h3>
                    <p className="text-[hsl(var(--brand-navy)_/_70%)]">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="container mx-auto px-4 py-16 bg-[hsl(var(--brand-navy)_/_2%)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-[hsl(var(--brand-navy))]">Our Offices</h2>
            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl mx-auto">
              Strategically located to serve our global community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                city: "Dubai",
                country: "UAE",
                description: "Our Middle East headquarters, serving the GCC region"
              },
              {
                city: "Cairo",
                country: "Egypt",
                description: "Our North Africa hub, driving innovation across the region"
              }
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <Building className="h-12 w-12 text-[hsl(var(--brand-gold))] mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-[hsl(var(--brand-navy))]">
                      {office.city}, {office.country}
                    </h3>
                    <p className="text-[hsl(var(--brand-navy)_/_70%)]">{office.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}