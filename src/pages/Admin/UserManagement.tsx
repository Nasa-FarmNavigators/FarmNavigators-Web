import { useState } from "react";
import { FaUsers, FaSearch, FaFilter, FaPlus, FaEdit, FaTrash, FaBan, FaCheck, FaMapMarkerAlt } from "react-icons/fa";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "farmer" | "ngo" | "admin" | "tech";
  status: "active" | "inactive" | "suspended";
  location: string;
  joinDate: string;
  lastActive: string;
  organization?: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "+244 923 456 789",
    role: "farmer",
    status: "active",
    location: "Luanda",
    joinDate: "2024-01-15",
    lastActive: "2 horas atrás"
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria@ongverde.ao",
    phone: "+244 924 567 890",
    role: "ngo",
    status: "active",
    location: "Benguela",
    joinDate: "2023-12-08",
    lastActive: "1 hora atrás",
    organization: "ONG Verde Angola"
  },
  {
    id: "3",
    name: "Pedro Martins",
    email: "pedro.martins@email.com",
    phone: "+244 925 678 901",
    role: "farmer",
    status: "inactive",
    location: "Huambo",
    joinDate: "2024-01-20",
    lastActive: "3 dias atrás"
  },
  {
    id: "4",
    name: "Ana Costa",
    email: "ana.costa@gov.ao",
    phone: "+244 926 789 012",
    role: "tech",
    status: "active",
    location: "Luanda",
    joinDate: "2023-11-15",
    lastActive: "30 min atrás",
    organization: "Ministério da Agricultura"
  },
  {
    id: "5",
    name: "Carlos Neto",
    email: "carlos@sementes.ao",
    phone: "+244 927 890 123",
    role: "ngo",
    status: "suspended",
    location: "Malanje",
    joinDate: "2024-02-01",
    lastActive: "1 semana atrás",
    organization: "Sementes do Futuro"
  }
];

const roles = [
  { value: "all", label: "Todos os Tipos", color: "gray" },
  { value: "farmer", label: "Agricultores", color: "green" },
  { value: "ngo", label: "ONGs", color: "blue" },
  { value: "tech", label: "Técnicos", color: "purple" },
  { value: "admin", label: "Administradores", color: "red" }
];

const statuses = [
  { value: "all", label: "Todos os Status" },
  { value: "active", label: "Ativo" },
  { value: "inactive", label: "Inativo" },
  { value: "suspended", label: "Suspenso" }
];

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    const matchesStatus = selectedStatus === "all" || user.status === selectedStatus;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case "farmer": return "bg-green-100 text-green-800";
      case "ngo": return "bg-blue-100 text-blue-800";
      case "tech": return "bg-purple-100 text-purple-800";
      case "admin": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "farmer": return "Agricultor";
      case "ngo": return "ONG";
      case "tech": return "Técnico";
      case "admin": return "Admin";
      default: return role;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "inactive": return "bg-yellow-100 text-yellow-800";
      case "suspended": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active": return "Ativo";
      case "inactive": return "Inativo";
      case "suspended": return "Suspenso";
      default: return status;
    }
  };

  const userStats = {
    total: users.length,
    active: users.filter(u => u.status === "active").length,
    farmers: users.filter(u => u.role === "farmer").length,
    ngos: users.filter(u => u.role === "ngo").length
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Gestão de Usuários
        </h1>
        <p className="text-gray-600">
          Gerencie todos os usuários da plataforma Farm Navigators
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-gray-100 p-3 rounded-lg mr-4">
              <FaUsers className="text-gray-600 text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{userStats.total}</h3>
              <p className="text-gray-600">Total de Usuários</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <FaCheck className="text-green-600 text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{userStats.active}</h3>
              <p className="text-gray-600">Usuários Ativos</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <FaUsers className="text-green-600 text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{userStats.farmers}</h3>
              <p className="text-gray-600">Agricultores</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{userStats.ngos}</h3>
              <p className="text-gray-600">ONGs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar usuários..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Role Filter */}
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {roles.map(role => (
                <option key={role.value} value={role.value}>{role.label}</option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {statuses.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
          </div>

          {/* Add User Button */}
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
          >
            <FaPlus className="mr-2" />
            Adicionar Usuário
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usuário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Localização
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Última Atividade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                      {user.organization && (
                        <div className="text-xs text-gray-400">{user.organization}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                      {getRoleLabel(user.role)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                      {getStatusLabel(user.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-gray-400 mr-1" />
                      {user.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <FaEdit />
                      </button>
                      {user.status === "active" ? (
                        <button className="text-yellow-600 hover:text-yellow-900">
                          <FaBan />
                        </button>
                      ) : (
                        <button className="text-green-600 hover:text-green-900">
                          <FaCheck />
                        </button>
                      )}
                      <button className="text-red-600 hover:text-red-900">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <FaUsers className="text-6xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum usuário encontrado</h3>
          <p className="text-gray-500">Tente ajustar os filtros ou adicione novos usuários.</p>
        </div>
      )}

      {/* Add User Modal (placeholder) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Adicionar Novo Usuário</h3>
            <p className="text-gray-600 mb-4">
              Funcionalidade de adição de usuários em desenvolvimento. Integração com sistema de cadastro.
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}