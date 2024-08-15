export default function SectionThree() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-5">
      <div className="grid grid-cols-2 gap-3 md:w-1/2">
        <img
          className="rounded object-cover w-full h-36 md:h-96"
          src="images/SectionThree/lawyer-1.jpg"
        ></img>
        <img
          className="rounded object-cover w-full h-36 md:h-96"
          src="images/SectionThree/lawyer-2.jpg"
        ></img>
        <img
          className="rounded object-cover w-full h-36 md:h-96"
          src="images/SectionThree/lawyer-3.webp"
        ></img>
        <img
          className="rounded object-cover w-full h-36 md:h-96"
          src="images/SectionThree/lawyer-4.jpg"
        ></img>
      </div>

      <div className="w-96 ml-8 text-center mt-5 md:text-start">
        <p className="text-gray-500 font-roboto text-5xl md:w-24 md:tracking-widest">
          TEAM
        </p>
        <p className="text-lg tracking-wide font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <br />
        <p className="text-lg tracking-wide font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </section>
  );
}
