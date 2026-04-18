"use client";

import { Award, ExternalLink, FileCheck, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim";

// Set to true to show the coming soon state instead of achievements
const COMING_SOON = true;

const achievements = [
  {
    title: "Best Paper Award at ACM CHI 2025",
    student: "Ananya Sharma",
    date: "April 2025",
    category: "Research",
    description:
      'Ananya received the Best Paper Award at ACM CHI 2025 for her research on "Inclusive Voice Interfaces for Multilingual Users in South Asia." The paper was co-authored with Prof. Rajiv Ratn Shah and presented at the conference in Yokohama, Japan. The work addresses a critical gap in voice interface design for linguistically diverse populations, proposing a framework that accommodates code-switching and dialectal variation in real-time speech interactions.',
    image: "/aid-lab-nu-visit.jpeg",
  },
  {
    title: "Winner — Adobe Design Challenge 2025",
    student: "Karan Mehta & Priya Nair",
    date: "February 2025",
    category: "Design Competition",
    description:
      "Karan and Priya secured first place at the Adobe Design Challenge 2025 for their project on reimagining accessible public transit navigation for visually impaired commuters. Their prototype was praised for its empathy-driven approach and technical execution, combining spatial audio cues with haptic feedback to create a seamless navigation experience that works across Indian metro systems.",
    image: "/museo-visit.jpeg",
  },
];

export default function AchievementsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const breadcrumbs = ["student-led", "achievements"];

  return (
    <>
      <section
        role="banner"
        className="relative h-screen text-white flex flex-col justify-center shadow-2xl shadow-white"
      >
        <div className="relative z-30 mx-auto xl:w-[1280px] p-8">
          <div className="absolute z-30 -top-[128px] lg:-top-[100px] right-8 text-[12px] lg:text-[20px]">
            {breadcrumbs.map((breadcrumb, index) => {
              if (index < breadcrumbs.length - 1) {
                return (
                  <span key={index}>
                    <span
                      className="uppercase"
                      style={{
                        color: `color-mix(in oklab, white ${
                          ((index + 1) / breadcrumbs.length) * 100
                        }%, transparent)`,
                      }}
                    >
                      {breadcrumb}
                      {index === breadcrumbs.length - 1 ? "" : " / "}
                    </span>
                  </span>
                );
              }

              return (
                <span key={index} className="uppercase">
                  {breadcrumb}
                </span>
              );
            })}
          </div>
          <p className="text-[18px] lg:text-[30px] text-white/60 leading-tight uppercase">
            Student-Led
          </p>
          <h1 className="text-[38px] lg:text-[80px] leading-none uppercase">
            Achievements
          </h1>
          <p className="mt-[1em] lg:w-3/4 font-light text-[16px] lg:text-[26px] leading-tight">
            Celebrating the outstanding accomplishments of HCD students —
            from research publications and design awards to hackathon wins and
            fellowships.
          </p>
          <div className="mt-[2em] flex gap-x-[1em] gap-y-[0.5em] flex-wrap">
            <button
              onClick={() => setModalOpen(true)}
              className="font-normal w-max flex justify-center items-center gap-[1em] px-[2em] lg:px-[2em] py-[0.5em] text-[12px] lg:text-[18px] border border-white bg-transparent text-white backdrop-blur-lg hover:backdrop-blur-2xl rounded-full transition-all duration-300 cursor-pointer"
            >
              <Award className="w-[14px] lg:w-[18px] h-auto" />
              <LetterSwapForward
                label="SUBMIT YOUR ACHIEVEMENT"
                staggerDuration={0.005}
                className="w-max"
              />
            </button>
          </div>
        </div>
        <div className="absolute z-20 inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-brand-accent2 via-brand-accent2-130/60 to-black/0" />
        <div className="absolute z-10 inset-0 w-full h-full pointer-events-none bg-brand-accent2/20" />
        <div className="absolute inset-0 w-full h-full bg-brand-accent2" />
      </section>

      <main className="mt-[30px] lg:mt-[128px] mb-[10vh]">
        <article className="mx-auto xl:w-[1280px] px-8">
          {COMING_SOON ? (
            <ComingSoon />
          ) : (
            <section>
              <h2 className="font-medium text-[18px] lg:text-[28px] text-brand-accent2 uppercase">
                Featured Achievements
              </h2>
              <p className="mt-2 text-[14px] lg:text-[20px] font-light">
                A glimpse of the incredible work being done by our students.
              </p>
              <div className="mt-8 space-y-6 lg:space-y-10">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="group border border-brand-accent2/30 hover:border-brand-accent2 bg-white transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative w-full h-[200px] lg:h-[360px] overflow-hidden">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        width={1280}
                        height={720}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                      <div className="absolute bottom-0 left-0 w-full p-6 lg:p-10 flex items-end justify-between gap-4">
                        <span className="inline-block px-4 py-1.5 text-[11px] lg:text-[14px] font-medium uppercase tracking-wide bg-white/20 backdrop-blur-md text-white border border-white/30">
                          {achievement.category}
                        </span>
                        <span className="text-[12px] lg:text-[16px] text-white/80 font-light whitespace-nowrap">
                          {achievement.date}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 lg:p-10">
                      <h3 className="font-medium text-[20px] lg:text-[32px] leading-tight text-brand-accent2-130">
                        {achievement.title}
                      </h3>
                      <p className="mt-2 text-[14px] lg:text-[18px] font-medium text-brand-accent2">
                        {achievement.student}
                      </p>
                      <p className="mt-4 text-[14px] lg:text-[20px] font-light leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Submit button at bottom */}
          <section className="mt-[48px] lg:mt-[80px]">
            <button
              onClick={() => setModalOpen(true)}
              className="font-normal w-max flex justify-center items-center gap-[1em] px-[2em] lg:px-[4em] py-[0.75em] text-[14px] lg:text-[18px] border border-brand-accent2 bg-brand-accent2 text-white hover:bg-brand-accent2-130 backdrop-blur-lg transition-all duration-300 cursor-pointer"
            >
              <Award className="w-[14px] lg:w-[18px] h-auto" />
              <LetterSwapForward
                label="SUBMIT YOUR ACHIEVEMENT"
                staggerDuration={0.005}
                className="w-max"
              />
            </button>
          </section>
        </article>
      </main>

      {/* Verification Process Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[99998] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[720px] max-h-[90vh] overflow-y-auto bg-white font-anybody"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 lg:top-6 lg:right-6 p-2 hover:bg-brand-accent2/10 transition-colors duration-200 cursor-pointer"
            >
              <X className="w-[20px] lg:w-[24px] h-auto text-brand-accent2" />
            </button>

            <div className="p-6 lg:p-[40px]">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-[20px] lg:w-[28px] h-auto text-brand-accent2" />
                <h3 className="font-medium text-[16px] lg:text-[24px] text-brand-accent2">
                  Verification Process
                </h3>
              </div>
              <p className="text-[14px] lg:text-[18px] font-light">
                To maintain the authenticity of achievements showcased here,
                all submissions undergo a simple review process:
              </p>
              <ol className="mt-4 space-y-3 text-[14px] lg:text-[18px] font-light">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] flex items-center justify-center bg-brand-accent2 text-white text-[13px] lg:text-[15px] font-medium">
                    1
                  </span>
                  <span>
                    <strong className="font-medium">Submit</strong> — Fill out
                    the Google Form with details and proof of your achievement,
                    and send a confirmation email to{" "}
                    <a
                      href="mailto:admin-hcd@iiitd.ac.in"
                      className="text-brand-accent2 underline"
                    >
                      admin-hcd@iiitd.ac.in
                    </a>{" "}
                    with the subject line &ldquo;Achievement Submission —
                    [Your Name]&rdquo;.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] flex items-center justify-center bg-brand-accent2 text-white text-[13px] lg:text-[15px] font-medium">
                    2
                  </span>
                  <span>
                    <strong className="font-medium">Review</strong> — The HCD
                    admin team verifies the submission by cross-checking the
                    provided proof (certificate, link, announcement, etc.)
                    and may reach out to the faculty mentor if listed.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] flex items-center justify-center bg-brand-accent2 text-white text-[13px] lg:text-[15px] font-medium">
                    3
                  </span>
                  <span>
                    <strong className="font-medium">Publish</strong> — Once
                    verified, the achievement is added to this page and
                    shared across HCD channels.
                  </span>
                </li>
              </ol>

              <div className="mt-8">
                <a
                  href="https://forms.gle/SSG3r7YJo9yg4ojZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal w-max flex justify-center items-center gap-[1em] px-[2em] lg:px-[4em] py-[0.75em] text-[14px] lg:text-[18px] border border-brand-accent2 bg-brand-accent2 text-white hover:bg-brand-accent2-130 backdrop-blur-lg transition-all duration-300"
                >
                  <LetterSwapForward
                    label="OPEN SUBMISSION FORM"
                    staggerDuration={0.005}
                    className="w-max"
                  />
                  <ExternalLink className="w-[14px] lg:w-[18px] h-auto" />
                </a>
                <p className="mt-3 text-[12px] lg:text-[15px] font-light text-brand-gray2">
                  Opens in a new tab. Remember to email admin-hcd@iiitd.ac.in after submitting.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ComingSoon() {
  return (
    <section className="relative py-16 lg:py-24 border border-brand-accent2 bg-brand-accent2/5 backdrop-blur-lg text-center">
      <div className="flex justify-center mb-6">
        <div className="p-5 rounded-full bg-brand-accent2/10 border border-brand-accent2/20">
          <Award className="w-[40px] lg:w-[56px] h-auto text-brand-accent2" />
        </div>
      </div>
      <h2 className="font-semibold text-[28px] lg:text-[48px] text-brand-accent2 leading-tight">
        Coming Soon
      </h2>
      <p className="mt-[0.5em] mx-auto max-w-[640px] px-8 text-[14px] lg:text-[20px] font-light">
        We&apos;re building a comprehensive showcase of student achievements.
        This page will feature verified accomplishments from the HCD
        community — research awards, design competition wins, fellowships,
        and more.
      </p>
    </section>
  );
}
