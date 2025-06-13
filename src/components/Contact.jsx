import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <section
      id="contact"
      className=" lg:w-[50%] mx-auto rounded-md gap-4 p-4 pt-0"
    >
      <h5 className="text-3xl font-bold  my-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
        Let's connect
      </h5>
      <p className="text-[var(--lightgray)] text-base mb-4 max-w-wd text-center">
        I'm actively open to new opportunities. Feel free to reach out via
        email, LinkedIn or WhatsApp — I'd be glad to hear from you!
      </p>
      <div className="flex gap-5 justify-center items-center">
        <Link href="mailto:aagamdoshi1100@gmail.com">
          <Image
            width="48"
            height="48"
            className="object-contain"
            src="https://img.icons8.com/color/96/gmail-new.png"
            alt="gmail-new"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/aagamdoshi1100" target="_blank">
          <Image
            width="48"
            height="48"
            className="object-contain"
            src="https://img.icons8.com/fluency/96/linkedin.png"
            alt="linkedin"
          />
        </Link>
        <Link
          href="https://wa.me/918169975445?text=Hi"
          target="_blank"
          rel="noopener noreferrer"
          className="object-contain"
          aria-label="Connect on LinkedIn"
        >
          <Image
            unoptimized
            width="40"
            height="40"
            src="https://img.icons8.com/color/98/whatsapp--v1.png"
            className="object-contain"
            alt="whatsapp--v1"
          />
        </Link>
        <Link
          href="tel:8169975445"
          target="_blank"
          rel="noopener noreferrer"
          className="object-contain"
          aria-label="Mobile Number"
        >
          <Image
            unoptimized
            width="40"
            height="40"
            src="https://img.icons8.com/fluency/48/phone--v1.png"
            className="object-contain"
            alt="whatsapp--v1"
          />
        </Link>
      </div>
    </section>
  );
}

export default Contact;
