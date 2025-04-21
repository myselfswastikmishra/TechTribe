import { Card, CardContent } from "@/components/ui/card";
import { founders, coreMembers } from "@/constants/siteData";
import { LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-tech-purple via-tech-blue to-tech-purple bg-clip-text text-transparent">
        ꜰᴏᴜɴᴅᴇʀꜱ
        </h2>
        
        {/* Founder and Co-Founders */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="col-span-full md:col-span-1 group transition-all duration-500 hover:shadow-lg hover:bg-tech-purple/10">
            <CardContent className="p-6 text-center">
              <div className="relative overflow-hidden rounded-full mx-auto mb-4 w-32 h-32">
                <img
                  src={founders.founder.image}
                  alt={founders.founder.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-xl mb-1 transition-colors duration-500 group-hover:text-tech-purple">{founders.founder.name}</h3>
              <p className="text-muted-foreground mb-3 transition-colors duration-500 group-hover:text-tech-blue">{founders.founder.role}</p>
              <Link to={founders.founder.linkedin} className="text-tech-purple hover:text-tech-purple-dark transition-colors duration-300">
                <LinkedinIcon className="inline-block w-5 h-5" />
              </Link>
            </CardContent>
          </Card>
          
          {founders.coFounders.map((cofounder) => (
            <Card key={cofounder.name} className="group transition-all duration-500 hover:shadow-lg hover:bg-tech-purple/10">
              <CardContent className="p-6 text-center">
                <div className="relative overflow-hidden rounded-full mx-auto mb-4 w-32 h-32">
                  <img
                    src={cofounder.image}
                    alt={cofounder.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1 transition-colors duration-500 group-hover:text-tech-purple">{cofounder.name}</h3>
                <p className="text-muted-foreground mb-3 transition-colors duration-500 group-hover:text-tech-blue">{cofounder.role}</p>
                <Link to={cofounder.linkedin} className="text-tech-purple hover:text-tech-purple-dark transition-colors duration-300">
                  <LinkedinIcon className="inline-block w-5 h-5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Members */}
        <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-tech-purple via-tech-blue to-tech-purple bg-clip-text text-transparent">
        ᴄᴏʀᴇ ᴍᴇᴍʙᴇʀꜱ
        </h3>
        <div className="scroll-container">
          <div className="scroll-track">
            {/* First set of members */}
            {coreMembers.map((member, index) => (
              <div 
                key={`first-${member.name}-${index}`} 
                className="w-[300px] flex-shrink-0 px-3"
              >
                <Card className="group transition-all duration-500 hover:shadow-lg hover:bg-tech-purple/10">
                  <CardContent className="p-5 text-center">
                    <div className="relative overflow-hidden rounded-full mx-auto mb-3 w-28 h-28">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-28 h-28 rounded-full mx-auto object-cover transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-1.5 transition-colors duration-500 group-hover:text-tech-purple">{member.name}</h4>
                    <p className="text-sm text-muted-foreground transition-colors duration-500 group-hover:text-tech-blue">{member.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {coreMembers.map((member, index) => (
              <div 
                key={`second-${member.name}-${index}`} 
                className="w-[300px] flex-shrink-0 px-3"
              >
                <Card className="group transition-all duration-500 hover:shadow-lg hover:bg-tech-purple/10">
                  <CardContent className="p-5 text-center">
                    <div className="relative overflow-hidden rounded-full mx-auto mb-3 w-28 h-28">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-28 h-28 rounded-full mx-auto object-cover transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-semibold text-lg mb-1.5 transition-colors duration-500 group-hover:text-tech-purple">{member.name}</h4>
                    <p className="text-sm text-muted-foreground transition-colors duration-500 group-hover:text-tech-blue">{member.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
// Example data to add
const newFounder = {
  name: "Swastik Mishra",
  role: "Founder & Technical Lead",
  image: "/lovable-uploads/SWASTIK.png",
  linkedin: "https://linkedin.com/in/myselfswastikmishra/",
};

const newCoFounders = [
  {
    name: "Utsav Ratan",
    role: "Co-Founder & Technical Lead",
    image: "/lovable-uploads/utsav.jpeg",
    linkedin: "https://linkedin.com/in/misterutsav/",
  },
  {
    name: "Mrinal Prakash",
    role: "Co-Founder & Community Lead",
    image: "/lovable-uploads/founder3.jpeg",
    linkedin: "https://linkedin.com/in/mrinal-prakash-a5482b339/",
  },
];

const newCoreMembers = [
    { name: "ᴠᴀɴꜱʜɪᴋᴀ ᴅɪxɪᴛ 🎀", role: "", image: "/lovable-uploads/VANSHIKA.png" },
    { name: "ꜱᴜʜᴀɴɪ", role: "", image: "/lovable-uploads/SUHANI.png" },
    { name: "ʙᴜʟʙᴜʟ ꜱɪɴɢʜ ᴄʜᴀᴜʜᴀɴ", role: "", image: "/lovable-uploads/BULBUL.png" },
    { name: "ᴄʜᴀɴᴄʜᴀʟ ʏᴀᴅᴀᴠ", role: "", image: "/lovable-uploads/CHANCHAL.png" },
    { name: "ᴘʀɪʏᴀɴꜱʜɪ ᴘᴀᴛᴇʟ", role: "", image: "/lovable-uploads/PRIYANSHI.png" },
    { name: "ᴀʀᴄʜɪᴛ ꜱʀɪᴠᴀꜱᴛᴀᴠᴀ", role: "", image: "/lovable-uploads/ARCHIT.png" },
    { name: "ʜɪʏᴀɴꜱʜ ꜱʜᴀʀᴍᴀ", role: "", image: "/lovable-uploads/hiyansh.png" },
    { name: "ʏᴀꜱʜᴘᴀʟ", role: "", image: "/lovable-uploads/YASH.png" },
    { name: "ᴀᴅɪᴛʏᴀ ᴋᴜᴍᴀʀ ꜱɪɴɢʜ", role: "", image: "/lovable-uploads/core9.png" },
    {name: "ᴋʀᴀᴛɪᴋᴀ ᴛᴏᴍᴀʀ", role: "", image: "/lovable-uploads/core8.1-2.jpg" },
    { name: "ᴋʜᴜꜱʙᴏᴏ", role: "", image: "/lovable-uploads/core5.jpg" },
    { name: "ᴀɴꜱʜɪᴋᴀ ᴛʀɪᴋʜᴀ", role: "", image: "/lovable-uploads/core4.jpg" },
  ];
// Adding the new data to the existing constants
founders.founder = newFounder;
founders.coFounders.push(...newCoFounders);
coreMembers.push(...newCoreMembers);
