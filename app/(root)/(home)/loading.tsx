import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen flex-col">
      <section className="nav-padding w-full">
        <Skeleton className="h-[274px] rounded-lg bg-gray-500" />;
      </section>
      <section className="mt-6 flex w-full flex-col sm:mt-20">
        <Skeleton className="h-10 w-56 bg-gray-500" />;
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray-500" />
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray-500" />
          <Skeleton className="h-[440px] w-full sm:w-[356px] bg-gray-500" />
        </div>
      </section>
    </main>
  );
};

export default Loading;
