import { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalContextProvider';
import DarkModeButton from '../Button components/DarkModeButton/DarkModeButton';

const Navbar = () => {
  const {theme} = useContext(GlobalContext)
  return (
    <div className={`${theme=='dark'?'bg-nutralColorNineHundread border border-primaryNineHundread':'bg-white'} py-3 `}>
      <div className={` container mx-auto flex flex-row items-center justify-between  text-xl text-blackHigh font-DmSans  `}>
        <div>
          <h2 className='text-3xl text-semibold text-justify font-DmSans text-slate-800 dark:text-neutral-300 '>Logo</h2>
        </div>
        <div className="flex gap-[32px] items-center">
          
          <button className="cursor-pointer [border:none] py-2 px-6 bg-primary rounded-md focus:bg-gray-500 flex flex-row items-center justify-center gap-[16px]">
            <div className="flex flex-row items-center justify-center text-semibold text-white">
              Login
            </div>
          </button>
          <div>
            <DarkModeButton/>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
