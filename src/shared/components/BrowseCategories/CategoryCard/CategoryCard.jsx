function CategoryCard({
  name = "KeepitReal",
  icon = "https://via.placeholder.com/120x120",
  bgImg = "https://via.placeholder.com/240x240",
}) {
  return (
    <div className="h-[316px] bg-neutral-700 rounded-2xl flex-col justify-start items-center inline-flex">
      <div className="w-full h-60 relative rounded-tl-2xl rounded-tr-2xl">
        <div className="w-full h-60 left-0 top-0 absolute justify-center items-center inline-flex">
          <img
            className="grow shrink basis-0 self-stretch rounded-tl-2xl rounded-tr-2xl"
            src={bgImg}
          />
        </div>
        <div className="w-full h-60 left-0 top-0 absolute bg-white bg-opacity-10 rounded-tl-2xl rounded-tr-2xl backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
          <div className="w-[100px] h-[100px] relative">
            <img src={icon} alt="" />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[76px] px-3 lg:px-[30px] pt-5 pb-[25px] flex-col justify-start items-start gap-[25px] flex">
        <div className="self-stretch text-white text-[.8rem] lg:text-[22px] font-semibold capitalize leading-loose">
          {name}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
