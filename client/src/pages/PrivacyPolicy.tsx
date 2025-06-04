import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-[hsl(var(--brand-navy))]">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-[hsl(var(--brand-navy)_/_80%)]">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                Comet Privacy Policy
              </h2>
              <p className="mb-4">
                This Privacy Policy governs the manner in which Comet collects, uses, maintains, and discloses information collected from users of the Comet application. This policy applies to the application and all products and services provided by Comet.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                Personal Identity Information
              </h3>
              <p className="mb-4">
                Comet collects personal identity information from users in various ways. This may include, but is not limited to, instances when a user visits the application, registers, completes forms, or interacts with features, services, or resources provided. Users may be asked for their name, email address, phone number, and other identifiable details.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                Non-Personal Identity Information
              </h3>
              <p className="mb-4">
                Comet may collect non-personal identification information whenever users interact with the app. This may include device type, browser details, operating system, internet service provider information, and similar technical data.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                How We Use Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>To improve customer service:</strong> Your information helps us respond more effectively to your requests and support needs.</li>
                <li><strong>To enhance the application:</strong> We continually strive to improve our offerings based on the feedback and data we receive from users.</li>
                <li><strong>To send periodic emails:</strong> The email address provided will be used to send updates and respond to inquiries. If users opt into our mailing list, they will receive emails containing company news, updates, and related product or service information. Unsubscribe instructions are included in each email.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                How We Protect Your Information
              </h3>
              <p className="mb-4">
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, and data stored on the app. Sensitive information is transmitted over secure, encrypted channels.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                Sharing Personal Data
              </h3>
              <p className="mb-4">
                Comet does not sell, trade, or rent users' personal identity information. We may share generic aggregated demographic information not linked to personal identity with partners and advertisers. We may also engage third-party service providers for operations like surveys or newsletters, but only within the scope of specified purposes and with user consent where applicable.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                Third-Party Websites
              </h3>
              <p className="mb-4">
                Users may encounter content within the app linking to third-party websites. We are not responsible for the content or practices of such sites. These external sites have their own privacy policies and terms of use. Interacting with such sites is subject to their respective policies.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                Privacy Policy Changes
              </h3>
              <p className="mb-4">
                Comet reserves the right to update this privacy policy at any time. Users are encouraged to check this page regularly to stay informed. Continued use of the application after any changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                Agreement to Terms
              </h3>
              <p className="mb-4">
                By using this application, you agree to this policy. If you do not agree, please do not use the app. Continued usage following policy updates will be regarded as your acceptance of the changes.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                App Solutions
              </h3>
              <p className="mb-4">
                Our application includes a point collection and refund system designed strictly for internal app use. Users may accumulate points through actions defined within the app. These points may be reversed or refunded within the same environment. Points have no real-world monetary value, cannot be exchanged for goods or services, and are not redeemable outside the app.
              </p>
              <p className="mb-4">
                The app also includes QR code generation and scanning features to securely transfer point-related data between authorized applications published under our developer account. These QR codes are not used to promote third-party content, offer external rewards, or enable unauthorized data sharing.
              </p>
              <p className="mb-4">
                A full transaction history related to points is stored and displayed to provide users with a transparent activity log. This data is securely stored and is only accessible within the app for reference and auditing purposes.
              </p>
              <p className="mb-4">
                We do not sell or share any personal or transactional data with third parties. All point-related features are designed to comply with App Store and Play Store guidelines, as well as standard privacy and security practices.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--brand-navy))]">
                Contact Us
              </h3>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, the practices of this application, or your dealings with us, please contact:
              </p>
              <p className="mb-4">
                <strong>Email:</strong> info@comet-innovations.com
              </p>
              <p className="mb-4">
                <strong>Effective Date:</strong> June 10, 2024
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}