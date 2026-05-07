import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

interface ApprovedStudent {
  id: string;
  name: string;
  course: string;
  university: string;
  image: string;
}

const approvedStudents: ApprovedStudent[] = [
  {
    id: "1",
    name: "Gabriela Houch",
    course: "Medicina",
    university: "Ohio University",
    image: "/images/aprovados/gabriela-houch.jpg",
  },
  {
    id: "2",
    name: "Leon Iankov",
    course: "Philosophy, Politics and Economics",
    university: "The University of Manchester",
    image: "/images/aprovados/leon-iankov-manchester.jpg",
  },
  {
    id: "3",
    name: "João Vitor Marinelli",
    course: "Ciências Gerais",
    university: "Universidade de Victoria",
    image: "/images/aprovados/joao-vitor-marinelli.jpg",
  },
  {
    id: "4",
    name: "João Vitor Marinelli",
    course: "Microbiologia e Imunologia",
    university: "Universidade Simon Fraser",
    image: "/images/aprovados/joao-vitor-simon-fraser.jpg",
  },
  {
    id: "5",
    name: "João Vitor Marinelli",
    course: "Bioquímica",
    university: "University of Western Ontario",
    image: "/images/aprovados/joao-vitor-western-ontario.jpg",
  },
  {
    id: "6",
    name: "João Vitor Marinelli",
    course: "Life Sciences",
    university: "Universidade de Toronto",
    image: "/images/aprovados/joao-vitor-toronto.jpg",
  },
  {
    id: "7",
    name: "Leon Iankov",
    course: "Philosophy, Politics and Economics",
    university: "Warwick University",
    image: "/images/aprovados/leon-iankov-warwick.jpg",
  },
];

export default function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? approvedStudents.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === approvedStudents.length - 1 ? 0 : prev + 1
    );
  };

  const currentStudent = approvedStudents[currentIndex];

  return (
    <section id="approved" className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Header */}
        <Reveal direction="up" delay={0.1}>
          <div className="text-center mb-16 md:mb-20 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Nossos Aprovados
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Conheça alguns dos nossos alunos que conquistaram aprovação em universidades de excelência no Brasil e no exterior
            </p>
          </div>
        </Reveal>

        {/* Carousel Container */}
        <Reveal direction="up" delay={0.2} className="w-full">
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto w-full">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="hidden md:flex md:absolute md:left-0 md:z-10 p-3 md:p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg flex-shrink-0"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Card */}
            <div className="w-full max-w-lg mx-auto flex-shrink-0">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-br from-blue-100 to-green-100">
                  <img
                    src={currentStudent.image}
                    alt={currentStudent.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <span>✓</span>
                    <span>Aprovado</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 bg-white">
                  {/* Name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {currentStudent.name}
                  </h3>

                  {/* Course */}
                  <p className="text-base md:text-lg font-semibold text-blue-600 mb-6">
                    {currentStudent.course}
                  </p>

                  {/* University */}
                  <div className="pt-6 border-t-2 border-gray-200">
                    <p className="text-sm text-gray-500 font-medium mb-2">
                      Aprovado em
                    </p>
                    <p className="text-lg md:text-xl text-gray-900 font-bold">
                      {currentStudent.university}
                    </p>
                  </div>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {approvedStudents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir para aprovado ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="hidden md:flex md:absolute md:right-0 md:z-10 p-3 md:p-4 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg flex-shrink-0"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Mobile Navigation Arrows */}
            <div className="flex md:hidden gap-3 flex-shrink-0">
              <button
                onClick={handlePrev}
                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* CTA Section */}
        <Reveal direction="up" delay={0.4}>
          <div className="mt-16 md:mt-20 text-center">
            <p className="text-lg md:text-xl text-gray-700 font-medium mb-6">
              Quer também conquistar sua aprovação? Converse conosco!
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-block bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Fale Conosco
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
