import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodecademy } from "react-icons/si";
import { CommandFunction, CommandMap } from "./Types";

export const commands: CommandMap = {
  help: () => (
    <div>
      <p>help - display this help section</p>
      <p>clear - clear the terminal</p>
      <p>whoami - information about Jayson</p>
      <p>skills - Jayson&apos;s technical skills</p>
      <p>status - Jayson&apos;s current status</p>
      <p>socials - Jayson&apos;s social media links</p>
    </div>
  ),

  whoami: () => (
    <div>
      <p>Computer & Software Engineer</p>
      <p>Iowa State University | Graduating May 2026</p>
      <p>AWS Certified Developer Associate</p>
      <p>Full-Stack Developer | AI Enthusiast | Team Leader</p>
    </div>
  ),

  skills: () => (
    <div>
      <p>
        <span className="text-info">Programming Languages:</span>
        JavaScript/TypeScript, HTML/CSS, Java, Python, C, MIPS, VHDL, Verilog
      </p>
      <p>
        <span className="text-info">Cloud & DevOps:</span> AWS, Azure, Github
        Actions, Docker
      </p>
      <p>
        <span className="text-info">Tools:</span> Git, Android SDK, Docker,
        Postman
      </p>
      <p>
        <span className="text-info">Languages:</span> English (Native), Spanish
        (Intermediate), American Sign Language (Beginner)
      </p>
      <p>
        Check out the <Link href="/projects">Projects page</Link> for
        applications of these skills!
      </p>
    </div>
  ),

  status: () => (
    <div>
      <p>
        <span className="text-success">Current Status</span>
      </p>
      <p>Student Status: Active (Senior Year)</p>
      <p>Current Focus: Full-stack development, AI & Android Development</p>
      <p>
        Available for: Full-time & Internship positions, collaborations,
        projects
      </p>
      <p>Learning: AWS services, ML/AI, Scripting</p>
      <br />
      <p>
        <span className="text-info">Current Activities</span>
      </p>
      <p>Project Helper AI Chatbot</p>
      <p>Portfolio website improvements</p>
      <p>AWS Solutions Architect - Associate certificate</p>
    </div>
  ),

  socials: () => (
    <>
      <div className="d-flex align-items-center justify-content-start mb-3">
        <FaLinkedin className="me-3" />
        <p className="mb-0">
          linkedin.com/in/
          <Link href="https://linkedin.com/in/jayson-acosta">
            jayson-acosta
          </Link>
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-start mb-3">
        <FaGithub className="me-3" />
        <p className="mb-0">
          github.com/
          <Link href="https://github.com/JaysonAcosta5704">
            JaysonAcosta5704
          </Link>
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-start mb-3">
        <SiCodecademy className="me-3" />
        <p className="mb-0">
          codecademy.com/
          <Link href="https://www.codecademy.com/profiles/JaysonAcosta272">
            JaysonAcosta272
          </Link>
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-start mb-3">
        <FaEnvelope className="me-3" />
        <p className="mb-0">
          <Link href="mailto:contact@jaysonacosta.com">
            contact@jaysonacosta.com
          </Link>
        </p>
      </div>
    </>
  ),
};

export const getCommand = (commandName: string): CommandFunction => {
  const [cmd] = commandName.split(" ");
  return commands[cmd];
};

export const parseCommand = (
  input: string,
): { command: string; args: string[] } => {
  const parts = input.split(" ");
  const command = parts[0];
  const args = parts.slice(1);

  return { command, args };
};
