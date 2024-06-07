import TextReveal from "@/components/ui/text-reveal";

export default async function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-[4rem] items-center justify-center bg-white dark:bg-zinc-800/50">
      <TextReveal text="I have completed many successful projects and have client happy with their results, hear them out." />
    </div>
  );
}
