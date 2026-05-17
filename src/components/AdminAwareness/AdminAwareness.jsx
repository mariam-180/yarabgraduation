import React, { useState } from "react";
import axios from "axios";
import Style from "./AdminAwareness.module.css";

export default function AdminAwareness() {

  const [activeTab, setActiveTab] = useState("create");

  // CREATE FORM
  const [createForm, setCreateForm] = useState({
    title: "",
    content: "",
    summary: "",
    category: "",
    imageUrl: "",
    videoUrl: "",
  });

  // EDIT
  const [editId, setEditId] = useState("");

  const [editForm, setEditForm] = useState({
    title: "",
    content: "",
    summary: "",
    category: "",
    imageUrl: "",
    videoUrl: "",
  });

  // DELETE
  const [deleteId, setDeleteId] = useState("");

  // STATES
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // TOKEN
  const token = localStorage.getItem("token");

  // CREATE
  const handleCreate = async () => {

    setError("");
    setMessage("");

    if (!token) {
      setError("Admin token not found. Please login again.");
      return;
    }

    try {

      setLoading(true);

      await axios.post(
        "https://lungcancer.runasp.net/api/Admin/awareness",
        createForm,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Awareness article created successfully.");

      setCreateForm({
        title: "",
        content: "",
        summary: "",
        category: "",
        imageUrl: "",
        videoUrl: "",
      });

    } catch (err) {

      console.log(err.response);

      setError(
        err?.response?.data?.message ||
        err?.response?.data?.title ||
        "Failed to create article."
      );

    } finally {
      setLoading(false);
    }
  };

  // UPDATE
  const handleUpdate = async () => {

    setError("");
    setMessage("");

    if (!token) {
      setError("Admin token not found. Please login again.");
      return;
    }

    if (!editId) {
      setError("Please enter awareness ID.");
      return;
    }

    try {

      setLoading(true);

      await axios.put(
        `https://lungcancer.runasp.net/api/Admin/awareness/${Number(editId)}`,
        editForm,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Awareness article updated successfully.");

    } catch (err) {

      console.log(err.response);

      setError(
        err?.response?.data?.message ||
        err?.response?.data?.title ||
        "Failed to update article."
      );

    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const handleDelete = async () => {

    setError("");
    setMessage("");

    if (!token) {
      setError("Admin token not found. Please login again.");
      return;
    }

    if (!deleteId) {
      setError("Please enter awareness ID.");
      return;
    }

    try {

      setLoading(true);

      const awarenessId = Number(deleteId);

      const response = await axios.delete(
        `https://lungcancer.runasp.net/api/Admin/awareness/${awarenessId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("DELETE RESPONSE:", response.data);

      setMessage("Awareness article deleted successfully.");

      setDeleteId("");

    } catch (err) {

      console.log("DELETE ERROR:", err.response);

      setError(
        err?.response?.data?.message ||
        err?.response?.data?.title ||
        "Failed to delete article."
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className={Style.wrapper}>

      <div className={Style.maindiv}>

        {/* TABS */}
        <div className={Style.tabs}>

          <button
            className={`${Style.tab} ${activeTab === "create" ? Style.activeTab : ""}`}
            onClick={() => setActiveTab("create")}
          >
            <i className="fa-solid fa-plus"></i>
            Create
          </button>

          <button
            className={`${Style.tab} ${activeTab === "edit" ? Style.activeTab : ""}`}
            onClick={() => setActiveTab("edit")}
          >
            <i className="fa-solid fa-pen"></i>
            Edit By ID
          </button>

          <button
            className={`${Style.tab} ${activeTab === "delete" ? Style.activeTab : ""}`}
            onClick={() => setActiveTab("delete")}
          >
            <i className="fa-solid fa-trash"></i>
            Delete By ID
          </button>

        </div>

        {/* HEADER */}
        <div className={Style.topBar}>
          <div>
            <h2 className={Style.title}>
              Awareness Admin Panel
            </h2>

            <p className={Style.subtitle}>
              Create, update and delete awareness content
            </p>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <p className={Style.errorText}>
            <i className="fa-solid fa-circle-exclamation"></i>
            {" "}
            {error}
          </p>
        )}

        {/* SUCCESS */}
        {message && (
          <p className={Style.successText}>
            <i className="fa-solid fa-circle-check"></i>
            {" "}
            {message}
          </p>
        )}

        {/* CREATE TAB */}
        {activeTab === "create" && (

          <div className={Style.formSection}>

            <div className={Style.formCard}>

              <div className={Style.formCardHeader}>
                <div className={Style.formCardIcon}>
                  <i className="fa-solid fa-newspaper"></i>
                </div>

                <div>
                  <h3 className={Style.formCardTitle}>
                    Create Awareness Article
                  </h3>

                  <p className={Style.formCardSub}>
                    Publish awareness content
                  </p>
                </div>
              </div>

              <div className={Style.formGrid}>

                {/* TITLE */}
                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>
                    Title
                  </label>

                  <input
                    type="text"
                    className={Style.formInput}
                    value={createForm.title}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        title: e.target.value,
                      })
                    }
                    placeholder="Enter title"
                  />
                </div>

                {/* SUMMARY */}
                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>
                    Summary
                  </label>

                  <input
                    type="text"
                    className={Style.formInput}
                    value={createForm.summary}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        summary: e.target.value,
                      })
                    }
                    placeholder="Enter summary"
                  />
                </div>

                {/* CATEGORY */}
                <div className={Style.formGroup}>
                  <label className={Style.formLabel}>
                    Category
                  </label>

                  <input
                    type="text"
                    className={Style.formInput}
                    value={createForm.category}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        category: e.target.value,
                      })
                    }
                    placeholder="Category"
                  />
                </div>

                {/* IMAGE URL */}
                <div className={Style.formGroup}>
                  <label className={Style.formLabel}>
                    Image URL
                  </label>

                  <input
                    type="text"
                    className={Style.formInput}
                    value={createForm.imageUrl}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        imageUrl: e.target.value,
                      })
                    }
                    placeholder="Image URL"
                  />
                </div>

                {/* VIDEO URL */}
                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>
                    Video URL
                  </label>

                  <input
                    type="text"
                    className={Style.formInput}
                    value={createForm.videoUrl}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        videoUrl: e.target.value,
                      })
                    }
                    placeholder="Video URL"
                  />
                </div>

                {/* CONTENT */}
                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>
                    Content
                  </label>

                  <textarea
                    className={`${Style.formInput} ${Style.formTextarea}`}
                    value={createForm.content}
                    onChange={(e) =>
                      setCreateForm({
                        ...createForm,
                        content: e.target.value,
                      })
                    }
                    placeholder="Write article content..."
                  />
                </div>

              </div>

              <div className={Style.formActions}>
                <button
                  className={Style.submitBtn}
                  onClick={handleCreate}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      Publish
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        )}

        {/* EDIT TAB */}
        {activeTab === "edit" && (

          <div className={Style.formSection}>

            <div className={Style.formCard}>

              <div className={Style.formCardHeader}>
                <div className={Style.formCardIcon}>
                  <i className="fa-solid fa-pen"></i>
                </div>

                <div>
                  <h3 className={Style.formCardTitle}>
                    Edit Awareness
                  </h3>

                  <p className={Style.formCardSub}>
                    Update article by ID
                  </p>
                </div>
              </div>

              <div className={Style.formGrid}>

                {/* ID */}
                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>
                    Awareness ID
                  </label>

                  <input
                    type="number"
                    className={Style.formInput}
                    value={editId}
                    onChange={(e) => setEditId(e.target.value)}
                    placeholder="Enter awareness ID"
                  />
                </div>

                {/* TITLE */}
                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>
                    Title
                  </label>

                  <input
                    type="text"
                    className={Style.formInput}
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        title: e.target.value,
                      })
                    }
                  />
                </div>

                {/* SUMMARY */}
                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>
                    Summary
                  </label>

                  <input
                    type="text"
                    className={Style.formInput}
                    value={editForm.summary}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        summary: e.target.value,
                      })
                    }
                  />
                </div>

                {/* CATEGORY */}
                <div className={Style.formGroup}>
                  <label className={Style.formLabel}>
                    Category
                  </label>

                  <input
                    type="text"
                    className={Style.formInput}
                    value={editForm.category}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        category: e.target.value,
                      })
                    }
                  />
                </div>

                {/* IMAGE URL */}
                <div className={Style.formGroup}>
                  <label className={Style.formLabel}>
                    Image URL
                  </label>

                  <input
                    type="text"
                    className={Style.formInput}
                    value={editForm.imageUrl}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        imageUrl: e.target.value,
                      })
                    }
                  />
                </div>

                {/* VIDEO URL */}
                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>
                    Video URL
                  </label>

                  <input
                    type="text"
                    className={Style.formInput}
                    value={editForm.videoUrl}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        videoUrl: e.target.value,
                      })
                    }
                  />
                </div>

                {/* CONTENT */}
                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>
                    Content
                  </label>

                  <textarea
                    className={`${Style.formInput} ${Style.formTextarea}`}
                    value={editForm.content}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        content: e.target.value,
                      })
                    }
                  />
                </div>

              </div>

              <div className={Style.formActions}>
                <button
                  className={Style.submitBtn}
                  onClick={handleUpdate}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      Saving...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-check"></i>
                      Save Changes
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        )}

        {/* DELETE TAB */}
        {activeTab === "delete" && (

          <div className={Style.formSection}>

            <div className={Style.formCard}>

              <div className={Style.formCardHeader}>
                <div className={Style.formCardIcon}>
                  <i className="fa-solid fa-trash"></i>
                </div>

                <div>
                  <h3 className={Style.formCardTitle}>
                    Delete Awareness
                  </h3>

                  <p className={Style.formCardSub}>
                    Delete article by ID
                  </p>
                </div>
              </div>

              <div className={Style.formGrid}>

                <div className={`${Style.formGroup} ${Style.fullWidth}`}>
                  <label className={Style.formLabel}>
                    Awareness ID
                  </label>

                  <input
                    type="number"
                    className={Style.formInput}
                    value={deleteId}
                    onChange={(e) => setDeleteId(e.target.value)}
                    placeholder="Enter awareness ID"
                  />
                </div>

              </div>

              <div className={Style.formActions}>
                <button
                  className={Style.deleteActionBtn}
                  onClick={handleDelete}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-trash"></i>
                      Delete
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}