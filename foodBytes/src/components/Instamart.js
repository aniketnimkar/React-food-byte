import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <h3>{title}</h3>
      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}

      {isVisible && <p>{description}</p>}
    </>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>InstaMart</h1>
      <Section
        title={"About Instamaert"}
        Section
        description={
          "Instamart is not a well-known or widely recognized term or platform as of my knowledge cutoff in September 2021. It's possible that Instamart may be a regional or local service, or it could be a newly established platform that has gained popularity after my knowledge cutoff. Can you provide more specific information or context about Instamart so that I can assist you better? Instamart aims to deliver groceries in 15-30 minutes through a network of seller-owned dark stores that emerged from the learnings of Swiggy Stores, a hyperlocal delivery marketplace for groceries and other essentials that shut last year."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Team Instamaert"}
        Section
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
      <Section
        title={"Carrers"}
        Section
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={visibleSection === "carrer"}
        setIsVisible={() => setVisibleSection("carrer")}
      />
      {/* <AboutINstaMart />
      <DetailsofInstaMart />
      <TeamInstamart />
      <TemInstamart /> */}
    </div>
  );
};

export default Instamart;
