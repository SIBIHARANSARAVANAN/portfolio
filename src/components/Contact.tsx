import React, { useState } from "react";
import { motion } from "motion/react";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin, Send, MessageSquare, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_il2gera", // Your SERVICE ID
        "template_kozuuze", // Your TEMPLATE ID
        formData,
        "-0u7pVc-9HTU5gzlQ" // Your PUBLIC KEY
      );

      setStatus("Message sent successfully! 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Try again!");
    }

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on the next big AI innovation? Let's build
            something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 hover:border-blue-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <MessageSquare className="text-blue-400" />
                  <span>Send a Message</span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-600 text-white"
                    required
                  />

                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-gray-600 text-white"
                    required
                  />

                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-gray-800/50 border-gray-600 text-white resize-none"
                    required
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2" size={16} />
                        Launch Message
                      </>
                    )}
                  </Button>

                  {status && (
                    <p className="text-center text-green-400">{status}</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Avatar + Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Animated AI Avatar */}
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-40 h-40 mx-auto mb-6 relative"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 flex items-center justify-center text-6xl">
                  🤖
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border-2 border-dashed border-purple-400/20 rounded-full"
                />
              </motion.div>

              <p className="text-gray-300 text-lg">
                "Ready to process your ideas into reality!"
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white text-center mb-6">
                Connect With Me
              </h3>

              {[
                {
                  icon: Mail,
                  label: "sibiharansaravanan2002@gmail.com",
                  href: "mailto:sibiharansaravanan2002@gmail.com",
                  color: "from-red-400 to-pink-400",
                },
                {
                  icon: Phone,
                  label: "+91 84899 41515",
                  href: "tel:+918489941515",
                  color: "from-green-400 to-blue-400",
                },
                {
                  icon: Github,
                  label: "GitHub Profile",
                  href: "https://github.com/SIBIHARANSARAVANAN",
                  color: "from-gray-400 to-gray-600",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn Profile",
                  href: "https://www.linkedin.com/in/sibiharan-s-86087b358/",
                  color: "from-blue-400 to-blue-600",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div
                    className={`p-2 rounded-full bg-gradient-to-r ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </div>

                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-700/50"
        >
          <p className="text-gray-500">
            © 2025 Sibiharan. Engineering the future with AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
