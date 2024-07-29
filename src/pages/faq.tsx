import { useEffect, useState } from 'react';
import { CommonHeroSection } from "@/components/core";
import { PublicLayout } from "@/layouts";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

function FaqPage() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAccordionChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "FAQ 1. When should a person choose CS (Company Secretary) as a career?",
      answer: "Anyone who is more theoretical in his or her approach may prefer choosing CS as a career option. Also, a person interested in law must go for CS as the exam involves core subjects like corporate law, SEBI law, IBC law, and other laws."
    },
    {
      question: "FAQ 2. How much time does it take to become a CS?",
      answer: "Considering the best-case scenario, where a student is able to crack all the exams in one attempt, it will take around 3 years for him/her to get the CS degree. He/ She can appear for CSEET just after appearing 10+2; and after one year he/she can choose to appear for CS Executive and on completing Executive, during the tenure of 21 months training, he/she can complete the CS Professional Exams."
    },
    {
      question: "FAQ 3. What programming languages are taught in the CS course?",
      answer: "The CS course covers a variety of programming languages including Python, Java, C++, and JavaScript."
    },
    {
      question: "FAQ 4. Are there any prerequisites for the CS course?",
      answer: "While there are no strict prerequisites, having a basic understanding of programming concepts and mathematics can be beneficial."
    },
    {
      question: "FAQ 5. Is the CS course suitable for beginners?",
      answer: "Yes, the CS course is designed to accommodate students with varying levels of experience, including beginners."
    },
    {
      question: "FAQ 6. Are there any opportunities for hands-on projects?",
      answer: "Yes, the CS course includes hands-on projects and assignments to apply theoretical concepts to practical problems."
    },
    {
      question: "FAQ 7. What career opportunities are available after completing the CS course?",
      answer: "Graduates of the CS course can pursue careers as software engineers, data analysts, web developers, system administrators, and more."
    }
  ];

  return (
    <PublicLayout title="FAQs | Edu-Hub-Learning">
      <CommonHeroSection title="FAQs" />
      <h1 className="text-4xl font-semibold text-center text-emerald-500 my-6">Frequently Asked Questions ?</h1>

      <section className="w-full flex flex-col md:flex-row main-container justify-between">
        <motion.div
          className="w-full md:w-1/2 mb-6 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="FAQQ.svg" alt="FAQs" className="w-full h-auto md:h-[90vh]" />
        </motion.div>
        <div className="h-fit w-full md:w-1/2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <Accordion className="mb-4 w-full" expanded={expanded === `panel${index}`} onChange={handleAccordionChange(`panel${index}`)}>
                <AccordionSummary className="text-xl font-bold text-center text-[#6C63FF]" expandIcon={<ExpandMoreIcon />}>
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-indigo-900 text-lg">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}

export default FaqPage;
