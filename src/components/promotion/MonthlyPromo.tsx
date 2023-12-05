import Promotion from "./Promotion";

function MonthlyPromo() {
  const promoData = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-2/3 ">
      <p className="font-bold text-2xl mb-7">쿠첸 이달의 프로모션</p>
      <div className="grid grid-cols-2 gap-5">
        {promoData.map((item) => (
          <Promotion key={item} />
        ))}
      </div>
    </div>
  );
}

export default MonthlyPromo;
