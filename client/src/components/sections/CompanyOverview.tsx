import { motion } from "framer-motion";

export default function CompanyOverview() {
  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Revolutionizing Real Estate Management
          </h2>
          <p className="text-lg text-muted-foreground">
            Comet is building the future of property technology. Our comprehensive ecosystem 
            of solutions empowers property managers, real estate professionals, and community 
            operators to streamline operations, enhance user experiences, and drive growth 
            through innovative technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
