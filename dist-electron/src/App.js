import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function App() {
    return (_jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: _jsxs(Card, { className: "w-full max-w-sm shadow-lg", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-center", children: "Iniciar Sesi\u00F3n" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Usuario" }), _jsx(Input, { id: "email", placeholder: "Escribe tu usuario" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "password", children: "Contrase\u00F1a" }), _jsx(Input, { id: "password", type: "password", placeholder: "********" })] }), _jsx(Button, { className: "w-full", children: "Entrar" })] })] }) }));
}
