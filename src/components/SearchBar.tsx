
import { Search } from "lucide-react";

const DefaultSearchBar = () => {
  return (
    <form className=' mb-4 flex bg-gofun h-[46px] w-[388px] border-[1px] border-dobunezumi/10 hover:border-dobunezumi rounded-full'>
      <div className=" w-full h-full flex justify-between pr-[2px] py-[2px]">
        <input className=" focus:outline-none rounded-l-full pl-2 w-full text-dobunezumi" placeholder='Search'></input>
        <button className=" h-full bg-dobunezumi rounded-full aspect-square flex justify-center items-center"><Search className=" stroke-shironeri" /></button>
      </div>

    </form>
  );
};

export default DefaultSearchBar;