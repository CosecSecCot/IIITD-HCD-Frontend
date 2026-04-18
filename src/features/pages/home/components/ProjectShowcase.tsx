"use client";

import LinkButton from "@/components/LinkButton";
import Matter from "matter-js";
import { ArrowRight, RotateCcw, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const {
  Bodies,
  Body,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Runner,
  World,
} = Matter;

type TeamMember = {
  name: string;
  role?: string;
};

type Project = {
  title: string;
  course: string;
  team: TeamMember[];
  description: string;
  overview: string;
  tags?: string[];
  thumb: string;
};

const projects: Project[] = [
  {
    title: "Accessible Transit Navigation",
    course: "HCI Studio · 2025",
    team: [
      { name: "Karan Sharma", role: "Research & Interaction Design" },
      { name: "Priya Rao", role: "Prototyping & Haptics" },
    ],
    description:
      "Spatial audio + haptics for visually-impaired metro commuters.",
    overview:
      "Winner of the Adobe Design Challenge 2025. The team paired fieldwork at three Delhi metro stations with a wearable haptic belt and spatial audio cues, creating a navigation aid that works alongside a commuter's existing white cane.",
    tags: ["Accessibility", "Haptics", "Audio"],
    thumb: "/museo-visit.jpeg",
  },
  {
    title: "TelemetryTradeAI",
    course: "CSD Capstone · 2024",
    team: [{ name: "Siddhant Bali", role: "Solo Founder" }],
    description:
      "Top-100 startup under Startup India by DPIIT, Ministry of Commerce.",
    overview:
      "A final-year CSD capstone that turned into a venture-backed product. TelemetryTradeAI applies machine learning to high-frequency trading telemetry and was selected among the Top-100 startups under the Startup India initiative (DPIIT, Ministry of Commerce and Industry).",
    tags: ["ML", "Capstone", "Venture"],
    thumb: "/page-reveal/img3.png",
  },
  {
    title: "Inclusive Museum AR",
    course: "Field Studio · 2024",
    team: [
      { name: "Ananya Gupta", role: "Lead Designer" },
      { name: "Team AR", role: "Engineering" },
    ],
    description:
      "Augmented layers tested at Museo Camera for low-vision visitors.",
    overview:
      "An AR overlay layered over museum exhibits at Museo Camera (Gurgaon). Built and tested with low-vision visitors, the prototype surfaces contextual audio description and high-contrast captioning tied to the visitor's gaze.",
    tags: ["AR", "Accessibility", "Field Study"],
    thumb: "/aid-lab-nu-visit.jpeg",
  },
  {
    title: "Haptic Feedback Wearable",
    course: "Wearable Computing · 2024",
    team: [{ name: "Rohan Mehta", role: "Design & Engineering" }],
    description: "A wrist cuff that translates ambient audio into touch.",
    overview:
      "A soft-band wrist cuff that translates ambient audio into patterns of vibrotactile feedback. Built over three sprints in the Wearable Computing studio with an Arduino Nano 33 BLE and four LRA actuators.",
    tags: ["Wearables", "Haptics", "Prototyping"],
    thumb: "/students.png",
  },
  {
    title: "Regional Script Generator",
    course: "Type & Media · 2023",
    team: [
      { name: "Type & Media Cohort", role: "Collaborative Studio" },
    ],
    description:
      "Parametric Devanagari and Bangla glyphs tuned by stroke contrast.",
    overview:
      "A parametric typography system that generates Devanagari and Bangla glyphs from a shared skeleton, with stroke contrast, aperture, and terminal shape as editable axes. Produced as part of a semester-long Type & Media studio.",
    tags: ["Typography", "Parametric"],
    thumb: "/rnd-building.png",
  },
  {
    title: "Classroom Observation Tool",
    course: "Design Research · 2023",
    team: [
      { name: "Maya Iyer", role: "Research Lead" },
      { name: "Ravi Kumar", role: "Tool Development" },
    ],
    description: "Ethnographic notes from a semester inside HCD studios.",
    overview:
      "An iPad-first field tool built for design-research students. Captures structured ethnographic notes (observations, quotes, sketches) in real time during studio sessions, and exports to a shared research corpus.",
    tags: ["Research", "Ethnography", "Tool"],
    thumb: "/hcd/5Z4A17.webp",
  },
];

const formatTeam = (team: TeamMember[]) =>
  team.map((m) => m.name).join(" · ");

const CARD_W = 220;
const CARD_H = 280;

// Hand-tuned scatter — fractions of scene width/height + base tilt in degrees.
// fx values sit at 0.15 / 0.41 / 0.66 so the three-column grid stays centred
// (left and right gutters roughly equal, slight hand-drawn variance).
const scatter = [
  { fx: 0.15, fy: 0.07, rot: -8 },
  { fx: 0.41, fy: 0.02, rot: 5 },
  { fx: 0.66, fy: 0.09, rot: -4 },
  { fx: 0.15, fy: 0.55, rot: 7 },
  { fx: 0.41, fy: 0.5, rot: -6 },
  { fx: 0.66, fy: 0.57, rot: 3 },
];

export default function ProjectShowcase() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const resetRef = useRef<() => void>(() => {});
  const openModalRef = useRef<(idx: number) => void>(() => {});
  const [isResetting, setIsResetting] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const activeProject = activeIdx !== null ? projects[activeIdx] : null;

  useEffect(() => {
    openModalRef.current = (idx: number) => setActiveIdx(idx);
  }, []);

  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIdx]);

  const handleReset = () => {
    if (isResetting) return;
    setIsResetting(true);
    resetRef.current();
    window.setTimeout(() => setIsResetting(false), 800);
  };

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    let width = scene.clientWidth;
    let height = scene.clientHeight;

    const engine = Engine.create({ gravity: { x: 0, y: 0 } });
    const world = engine.world;

    const wallOpts = {
      isStatic: true,
      render: { visible: false },
      restitution: 0.2,
      friction: 0.6,
    };
    const floor = Bodies.rectangle(
      width / 2,
      height + 30,
      width + 60,
      60,
      wallOpts,
    );
    const leftWall = Bodies.rectangle(-30, height / 2, 60, height + 60, wallOpts);
    const rightWall = Bodies.rectangle(
      width + 30,
      height / 2,
      60,
      height + 60,
      wallOpts,
    );
    const ceiling = Bodies.rectangle(width / 2, -30, width + 60, 60, wallOpts);
    World.add(world, [floor, leftWall, rightWall, ceiling]);

    const bodies = projects.map((_, i) => {
      const s = scatter[i];
      const x = Math.max(
        CARD_W / 2 + 10,
        Math.min(width - CARD_W / 2 - 10, s.fx * width + CARD_W / 2),
      );
      const y = Math.max(
        CARD_H / 2 + 10,
        Math.min(height - CARD_H / 2 - 10, s.fy * height + CARD_H / 2),
      );
      const body = Bodies.rectangle(x, y, CARD_W, CARD_H, {
        restitution: 0.2,
        friction: 0.6,
        frictionAir: 0.14,
        chamfer: { radius: 4 },
        collisionFilter: { group: -1 },
      });
      Body.setAngle(body, (s.rot * Math.PI) / 180);
      return body;
    });
    World.add(world, bodies);

    const mouse = Mouse.create(scene);
    const wheelHandler = (
      mouse as unknown as { mousewheel: EventListener }
    ).mousewheel;
    if (wheelHandler) scene.removeEventListener("wheel", wheelHandler);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.22,
        damping: 0.35,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);

    // Bring the grabbed card on top, apply the "lift" class, and detect
    // tap-vs-drag so a quick click navigates to the project.
    let zCounter = 10;
    let downAt: { idx: number; time: number; x: number; y: number } | null =
      null;
    let moved = false;
    let isTweening = false;
    let resetRaf: number | null = null;

    const onDown = (evt: Matter.IEvent<Matter.MouseConstraint>) => {
      if (isTweening) return;
      const body = (evt as unknown as { source: { body: Matter.Body | null } })
        .source.body;
      if (!body) return;
      const idx = bodies.indexOf(body);
      if (idx === -1) return;
      const pos = mouseConstraint.mouse.position;
      downAt = { idx, time: Date.now(), x: pos.x, y: pos.y };
      moved = false;
      const el = cardRefs.current[idx];
      if (el) {
        zCounter += 1;
        el.style.zIndex = String(zCounter);
        el.classList.add("is-dragging");
      }
    };
    const onMove = () => {
      if (!downAt) return;
      const pos = mouseConstraint.mouse.position;
      const dx = pos.x - downAt.x;
      const dy = pos.y - downAt.y;
      if (Math.hypot(dx, dy) > 6) moved = true;
    };
    const onUp = () => {
      if (!downAt) return;
      const el = cardRefs.current[downAt.idx];
      if (el) el.classList.remove("is-dragging");
      const dt = Date.now() - downAt.time;
      if (!moved && dt < 280) {
        openModalRef.current(downAt.idx);
      }
      downAt = null;
    };

    Events.on(mouseConstraint, "mousedown", onDown);
    Events.on(mouseConstraint, "mousemove", onMove);
    Events.on(mouseConstraint, "mouseup", onUp);

    resetRef.current = () => {
      if (isTweening) return;
      const w = scene.clientWidth;
      const h = scene.clientHeight;
      const targets = bodies.map((body, i) => {
        const s = scatter[i];
        const x = Math.max(
          CARD_W / 2 + 10,
          Math.min(w - CARD_W / 2 - 10, s.fx * w + CARD_W / 2),
        );
        const y = Math.max(
          CARD_H / 2 + 10,
          Math.min(h - CARD_H / 2 - 10, s.fy * h + CARD_H / 2),
        );
        const targetAngle = (s.rot * Math.PI) / 180;
        // pick the shortest rotation direction
        let da = targetAngle - body.angle;
        while (da > Math.PI) da -= Math.PI * 2;
        while (da < -Math.PI) da += Math.PI * 2;
        return {
          fromX: body.position.x,
          fromY: body.position.y,
          fromAngle: body.angle,
          toX: x,
          toY: y,
          deltaAngle: da,
        };
      });

      // Drop any drag state, clear transforms that would interfere
      cardRefs.current.forEach((el) => el?.classList.remove("is-dragging"));
      bodies.forEach((body) => {
        Body.setVelocity(body, { x: 0, y: 0 });
        Body.setAngularVelocity(body, 0);
      });

      isTweening = true;
      const duration = 750;
      const startTime = performance.now();
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      if (resetRaf !== null) cancelAnimationFrame(resetRaf);
      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        const e = easeOutCubic(t);
        bodies.forEach((body, i) => {
          const tgt = targets[i];
          Body.setPosition(body, {
            x: tgt.fromX + (tgt.toX - tgt.fromX) * e,
            y: tgt.fromY + (tgt.toY - tgt.fromY) * e,
          });
          Body.setAngle(body, tgt.fromAngle + tgt.deltaAngle * e);
          Body.setVelocity(body, { x: 0, y: 0 });
          Body.setAngularVelocity(body, 0);
        });
        if (t < 1) {
          resetRaf = requestAnimationFrame(step);
        } else {
          resetRaf = null;
          isTweening = false;
          cardRefs.current.forEach((el) => {
            if (el) el.style.zIndex = "";
          });
          zCounter = 10;
        }
      };
      resetRaf = requestAnimationFrame(step);
    };

    const runner = Runner.create();
    Runner.run(runner, engine);

    let raf = 0;
    const tick = () => {
      bodies.forEach((body, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        el.style.transform = `translate3d(${body.position.x - CARD_W / 2}px, ${
          body.position.y - CARD_H / 2
        }px, 0) rotate(${body.angle}rad)`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const resize = () => {
      width = scene.clientWidth;
      height = scene.clientHeight;
      Body.setPosition(floor, { x: width / 2, y: height + 30 });
      Body.setPosition(ceiling, { x: width / 2, y: -30 });
      Body.setPosition(rightWall, { x: width + 30, y: height / 2 });
      Body.setPosition(leftWall, { x: -30, y: height / 2 });
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      if (resetRaf !== null) cancelAnimationFrame(resetRaf);
      window.removeEventListener("resize", resize);
      Events.off(mouseConstraint, "mousedown", onDown);
      Events.off(mouseConstraint, "mousemove", onMove);
      Events.off(mouseConstraint, "mouseup", onUp);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <section
      aria-label="Project showcase"
      className="relative w-full py-[10vh] lg:py-[14vh] overflow-hidden"
    >
      <div className="relative mx-auto xl:w-[1280px] px-8 mb-8 lg:mb-12">
        <div className="max-w-[720px]">
          <h2 className="font-light text-[32px] lg:text-[56px] leading-[1.05] text-brand-accent2 text-balance">
            Project <span className="font-normal">showcase</span>.
          </h2>
          <p className="mt-4 lg:mt-6 font-light text-[14px] lg:text-[18px] text-black/60 leading-snug">
            Snapshots from recent CSD cohorts — capstones, studio projects,
            and research.
          </p>
        </div>
      </div>

      {/* Desktop + tablet: interactive wooden pinboard */}
      <div className="relative mx-auto xl:w-[1280px] px-4 lg:px-8 hidden md:block">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleReset();
          }}
          aria-label="Reset board"
          disabled={isResetting}
          className="group absolute top-4 right-8 lg:right-12 z-[20] w-10 h-10 flex items-center justify-center bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full border border-white/25 text-white/85 hover:text-white transition-colors cursor-pointer disabled:cursor-default"
        >
          <RotateCcw
            className={`w-[15px] h-auto ${
              isResetting
                ? "-rotate-[360deg] transition-transform duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                : "group-hover:-rotate-45 transition-transform duration-300"
            }`}
            strokeWidth={1.75}
          />
        </button>
        <div
          ref={sceneRef}
          className="wooden-board relative w-full h-[600px] lg:h-[720px] rounded-xl overflow-hidden cursor-grab active:cursor-grabbing select-none touch-none shadow-[inset_0_0_80px_rgba(0,0,0,0.35),inset_0_0_160px_rgba(0,0,0,0.2)] border border-black/30"
        >
          {projects.map((p, i) => {
            const s = scatter[i];
            // rough initial placement to match body spawn (uses a reference
            // width of ~1200 so cards sit in sensible spots before the tick).
            const refWidth = 1200;
            const refHeight = 720;
            const initialX = s.fx * refWidth;
            const initialY = s.fy * refHeight;
            return (
              <div
                key={p.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="polaroid-shell absolute top-0 left-0 will-change-transform"
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  transform: `translate3d(${initialX}px, ${initialY}px, 0) rotate(${s.rot}deg)`,
                }}
              >
                <Polaroid project={p} />
              </div>
            );
          })}

          <div
            aria-hidden
            className="absolute bottom-4 right-5 text-[11px] tracking-[0.25em] uppercase text-white/60 font-medium pointer-events-none"
          >
            HCD · Student Wall
          </div>
        </div>
      </div>

      {/* Mobile: simple stacked polaroid gallery on a wooden board */}
      <div className="md:hidden mx-auto px-4">
        <div className="wooden-board rounded-xl p-6 shadow-[inset_0_0_60px_rgba(0,0,0,0.35)] border border-black/30">
          <ul className="flex flex-col gap-6">
            {projects.map((p, i) => (
              <li
                key={p.title}
                className="flex justify-center"
                style={{
                  transform: `rotate(${scatter[i].rot * 0.5}deg)`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className="polaroid-shell block w-[240px] max-w-full cursor-pointer"
                >
                  <Polaroid project={p} />
                </button>
              </li>
            ))}
          </ul>
          <p
            aria-hidden
            className="mt-6 text-center text-[11px] tracking-[0.25em] uppercase text-white/60 font-medium"
          >
            HCD · Student Wall
          </p>
        </div>
      </div>

      <div className="mt-10 lg:mt-14 flex justify-center">
        <LinkButton
          href="/student-led/achievements"
          text="View student achievements"
          type="default"
          rounded
          icon={<ArrowRight className="w-[14px] lg:w-[18px] h-auto" />}
        />
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveIdx(null)}
        />
      )}

      <style>{`
        .wooden-board {
          background-color: #6a3f1e;
          background-image:
            repeating-linear-gradient(
              92deg,
              rgba(0, 0, 0, 0.12) 0px,
              rgba(0, 0, 0, 0.12) 1px,
              transparent 1px,
              transparent 6px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 0px,
              rgba(255, 255, 255, 0.04) 2px,
              transparent 2px,
              transparent 22px
            ),
            radial-gradient(ellipse at 20% 15%, rgba(255, 200, 140, 0.18) 0%, transparent 45%),
            radial-gradient(ellipse at 80% 80%, rgba(0, 0, 0, 0.3) 0%, transparent 55%),
            linear-gradient(135deg, #7a4a20 0%, #5a341a 100%);
        }
        .polaroid-inner {
          transition:
            transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 220ms ease-out;
        }
        .polaroid-shell:hover .polaroid-inner {
          transform: translateY(-4px) scale(1.02);
          box-shadow:
            0 16px 32px -8px rgba(0, 0, 0, 0.55),
            0 6px 16px -6px rgba(0, 0, 0, 0.4);
        }
        .polaroid-shell.is-dragging .polaroid-inner {
          transform: scale(1.06) rotate(1.5deg);
          box-shadow:
            0 24px 48px -10px rgba(0, 0, 0, 0.6),
            0 10px 24px -8px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fade-in_200ms_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-[560px] bg-white rounded-xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] animate-[modal-in_260ms_cubic-bezier(0.22,1,0.36,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white backdrop-blur-sm text-brand-accent2 shadow-md transition-colors cursor-pointer"
        >
          <X className="w-[16px] h-auto" strokeWidth={1.75} />
        </button>

        <div className="relative w-full aspect-[16/10] bg-brand-accent2/10">
          <Image
            src={project.thumb}
            alt=""
            fill
            sizes="560px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/80 font-medium">
              {project.course}
            </p>
            <h3
              id="project-modal-title"
              className="mt-1 text-[22px] lg:text-[26px] font-medium leading-tight"
            >
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-6 lg:p-7">
          <p className="text-[14px] lg:text-[15px] text-black/75 leading-snug">
            {project.overview}
          </p>

          {project.tags && project.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] tracking-[0.2em] uppercase text-brand-accent2 font-medium px-2.5 py-1 border border-brand-accent2/25 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 pt-5 border-t border-brand-accent2/10">
            <p className="text-[10px] tracking-[0.25em] uppercase text-brand-accent2/70 font-medium">
              Team
            </p>
            <ul className="mt-3 space-y-2">
              {project.team.map((m) => (
                <li
                  key={m.name}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="text-[14px] font-medium text-brand-accent2">
                    {m.name}
                  </span>
                  {m.role && (
                    <span className="text-[12px] text-black/55 italic">
                      {m.role}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

function Polaroid({ project }: { project: Project }) {
  return (
    <div className="polaroid-inner relative w-full h-full bg-[#fcfaf4] p-3 pb-2 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.55),0_4px_10px_-4px_rgba(0,0,0,0.35)] rounded-[2px] pointer-events-none flex flex-col">
      <div
        aria-hidden
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-[70px] h-[18px] bg-amber-200/70 border border-amber-300/40 shadow-sm rotate-[-2deg]"
      />

      <div className="relative w-full aspect-[4/3] bg-brand-accent2/10 overflow-hidden">
        <Image
          src={project.thumb}
          alt=""
          fill
          sizes="220px"
          className="object-cover"
        />
      </div>

      <div className="mt-3 px-1 pb-1 flex-1 flex flex-col">
        <p className="text-[10px] tracking-[0.2em] uppercase text-brand-accent2/70 font-medium">
          {project.course}
        </p>
        <p className="mt-1 text-[14px] font-medium text-brand-accent2 leading-tight line-clamp-2">
          {project.title}
        </p>
        <p className="mt-1 text-[11px] text-black/55 leading-snug line-clamp-2">
          {project.description}
        </p>
        <p className="mt-auto pt-1 text-[10px] italic text-brand-accent2/60 truncate">
          {formatTeam(project.team)}
        </p>
      </div>
    </div>
  );
}
