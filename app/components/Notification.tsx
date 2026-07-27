"use client";

import { useNotification } from "./NotificationContext";

export default function Notification() {
  const { message, type } = useNotification();

  if (!message) return null;

  return (
    <div
      data-testid="notification"
      className={`p-4 rounded-sm mb-4 text-white border ${type === "success" ? "bg-emerald-600 border-emerald-600" : "bg-red-600 border-red-600"}`}
    >
      {message}
    </div>
  );
}
