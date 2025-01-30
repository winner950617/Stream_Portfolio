import myImage from "../../assets/Me.png";
import { motion } from "motion/react";
import { Box } from "@mui/material";
import cvFile from "../../assets/document/CV.pdf";
import { FaDownload } from "react-icons/fa6";

function About() {
  
  return (
    <section
      id="home"
      className="px-10 flex min-h-screen w-full 
        items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={myImage}
            alt="..."
            className=" w-[230px] cursor-pointer rounded-full shadow-xl
                    shadow-indigo-900 transition-all duration-300 hover:translate-y-5 
                    hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 
                    md:w-[340px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1
            className="bg-gradient-to-r from-blue-500 to-pink-500 
                     bg-clip-text text-transparent text-4xl font- md:text-6xl"
          >
            Mohammad Owais Azizi
          </h1>

          <h3
            className="bg-gradient-to-r from-pink-500 to-blue-500 
                     bg-clip-text text-transparent text-2xl font- md:text-3xl"
          >
            Frond-end Developer
          </h3>

          <p className="text-base lg:text-lg text-pretty text-gray-400">
          I am a professional frontend developer with 2 years of experiences and ability to build highly-scaled,
           high-quality and user-friendly web applications by using technologies like React, Redux and Tailwind.
            My portfolio
            reflects my commitment to growth and my passion for creating
            efficient and scalable solutions.
          </p>

          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <a
                href={cvFile}
                download
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    padding: "0.8rem 1.8rem",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "#0a0a23",
                    borderRadius: "30px",
                    overflow: "hidden",
                    cursor: "pointer",
                    zIndex: 1,
                    transition: "all 0.3s ease-out, box-shadow 0.5s ease-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      borderRadius: "30px",
                      padding: "2px",
                      background:
                        "linear-gradient(90deg, #ebdb34, #00f2fe, #4facfe, #ebdb34)",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      WebkitMaskComposite: "destination-out",
                      animation: "neon-border 2s linear infinite",
                      zIndex: -1,
                    },
                  }}
                >
                  <div style={{ display: "flex" }}>
                    Download CV
                    <FaDownload style={{ marginLeft: "8px" }} />
                  </div>
                </Box>
              </a>
            </motion.div>
          </Box>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
