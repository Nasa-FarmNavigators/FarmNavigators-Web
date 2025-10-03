import PageBreadcrumb from "../../../components/Admin/common/PageBreadCrumb";
import ComponentCard from "../../../components/Admin/common/ComponentCard";
import PageMeta from "../../../components/Admin/common/PageMeta";
import { useEffect, useState } from "react";
import Badge from "../../../components/Admin/ui/badge/Badge";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../../components/Admin/ui/table";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const pageSize = 8;

interface User {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    address?: string;
    profileImageUrl?: string;
    role: "ADMIN" | "USER" | "INSTITUTION";
    isActive: boolean;
    isBanned: boolean;
    createdAt: string;
}

export default function InstSee() {
    const [users, setUsers] = useState<User[]>([]);
    const [filtered, setFiltered] = useState<User[]>([]);
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState<"ALL" | User["role"]>("ALL");
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);


    // Fetch all users
    useEffect(() => {
        setIsLoading(true);
        axios
            .get<User[]>(`${apiUrl}/users`)
            .then((res) => {
                setUsers(res.data);
                setFiltered(res.data);
            })
            .catch((err) => console.error("Erro ao buscar usuários:", err))
            .finally(() => setIsLoading(false));
    }, []);

    // Filter by search & role
    useEffect(() => {
        let list = [...users];
        if (search) {
            const q = search.toLowerCase();
            list = list.filter(
                (u) =>
                    u.name.toLowerCase().includes(q) ||
                    u.email?.toLowerCase().includes(q) ||
                    u.phone?.includes(q)
            );
        }
        if (roleFilter !== "ALL") {
            list = list.filter((u) => u.role === roleFilter);
        }
        setFiltered(list);
        setCurrentPage(1);
    }, [search, roleFilter, users]);

    const totalPages = Math.ceil(filtered.length / pageSize);
    const pageData = filtered.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    // Toggle active/inactive
    const toggleActive = async (u: User) => {
        try {
            const res = await axios.put(`${apiUrl}/users/${u.id}`, {
                isActive: !u.isActive,
            });
            setUsers((prev) =>
                prev.map((x) => (x.id === u.id ? { ...x, isActive: res.data.isActive } : x))
            );
        } catch {
            alert("Erro ao atualizar status de ativo.");
        }
    };

    // Toggle ban/unban
    const toggleBan = async (u: User) => {
        try {
            const res = await axios.put(`${apiUrl}/users/${u.id}`, {
                isBanned: !u.isBanned,
            });
            setUsers((prev) =>
                prev.map((x) => (x.id === u.id ? { ...x, isBanned: res.data.isBanned } : x))
            );
        } catch {
            alert("Erro ao atualizar status de banimento.");
        }
    };

    useEffect(() => {
        const handleClickOutside = () => setOpenDropdownId(null);
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <>
            <PageMeta
                title="Lista de Usuários"
                description="Gerencie usuários do sistema"
            />
            <PageBreadcrumb pageTitle="Gerencie usuários do sistema" />
            <div className="space-y-6">
                <ComponentCard title="Buscar instituições">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="relative">
                            <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
                                <svg
                                    className="fill-gray-500 dark:fill-gray-400"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                                        fill=""
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Buscar por descrição ou endereço..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="h-11 w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-12 pr-4 text-sm text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 xl:w-[430px]"
                            />
                        </div>
                        <select
                            value={roleFilter}
                            onChange={(e) =>
                                setRoleFilter(e.target.value as "ALL" | User["role"])
                            }
                            className="h-11 rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-800"
                        >
                            <option value="ALL">Todos os papéis</option>
                            <option value="ADMIN">Admin</option>
                            <option value="USER">Usuário</option>
                            <option value="INSTITUTION">ONG/Instituição</option>
                        </select>
                    </div>
                </ComponentCard>
                <ComponentCard title="Usuários Cadastrados">
                    {isLoading ? (
                        <div className="flex flex-col items-center py-10">
                            <svg
                                className="animate-spin h-8 w-8 text-red-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8z"
                                />
                            </svg>
                            <span className="mt-2 text-gray-600">Carregando usuários...</span>
                        </div>
                    ) : (
                        <>
                            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                                <div className="max-w-full overflow-x-auto">
                                    <Table>
                                        {/* Table Header */}
                                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                                            <TableRow>
                                                <TableCell
                                                    isHeader
                                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                >
                                                    Avatar
                                                </TableCell>
                                                <TableCell
                                                    isHeader
                                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                >
                                                    Telefone
                                                </TableCell>
                                                <TableCell
                                                    isHeader
                                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                >
                                                    Morada
                                                </TableCell>
                                                <TableCell
                                                    isHeader
                                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                >
                                                    Função
                                                </TableCell>
                                                <TableCell
                                                    isHeader
                                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                >
                                                    Estado
                                                </TableCell>
                                                <TableCell
                                                    isHeader
                                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                                >
                                                    Ações
                                                </TableCell>
                                            </TableRow>
                                        </TableHeader>

                                        {/* Table Body */}
                                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                                            {pageData.map((u) => {
                                                // 1. Define o texto do badge
                                                const statusText = u.isActive
                                                    ? "Activo"
                                                    : u.isBanned
                                                        ? "Bloqueado"
                                                        : "Inativo";

                                                // 2. Define a cor do badge
                                                const statusColor = u.isActive
                                                    ? "success"
                                                    : u.isBanned
                                                        ? "error"
                                                        : "warning";

                                                return (
                                                    <TableRow key={u.id}>
                                                        <TableCell className="px-5 py-4 sm:px-6 text-start">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-10 h-10 overflow-hidden rounded-full">
                                                                    <img
                                                                        width={40}
                                                                        height={40}
                                                                        src={u.profileImageUrl}
                                                                        alt={u.name}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                                        {u.name}
                                                                    </span>
                                                                    <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                                                                        {u.email}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </TableCell>

                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {u.phone}
                                                        </TableCell>

                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {u.address || "—"}
                                                        </TableCell>

                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            {u.role}
                                                        </TableCell>

                                                        {/* Célula do Badge */}
                                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                                            <Badge size="sm" color={statusColor}>
                                                                {statusText}
                                                            </Badge>
                                                        </TableCell>

                                                        {/* Ações (placeholder) */}
                                                        <TableCell className="px-5 py-4 sm:px-6 text-start">
                                                            <div className="relative inline-block text-left">
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setOpenDropdownId(openDropdownId === u.id ? null : u.id);
                                                                    }}
                                                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                                                >
                                                                    ⋮
                                                                </button>

                                                                {openDropdownId === u.id && (
                                                                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                                                        <div className="py-1 text-sm text-gray-700">
                                                                            <button
                                                                                onClick={() => toggleActive(u)}
                                                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                                            >
                                                                                {u.isActive ? "Desativar conta" : "Ativar conta"}
                                                                            </button>
                                                                            <button
                                                                                onClick={() => toggleBan(u)}
                                                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                                            >
                                                                                {u.isBanned ? "Desbloquear" : "Banir"}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </TableCell>

                                                    </TableRow>
                                                );
                                            })}

                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                            {/* Paginação  */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-4 mt-4">
                                    <button
                                        onClick={() =>
                                            setCurrentPage((p) => Math.max(p - 1, 1))
                                        }
                                        disabled={currentPage === 1}
                                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                                    >
                                        Anterior
                                    </button>
                                    <span className="text-sm text-gray-600">
                                        {currentPage} / {totalPages}
                                    </span>
                                    <button
                                        onClick={() =>
                                            setCurrentPage((p) => Math.min(p + 1, totalPages))
                                        }
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                                    >
                                        Próxima
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </ComponentCard>
            </div>
        </>
    );
}
