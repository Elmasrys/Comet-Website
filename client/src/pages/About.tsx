import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Globe, Heart, Target, Lightbulb, Users, Sparkles, Download } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const downloadFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .refine((email) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const personalDomains = [
        'gmail.com',
        'yahoo.com',
        'hotmail.com',
        'outlook.com',
        'aol.com',
        'icloud.com',
        'mail.com',
        'protonmail.com',
        'zoho.com'
      ];
      const domain = email.toLowerCase().split('@')[1];
      return emailRegex.test(email) && !personalDomains.includes(domain);
    }, "Please use your business email address"),
  company: z.string().min(1, "Company name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string()
    .min(1, "Phone number is required")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

type DownloadFormData = z.infer<typeof downloadFormSchema>;

// Country codes mapping
const countryToCodes: { [key: string]: string } = {
  "United States": "+1",
  "United Kingdom": "+44",
  "United Arab Emirates": "+971",
  "Egypt": "+20",
  "Saudi Arabia": "+966",
  "India": "+91",
  // Add more countries as needed
};

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
  "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
  "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe"
];

export default function About() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  const form = useForm<DownloadFormData>({
    resolver: zodResolver(downloadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      country: "",
      phone: "",
    },
  });

  const handleCountryChange = (country: string) => {
    form.setValue("country", country);
    const dialCode = countryToCodes[country] || "";
    setSelectedCountryCode(dialCode);
    // Clear the phone field when country changes
    form.setValue("phone", "");
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non-digit characters from the input
    const numericValue = event.target.value.replace(/\D/g, '');
    form.setValue("phone", numericValue);
  };

  async function onSubmit(data: DownloadFormData) {
    try {
      // Format the phone number with the country code
      const formattedData = {
        ...data,
        phone: selectedCountryCode + data.phone
      };

      console.log(formattedData);
      setFormSubmitted(true);
      toast({
        title: "Success",
        description: "You can now download the company profile.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  }

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Mindset",
                description: "Serving communities across multiple regions with localized solutions"
              },
              {
                icon: Sparkles,
                title: "Integrated Digital Solutions",
                description: "Comet Innovations provides a streamlined, tech-driven approach to real estate"
              },
              {
                icon: Users,
                title: "Enhanced Community Living",
                description: "Facilitating smarter, more connected, and convenient environments"
              },
              {
                icon: Lightbulb,
                title: "Expert Advisory Support",
                description: "Access to a team of professionals who align solutions with business goals"
              },
              {
                icon: Target,
                title: "Market Differentiation",
                description: "Real estate companies using Comet's solutions can stand out from competitors"
              },
              {
                icon: Heart,
                title: "Customer-Centric Approach",
                description: "Solutions designed to enhance daily life, not just property ownership"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    Revolutionizing real estate through unified technology, eliminating fragmentation, and creating a seamless ecosystem that enhances living, optimizes investments, and powers smarter operations.
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
                    To enable smarter communities, unlock new growth opportunities, and simplify real estate management through unified technology and intelligent automation—empowering every stakeholder in the industry.
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
                title: "Collaboration",
                description: "We enjoy collaborating with clients to meet their needs, create value, and mutual success"
              },
              {
                title: "Communication",
                description: "We are dedicated to developing seamless and transparent communication processes that connect the developers to the communities and vice versa"
              },
              {
                title: "Communities",
                description: "We develop tech-solutions that are community-centric first and foremost and that empower communities to flourish"
              },
              {
                title: "Competence",
                description: "We employ forward-thinking strategies and technologies to revolutionize the mixed-use landscape"
              },
              {
                title: "Commitment",
                description: "We are determined to maintain the utmost standards of excellence and client care in delivering our services"
              },
              {
                title: "Co-Creation",
                description: "We believe in building the future of real estate together, working closely with stakeholders to develop innovative, impactful solutions"
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
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      <span className="text-[hsl(var(--brand-navy))]">Co</span>
                      <span className="text-[hsl(var(--brand-gold))]">{value.title.substring(2)}</span>
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

      {/* Company Profile Download Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-[hsl(var(--brand-navy))]">
              Download Our Company Profile
            </h2>
            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)]">
              Get detailed insights into our company's vision, mission, and success stories.
            </p>
          </motion.div>

          {!formSubmitted ? (
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Work Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Your role" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country</FormLabel>
                            <Select
                              onValueChange={handleCountryChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {countries.map((country) => (
                                  <SelectItem key={country} value={country}>
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                {selectedCountryCode && (
                                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(var(--brand-navy)_/_70%)]">
                                    {selectedCountryCode}
                                  </span>
                                )}
                                <Input
                                  placeholder="Phone number"
                                  {...field}
                                  onChange={handlePhoneChange}
                                  className={selectedCountryCode ? "pl-16" : ""}
                                  type="tel"
                                  pattern="[0-9]*"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[hsl(var(--brand-navy))] hover:bg-[hsl(var(--brand-navy)_/_90%)] text-white"
                    >
                      Get Company Profile
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <Card>
                <CardContent className="py-8">
                  <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                    Thank you for your interest!
                  </h3>
                  <p className="text-[hsl(var(--brand-navy)_/_70%)] mb-6">
                    Click the button below to download our company profile.
                  </p>
                  <Button
                    onClick={handleDownload}
                    className="bg-[hsl(var(--brand-gold))] hover:bg-[hsl(var(--brand-gold)_/_90%)] text-[hsl(var(--brand-navy))]"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Profile
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}