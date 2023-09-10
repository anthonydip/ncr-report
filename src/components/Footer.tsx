const Footer = () => {
  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      <div className="w-[1200px] h-[150px] mx-auto mt-44 bg-gradient-to-br from-[#5FDB5F] to-[#CAF1CA] rounded-full blur-3xl z-1" />
      <div className="w-screen -mt-32 h-[2px] bg-gradient-to-br from-[#5FDB5F] via-[#A2ECA2] to-[#CAF1CA]" />

      <div className="sticky flex justify-between items-center h-20 bg-gray-950 text-sm text-slate-300 px-3">
        <p>Anthony Dip, Computer Science @ UoG</p>
        <p>Made with Next.js + TypeScript, TailwindCSS and HeadlessUI</p>
      </div>
    </div>
  );
};

export default Footer;