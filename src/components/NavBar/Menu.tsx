import React, { useState, useEffect } from "react";
import {
    AddressBook,
    Buildings,
    Desktop,
    DotsThreeOutline,
    FacebookLogo,
    House,
    InstagramLogo,
    LinkedinLogo,
    Student,
    User,
} from "phosphor-react";
import portfolioImage from "./portfolioImage.jpg";
import { CodaLogo } from "@phosphor-icons/react";

const socialLinks = [
    {
        icon: <InstagramLogo size={32} />,
        link: "https://www.instagram.com/nono__col/",
    },
    {
        icon: <FacebookLogo size={32} />,
        link: "https://www.facebook.com/profile.php?id=100015093256875",
    },
    {
        icon: <LinkedinLogo size={32} />,
        link: "www.linkedin.com/in/arnaud-cologan-2921b0148",
    },
];

interface SidebarProps {
    onAboutMeClick: () => void;
    onEducation: () => void;
    onExperience: () => void;
    onSkills: () => void;
    onHeader: () => void;
    onProject: () => void;
}

interface TabProps {
    icon: React.ReactElement;
    label: string;
    onClick: () => void;
}

const Table: React.FC<TabProps & { isActive: boolean }> = ({
    icon,
    label,
    onClick,
    isActive,
}) => (
    <li className=" cursor-pointer">
        <div
            className={`flex item-center space-x-5 ${
                isActive ? "text-amber-400" : "text-white"
            }`}
            onClick={onClick}
        >
            <div>{icon}</div>
            <div>{label}</div>
        </div>
    </li>
);

const socialIcons = [
    <InstagramLogo size={32} />,
    <FacebookLogo size={32} />,
    <LinkedinLogo size={32} />,
];

const Sidebar: React.FC<SidebarProps> = ({
    onExperience,
    onAboutMeClick,
    onEducation,
    onSkills,
    onHeader,
    onProject
}) => {
    const [showTabs, setShowTabs] = useState(true);
    const [activeTab, setActiveTab] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setShowTabs(window.innerWidth >= 1033);
        };
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="">
            <div className="space-y-6 text-2xl lg:my-5">
                <div className="flex items-center justify-center">
                    <img
                        src={portfolioImage}
                        alt="Portfolio"
                        className="lg:w-5/12 lg:block hidden rounded-full"
                    />
                </div>
                <div className="flex items-center justify-center lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center">
                    <div className="font-bold text-white text-3xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-2xl">
                        Arnaud Cologan
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        className="lg:hidden text-white"
                        onClick={() => setShowTabs(!showTabs)}
                    >
                        <DotsThreeOutline size={32} />
                    </button>
                </div>

                {showTabs && (
                    <div className=" lg:flex-1">
                        <div className="flex items-center justify-center space-x-5 text-white">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <ul className="pt-2 pb-4 space-y-1 text-sm lg:text-xl lg:space-y-8 text-white my-1 mx-1 lg:my-5 lg:mx-5">
                            <Table
                                icon={<House size={32} />}
                                label="Header"
                                onClick={() => {
                                    onHeader();
                                    setActiveTab("Header");
                                }}
                                isActive={activeTab === "Header"}
                            />
                            <Table
                                icon={<User size={32} />}
                                label="AboutMe"
                                onClick={() => {
                                    onAboutMeClick();
                                    setActiveTab("AboutMe");
                                }}
                                isActive={activeTab === "AboutMe"}
                            />
                            <Table
                                icon={<Student size={32} />}
                                label="Student"
                                onClick={() => {
                                    onEducation();
                                    setActiveTab("Student");
                                }}
                                isActive={activeTab === "Student"}
                            />
                            <Table
                                icon={<Buildings size={32} />}
                                label="Experience"
                                onClick={() => {
                                    onExperience();
                                    setActiveTab("Experience");
                                }}
                                isActive={activeTab === "Experience"}
                            />
                            <Table
                                icon={<Desktop size={32} />}
                                label="Skills"
                                onClick={() => {
                                    onSkills();
                                    setActiveTab("Skills");
                                }}
                                isActive={activeTab === "Skills"}
                            />
                            <Table
                                icon={<CodaLogo size={32} />}
                                label="Projects"
                                onClick={() => {
                                    onProject();
                                    setActiveTab("Projects");
                                }}
                                isActive={activeTab === "Projects"}
                            />
                            <Table
                                icon={<AddressBook size={32} />}
                                label="Contact"
                                onClick={() => {
                                    setActiveTab("Contact");
                                }}
                                isActive={activeTab === "Contact"}
                            />
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
