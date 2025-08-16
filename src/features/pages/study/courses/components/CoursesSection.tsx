"use client";

import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export type Course = {
  id: number;
  credits: string;
  title: string;
  acronym: string;
  code: string;
  prerequisites: string;
  mandatory: boolean;
  url: string;
};

export default function CoursesSection({
  courses,
  filter,
}: {
  courses: Course[];
  filter?: string;
}) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div
        className="grid grid-cols-2 xl:grid-cols-3 grid-rows-1 text-[12px] lg:text-[18px]"
        role="tablist"
      >
        <div className="col-span-full">
          <p className="text-[24px]">Search</p>
          <input
            type="text"
            placeholder="Enter Course Name or Code..."
            className="w-full mt-[0.25em] mb-[1em] px-[1.75em] py-[0.5em] border border-black/30 text-[16px]"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
        <Button
          text="All Courses"
          active={filter !== "Core" && filter !== "Elective"}
          label={"All"}
        />
        <Button text="Core Courses" active={filter === "Core"} label={"Core"} />
        <Button
          text="Elective Courses"
          active={filter === "Elective"}
          label={"Elective"}
        />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-[30px]">
        {courses
          .filter((course) => {
            switch (filter) {
              case "Core":
                return course.mandatory;
              case "Elective":
                return !course.mandatory;
              case "All":
              default:
                return true;
            }
          })
          .filter((course) => course.title.toLowerCase().includes(search))
          .map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
      </section>
    </>
  );
}

function Button({
  text,
  active,
  label,
}: {
  text: string;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      className={`flex gap-[12px] lg:gap-[24px] items-center justify-center py-[0.5em] border border-black/30 ${
        active ? "bg-brand-accent2 text-white" : ""
      }`}
      href={`/study/courses?filter=${label}`}
      scroll={false}
    >
      <Search className="w-[12px] lg:w-[16px] aspect-square h-auto" />
      <LetterSwapForward label={text} staggerDuration={0.005} />
    </Link>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="w-full flex flex-col justify-between gap-[32px] lg:gap-[48px] p-[28px] lg:p-[40px] border border-brand-accent2/25 bg-brand-accent2/[0.02] backdrop-blur-md hover:backdrop-blur-2xl hover:bg-brand-accent2/5 transition-all duration-200">
      <div>
        <p className="text-[12px] lg:text-[16px] text-brand-accent2">
          {course.credits}
        </p>
        <h3 className="text-[18px] lg:text-[24px] leading-tight">
          {course.title}
        </h3>
        <div className="mt-[1em] text-[14px] lg:text-[18px] text-brand-gray4">
          <div className="flex justify-between">
            <p>
              <span className="text-brand-accent2">Acronym: </span>
              {course.acronym}
            </p>
            <p>
              <span className="text-brand-accent2 text-right">Code: </span>
              {course.code}
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              <span className="text-brand-accent2">Prerequisites: </span>
              {course.prerequisites}
            </p>
          </div>
        </div>
      </div>
      <div className="reveal-animation-opacity-only flex justify-between flex-row-reverse flex-wrap w-full text-brand-accent2-130">
        <Link
          href={course.url}
          target="_blank"
          className="reveal-animation-opacity-only flex items-center text-[14px] lg:text-[18px] gap-[0.5em]"
        >
          <LetterSwapForward label="VIEW DETAILS" staggerDuration={0.005} />
          <ArrowRight className="w-[16px] h-[16px]" />
        </Link>
      </div>
    </div>
  );
}
