function LoginLine() {
  const data = ["회원가입 |", "로그인 |", "고객센터"];

  return (
    <div className="w-screen h-[34px] bg-neutral-100">
      <div className="flex justify-between items-center w-4/5 h-full mx-auto">
        <div className="w-[65px] h-[14px] [font-family:'Inter-Medium',Helvetica] font-medium text-black tracking-0 leading-[14.4px] whitespace-nowrap">
          쿠첸몰 11월 신규회원 혜택
        </div>
        <div className="flex">
          {data.map((item, idx) => (
            <div key={idx} className=" text-sm [font-family:'Inter-Regular',Helvetica] font-normal text-black tracking-0 leading-[14.4px] m-auto">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoginLine;
