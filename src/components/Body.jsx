import "../css/eo.css";
const Body = () => {
  return (
    <section className="grid grid-cols-2 container mx-auto place-items-center h-[90vh]">
      <div className="left">
        <h1><strong>H E L L O</strong></h1>
        <h3>
          I'm <strong>Mitchell a</strong> Web Developer
        </h3>
        <p>
          Welcome to my web developer l'm Mitchell, a skilled and creative web
          developer with a passion for creating responsive, and user-friendly
          websites. l've worked on a variety of web ranging from personal blogs
          to e-commerce platforms.
        </p>
        <div className="buttons">
          <button>
            <span>Hire me</span>
          </button>
          <button>
            <span>Portafolio</span>
          </button>
        </div>
      </div>
        <div className="nsmile">
        <img src="/img/1smile.jpg" alt="nsmile" />
        </div>
    </section>
  );
};

export default Body;
