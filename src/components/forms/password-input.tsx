"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <Input name="password" required type={showPassword ? "text" : "password"} className="" />
            <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1 bottom-1 text-muted-foreground hover:text-foreground"
            >
                {showPassword ? <EyeOff /> : <Eye />}
            </button>
        </div>
    );
}
