"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 text-center px-6">
      <div className="flex flex-col items-center space-y-6">
        {/* 404 Number */}
        <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          404
        </h1>

        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
            <AlertTriangle className="w-7 h-7 text-red-500" />
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-md">
            Oops! The page you’re looking for doesn’t exist or may have been
            moved. Let’s get you back on track!
          </p>
        </div>

        {/* Back to Home Button */}
        <Link href="/" className="mt-4">
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2">
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
