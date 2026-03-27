import { Metadata } from "next";
import AchievementsPage from "@/features/pages/student-led/achievements/AchievementsPage";

export const metadata: Metadata = {
  title: "Student Achievements | HCD IIIT-Delhi",
  description:
    "Celebrating outstanding achievements by HCD students at IIIT-Delhi. Explore awards, publications, competition wins, and more from our talented community.",
  keywords: [
    "student achievements",
    "HCD IIITD",
    "awards",
    "recognition",
    "design competition",
  ],
  authors: [{ name: "IIIT Delhi HCD" }],
  creator: "IIIT Delhi HCD",
  publisher: "IIIT Delhi",
  alternates: {
    canonical: "/student-led/achievements",
  },

  openGraph: {
    siteName: "HCD IIITD",
    locale: "en-IN",
  },

  twitter: {
    card: "summary_large_image",
    creator: "@hcdiiitd",
  },
};

export default function Page() {
  return <AchievementsPage />;
}
