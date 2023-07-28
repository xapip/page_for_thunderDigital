import React from "react";

export default function Card({ post }) {
  function createMarkup(str) {
    return { __html: str.replace(/href/g, "target='_blank' href") };
  }

  const formatedDate = (amount) => {
    const utcDate = new Date(amount);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    }).format(utcDate);
  };

  return (
    <div
      className={`relative flex h-auto rounded-[12px] overflow-hidden max-w-[392px] border-[1px] border-[#242535] p-[16px] flex-col gap-[16px]`}
    >
      <div className="p-[8px]">
        <div className="flex items-center">
          {post.author.node?.avatar ? (
            <img
              className="rounded-full mr-3"
              src="./image/avatar.jpg"
              alt="avatar"
            />
          ) : null}
          <p className="font-medium mr-5">
            {!!post.author.node.username ? post.author.node.username : null}
          </p>
          <time className="font-normal" dateTime={post.dateGmt}>
            {formatedDate(post.dateGmt)}
          </time>
        </div>
        <div
          className="text-xl font-medium mt-4 mb-5 w-full"
          dangerouslySetInnerHTML={createMarkup(post.excerpt)}
        ></div>
      </div>
    </div>
  );
}
