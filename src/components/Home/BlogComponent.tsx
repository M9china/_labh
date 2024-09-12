import Link from "next/link";

export const BlogComponent = () => {
  return (
    <main className="bg-white px-4 text-black pt-[4rem]">
      <h1 className="text-2xl text-blue-400 font-semibold py-5">{`Let’s all be happy.`}</h1>
      <p className="py-5">{`Happiness made in cotton. Est. 2020 Let’s all be happy. (LABH for short)
      is a South African streetwear brand which aims to spread positivity and
      happiness with its roots deeply nested in creativity, culture and
      self-expression.`}</p>{" "}
      <p className="">{`LABH was born from the busy streets of Kagiso, west side of Johannesburg.
      LABH was founded in 2020 peak COVID-19. LABH is set out on a mission to
      redefine style and fashion, embracing raw authenticity of street culture &
      spreading happiness through fashion.`}</p>
      <p className='mt-3'>{` LABH is more than just a brand, it’s
      a movement that pushes culture, fashion, art, creativity and mostly
      important HAPPINESS.`}</p>{" "}
      <p className="py-5">
        From the the logo to the vibrant colours of the garments. With every
        collection, it reaffirms its commitment to spreading the culture and
        keep the streetwear movement relevant.
      </p>{" "}
      <Link href="mailto:letsallbehappyapparel@gmail.com">
        email: letsallbehappyapparel@gmail.com
      </Link>
      <br />
      <Link
        href="https://instagram.com/_letsallbehappy.za"
        target="_blank"
        rel="noopener noreferrer"
      >
        instagram: _letsallbehappy.za
      </Link>
      <br />
      <Link
        href="https://wa.me/27659479593"
        target="_blank"
        rel="noopener noreferrer"
      >
        WA: +27659479593
      </Link>
    </main>
  );
};
