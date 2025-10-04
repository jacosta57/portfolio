import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodecademy } from "react-icons/si";
import { CommandFunction, CommandMap } from "./Types";

export const commands: CommandMap = {
  help: () => (
    <div>
      <p>help - display this help section</p>
      <p>career - career objectives and future goals</p>
      <p>clear - clear the terminal</p>
      <p>experience - work experience summary</p>
      <p>skills - Jayson&apos;s technical skills</p>
      <p>socials - Jayson&apos;s social media links</p>
      <p>status - Jayson&apos;s current status</p>
      <p>whoami - information about Jayson</p>
    </div>
  ),

  whoami: () => (
    <div>
      <p>Computer & Software Engineer</p>
      <p>Iowa State University | Graduating May 2026</p>
      <p>AWS Certified Developer - Associate</p>
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
          <Link href="https://github.com/jasta57">jacosta57</Link>
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-start mb-3">
        <SiCodecademy className="me-3" />
        <p className="mb-0">
          codecademy.com/
          <Link href="https://www.codecademy.com/profiles/jaysonacosta">
            jaysonacosta
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

  career: () => (
    <div>
      <p>
        I&apos;m passionate about building technology that makes a real
        difference. After graduation in May 2026, I&apos;m looking to join a
        team where I can contribute to scalable, user-focused applications while
        continuing to grow as an engineer.
      </p>
      <br />
      <p>
        My goal is to become a technical leader who not only writes great code,
        but also mentors others and drives architectural decisions. I want to
        work on projects that push me to learn, collaborate with talented teams,
        and ultimately create software that people rely on every day.
      </p>
      <br />
      <p>
        Learn more on my <Link href="/about">About page</Link>
      </p>
    </div>
  ),

  experience: () => (
    <div>
      <p>
        <span>Software Engineer Apprentice & Delivery Lead</span>
      </p>
      <p>Source Allies | May 2025 - Aug 2025 | Urbandale, IA</p>
      <br />
      <p>
        • Automated WiFi voucher generation with AWS Lambda (saved 6+
        hours/week)
      </p>
      <p>• Migrated systems to GraphQL architecture with AWS Lambda</p>
      <p>• Reduced operational costs by 50% through database optimization</p>
      <p>• Streamlined employee onboarding (3 hours faster per employee)</p>
      <br />
      <p>
        <span>Skills Gained:</span>
      </p>
      <p>Technical: AWS Lambda & RDS, GraphQL, Infrastructure automation</p>
      <p>Soft Skills: Team leadership, Client communication, Agile delivery</p>
      <br />
      <p>
        See full details on my <Link href="/experience">Experience page</Link>
      </p>
    </div>
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
