export default function SectionTwo() {
  return (
    <section className="flex flex-col sm:flex-row sm:space-x-20 sm:text-start space-x-0 items-center text-center justify-center">
      <div className="w-96 mt-6">
        <p className="font-roboto text-5xl sm:w-24 sm:tracking-widest">
          FOUNDERS TITLE
        </p>
        <p className="mt-2 font-roboto tracking-widest leading-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum has been the
          industrys standard dummy text ever since the 1500s.
        </p>
        <div className="flex space-x-5 items-center">
          <p className="ml-8 text-xl italic">John Williams</p>
          <img className="h-40" src="images/SectionTwo/signature.jpg"></img>
        </div>
      </div>

      <div>
        <img
          className="h-1/2 w-96 rounded"
          src="images/SectionTwo/president-img.jpg"
        ></img>
      </div>
    </section>
  );
}
