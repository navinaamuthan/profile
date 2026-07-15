import { personal } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line pb-4 pt-8 text-[13px] text-muted sm:mt-20">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p>Set in Newsreader and Inter · Dublin, Ireland</p>
      </div>
    </footer>
  );
}
