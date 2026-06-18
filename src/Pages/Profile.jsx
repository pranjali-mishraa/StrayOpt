import React, { useState } from "react";


import ProfileHeader  from "../components/Profile/ProfileHeader";
import ProfileStats   from "../components/Profile/ProfileStats";
import ProfileTabs    from "../components/Profile/ProfileTabs";
import MyPostsTab     from "../components/Profile/MyPostTab";
import SavedPetsTab   from "../components/Profile/SavedPetsTab";
import EditProfileTab from "../components/Profile/EditProfileTab";
import ConfirmModal   from "../components/Profile/ConfirmModel";;



// ── Dummy data ───────────────────────────────
const dummyProfile = {
  name:        "Riya Sharma",
  city:        "Delhi",
  bio:         "Animal lover 🐾 Fostering strays since 2019. Helping one paw at a time.",
  memberSince: "January 2024",
};

const dummyMyPosts = [
  { id: 1, name: "Bruno", species: "Dog", age: "2 yrs", locality: "Hauz Khas, Delhi", description: "Gentle indie mix looking for a loving home.", images: ["/pets/bruno1.jpg"], urgent: false, adopted: false, postedOn: "12 March 2025" },
  { id: 2, name: "Daisy", species: "Cat", age: "9 months", locality: "Rohini, Delhi", description: "Found injured, now fully recovered.", images: [], urgent: false, adopted: false, postedOn: "28 April 2025" },
  { id: 3, name: "Tommy", species: "Dog", age: "4 yrs", locality: "Dwarka, Delhi", description: "Calm neutered Labrador mix.", images: [], urgent: true, adopted: false, postedOn: "2 May 2025" },
  { id: 4, name: "Momo", species: "Cat", age: "1 yr", locality: "Vasant Vihar, Delhi", description: "Playful tabby. FIV negative.", images: [], urgent: false, adopted: true, postedOn: "5 Jan 2025" },
];

const dummySaved = [
  { id: 2, name: "Luna", species: "Cat", age: "8 months", locality: "Lajpat Nagar, Delhi", images: [], urgent: true,  postedBy: "Arjun M." },
  { id: 3, name: "Coco", species: "Dog", age: "3 yrs",    locality: "Greater Kailash, Delhi", images: [], urgent: false, postedBy: "Neha T." },
];

export default function Profile() {
  // ── State ──────────────────────────────────
  const [posts, setPosts]   = useState(dummyMyPosts);
  const [saved, setSaved]   = useState(dummySaved);
  const [profile]           = useState(dummyProfile);
  const [activeTab, setActiveTab] = useState("My Posts");

  const [avatarPreview, setAvatarPreview] = useState("");
  const [coverPreview,  setCoverPreview]  = useState("");

  const [editForm, setEditForm] = useState({
    name: dummyProfile.name,
    city: dummyProfile.city,
    bio:  dummyProfile.bio,
  });
  const [editSaved, setEditSaved] = useState(false);

  const [deleteModal, setDeleteModal] = useState(null);
  const [adoptModal,  setAdoptModal]  = useState(null);

  // ── Handlers ───────────────────────────────
  function handleAdopt(id) {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, adopted: true, urgent: false } : p));
    setAdoptModal(null);
    // TODO: PATCH /api/pets/:id/adopted
  }

  function handleDelete(id) {
    setPosts(prev => prev.filter(p => p.id !== id));
    setDeleteModal(null);
    // TODO: DELETE /api/pets/:id
  }

  function handleRemoveSaved(id) {
    setSaved(prev => prev.filter(p => p.id !== id));
    // TODO: DELETE /api/saved/:id
  }

  function handleEditChange(e) {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleEditSubmit(e) {
    e.preventDefault();
    // TODO: PATCH /api/users/profile with FormData
    setEditSaved(true);
    setTimeout(() => setEditSaved(false), 3000);
  }

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    if (file) setAvatarPreview(URL.createObjectURL(file));
  }

  function handleCoverChange(e) {
    const file = e.target.files[0];
    if (file) setCoverPreview(URL.createObjectURL(file));
  }

  const adoptedCount = posts.filter(p => p.adopted).length;

  // ── Render ─────────────────────────────────
  return (
    <div className="min-h-screen bg-cream">

      <ProfileHeader
        profile={profile}
        avatarPreview={avatarPreview}
        coverPreview={coverPreview}
        onAvatarChange={handleAvatarChange}
        onCoverChange={handleCoverChange}
      />

      <ProfileStats
        posts={posts.length}
        adoptedCount={adoptedCount}
        savedCount={saved.length}
        memberSince={profile.memberSince}
      />

      <ProfileTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        postCount={posts.length}
      />

      <div className="max-w-4xl mx-auto px-6">

        {activeTab === "My Posts" && (
          <MyPostsTab
            posts={posts}
            onAdopt={id => setAdoptModal(id)}
            onDelete={id => setDeleteModal(id)}
          />
        )}

        {activeTab === "Saved Pets" && (
          <SavedPetsTab
            saved={saved}
            onRemove={handleRemoveSaved}
          />
        )}

        {activeTab === "Edit Profile" && (
          <EditProfileTab
            editForm={editForm}
            onChange={handleEditChange}
            onSubmit={handleEditSubmit}
            saved={editSaved}
          />
        )}

      </div>

      {/* Modals */}
      {adoptModal && (
        <ConfirmModal
          emoji="🎉"
          title="Mark as Adopted?"
          sub="This will mark the pet as adopted and remove it from active listings. This cannot be undone."
          confirmLabel="Yes, mark as adopted"
          confirmClass="bg-sage text-white hover:bg-sage/90"
          onConfirm={() => handleAdopt(adoptModal)}
          onCancel={() => setAdoptModal(null)}
        />
      )}

      {deleteModal && (
        <ConfirmModal
          emoji="🗑️"
          title="Delete this post?"
          sub="This will permanently delete the post and all uploaded photos. This cannot be undone."
          confirmLabel="Yes, delete post"
          confirmClass="bg-red-500 text-white hover:bg-red-600"
          onConfirm={() => handleDelete(deleteModal)}
          onCancel={() => setDeleteModal(null)}
        />
      )}

    </div>
  );
}