import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const contactInfo = [
    { icon: "📧", label: "Email", value: "garomamak11@gmail.com", href: "mailto:garomamak11@gmail.com" },
    { icon: "📞", label: "Phone", value: "0986071072", href: "tel:0986071072" },
    { icon: "📍", label: "Address", value: "Addis Ababa, Ethiopia" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Garoma Makure",
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAILJS_RECIPIENT || "",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Email service is unavailable. Redirecting to your default email client...");
          window.location.href = `mailto:garomamak11@gmail.com?subject=Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
        }
      );
  };

  return (
    <div className="xl:mt-8 flex xl:flex-row flex-col gap-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] card-surface card-3d rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p className="mt-4 text-theme-secondary text-[15px] leading-relaxed">
          Open to software engineering roles, internships, and collaborations.
          Reach out via the form or connect on{" "}
          <a
            href="https://github.com/GaromaMakure"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-medium"
          >
            GitHub
          </a>
          .
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
          {["name", "email", "message"].map((field) => (
            <label key={field} className="flex flex-col gap-2">
              <span className="text-theme-primary font-medium text-sm capitalize">
                {field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Your Message"}
              </span>
              {field === "message" ? (
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  className="input-field resize-none"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={field === "email" ? "your@email.com" : "What's your good name?"}
                  className="input-field"
                />
              )}
            </label>
          ))}
          <motion.button
            type="submit"
            className="btn-3d-base btn-green w-fit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 flex flex-col gap-6"
      >
        <motion.div
          whileHover={{ rotateY: 5 }}
          className="card-surface card-3d rounded-2xl p-8 flex-1"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h4 className="text-theme-primary font-bold text-xl mb-6">Let's connect</h4>
          <div className="space-y-5">
            {contactInfo.map((item) => (
              <motion.div key={item.label} whileHover={{ x: 8 }}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-xl px-3 py-2 -mx-3 hover:bg-[var(--bg-section)] transition-colors cursor-pointer"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-theme-muted text-xs">{item.label}</p>
                      <p className="text-theme-primary font-semibold hover:text-blue-500 transition-colors break-all underline decoration-blue-500/30 underline-offset-4">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-theme-muted text-xs">{item.label}</p>
                      <p className="text-theme-primary font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex gap-6">
            <a
              href="https://www.linkedin.com/in/garoma-makure-56a12733b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/GaromaMakure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <div className="accent-gradient rounded-2xl p-8 text-white card-3d">
          <p className="font-bold text-lg">Hire me?</p>
          <p className="text-white/90 text-sm mt-2 leading-relaxed">
            I'm ready to bring my full-stack and mobile development skills to
            your team. Let's build something great together.
          </p>
          <motion.a
            href="https://github.com/GaromaMakure"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 btn-3d-base btn-blue text-sm !px-5 !py-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View GitHub →
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
