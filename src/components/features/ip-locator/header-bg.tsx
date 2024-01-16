import Image from "next/image";

export const HeaderBg = () => {
  return (
    <div>
      <Image
        src={"/img/pattern-bg-desktop.png"}
        alt="header bg"
        fill
        className="hidden sm:block object-cover object-center"
      />
      <Image
        src={"/img/pattern-bg-mobile.png"}
        fill
        alt="header bg"
        className="block sm:hidden object-cover object-center"
      />
    </div>
  );
};
