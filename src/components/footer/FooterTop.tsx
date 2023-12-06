function FooterTop() {
  const left = ["개인정보처리방침 ", "이용약관 ", "이용안내 ", "내부정보관리규정 ", "정도경영신문고 "];
  const right = ["자주 묻는 질문 ", "대량 구매 문의 ", "비회원 주문 조회 ", "1:1문의"];

  const arrRederer = (arr: string[]) => {
    return (
      <div className="gap-4 flex font-bold text-l">
        {arr.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    );
  };
  return (
    <div className="w-full h-24 flex items-center justify-around border-y-2 [border-top-solid : style] [border-bottom-style : solid]">
      <div className="gap-10">{arrRederer(left)}</div>
      <div>{arrRederer(right)}</div>
    </div>
  );
}

export default FooterTop;
