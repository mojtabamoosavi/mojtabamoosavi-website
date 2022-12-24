import { LayoutGroup, motion } from "framer-motion";
import PageLayout from "components/layout/PageLayout";

const experience = [
    {
        key: "PayradSmartSolutions",
        title: "Payrad Smart Solutions",
        time: "2019 - Present",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
    },
    {
        key: "FanapPlus",
        title: "Fanap Plus",
        time: "2017 - 2013",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
    },
    {
        key: "Aypan",
        title: "Aypan",
        time: "2013 - 2009",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
    },
    {
        key: "TabrizPetrochemical",
        title: "Tabriz Petrochemical",
        time: "2013 - 2009",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
    },
    {
        key: "Avijeh",
        title: "Avijeh",
        time: "2013 - 2009",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",
    },
];

export default function Experience() {

    const bulletVariants = {
        initial: () => ({
            scale: 0,
        }),
        visible: (custom) => ({
            scale: 1,
            transition: { delay: custom * 0.1 },
        }),
    };

    const itemVariants = {
        initial: () => ({
            opacity: 0,
            x: -50,
        }),
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: { delay: custom * 0.1 },
        }),
    };

    return (
        <PageLayout title="Experience">
            <div className="relative">
                <div>
                    {experience.map((item, index) => (
                        <div key={item.key} className="relative pl-[40px] mb-[100px] last:mb-0">
                            <motion.div
                                initial="initial"
                                whileInView="visible"
                                custom={index + 1}
                                viewport={{ once: true }}
                                variants={bulletVariants}
                                className="absolute left-[-4px] top-[5px] w-[9px] h-[9px] bg-primary z-[1]"
                            />

                            <motion.div
                                key={item.key}
                                custom={item.key}
                                initial="initial"
                                whileInView="visible"
                                variants={itemVariants}
                                transition={{ type: "linear" }}
                                viewport={{ once: true }}>
                                <div className="text-[14px] text-muted">{item.time}</div>
                                <div className="my-[16px] font-bold text-[18px] text-black dark:text-white">
                                    {item.title}
                                </div>
                                <div className="text-[14px] text-muted max-w-[500px]">{item.description}</div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="absolute w-[1px] bg-light dark:bg-dark-light top-[5px] bottom-0" />
            </div>
        </PageLayout>
    );
}
