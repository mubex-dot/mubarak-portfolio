interface SectionHeaderProps {
  sectionNumber: string;
  sectionName: string;
}

const SectionHeader = ({ sectionNumber, sectionName }: SectionHeaderProps) => {
  return (
    <div className="flex w-full items-center gap-6 my-10 sm:my-15">
      <div className="flex gap-6 items-center ">
        <p className="font-secondary text-primary text-lg">{sectionNumber}.</p>
        <h2 className="text-[#FCFBF8] text-4xl md:text-5xl shrink-0 whitespace-nowrap">
          {sectionName}
        </h2>
      </div>
      <div className="grow bg-[#16213C] h-0.5"></div>
    </div>
  );
};

export default SectionHeader;
