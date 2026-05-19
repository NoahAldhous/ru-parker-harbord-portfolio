"use client";
import Image from "next/image";
import ContactLink from "../components/ContactLink";
import { motion } from "framer-motion";
import Link from "next/link";

//image import
import portrait from "../../../public/images/contact/contactPortrait.jpg";

export default function Page() {
  const contactItems = [
    {
      text: "Email Me",
      url: "mailto:ruparkerharbord@gmail.com",
      isDownload: false,
    },
    {
      text: "Main Instagram",
      url: "https://www.instagram.com/ruparkerphoto/",
      isDownload: false,
    },
    {
      text: "Wedding Instagram",
      url: "https://www.instagram.com/rushootsweddings/",
      isDownload: false,
    },
    // {
    //     firstLineText:'Download my',
    //     secondLineText:'Portfolio',
    //     url:'/data/RubyParkerPortfolio.pdf',
    //     isDownload:true
    // }
  ];

  const mainVariant = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren", //use this instead of delay
        staggerChildren: 0.2, //apply stagger on the parent tag
      },
    },
  };

  const divVariant = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariant = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <main className="h-screen w-screen flex flex-row justify-center items-center pt-navbar-height px-page-horizontal-padding">
      <section className="w-11/12 h-5/6 flex flex-row justify-between">
        <motion.section
          className="h-full w-2/5 flex justify-center items-start"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <Image
            src={portrait}
            alt="ru portrait"
            className="object-contain h-full"
          />
        </motion.section>
        <section className="h-full w-1/2 flex flex-col justify-between">
          <motion.div
            className="w-full h-3/5 flex flex-col justify-between"
            initial="hidden"
            animate="visible"
            variants={mainVariant}
          >
            {contactItems.map((item, idx) => (
              <motion.div variants={divVariant} key={idx}>
                <ContactLink
                  text={item.text}
                  url={item.url}
                  isDownload={item.isDownload}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="w-full h-1/5 text-md flex flex-col justify-evenly"
            initial="hidden"
            animate="visible"
            variants={mainVariant}
          >
            <motion.p variants={divVariant}>
              If you are enquiring about wedding bookings please use the contact
              form on my wedding page found here
            </motion.p>
            <motion.br variants={divVariant}/>
            <motion.p variants={divVariant}>
              Otherwise please drop me a line using the link above!
            </motion.p>
          </motion.div>
        </section>
      </section>
    </main>
  );

  // <motion.main
  //             className="flex flex-col space-y-5 sm:space-y-4 md:space-y-8 lg:space-y-10 justify-center items-start space-around overflow-y-hidden overflow-x-hidden h-screen w-screen p-12 sm:p-24 bg-primary dark:bg-dark"
  //             initial='hidden'
  //             animate='visible'
  //             variants={mainVariant}
  //         >
  //         {contactItems.map((item, idx) => (
  //                                     <motion.div
  //                                         variants={divVariant}
  //                                         key={idx}
  //                                         >
  //                                             <ContactLink
  //                                                 firstLineText={item.firstLineText}
  //                                                 secondLineText={item.secondLineText}
  //                                                 url={item.url}
  //                                                 isDownload={item.isDownload}
  //                                             />
  //                                     </motion.div>
  //                                 ))}
  // </motion.main>
}
