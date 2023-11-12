function CollectionCard({
  primaryImg,
  secondaryImg,
  secondaryImgTwo,
  collectionName,
  artistName,
  avatar,
}) {
  return (
    <div className={`flex flex-col gap-2`}>
      <img className="h-[330px] w-full rounded-2xl" src={primaryImg} />

      <div className="grid h-[100px] w-full grid-cols-3 items-start justify-start gap-[15px]">
        <img
          className="h-[100px] w-full shrink grow basis-0 rounded-2xl"
          src={secondaryImg}
        />
        <img
          className="h-[100px] w-full shrink grow basis-0 rounded-2xl"
          src={secondaryImgTwo}
        />
        <div className="inline-flex h-[100px] shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-2xl bg-purple-500 px-[15px] py-8">
          <div className="text-center text-[22px] font-bold capitalize leading-9 text-white">
            1025+
          </div>
        </div>
      </div>

      {/* Collection Name */}
      <div className="w-[330px] text-[22px] font-semibold capitalize leading-loose text-white">
        {collectionName}
      </div>

      {/* Artist Card */}
      <div className="inline-flex h-6 w-[330px] items-start justify-start gap-3 rounded-2xl">
        <div className="flex items-start justify-start gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center">
            <img className="h-6 w-6 rounded-[100px]" src={avatar} />
          </div>
        </div>
        <div className="shrink grow basis-0 text-[16px] font-normal leading-snug text-white">
          {artistName}
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
