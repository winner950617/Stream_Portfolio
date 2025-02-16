

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Fade from "@mui/material/Fade";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { motion } from "motion/react";

function ProjectCard({ project }) {

  const variants={
    hidden:{opacity:0,y:50},
    visible:{opacity:1,y:0},
}

  return (
    <motion.div

     variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}}

      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "64px",
        padding: "16px ",
        flexWrap: "wrap",
      }}
    >
      <Fade in={true} timeout={800}>
        <Card
          sx={{
            maxWidth: 360,
            borderRadius: "12px",
            backdropFilter: "blur(1px)",
            backgroundColor: "rgba(18, 18, 18, 0.5)",
            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
            transition: "transform 0.5s ease-out, box-shadow 0.5s ease-out",
            paddingBottom:'8px',
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 30px rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              className="h-[190px]"
              component="img"
              height="140"
              image={project.image}
              alt={project.alt}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "Cinzel, serif",
                  fontSize: "24px",
                  color: "#fff",
                }}
              >
                {project.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                  color: "#fff",
                  opacity: 0.8,
                }}
              >
                {project.description}
              </Typography>
              <div style={{ marginTop: "12px" }}>
                {project.techstack.map((tech, idx) => (
                  <Chip
                    key={idx}
                    label={tech}
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      borderColor: "#00aaff",
                      margin: "3px",
                      marginBottom: "0",
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "12px",
                    }}
                  />
                ))}
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ marginLeft: "12px" }}>
            <Button
              size="small"
              href={project.dlink}
              target="_blank"
              sx={{
                color: "#00aaff",
                border: "2px solid #00aaff",
                borderRadius: "20px",
                padding: "8px 16px",
                fontFamily: "Cinzel, serif",
                fontSize: "14px",
                textShadow: "0 0 8px #00aaff, 0 0 16px #0088cc",
                transition: "0.35s ease-in-out",
                "&:hover": {
                  backgroundColor: "#00aaff",
                  color: "#000",
                  boxShadow: "0 0 20px #00aaff, 0 0 40px #0088cc",
                },
              }}
            >
              <FaGlobe size={"16px"} />
            </Button>

            <Button
              size="small"
              href={project.clink}
              target="_blank"
              sx={{
                color: "#00aaff",
                border: "2px solid #00aaff",
                borderRadius: "20px",
                padding: "8px 16px",
                fontFamily: "Cinzel, serif",
                fontSize: "14px",
                textShadow: "0 0 8px #00aaff, 0 0 16px #0088cc",
                transition: "0.35s ease-in-out",
                "&:hover": {
                  backgroundColor: "#00aaff",
                  color: "#000",
                  boxShadow: "0 0 20px #00aaff, 0 0 40px #0088cc",
                },
              }}
            >
              <BsGithub size={"16px"} />
            </Button>
          </CardActions>
        </Card>
      </Fade>
    </motion.div>
  );
}

export default ProjectCard;
