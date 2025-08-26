"use client";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

export default function MarkdownContent({
  content,
}: {
  content: BlocksContent;
}) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="font-light text-[14px] lg:text-[20px]">{children}</p>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return (
                <h2 className="text-[22px] lg:text-[36px] font-bold mt-8 mb-4 text-brand-accent2">
                  {children}
                </h2>
              );
            case 2:
              return (
                <h3 className="text-[20px] lg:text-[32px] font-semibold mt-6 mb-3 text-brand-accent2">
                  {children}
                </h3>
              );
            case 3:
              return (
                <h4 className="text-[18px] lg:text-[28px] font-semibold mt-4 mb-2 text-brand-accent2">
                  {children}
                </h4>
              );
            case 4:
              return (
                <h5 className="text-[16px] lg:text-[24px] font-semibold mt-3 mb-2 text-brand-accent2">
                  {children}
                </h5>
              );
            case 5:
              return (
                <h6 className="text-[14px] lg:text-[20px] font-semibold mt-2 mb-1 text-brand-accent2">
                  {children}
                </h6>
              );
            case 6:
              return (
                <span className="text-[14px] lg:text-[20px] font-semibold text-brand-accent2">
                  {children}
                </span>
              );
            default:
              return (
                <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
              );
          }
        },
        link: ({ children, url }) => (
          <Link
            href={url}
            className="text-[14px] lg:text-[20px] text-brand-accent2 hover:text-brand-accent1 underline"
          >
            {children}
          </Link>
        ),
        quote: ({ children }) => (
          <blockquote className="border-l-2 lg:border-l-4 border-brand-accent2 bg-brand-accent2/5 pl-4 py-2 text-[14px] lg:text-[20px] italic my-4">
            {children}
          </blockquote>
        ),
        list: ({ children, format }) => {
          return format === "ordered" ? (
            <ol className="list-decimal list-inside my-4 space-y-2 text-[14px] lg:text-[20px]">
              {children}
            </ol>
          ) : (
            <ul className="list-disc list-inside my-4 space-y-2 text-[14px] lg:text-[20px]">
              {children}
            </ul>
          );
        },
        "list-item": ({ children }) => <li>{children}</li>,
        code: ({ children }) => (
          <code className="bg-neutral-200/50 rounded px-1 py-0.5 font-mono text-[13px] lg:text-[16px]">
            {children}
          </code>
        ),
        image: ({ image }) => {
          return (
            <div className="my-4 lg:w-2/3 mx-auto">
              <Image
                src={image.url}
                alt={image.alternativeText || image.caption || ""}
                className="mx-auto rounded"
                width={image.width}
                height={image.height}
              />
              {image.caption && (
                <p className="text-center text-[12px] lg:text-[14px] italic mt-1 opacity-70">
                  {image.caption}
                </p>
              )}
            </div>
          );
        },
      }}
      modifiers={{
        bold: ({ children }) => (
          <strong className="font-medium text-brand-accent2-130">
            {children}
          </strong>
        ),
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
}
