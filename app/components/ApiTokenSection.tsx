"use client";

import { persistToken } from "@/app/actions/users";
import { useState } from "react";

interface ApiTokenSectionProps {
  initialToken: string | null | undefined;
}

export function ApiTokenSection({ initialToken }: ApiTokenSectionProps) {
  const [token, setToken] = useState(initialToken ?? null);

  const handleGenerate = async () => {
    // Generate UUID on the client for an immediate display update,
    // then persist it to the server in the background.
    const newToken = crypto.randomUUID();
    setToken(newToken);
    await persistToken(newToken);
  };

  return (
    <div data-testid="api-token-section" className="space-y-3">
      <h2 className="text-xl font-medium">API Token</h2>
      {token ? (
        <div data-testid="token-display">
          <p
            data-testid="api-token"
            className="font-mono border border-gray-100 rounded p-3 break-all text-sm"
          >
            {token}
          </p>
        </div>
      ) : (
        <p data-testid="no-token-message" className="text-gray-500">
          No token has been generated yet.
        </p>
      )}
      <button
        type="button"
        data-testid="generate-token-button"
        onClick={handleGenerate}
        className="bg-emerald-600 text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-colors"
      >
        Generate new token
      </button>
    </div>
  );
}
