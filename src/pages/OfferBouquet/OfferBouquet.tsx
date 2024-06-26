import React from "react";
import { useEffect } from "react";
import Container from "../../containers/Container/Container.tsx";
import Footer from "../../containers/Footer/Footer.tsx";
import OfferSite from "../../containers/OfferSite/OfferSite.tsx";
import imgOfferSite1 from "../../img/offer_site_2.jpg";

const OfferBouquet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <OfferSite
        offerSiteImg={imgOfferSite1}
        imgDescription="flowers"
        title="Bukiety"
        theme_1="Opis"
        description_1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        theme_2="Kwiaty do wyboru"
        description_2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        theme_3="Cena"
        description_3="Lorem ipsum dolor sit amet"
        theme_4="Czas realizacji"
        description_4="Lorem ipsum"
      />
      <Footer />
    </Container>
  );
};

export default OfferBouquet;
