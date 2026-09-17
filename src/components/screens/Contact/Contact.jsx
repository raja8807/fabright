import React from "react";
import styles from "./Contact.module.scss";
import PageHero from "@/components/common/PageHero/PageHero";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { BsTelephone } from "react-icons/bs";
import FONTS from "@/styles/fonts";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import { CONTACT_DETAILS } from "@/constants/contact_details";

const ContactScreen = () => {
  return (
    <>
      <div className={styles.ContactScreen}>
        <PageHero
          title="Contact us"
          head="Solar Solutions for a Stronger Tomorrow"
        />
        <CustomContainer lg>
          <div className={styles.cont}>
            <div className={styles.wrap}>
              <div className={styles.left} data-aos="fade-right">
                <ExpandOnView className={styles.img}></ExpandOnView>
                <div className={styles.contacts}>
                  <div>
                    <div className={styles.icon}>
                      <BsTelephone />
                    </div>
                    <div className="">
                      <h4>Visit Our Office</h4>
                      <p className={styles.address}>
                        {CONTACT_DETAILS.address.line1}
                      </p>
                      <p className={styles.address}>
                        {CONTACT_DETAILS.address.line2}
                      </p>
                      <p className={styles.address}>
                        {CONTACT_DETAILS.address.line3}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.icon}>
                      <BsTelephone />
                    </div>
                    <div className="">
                      <h4>Call Us Anytime</h4>
                      <p>{CONTACT_DETAILS.phone.text}</p>
                    </div>
                  </div>
                  <div>
                    <div className={styles.icon}>
                      <BsTelephone />
                    </div>
                    <div className="">
                      <h4>Send Us Mail </h4>
                      <p>{CONTACT_DETAILS.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.right} data-aos="fade-left">
                <SectionHeader
                  title={"Send us email"}
                  head={"Request a Free Quote"}
                  caption={"We look forward to hearing from you."}
                />
                <form>
                  <div className={styles.row}>
                    <div className={styles.CustomInput}>
                      <label className={FONTS.font2} htmlFor="name">
                        Name
                      </label>
                      <input name="name" placeholder="Full Name" />
                    </div>

                    <div className={styles.CustomInput}>
                      <label className={FONTS.font2} htmlFor="email">
                        Email
                      </label>
                      <input name="email" placeholder="Your Email" />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.CustomInput}>
                      <label className={FONTS.font2} htmlFor="phone">
                        Phone Number
                      </label>
                      <input name="phone" placeholder="your Phone" />
                    </div>

                    <div className={styles.CustomInput}>
                      <label className={FONTS.font2} htmlFor="type">
                        Contact Subject
                      </label>
                      <select name="type">
                        <option value="xx">General Inquiry</option>
                        <option value="2">Support</option>
                        <option value="2">Consultation</option>
                      </select>
                      {/* <input name="ty" placeholder="Your Email" /> */}
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.CustomInput}>
                      <label className={FONTS.font2} htmlFor="name">
                        Message
                      </label>
                      <textarea name="message" placeholder="Your Message.." />
                    </div>
                  </div>

                  <CustomButton variant={2}>Submit Now</CustomButton>
                </form>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>

      <ExpandOnView direction="top">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5417143478107!2d78.37623917486997!3d17.43376750146795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9168c08c1f79%3A0xc8d577c5a9017e25!2sFABRIGHT%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1789463918047!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </ExpandOnView>
    </>
  );
};

export default ContactScreen;
