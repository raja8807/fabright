import React from "react";
import styles from "./Contact.module.scss";
import PageHero from "@/components/common/PageHero/PageHero";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const ContactScreen = () => {
  return (
    <div className={styles.ContactScreen}>
      <PageHero
        title="Contact us"
        head="Solar Solutions for a Stronger Tomorrow"
      />
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.wrap}>
            <div className={styles.left}>left</div>
            <div className={styles.right}>
              <SectionHeader
                title={"Send us email"}
                head={"Request a Free Quote"}
                caption={'We look forward to hearing from you.'}
              />
              <form>
                <div className={styles.row}>
                  <div className={styles.CustomInput}>
                    <label htmlFor="name">Name</label>
                    <input name="hame" placeholder="Full Name" />
                  </div>

                  <div className={styles.CustomInput}>
                    <label htmlFor="email">Name</label>
                    <input name="email" placeholder="Your Email" />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.CustomInput}>
                    <label htmlFor="name">Name</label>
                    <input name="hame" placeholder="Full Name" />
                  </div>

                  <div className={styles.CustomInput}>
                    <label htmlFor="email">Name</label>
                    <input name="email" placeholder="Your Email" />
                  </div>
                </div>

                <CustomButton variant={2}>Submit Now</CustomButton>
              </form>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default ContactScreen;
