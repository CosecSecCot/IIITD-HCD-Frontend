import Banner from "@/features/pages/study/components/Banner";
import CoursesSection, {
  Course,
} from "@/features/pages/study/courses/components/CoursesSection";

export const dynamic = "force-dynamic";

export default async function Page(pageProps: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const searchParams = await pageProps.searchParams;
  const res = await fetch("http://localhost:3000/courses.json").catch(
    (reason) => console.log("[ERROR]", reason),
  );
  const data = await res?.json();

  if (!data || !data.data || data.data.length == 0) {
    return (
      <div>
        <div>No Courses Found!</div>
      </div>
    );
  }

  const courses: Course[] = data.data.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (course: any, index: number): Course => {
      return {
        id: index + 1,
        credits: `${course["Credits"]} Credit course`,
        title: course["Course Name"],
        acronym: course["Course Acronym"],
        code: course["Course Code"],
        prerequisites: course["Prerequisites"],
        mandatory: course["Mandatory"],
        url: course["Link"],
      };
    },
  );

  return (
    <>
      <Banner
        title={"Course Directory"}
        subtitle={"B.Tech & PhD Options"}
        sideText={
          "Design tomorrow's information technology products, services and systems which combine emerging technologies"
        }
      />
      <main className="xl:w-[1280px] mx-auto px-8 min-h-screen mt-[30px] mb-[10vh]">
        <CoursesSection courses={courses} filter={searchParams.filter} />
      </main>
    </>
  );
}
