 import Logo from '@/public/logo/Outlook-Palm (1).png';

const PageLoading  = () => {
    return (
        <div className="fixed bg-[#fffffff5] h-screen w-screen top-0 left-0 z-50  
    flex items-center justify-center ">
    <img loading='lazy' width={300} height={300}  src={Logo} alt="palm logo" 
      />
    </div>
    );
};

export default PageLoading;