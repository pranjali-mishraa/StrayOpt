import React from "react";
import MyPostCards from "./MyPostCards";
import EmptyState from "./EmptyState";

export default function MyPostsTab({ posts, onAdopt, onDelete }) {
  const activePosts  = posts.filter(p => !p.adopted);
  const adoptedPosts = posts.filter(p =>  p.adopted);

  if (posts.length === 0) {
    return (
      <EmptyState
        emoji="📸"
        title="No posts yet"
        sub="Post a stray animal to get started"
        action={{ label: "Post a Stray", to: "/post" }}
      />
    );
  }

  return (
    <div className="pb-12">

      {/* Active */}
      {activePosts.length > 0 && (
        <>
          <p className="text-[12px] text-text-light uppercase tracking-widest mb-4">
            Active · {activePosts.length}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {activePosts.map(post => (
              <MyPostCards
                key={post.id}
                post={post}
                onAdopt={() => onAdopt(post.id)}
                onDelete={() => onDelete(post.id)}
              />
            ))}
          </div>
        </>
      )}

      {/* Adopted */}
      {adoptedPosts.length > 0 && (
        <>
          <p className="text-[12px] text-text-light uppercase tracking-widest mb-4">
            Adopted 🎉 · {adoptedPosts.length}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {adoptedPosts.map(post => (
              <MyPostCards
                key={post.id}
                post={post}
                onDelete={() => onDelete(post.id)}
                adopted
              />
            ))}
          </div>
        </>
      )}

    </div>
  );
}