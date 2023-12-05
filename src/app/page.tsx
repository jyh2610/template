import Banner from "@/components/Banner";
import TopList from "@/components/ItemList/TopList";
import { Section } from "@/components/mainImg/Section";
import MonthlyPromo from "@/components/promotion/MonthlyPromo";
import TagFrame from "@/components/tag/TagFrame";

export default function Home() {
  return (
    <>
      <Section />
      <section className="p-8 max-w-[1920px] space-y-28">
        <TopList title="MD’S PICK" />
        <TopList title="지금, 가장 HOT한 제품" />
        <div className="flex gap-8">
          <TagFrame />
          <MonthlyPromo />
        </div>
      </section>
      <Banner />
    </>
  );
}
