import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <div className="about_container">
        <p className="introduction">
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️ <br />
          <br /> I am fluent in classics like{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            HTML, CSS, Javascript and Python.{" "}
          </span>
          My field of Interest&apos;s are building new{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Web Technologies and Products{" "}
          </span>
          and also in areas related to Automation and Dashboards. <br />
          <br /> Whenever possible, I also apply my passion for developing
          products with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {" "}
            Node.js and Modern Javascript Library and Frameworks like React.js,
            TypeScript, Redux and Next.js{" "}
          </span>
        </p>
        <Image
          src="https://resume-on-the-web-eight.vercel.app/static/media/avatar.5852f40f.svg"
          alt="my-image"
          width={100}
          height={100}
          className="my_picture"
        />
      </div>
    </>
  );
}
