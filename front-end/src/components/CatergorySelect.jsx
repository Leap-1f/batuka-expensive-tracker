import { Addsvg } from "../../public/Addsvg";

export const CategorySelect = (props) => {
  const { categorys } = [props];
  return (
    <div className="rounded-[12px] flex flex-col w-[384px] shadow-sm">
      <div className="px-[16px] py-[16px] flex gap-[12px] border-b-[1px] border-solid">
        <Addsvg></Addsvg>
        <div>Add Category</div>
      </div>
      <div>
        <div className="px-[16px] py-[16px] flex gap-[12px]"></div>
      </div>
    </div>
  );
};
