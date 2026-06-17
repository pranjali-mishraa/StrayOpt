import React from "react";

export default function ConfirmModal({
  emoji,
  title,
  sub,
  confirmLabel,
  confirmClass,
  onConfirm,
  onCancel,
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={onCancel}
      />

      {/* Modal box */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
        <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl pointer-events-auto animate-drop-in">

          {/* Content */}
          <div className="text-center mb-5">
            <span className="text-[48px]">{emoji}</span>
            <h3 className="font-display text-[1.2rem] font-semibold text-bark-dark mt-2 mb-1">
              {title}
            </h3>
            <p className="text-[13px] text-text-light leading-relaxed">{sub}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 py-2.5 border border-border-brand text-text-mid text-[13px] rounded-xl hover:bg-warm transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 py-2.5 text-[13px] rounded-xl font-medium transition-all duration-200 active:scale-95 ${confirmClass}`}
            >
              {confirmLabel}
            </button>
          </div>

        </div>
      </div>
    </>
  );
}