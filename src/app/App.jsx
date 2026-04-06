import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { LinkedInCommunitySlider } from "./components/LinkedInCommunitySlider";
import { ArrowRight, GraduationCap, Building2, Users, Lightbulb, BookOpen, Boxes, Github, ExternalLink, Briefcase, Mail, Linkedin, Send, CheckCircle2, ChevronRight, Star, User, Phone, Menu, X, ChevronLeft, FileText, GitCompare, FileSearch } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import mctBadge from "../assets/images/mct-badge.png";
import profileImage from "../assets/694f9319e7110f90639148676118246681374199.png";
import liAiResponsiveIntelligence from "../assets/linkedin/linkedin-ai-responsive-intelligence.png";
import liPlatformEngineering from "../assets/linkedin/linkedin-platform-engineering-resilience.png";
import liInnerWorkPurpose from "../assets/linkedin/linkedin-inner-work-purpose.png";
import liGlobalAiBootcamp from "../assets/linkedin/linkedin-global-ai-bootcamp.png";
import liAzureAiIitHyderabad from "../assets/linkedin/linkedin-azure-ai-iit-hyderabad.png";

/** Calendly scheduling page — inline embed (iframe is reliable in React vs widget.js + innerHTML). */
const CALENDLY_BOOKING_URL = "https://calendly.com/yugmallik/ai-consultation";

function CalendlyInlineEmbed() {
  const embedSrc = useMemo(() => {
    const u = new URL(CALENDLY_BOOKING_URL);
    u.searchParams.set("embed_type", "Inline");
    if (typeof window !== "undefined" && window.location.hostname) {
      u.searchParams.set("embed_domain", window.location.hostname);
    }
    return u.toString();
  }, []);

  return (
    <iframe
      title="Book a free AI consultation — Calendly"
      src={embedSrc}
      className="calendly-booking-frame block h-[720px] w-full min-h-[640px] border-0 sm:h-[760px] sm:min-h-[680px] lg:h-[800px]"
      loading="lazy"
    />
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [
    {
      icon: FileText,
      title: "Azure AI Document Summarizer",
      description:
        "Production-ready Python app: upload PDFs and images, extract text with Azure Document Intelligence, chunk semantically, and summarize with Azure OpenAI (GPT-4o-mini). FastAPI backend and simple web UI.",
      tags: ["Python", "Azure AI", "Document Intelligence"],
      url: "https://github.com/YugMallik/azure-openai-summarizer",
    },
    {
      icon: Boxes,
      title: "Azure OpenAI Document RAG",
      description:
        "End-to-end RAG with Azure Blob Storage, Document Intelligence, OpenAI embeddings, Azure AI Search, and GPT—upload documents, index chunks, and ask questions with source citations.",
      tags: ["Python", "RAG", "Azure AI Search"],
      url: "https://github.com/YugMallik/AZURE-RAG-OpenAI",
    },
    {
      icon: GitCompare,
      title: "Azure AI Document Comparison",
      description:
        "Compare two documents using Azure Document Intelligence for extraction, embedding-based similarity, structural diffs, and Azure OpenAI summaries of what changed.",
      tags: ["FastAPI", "Azure OpenAI"],
      url: "https://github.com/YugMallik/azure-doc-compare",
    },
    {
      icon: FileSearch,
      title: "Azure AI Document Intelligence Extraction API",
      description:
        "FastAPI service: classify uploads with a custom Document Intelligence model, route to the right prebuilt extractor (invoice, receipt, layout, and more), return structured JSON.",
      tags: ["Python", "FastAPI", "Document Intelligence"],
      url: "https://github.com/YugMallik/azure-document-intelligence-extractor",
    },
  ];
  const linkedInPosts = [
    {
      image: liAiResponsiveIntelligence,
      title: "AI & Responsive Intelligence",
      caption: "Exploring Microsoft AI innovations and responsive intelligence",
      url: "https://www.linkedin.com/posts/yugmallik_ai-microsoft-responsiveintelligence-activity-7397212723102674944-07Yz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAANGAXABVYVBS2S5arrGlEP3z5ZpuQLt16w",
    },
    {
      image: liPlatformEngineering,
      title: "Platform Engineering & Resilience",
      caption: "Building resilient AI platforms for the future",
      url: "https://www.linkedin.com/posts/yugmallik_ai-platformengineering-resilience-activity-7393352471911284736-DWRN/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAANGAXABVYVBS2S5arrGlEP3z5ZpuQLt16w",
    },
    {
      image: liInnerWorkPurpose,
      title: "Inner Work & Purpose",
      caption: "Focus on what matters - purpose over hype",
      url: "https://www.linkedin.com/posts/yugmallik_innerwork-purposeoverhype-focusonwhatmatters-activity-7348943253234143232-Q8j3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAANGAXABVYVBS2S5arrGlEP3z5ZpuQLt16w",
    },
    {
      image: liGlobalAiBootcamp,
      title: "Global AI Bootcamp",
      caption: "Engaging with the AI community at Global AI Bootcamp",
      url: "https://www.linkedin.com/posts/yugmallik_ai-globalaibootcamp-aicommunity-activity-7317617961337241601-DaI4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAANGAXABVYVBS2S5arrGlEP3z5ZpuQLt16w",
    },
    {
      image: liAzureAiIitHyderabad,
      title: "Azure AI Workshop at IIT Hyderabad",
      caption: "Hands-on Azure AI session at IIT Hyderabad",
      url: "https://www.linkedin.com/posts/yugmallik_azureai-aiworkshops-iithyderabad-activity-7313046665022566400-6-nA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAANGAXABVYVBS2S5arrGlEP3z5ZpuQLt16w",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5e3);
    return () => clearInterval(interval);
  }, [projects.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentSlide + i) % projects.length]);
    }
    return visible;
  };

  // Contact form (handled client-side, sent to backend for SMTP)
  const [contactForm, setContactForm] = useState({
    inquiryType: "",
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState("");
  const [contactError, setContactError] = useState("");

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (contactSubmitting) return;

    setContactSuccess("");
    setContactError("");

    const inquiryType = contactForm.inquiryType.trim();
    const name = contactForm.name.trim();
    const email = contactForm.email.trim();
    const phone = contactForm.phone.trim();
    const organization = contactForm.organization.trim();
    const message = contactForm.message.trim();

    // Basic client-side validation (server validates again)
    if (!inquiryType) {
      setContactError("Please select an inquiry type.");
      return;
    }
    if (name.length < 2) {
      setContactError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setContactError("Please enter a valid email address.");
      return;
    }
    if (message.length < 10) {
      setContactError("Please add a short message (at least 10 characters).");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const botField = formData.get("botField");

    const payload = {
      inquiryType,
      name,
      email,
      phone,
      organization,
      message,
      botField,
    };

    try {
      setContactSubmitting(true);

      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await resp.json().catch(() => null);

      if (resp.ok && data?.success) {
        setContactSuccess(
          "Your request has been submitted. You will receive a confirmation email shortly."
        );
        setContactForm({
          inquiryType: "",
          name: "",
          email: "",
          phone: "",
          organization: "",
          message: "",
        });
        setContactError("");
      } else {
        // Helpful debugging: log what the server returned (without dumping message contents).
        console.error("Contact API failure", {
          status: resp.status,
          ok: resp.ok,
          response: data,
          payload: {
            ...payload,
            messageLen: payload.message?.length,
          },
        });
        setContactError(data?.message || "Email failed to send");
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      setContactError("Email failed to send");
    } finally {
      setContactSubmitting(false);
    }
  };

  return <div className="min-h-screen bg-white">
      {
    /* Navigation Bar */
  }
      <nav className="border-b border-[#E5E7EB] bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {
    /* Logo - Signature Style */
  }
            <div className="flex items-center gap-2">
              <h1 className="text-3xl md:text-4xl text-[#111827]" style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}>
                Yug Mallik
              </h1>
            </div>

            {
    /* Desktop Navigation Menu */
  }
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-[#4B5563] hover:text-[#2563EB] transition-colors">
                About
              </a>
              <a href="#services" className="text-sm font-medium text-[#4B5563] hover:text-[#2563EB] transition-colors">
                What I Do
              </a>
              <a href="#work" className="text-sm font-medium text-[#4B5563] hover:text-[#2563EB] transition-colors">
                My Work
              </a>
              <a href="#contact" className="text-sm font-medium text-[#4B5563] hover:text-[#2563EB] transition-colors">
                Contact
              </a>
              <Button size="sm" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg shadow-sm">
                Let's Talk
              </Button>
            </div>

            {
    /* Mobile Menu Button */
  }
            <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="md:hidden w-10 h-10 flex items-center justify-center text-[#111827] hover:text-[#2563EB] transition-colors"
    aria-label="Toggle menu"
  >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {
    /* Mobile Sidebar */
  }
      <div
    className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    onClick={() => setMobileMenuOpen(false)}
  >
        <div
    className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
    onClick={(e) => e.stopPropagation()}
  >
          {
    /* Sidebar Header */
  }
          <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
            <h1 className="text-3xl text-[#111827]" style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}>
              Yug Mallik
            </h1>
            <button
    onClick={() => setMobileMenuOpen(false)}
    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
    aria-label="Close menu"
  >
              <X className="w-5 h-5" />
            </button>
          </div>

          {
    /* Sidebar Navigation */
  }
          <div className="flex flex-col p-6 space-y-1">
            <a
    href="#about"
    onClick={() => setMobileMenuOpen(false)}
    className="flex items-center gap-3 px-4 py-3 text-base font-medium text-[#111827] hover:text-[#2563EB] hover:bg-[#EFF6FF] rounded-lg transition-all"
  >
              <User className="w-5 h-5" />
              About
            </a>
            <a
    href="#services"
    onClick={() => setMobileMenuOpen(false)}
    className="flex items-center gap-3 px-4 py-3 text-base font-medium text-[#111827] hover:text-[#2563EB] hover:bg-[#EFF6FF] rounded-lg transition-all"
  >
              <Briefcase className="w-5 h-5" />
              What I Do
            </a>
            <a
    href="#work"
    onClick={() => setMobileMenuOpen(false)}
    className="flex items-center gap-3 px-4 py-3 text-base font-medium text-[#111827] hover:text-[#2563EB] hover:bg-[#EFF6FF] rounded-lg transition-all"
  >
              <Boxes className="w-5 h-5" />
              My Work
            </a>
            <a
    href="#contact"
    onClick={() => setMobileMenuOpen(false)}
    className="flex items-center gap-3 px-4 py-3 text-base font-medium text-[#111827] hover:text-[#2563EB] hover:bg-[#EFF6FF] rounded-lg transition-all"
  >
              <Mail className="w-5 h-5" />
              Contact
            </a>
            
            {
    /* CTA Button in Sidebar */
  }
            <div className="pt-4">
              <Button
    onClick={() => setMobileMenuOpen(false)}
    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg shadow-md"
  >
                Let's Talk
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {
    /* Sidebar Footer */
  }
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#E5E7EB]">
            <div className="flex items-center justify-center gap-4">
              <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-[#F9FAFB] hover:bg-[#EFF6FF] text-[#4B5563] hover:text-[#2563EB] rounded-lg transition-all"
  >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center bg-[#F9FAFB] hover:bg-[#EFF6FF] text-[#4B5563] hover:text-[#2563EB] rounded-lg transition-all"
  >
                <Github className="w-5 h-5" />
              </a>
              <a
    href="mailto:contact@ultriontech.com"
    className="w-10 h-10 flex items-center justify-center bg-[#F9FAFB] hover:bg-[#EFF6FF] text-[#4B5563] hover:text-[#2563EB] rounded-lg transition-all"
  >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {
    /* Hero Section */
  }
      <section className="bg-white pb-24 pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {
    /* Left - Text Content */
  }
            <div>
              {
    /* Main Headline */
  }
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#111827] mb-6 leading-tight">
                From learning AI to{" "}
                <span className="text-[#2563EB]">
                  applying it in the real world
                </span>
              </h1>

              {
    /* Description */
  }
              <p className="text-xl text-[#4B5563] mb-10 leading-relaxed">
                AI Leader helping businesses and individuals apply AI in real world scenarios. Microsoft Certified Trainer focused on practical solutions that actually work.
              </p>

              {
    /* CTA Buttons */
  }
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl shadow-md hover:shadow-lg transition-all h-14 px-8"
                  asChild
                >
                  <a href="#contact">
                    Book a Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] rounded-xl transition-all h-14 px-8"
                  asChild
                >
                  <a href="#contact">Explore How I Can Help</a>
                </Button>
              </div>

              {
    /* Micro Trust */
  }
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                  <span className="text-sm font-medium text-[#111827]">18+ years experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                  <span className="text-sm font-medium text-[#111827]">500+ professionals trained</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                  <span className="text-sm font-medium text-[#111827]">Microsoft Certified Trainer</span>
                </div>
              </div>
            </div>

            {
    /* Right - Image */
  }
            <div className="relative flex items-center justify-center">
              <img
                src={mctBadge}
                alt="Microsoft Certified Trainer Badge"
                className="h-auto w-full max-w-md border-0 object-contain outline-none ring-0"
              />
            </div>
          </div>
        </div>
      </section>

      {
    /* Who I Work With Section */
  }
      <section id="services" className="border-t border-[#E5E7EB] bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {
    /* Section Header */
  }
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827]">
              Who I Work With
            </h2>
          </div>

          {
    /* Cards Grid */
  }
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
    /* Card 1: Students */
  }
            <div className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
              <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
                <GraduationCap className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Students</h3>
              <p className="text-[#4B5563] mb-4 leading-relaxed flex-grow">
                Start your journey in AI with clarity and direction
              </p>
              <Button
    variant="ghost"
    className="text-[#2563EB] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] p-0 h-auto font-semibold w-full justify-start mt-auto"
  >
                Apply for Mentorship <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {
    /* Card 2: Companies */
  }
            <div className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
              <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
                <Building2 className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Companies</h3>
              <p className="text-[#4B5563] mb-4 leading-relaxed flex-grow">
                Help you identify where AI actually fits, and build solutions that work
              </p>
              <Button
    variant="ghost"
    className="text-[#2563EB] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] p-0 h-auto font-semibold w-full justify-start mt-auto"
  >
                Schedule Consultation <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {
    /* Card 3: Training */
  }
            <div className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
              <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
                <BookOpen className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Training</h3>
              <p className="text-[#4B5563] mb-4 leading-relaxed flex-grow">
                Hands-on workshops on Azure AI, GenAI, and real-world applications
              </p>
              <Button
    variant="ghost"
    className="text-[#2563EB] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] p-0 h-auto font-semibold w-full justify-start mt-auto"
  >
                Request Training <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {
    /* Card 4: Partnerships */
  }
            <div className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
              <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">Partnerships</h3>
              <p className="text-[#4B5563] mb-4 leading-relaxed flex-grow">
                Collaborate on AI initiatives, events, and product ideas
              </p>
              <Button
    variant="ghost"
    className="text-[#2563EB] hover:text-[#1D4ED8] hover:bg-[#EFF6FF] p-0 h-auto font-semibold w-full justify-start mt-auto"
  >
                Let's Collaborate <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {
    /* How I Can Help Section */
  }
      <section className="border-t border-[#E5E7EB] bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {
    /* Section Header */
  }
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827]">
              How I Can Help
            </h2>
          </div>

          {
    /* 3 Blocks */
  }
          <div className="grid md:grid-cols-3 gap-6">
            {
    /* Block 1 */
  }
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
              <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
                <Lightbulb className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">AI Strategy & Implementation</h3>
              <p className="text-[#4B5563] leading-relaxed">
                From idea to implementation — helping you design and deploy AI solutions
              </p>
            </div>

            {
    /* Block 2 */
  }
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
              <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
                <Boxes className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">AI Systems & Automation</h3>
              <p className="text-[#4B5563] leading-relaxed">
                Building real systems — document AI, automation, and intelligent workflows
              </p>
            </div>

            {
    /* Block 3 */
  }
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
              <div className="w-14 h-14 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
                <BookOpen className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">AI Training & Workshops</h3>
              <p className="text-[#4B5563] leading-relaxed">
                Practical sessions for teams, students, and professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {
    /* What I've Built and Delivered Section */
  }
      <section id="work" className="border-t border-[#E5E7EB] bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {
    /* Section Header */
  }
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827]">
              What I've Built and Delivered
            </h2>
          </div>

          {
    /* Projects Carousel */
  }
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#111827] mb-6 flex items-center gap-3">
              <Github className="w-6 h-6 text-[#4B5563]" />
              Featured Projects
            </h3>
            
            {
    /* Carousel Container */
  }
            <div className="relative">
              {
    /* Projects Grid */
  }
              <div className="grid md:grid-cols-3 gap-6">
                {getVisibleProjects().map((project, index) => {
    const Icon = project.icon;
    return <div key={index} className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 bg-[#EFF6FF] rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#2563EB]" />
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <h4 className="text-lg font-bold text-[#111827] mb-2">{project.title}</h4>
                      <p className="text-sm text-[#4B5563] mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="px-3 py-1 bg-[#EFF6FF] text-[#2563EB] text-xs font-medium rounded-full">
                            {tag}
                          </span>)}
                      </div>
                      <Button variant="ghost" size="sm" className="text-[#4B5563] hover:text-[#2563EB] p-0 h-auto text-sm font-medium" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          View on GitHub <ExternalLink className="w-4 h-4 ml-1" aria-hidden />
                        </a>
                      </Button>
                    </div>;
  })}
              </div>

              {
    /* Navigation Arrows */
  }
              <button
    onClick={prevSlide}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white border border-[#E5E7EB] rounded-full shadow-lg flex items-center justify-center hover:bg-[#F9FAFB] transition-colors"
    aria-label="Previous slide"
  >
                <ChevronLeft className="w-6 h-6 text-[#4B5563]" />
              </button>
              <button
    onClick={nextSlide}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white border border-[#E5E7EB] rounded-full shadow-lg flex items-center justify-center hover:bg-[#F9FAFB] transition-colors"
    aria-label="Next slide"
  >
                <ChevronRight className="w-6 h-6 text-[#4B5563]" />
              </button>

              {
    /* Slide Indicators */
  }
              <div className="flex items-center justify-center gap-2 mt-6">
                {projects.map((_, index) => <button
    key={index}
    onClick={() => setCurrentSlide(index)}
    className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-[#2563EB]" : "w-2 bg-[#E5E7EB]"}`}
    aria-label={`Go to slide ${index + 1}`}
  />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Talks, Workshops & Community Section */
  }
      <section className="border-t border-[#E5E7EB] bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {
    /* Section Header */
  }
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-3">
              Talks, Workshops & Community
            </h2>
            <p className="text-lg text-[#4B5563]">
              I regularly conduct AI workshops, training sessions, and speak at tech communities, universities, and industry events, focusing on practical AI and real-world implementation.
            </p>
          </div>

          <LinkedInCommunitySlider posts={linkedInPosts} />

          <div className="mt-12 rounded-xl border border-[#E5E7EB] bg-white px-3 py-4 shadow-sm md:mt-14 md:px-6 md:py-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
              <div className="flex flex-col items-center rounded-lg border border-[#E5E7EB] bg-white px-2 py-2.5 text-center shadow-sm md:px-3 md:py-3">
                <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-md bg-[#EFF6FF] md:h-8 md:w-8">
                  <BookOpen className="h-3.5 w-3.5 text-[#2563EB] md:h-4 md:w-4" strokeWidth={2} />
                </div>
                <p className="text-2xl font-bold leading-tight text-[#111827] md:text-3xl">50+</p>
                <p className="mt-0.5 text-[11px] font-medium leading-tight text-[#6B7280] md:text-xs">Workshops</p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-[#E5E7EB] bg-white px-2 py-2.5 text-center shadow-sm md:px-3 md:py-3">
                <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-md bg-[#EFF6FF] md:h-8 md:w-8">
                  <GraduationCap className="h-3.5 w-3.5 text-[#2563EB] md:h-4 md:w-4" strokeWidth={2} />
                </div>
                <p className="text-2xl font-bold leading-tight text-[#111827] md:text-3xl">20+</p>
                <p className="mt-0.5 text-[11px] font-medium leading-tight text-[#6B7280] md:text-xs">Universities</p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-[#E5E7EB] bg-white px-2 py-2.5 text-center shadow-sm md:px-3 md:py-3">
                <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-md bg-[#EFF6FF] md:h-8 md:w-8">
                  <Users className="h-3.5 w-3.5 text-[#2563EB] md:h-4 md:w-4" strokeWidth={2} />
                </div>
                <p className="text-2xl font-bold leading-tight text-[#111827] md:text-3xl">500+</p>
                <p className="mt-0.5 text-[11px] font-medium leading-tight text-[#6B7280] md:text-xs">Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* About Section */
  }
      <section id="about" className="border-t border-[#E5E7EB] bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {
    /* Two-Column Layout */
  }
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {
    /* Left Column - Content */
  }
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-6">
                Hi, I'm Yug
              </h2>
              
              <div className="space-y-5 text-lg text-[#4B5563] leading-relaxed">
                <p>
                  For over 18 years, I've worked across industries like oil and gas, healthcare, and consulting, building software that runs in <span className="font-semibold text-[#111827]">real world environments</span>.
                </p>
                
                <p>
                  Over time, I realized something simple. Building technology is one thing, but making it work for people and businesses is a completely different challenge.
                </p>
                
                <p>
                  That's how I look at <span className="font-semibold text-[#111827]">AI</span> today. Not as something to experiment with, but something to apply where it genuinely makes a difference.
                </p>
                
                <p>
                  As a <span className="font-semibold text-[#111827]">Microsoft Certified Trainer</span>, I work with individuals and teams through mentorship, workshops, consulting, and community interactions, helping them move from learning AI to actually using it.
                </p>

                <p className="font-medium text-[#111827] pt-2">
                  If you're exploring how <span className="font-semibold">AI can be applied in your context</span>, feel free to reach out or book a quick conversation.
                </p>
              </div>

              {
    /* CTA Button */
  }
              <div className="pt-8">
                <Button
                  size="lg"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl shadow-md hover:shadow-lg transition-all h-14 px-8"
                  asChild
                >
                  <a href="#contact">
                    Book a Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            {
    /* Right Column - Profile Image */
  }
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg border border-[#E5E7EB] overflow-hidden">
                <img
    src={profileImage}
    alt="Yug Mallik - AI Consultant and Microsoft Certified Trainer"
    className="w-full h-auto object-cover"
  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Testimonials */
  }
      <section className="border-t border-[#E5E7EB] bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827]">
              What People Say About Working With Me
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {
    /* Testimonial 1 */
  }
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-[#4B5563] mb-6 leading-relaxed text-sm">
                "Yug helped us implement Azure OpenAI in our product with a very practical, hands-on approach. His communication is clear and he delivers results."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Sarah Johnson</p>
                  <p className="text-xs text-[#4B5563]">CTO, TechCorp</p>
                </div>
              </div>
            </div>

            {
    /* Testimonial 2 */
  }
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-[#4B5563] mb-6 leading-relaxed text-sm">
                "The Azure AI workshop was exactly what our team needed. Real examples, hands-on exercises, and concepts we could apply immediately."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Michael Chen</p>
                  <p className="text-xs text-[#4B5563]">Engineering Lead, Startup Inc</p>
                </div>
              </div>
            </div>

            {
    /* Testimonial 3 */
  }
            <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md">
              <div className="flex gap-1 mb-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-[#4B5563] mb-6 leading-relaxed text-sm">
                "Best mentor! Yug helped me land my first AI role with career guidance and real project experience. Can't recommend him enough."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Priya Sharma</p>
                  <p className="text-xs text-[#4B5563]">ML Engineer, DataCo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
    /* Consultation — heading + single Calendly card */
  }
      <section className="border-t border-[#E5E7EB] bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111827] lg:text-4xl">
              Let's build something meaningful with AI
            </h2>
          </div>
          <div
            id="calendly-booking"
            className="scroll-mt-20 w-full overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white p-2 shadow-xl sm:p-3 lg:p-3"
          >
            <CalendlyInlineEmbed />
          </div>
        </div>
      </section>

      {
    /* Contact Section */
  }
      <section id="contact" className="scroll-mt-20 border-t border-[#E5E7EB] bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {
    /* Section Header */
  }
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-3">
              Get In Touch
            </h2>
            <p className="text-lg text-[#4B5563]">
              Tell me a bit about what you're looking for, I'll get back to you.
            </p>
          </div>

          {
    /* Contact Form with Two Columns */
  }
          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-[#E5E7EB] p-8">
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                {/* Honeypot field to reduce spam bots */}
                <input
                  type="text"
                  name="botField"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
                  {
    /* Left: top fields + flex spacer so phone aligns with submit button */
  }
                  <div className="flex min-h-0 flex-col md:h-full">
                    <div className="shrink-0 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="inquiry-type" className="text-sm font-semibold text-[#111827]">
                          Inquiry Type
                        </Label>
                      <Select
                        value={contactForm.inquiryType}
                        onValueChange={(value) =>
                          setContactForm((prev) => ({
                            ...prev,
                            inquiryType: value,
                          }))
                        }
                      >
                          <SelectTrigger id="inquiry-type" className="h-12 w-full rounded-xl border-[#E5E7EB] bg-white transition-colors hover:bg-[#F9FAFB]">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consulting">AI Consulting</SelectItem>
                            <SelectItem value="training">Training / Workshop</SelectItem>
                            <SelectItem value="mentorship">Mentorship</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold text-[#111827]">
                          Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4B5563]" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Your full name"
                            value={contactForm.name}
                            onChange={(e) =>
                              setContactForm((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="h-12 rounded-xl border-[#E5E7EB] bg-white pl-11 transition-colors hover:bg-[#F9FAFB] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold text-[#111827]">
                          Email
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4B5563]" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={contactForm.email}
                            onChange={(e) =>
                              setContactForm((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="h-12 rounded-xl border-[#E5E7EB] bg-white pl-11 transition-colors hover:bg-[#F9FAFB] focus:bg-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization" className="text-sm font-semibold text-[#111827]">
                          Organization / Company <span className="font-normal text-[#4B5563]">(optional)</span>
                        </Label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4B5563]" />
                          <Input
                            id="organization"
                            type="text"
                            placeholder="Company name"
                            value={contactForm.organization}
                            onChange={(e) =>
                              setContactForm((prev) => ({
                                ...prev,
                                organization: e.target.value,
                              }))
                            }
                            className="h-12 rounded-xl border-[#E5E7EB] bg-white pl-11 transition-colors hover:bg-[#F9FAFB] focus:bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="min-h-4 flex-1 md:min-h-0" aria-hidden />

                    <div className="shrink-0 space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-[#111827]">
                        Phone <span className="font-normal text-[#4B5563]">(optional)</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4B5563]" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={contactForm.phone}
                          onChange={(e) =>
                            setContactForm((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          className="h-12 rounded-xl border-[#E5E7EB] bg-white pl-11 transition-colors hover:bg-[#F9FAFB] focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {
    /* Right: message grows; submit is last row (same baseline as phone) */
  }
                  <div className="flex min-h-0 flex-col gap-4 md:h-full">
                    <div className="flex min-h-0 flex-1 flex-col space-y-2">
                      <Label htmlFor="message" className="shrink-0 text-sm font-semibold text-[#111827]">
                        Message / Project Description
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me more about your project, goals, or how I can help you..."
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="min-h-[200px] flex-1 resize-y rounded-xl border-[#E5E7EB] bg-white transition-colors hover:bg-[#F9FAFB] focus:bg-white md:min-h-[260px]"
                      />
                    </div>
                    <div className="shrink-0">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={contactSubmitting}
                        className="h-14 w-full rounded-xl bg-[#2563EB] text-base font-semibold text-white shadow-md transition-all hover:bg-[#1D4ED8] hover:shadow-lg"
                      >
                        {contactSubmitting ? "Sending..." : "Submit Request"}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {contactSuccess ? (
                  <p className="text-center text-sm font-medium text-[#2563EB]">
                    {contactSuccess}
                  </p>
                ) : null}

                {contactError ? (
                  <p className="text-center text-sm font-medium text-red-600">
                    {contactError}
                  </p>
                ) : null}

                <p className="text-center text-sm text-[#4B5563]">
                  I usually respond within 24–48 hours.
                </p>
              </form>
            </div>
          </div>

          {
    /* Direct Contact Section - Compact Cards */
  }
          <div className="mt-12">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#111827] mb-2">Or reach out directly</h3>
              <p className="text-[#4B5563]">I'm available on email, LinkedIn, and GitHub</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <a
    href="mailto:contact@ultriontech.com"
    className="group rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md"
  >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center group-hover:bg-[#2563EB] transition-colors mb-2">
                    <Mail className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-xs text-[#4B5563] font-medium mb-0.5">Email</p>
                  <p className="text-sm font-semibold text-[#111827]">contact@ultriontech.com</p>
                </div>
              </a>

              <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md"
  >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center group-hover:bg-[#2563EB] transition-colors mb-2">
                    <Linkedin className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-xs text-[#4B5563] font-medium mb-0.5">LinkedIn</p>
                  <p className="text-sm font-semibold text-[#111827]">Connect with me</p>
                </div>
              </a>

              <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-sm transition-all hover:border-[#2563EB] hover:shadow-md"
  >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-[#F9FAFB] rounded-lg flex items-center justify-center group-hover:bg-[#111827] transition-colors mb-2">
                    <Github className="w-5 h-5 text-[#111827] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-xs text-[#4B5563] font-medium mb-0.5">GitHub</p>
                  <p className="text-sm font-semibold text-[#111827]">View my code</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {
    /* Footer */
  }
      <footer className="bg-white border-t border-[#E5E7EB] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {
    /* Left - Signature Style */
  }
            <div className="flex items-center">
              <h1 className="text-2xl text-[#111827]" style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}>
                Yug Mallik
              </h1>
            </div>
            
            {
    /* Center - Copyright */
  }
            <p className="text-sm text-[#4B5563]">
              © 2026 Yug Mallik. All rights reserved.
            </p>

            {
    /* Right - Navigation Links */
  }
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors">About</a>
              <a href="#services" className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors">Services</a>
              <a href="#work" className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors">Work</a>
              <a href="#contact" className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
}
export {
  App as default
};
