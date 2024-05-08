const social_links = [
  {
    link: "https://www.facebook.com/profile.php?id=61550531365042",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "tp-f-fb",
  },
  {
    link: "https://www.instagram.com/nhealthcare1/",
    target: "_blank",
    icon: "fab fa-instagram",
    color: "tp-f-instagram",
  },
  {
    link: "https://www.linkedin.com/company/nhealthcare/",
    target: "_blank",
    icon: "fab fa-linkedin",
    color: "tp-f-twitter",
  },
  {
    link: "https://twitter.com/NHealthcare1",
    target: "_blank",
    icon: "fab fa-twitter",
    color: "tp-f-twitter",
  },
  {
      link: 'https://www.youtube.com/channel/UCeU1kfq1Oqffn1kJ1xL-Upw',
    target: "_blank",
    icon: "fab fa-youtube",
    color: "tp-f-instagram",
  }
 
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
