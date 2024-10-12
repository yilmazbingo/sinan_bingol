const AboutMe = () => {
  return (
    <div className="flex flex-col  break-words w-full ">
      <p className="about-me-text  lg:text-base xl:text-lg 2xl:text-2xl md:text-lg sm:text-sm sm:flex-col md:flex-row  break-words  inline-flex">
        Genç ve dinamik bir gayrimenkul danışmanı olarak, doğru yatırımlarla
        hayatınıza değer katmayı hedefliyorum. Yeni fırsatları keşfetmek ve en
        iyi seçenekleri sunmak için her gün enerjimi ve tutkumla çalışıyorum.
        Gayrimenkul dünyasında güvenilir bir yol arkadaşı arıyorsanız, birlikte
        adım atarak hayal ettiğiniz eve veya yatırıma ulaşabiliriz.
        <span className="motto-text lg:text-2xl">
          Şimdi harekete geçin, hayallerinizin anahtarı düşündüğünüzden çok daha
          yakın!
        </span>
      </p>
    </div>
  );
};

export default AboutMe;
